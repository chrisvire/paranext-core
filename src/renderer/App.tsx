import { useCallback, useState } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import * as NetworkService from '@shared/services/NetworkService';
import icon from '@assets/icon.png';
import './App.css';
import papi from '@shared/services/papi';
import { getErrorMessage } from '@shared/util/Util';
import usePromise from '@renderer/hooks/usePromise';

const getVar: (envVar: string) => Promise<string> =
  NetworkService.createRequestFunction('electronAPI.env.getVar');

const testBase: () => Promise<string> = NetworkService.createRequestFunction(
  'electronAPI.env.test',
);

const test = async () => {
  /* const start = performance.now(); */
  const result = await testBase();
  /* console.log(`Test took ${performance.now() - start} ms`); */
  return result;
};

const echo = async (message: string) =>
  papi.commands.sendCommand<[string], string>('echo', message);

const echoRenderer = async (message: string) =>
  papi.commands.sendCommand<[string], string>('echoRenderer', message);

const echoExtensionHost = async (message: string) =>
  papi.commands.sendCommand<[string], string>('echoExtensionHost', message);

const addThree = async (a: number, b: number, c: number) =>
  papi.commands.sendCommand<[number, number, number], number>(
    'addThree',
    a,
    b,
    c,
  );

const addMany = async (...nums: number[]) =>
  papi.commands.sendCommand<number[], number>('addMany', ...nums);

const throwError = async (message: string) =>
  papi.commands.sendCommand<[string], string>('throwError', message);

const executeMany = async <T,>(fn: () => Promise<T>) => {
  const numRequests = 10000;
  const requests = new Array<Promise<T | void>>(numRequests);
  const requestTime = new Array<number>(numRequests);
  const start = performance.now();
  for (let i = 0; i < numRequests; i++) {
    requestTime[i] = performance.now();
    requests[i] = fn()
      .then((response) => {
        requestTime[i] = performance.now() - requestTime[i];
        return response;
      })
      .catch((err) => console.error(err));
  }

  try {
    const responses = await Promise.all(requests);
    const finish = performance.now();

    const avgResponseTime =
      requestTime.reduce((sum, time) => sum + time, 0) / numRequests;
    const maxTime = requestTime.reduce((max, time) => Math.max(max, time), 0);
    const minTime = requestTime.reduce(
      (min, time) => Math.min(min, time),
      Number.MAX_VALUE,
    );
    console.log(
      `Of ${numRequests} requests:\n\tAvg response time: ${avgResponseTime} ms\n\tMax response time: ${maxTime} ms\n\tMin response time: ${minTime}\n\tTotal time: ${
        finish - start
      }\n\tResponse times:`,
      requestTime,
    );
    console.log(responses[responses.length - 1]);
  } catch (e) {
    console.error(e);
  }
};

const Hello = () => {
  const [promiseReturn, setPromiseReturn] = useState('');

  const [NODE_ENV] = usePromise(
    useCallback(() => getVar('NODE_ENV'), []),
    'retrieving',
  );

  const runPromise = useCallback(
    async (asyncFn: () => Promise<unknown>) => {
      try {
        const result = await asyncFn();
        console.log(result);
        setPromiseReturn(JSON.stringify(result));
        return result;
      } catch (e) {
        console.error(e);
        setPromiseReturn(`Error: ${getErrorMessage(e)}`);
        return undefined;
      }
    },
    [setPromiseReturn],
  );

  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <div className="Hello">
        <h1>Paranext</h1>
      </div>
      <div className="Hello">
        <button
          type="button"
          onClick={async () => {
            const start = performance.now();
            const result = await runPromise(() => echo('Stuff'));
            console.log(
              `command:echo '${result}' took ${performance.now() - start} ms`,
            );
          }}
          onContextMenu={(e) => {
            e.preventDefault();
            executeMany(() => echo('Stuff'));
          }}
        >
          Echo
        </button>
        <button
          type="button"
          onClick={async () => {
            const start = performance.now();
            const result = await runPromise(() => echoRenderer('Stuff'));
            console.log(
              `command:echoRenderer '${result}' took ${
                performance.now() - start
              } ms`,
            );
          }}
          onContextMenu={(e) => {
            e.preventDefault();
            executeMany(() => echoRenderer('Stuff'));
          }}
        >
          Echo Renderer
        </button>
        <button
          type="button"
          onClick={async () => {
            const start = performance.now();
            const result = await runPromise(() => echoExtensionHost('Stuff'));
            console.log(
              `command:echoExtensionHost '${result}' took ${
                performance.now() - start
              } ms`,
            );
          }}
          onContextMenu={(e) => {
            e.preventDefault();
            executeMany(() => echoExtensionHost('Stuff'));
          }}
        >
          Echo Extension Host
        </button>
        <button
          type="button"
          onClick={async () => {
            const start = performance.now();
            const result = await runPromise(() => addThree(1, 2, 3));
            console.log(
              `command:addThree ${result} took ${performance.now() - start} ms`,
            );
          }}
          onContextMenu={(e) => {
            e.preventDefault();
            executeMany(() => addThree(1, 2, 3));
          }}
        >
          AddThree (Renderer)
        </button>
        <button
          type="button"
          onClick={async () => {
            const start = performance.now();
            const result = await runPromise(() => addMany(1, 2, 3, 4, 5, 6));
            console.log(
              `command:addMany ${result} took ${performance.now() - start} ms`,
            );
          }}
          onContextMenu={(e) => {
            e.preventDefault();
            executeMany(() => addMany(1, 2, 3, 4, 5, 6));
          }}
        >
          AddMany (Extension Host)
        </button>
        <button
          type="button"
          onClick={() => runPromise(() => throwError('Test error'))}
        >
          Test Exception
        </button>
        <button
          type="button"
          onClick={() => runPromise(() => test())}
          onContextMenu={(e) => {
            e.preventDefault();
            executeMany(test);
          }}
        >
          Test
        </button>
      </div>
      <div className="Hello">
        <div>NODE_ENV: {NODE_ENV}</div>
        <div>{promiseReturn}</div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
