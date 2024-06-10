import { Outlet } from "react-router-dom";
import Header from "../commons/Header";
import '../../css/common/reset.css';
import '../../css/common/font.css';
import '../../css/common/base.css';
import '../../css/common/common.css';

function Layout(){
    return(
        <div class="ly_all">
            <Header/>
            <Outlet/>
        </div>
    )
}

export default Layout;