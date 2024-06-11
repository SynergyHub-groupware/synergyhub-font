import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import Main from './pages/Main';
import FormList from './pages/approval/FormList';
import Temporary from './pages/approval/Temporary';
import ExceptionWork from './pages/approval/form/ExceptionWork';
import Form from './pages/approval/setting/Form';
import Sign from './pages/approval/setting/Sign';
import Storage from './pages/approval/setting/Storage';
import SendComplete from './pages/approval/send/Complete';
import Progress from './pages/approval/send/Progress';
import SendWaiting from './pages/approval/send/Waiting';
import SendReturn from './pages/approval/send/Return';
import ReceiveComplete from './pages/approval/receive/Complete';
import ReceiveWaiting from './pages/approval/receive/Waiting';
import Reference from './pages/approval/receive/Reference';
import ReceiveReturn from './pages/approval/receive/Return';
import Overtime from './pages/approval/form/Overtime';
import Late from './pages/approval/form/Late';
import Vacation from './pages/approval/form/Vacation';
import Leave from './pages/approval/form/Leave';
import Resign from './pages/approval/form/Resign';
import Apology from './pages/approval/form/Apology';
import Etc from './pages/approval/form/Etc';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path="approval">
            <Route path="formList" element={<FormList/>} />
            <Route path="temporary" element={<Temporary/>} />
            <Route path="form">
              <Route path="exceptionWork" element={<ExceptionWork/>} />
              <Route path="overtime" element={<Overtime/>} />
              <Route path="late" element={<Late/>} />
              <Route path="vacation" element={<Vacation/>} />
              <Route path="leave" element={<Leave/>} />
              <Route path="resign" element={<Resign/>} />
              <Route path="apology" element={<Apology/>} />
              <Route path="etc" element={<Etc/>} />
            </Route>
            <Route path="receive">
              <Route path="complete" element={<ReceiveComplete/>} />
              <Route path="reference" element={<Reference/>} />
              <Route path="return" element={<ReceiveReturn/>} />
              <Route path="waiting" element={<ReceiveWaiting/>} />
            </Route>
            <Route path="send">
              <Route path="complete" element={<SendComplete/>} />
              <Route path="progress" element={<Progress/>} />
              <Route path="return" element={<SendReturn/>} />
              <Route path="waiting" element={<SendWaiting/>} />
            </Route>
            <Route path="setting">
              <Route path="form" element={<Form/>} />
              <Route path="sign" element={<Sign/>} />
              <Route path="storage" element={<Storage/>} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
