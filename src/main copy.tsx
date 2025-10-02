import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// import HooksApp from './HooksApp';

// import { MemoHook } from './06-memos/memoHook';
// import { MemoCounter } from './06-memos/MemoCounter';
// import { InstaApp } from './07-useOptimistic/InstaApp';
// import { ClientInfo } from './08-useApi-suspenseComp/ClienInfo';
import { ProfessionalApp } from './09-useContext/ProfessionalApp';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProfessionalApp />
  </StrictMode>
);
