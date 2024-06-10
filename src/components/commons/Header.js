function Header(){
    return(
        <header className="bl_header el_shadowD">
            <div className="bl_header__wrap">
                <h1 className="bl_header__logo"><a className="" href="">GROUP<br />WARE</a></h1>
                <ul className="bl_header__menuL">
                    <li><a className="" href="">인사</a></li>
                    <li><a className="" href="">결재</a></li>
                    <li><a className="" href="">게시판</a></li>
                    <li><a className="" href="">근태/휴가</a></li>
                    <li><a className="" href="">일정</a></li>
                    <li><a className="" href="">쪽지</a></li>
                </ul>
            </div>
            <ul className="bl_header__menuR">
                <li><a className="bl_header__icon bl_header__logout" href=""><span className="WA">로그아웃</span></a></li>
                <li><a className="bl_header__icon bl_header__structure" href=""><span className="WA">조직도</span></a></li>
                <li><a className="bl_header__icon bl_header__alarm" href=""><span className="WA">알림</span></a></li>
                <li><a className="bl_header__icon bl_header__myinfo" href=""><span className="WA">내정보</span></a></li>
            </ul>
        </header>
    )
}

export default Header;