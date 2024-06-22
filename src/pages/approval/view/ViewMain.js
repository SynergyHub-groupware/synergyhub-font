import {useLocation, useNavigate} from "react-router";
import ViewLine from "./ViewLine";
import ViewDetail from "./ViewDetail";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {calldeleteDocumentAPI} from "../../../apis/ApprovalAPICalls";
import {useParams} from "react-router-dom";

function ViewMain(){
    const navigate = useNavigate();
    const location = useLocation();
    const {adCode} = useParams();
    const {document} = {...location.state};
    const dispatch = useDispatch();

    const handleCancel = () => {
        if (window.confirm("해당 결재를 상신취소 및 삭제 하시겠습니까?")) {
            dispatch(calldeleteDocumentAPI(adCode))
            .then(() => {navigate("/approval/send/waiting");})
            .catch((error) => {console.error("문서 삭제 실패:", error);});
        }
    };

    return(        
        <div className="ly_cont">
            <h4 className="el_lv1Head hp_mb30">{document.afName}</h4>
            <section className="bl_sect hp_padding15">
                <div className="ly_spaceBetween hp_mb10">
                    <h5 className="hp_fw700 hp_fs18">결재라인</h5>
                </div>
                <ViewLine adReportDate={document.adReportDate}/>
                <h5 className="hp_fw700 hp_fs18 hp_mb10 hp_mt30">결재정보</h5>
                <table className="bl_tb3 el_approvalTb3__th">
                    <tbody>
                        <tr>
                            <th scope="row">기안양식</th>
                            <td>{document.afName}</td>
                        </tr>
                        <tr>
                            <th scope="row">첨부파일</th>
                            <td colSpan="3">
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">제목</th>
                            <td colSpan="3">{document.adTitle}</td>
                        </tr>
                    </tbody>
                </table>
                <h5 className="hp_fw700 hp_fs18 hp_mb10 hp_mt30">결재내용</h5>
                <ViewDetail afCode={document.afCode} adDetail={document.adDetail}/>
            </section>
            <div className="hp_mt10 hp_alignR">
                <button type="button" className="el_btnS el_btn8Bord" onClick={() => navigate('/approval/send/waiting')}>목록</button>
                <button type="button" className="el_btnS el_btnblueBord hp_ml5">수정</button>
                <button type="button" className="el_btnS el_btn8Back hp_ml5" onClick={handleCancel}>삭제</button>
            </div>
        </div>
    )
}
export default ViewMain;