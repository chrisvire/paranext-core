import usePromise from '@renderer/hooks/papi-hooks/use-promise.hook';
import useEvent from '@renderer/hooks/papi-hooks/use-event.hook';

/** All React hooks to be exposed on the papi */
const papiHooks = {
  usePromise,
  useEvent,
};
export default papiHooks;
