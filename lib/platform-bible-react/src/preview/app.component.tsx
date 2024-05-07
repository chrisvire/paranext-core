import { useState } from 'react';
import { ScriptureReference } from 'platform-bible-utils';
import { Payment, columns } from '@/components/table-v2-cols';
import { BookChapterControl, RefSelector, DataTable } from '..';

const defaultScrRef: ScriptureReference = {
  bookNum: 1,
  chapterNum: 1,
  verseNum: 1,
};

const data: Payment[] = [
  {
    id: '728ed52f',
    amount: 100,
    status: 'pending',
    email: 'm@example.com',
  },
  {
    id: '728edd52f',
    amount: 1200,
    status: 'success',
    email: 'maaa@example.com',
  },
];

function App() {
  const [scrRef, setScrRef] = useState(defaultScrRef);

  return (
    // See the scopedPreflightStyles directive in tailwind.config.ts
    // <div className="pr-twp">
    <>
      <h1>platform-bible-react Preview</h1>
      <p>
        Edit <code>lib\platform-bible-react\src\preview\app.component.tsx</code> and save to see
        updates
      </p>

      <div className="pr-m-3 pr-flex">
        <RefSelector scrRef={scrRef} handleSubmit={setScrRef} />
      </div>
      <div className="pr-m-3 pr-flex">
        <BookChapterControl scrRef={scrRef} handleSubmit={setScrRef} />
      </div>
      <div className="pr-m-3 pr-flex">
        <DataTable columns={columns} data={data} />
      </div>
    </>
    // </div>
  );
}

export default App;
