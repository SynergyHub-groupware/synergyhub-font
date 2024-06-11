import { NavLink } from "react-router-dom";

function ApprovalNav(){
    return(
        <div className="bl_nav">
            <h2 className="bl_nav__ttl">전자결재</h2>
            <ul className="bl_nav__menu">
                <li>
                    <h3 className="bl_nav__ttlSub">기안</h3>
                    <ul className="bl_nav__menuSub">
                        <li><NavLink to="/approval/FormList">작성하기</NavLink></li>
                        <li><NavLink to="/approval/Temporary">임시저장</NavLink></li>
                    </ul>
                </li>
                <li>
                    <h3 className="bl_nav__ttlSub bl_navToggle__btn">보낸결재함</h3>
                    <ul className="bl_nav__menuSub bl_navToggle__cont">
                        <li><NavLink to="">대기</NavLink></li>
                        <li><NavLink to="">진행중</NavLink></li>
                        <li><NavLink to="">완료</NavLink></li>
                        <li><NavLink to="">반려</NavLink></li>
                    </ul>
                </li>
                <li>
                    <h3 className="bl_nav__ttlSub bl_navToggle__btn">받은결재함</h3>
                    <ul className="bl_nav__menuSub bl_navToggle__cont">
                        <li><NavLink to="">대기</NavLink></li>
                        <li><NavLink to="">완료</NavLink></li>
                        <li><NavLink to="">반려</NavLink></li>
                        <li><NavLink to="">참조/열람</NavLink></li>
                    </ul>
                </li>
                <li>
                    <h3 className="bl_nav__ttlSub bl_navToggle__btn">개인보관함</h3>
                    <ul className="bl_nav__menuSub bl_navToggle__cont">
                        <li><NavLink to="">중요</NavLink></li>
                    </ul>
                </li>
                <li>
                    <h3 className="bl_nav__ttlSub">환경설정</h3>
                    <ul className="bl_nav__menuSub">
                        <li><NavLink to="">서명 관리</NavLink></li>
                        <li><NavLink to="">보관함 관리</NavLink></li>
                        <li><NavLink to="">결재양식 관리</NavLink></li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default ApprovalNav;