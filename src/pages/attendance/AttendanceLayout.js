import { Outlet } from "react-router-dom";
import AttendanceNav from "../../components/commons/AttendanceNav";

function EmployeeLayout(){
    return(
        <>
            <AttendanceNav/>
            <Outlet/>
        </>
    )
}
export default EmployeeLayout;