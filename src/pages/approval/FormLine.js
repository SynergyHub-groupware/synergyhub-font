import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callFormLineAPI } from "../../apis/ApprovalAPICalls";
import { useLocation, useNavigate } from "react-router-dom";
import Line from "./Line";

function FormLine(){
    return(
        <>
            <div className="ly_spaceBetween hp_mb10">
                <h5 className="hp_fw700 hp_fs18">결재라인</h5>
                <button type="button" className="el_btnS el_btn8Bord hp_p3-5">결재라인 수정</button>
            </div>
            <div className="ly_flex hp_relative">
                <table className="bl_tb3 hp_alignC hp_w200px ly_fshirnk">
                    <tbody>
                        <tr>
                            <th>구분</th>
                        </tr>
                        <tr>
                            <th>결재상태</th>
                        </tr>
                        <tr>
                            <th>소속</th>
                        </tr>
                        <tr>
                            <th>직위</th>
                        </tr>
                        <tr>
                            <th>이름</th>
                        </tr>
                        <tr>
                            <th>서명</th>
                        </tr>
                    </tbody>
                </table>
                <table className="bl_tb3 hp_alignC ly_fgrow1">
                    <tbody>
                        <tr>
                            <th>작성자</th>
                        </tr>
                        <tr>
                            <td>작성중</td>
                        </tr>
                        <tr>
                            <td>시스템팀</td>
                        </tr>
                        <tr>
                            <td>팀원</td>
                        </tr>
                        <tr>
                            <td>홍길동</td>
                        </tr>
                        <tr>
                            <td className="el_approvalSign" style={{ backgroundImage: "url('')" }}></td>
                        </tr>
                    </tbody>
                </table>
                <Line/>
            </div>
        </>
    )
}
export default FormLine;