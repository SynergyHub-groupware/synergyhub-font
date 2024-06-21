import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
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
import DocumentMain from './pages/approval/send/DocumentMain'
import Login from './pages/Login';
import 'react-toastify/ReactToastify.css';
import ReceiveMsg from './pages/message/storage/ReceiveMsg';
import SendMsg from './pages/message/storage/SendMsg';
import TempMsg from './pages/message/storage/TempMsg';
import AddressDir from './components/commons/address/AddressDir';
import Organization from './pages/employee/Organization';
import PersonalList from './pages/employee/PersonalList';
import PersonalRegist from './pages/employee/PersonalRegist';
import PersonalView from './pages/employee/PersonalView';
import EmployeeList from './pages/employee/EmployeeList';
import AppointList from './pages/employee/AppointList';
import AppointRegist from './pages/employee/AppointRegist';
import AppointView from './pages/employee/AppointView';
import DeptManagerMent from './pages/employee/DeptManagerMent';
import MyInfo from './pages/myInfo/MyInfo';
import MyInfoLayout from './pages/myInfo/MyInfoLayout';
import MyPersonalRecordCard from './pages/myInfo/MyPersonalRecordCard';

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
            {/* 내용추가 */}
          </Route>
          <Route path="employee" element={<EmployeeLayout/>}>
            <Route path="organization" element={<Organization />} />
            <Route path="personalList" element={<PersonalList />} />
            <Route path="personalRegist" element={<PersonalRegist />} />
            <Route path="personalView" element={<PersonalView />} />
            <Route path='employeeList' element={<EmployeeList />} />
            <Route path='appointList' element={<AppointList />} />
            <Route path='appointRegist' element={<AppointRegist />} />
            <Route path='appointView' element={<AppointView />} />
            <Route path='deptManagerMent' element={<DeptManagerMent />} />
          </Route> 
          <Route path='myInfo' element={<MyInfoLayout />} >
            <Route path="myInfo" element={<MyInfo />} />  
            <Route path="myPersonalRecordCard" element={<MyPersonalRecordCard />} />  
          </Route>
          <Route path="message" element={<MessageLayout/>}>
            <Route index element={<Navigate to="storage/receive" replace/>}/>
            <Route path='storage'>
              <Route path='receive' element={<ReceiveMsg/>}/>
              <Route path='send' element={<SendMsg/>}/>
              <Route path='temp' element={<TempMsg/>}/>
            </Route>
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
