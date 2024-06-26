import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import Main from './pages/Main';
import FormList from './pages/approval/FormList';
import Temporary from './pages/approval/Temporary';
import Form from './pages/approval/setting/Form';
import Sign from './pages/approval/setting/Sign';
import Storage from './pages/approval/setting/Storage';
import ReceiveComplete from './pages/approval/receive/Complete';
import ReceiveWaiting from './pages/approval/receive/Waiting';
import Reference from './pages/approval/receive/Reference';
import ReceiveReturn from './pages/approval/receive/Return';
import ApprovalLayout from './pages/approval/ApprovalLayout';
import AttendanceLayout from './pages/attendance/AttendanceLayout';
import CalendarLayout from './pages/calendar/CalendarLayout';
import EmployeeLayout from './pages/employee/EmployeeLayout';
import MessageLayout from './pages/message/MessageLayout';
import PostLayout from './pages/post/PostLayout';
import FormDetail from './pages/approval/FormDetail';
import Login from './pages/Login';
import 'react-toastify/ReactToastify.css';
import DocumentMain from './pages/approval/send/DocumentMain';
import MyCalendar from './pages/calendar/MyCalendar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='login' element={<Login/>}/>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path="approval" element={<ApprovalLayout/>}>
            <Route path="formList" element={<FormList/>} />
            <Route path="temporary" element={<Temporary/>} />
            <Route path="form/:afCode" element={<FormDetail/>}/>
            <Route path="send/:status" element={<DocumentMain/>}/>
            <Route path="receive">
              <Route path="complete" element={<ReceiveComplete/>} />
              <Route path="reference" element={<Reference/>} />
              <Route path="return" element={<ReceiveReturn/>} />
              <Route path="waiting" element={<ReceiveWaiting/>} />
            </Route>
            <Route path="setting">
              <Route path="form" element={<Form/>} />
              <Route path="sign" element={<Sign/>} />
              <Route path="storage" element={<Storage/>} />
            </Route>
          </Route>
          <Route path="attendance" element={<AttendanceLayout/>}>
            {/* 내용추가 */}
          </Route>
          <Route path="calendar" element={<CalendarLayout/>}>
            <Route path="myCalendar" element={<MyCalendar/>} />
            {/* 내용추가 */}
          </Route>
          <Route path="employee" element={<EmployeeLayout/>}>
            {/* 내용추가 */}
          </Route>
          <Route path="message" element={<MessageLayout/>}>
            {/* 내용추가 */}
          </Route>
          <Route path="post" element={<PostLayout/>}>
            {/* 내용추가 */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
