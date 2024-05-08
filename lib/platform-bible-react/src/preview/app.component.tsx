import { useState } from 'react';
import { ScriptureReference } from 'platform-bible-utils';
import { randomlyGeneratedData, columns } from '@/preview/table/inventory-contents';
import { BookChapterControl, DataTable } from '..';

const defaultScrRef: ScriptureReference = {
  bookNum: 1,
  chapterNum: 1,
  verseNum: 1,
};

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
        <BookChapterControl scrRef={scrRef} handleSubmit={setScrRef} />
      </div>
      <div className="pr-m-3 pr-flex">
        <DataTable
          columns={columns}
          data={randomlyGeneratedData(200)}
          showPaginationControls
          showColumnVisibilityControls
        />
      </div>
    </>
    // </div>
  );
}

export default App;
