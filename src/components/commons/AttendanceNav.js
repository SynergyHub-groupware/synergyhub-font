import {NavLink} from "react-router-dom";

function AttendanceNav(){
    return(
        <div className="bl_nav">
            <h2 className="bl_nav__ttl">근태/휴가</h2>
            <ul className="bl_nav__menu">
                <li>
                    <h3 className="bl_nav__ttlSub">근태 관리</h3>
                    <ul className="bl_nav__menuSub">
                        <li><NavLink to="/attendance/mypage/">나의 근태 현황</NavLink></li>
                        <li><NavLink to="/attendance/mypage/">상세 근태 현황</NavLink></li>
                    </ul>
                </li>
                <li>
                    <h3 className="bl_nav__ttlSub">휴가 관리</h3>
                    <ul className="bl_nav__menuSub">
                        <li><NavLink to="/attendance/mypage/">나의 휴가 현황</NavLink></li>
                        <li><NavLink to="/attendance/mypage/">상세 휴가 현황</NavLink></li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default AttendanceNav;