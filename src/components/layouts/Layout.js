import { Outlet, useLocation } from "react-router-dom";
import Header from "../commons/Header";
import ApprovalNav from "../commons/ApprovalNav";
import AttendanceNav from "../commons/AttendanceNav";
import Calendarnav from './../commons/CalendarNav';
import EmployeeNav from './../commons/EmployeeNav';
import MessageNav from './../commons/MessageNav';
import PostNav from './../commons/PostNav';

function Layout(){
    const location = useLocation();
    const pathname = location.pathname;
    const getUrl = pathname.split('/')[1];

    const renderNav = () => {
        switch(getUrl){
            case 'approval': return <ApprovalNav/>;
            case 'attendance': return <AttendanceNav/>;
            case 'calendar': return <Calendarnav/>;
            case 'employee': return <EmployeeNav/>;
            case 'message': return <MessageNav/>;
            case 'post': return <PostNav/>;
            default: return null;
        }
    }

    return(
        <div className="ly_all">
            <Header/>
            <div className="ly_body">
                {renderNav()}
                <Outlet/>
            </div>
        </div>
    )
}

export default Layout;