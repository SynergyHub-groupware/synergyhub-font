import {useLocation, useNavigate} from "react-router";
import ViewLine from "./ViewLine";
import ViewDetail from "./ViewDetail";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {
    calldeleteDocumentAPI,
    calldownloadAttachAPI,
    callmodifyStatusAPI,
    callviewAttachAPI,
    callviewLineListAPI
} from "../../../apis/ApprovalAPICalls";
import {useParams} from "react-router-dom";

function ViewMain({}){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const {adCode} = useParams();
    const {document} = {...location.state};
    const {documents, viewlines} = useSelector(state => ({
        viewlines: state.approvalReducer.viewlines,
        documents: state.approvalReducer.documents,
    }));

    useEffect(() => {
        adCode && dispatch(callviewLineListAPI(adCode));
    }, [adCode, dispatch]);

    console.log("viewlines", viewlines);

    const handleCancel = () => {
        if (window.confirm("해당 결재를 상신취소 및 삭제 하시겠습니까?")) {
            dispatch(calldeleteDocumentAPI(adCode))
                .then(() => {navigate("/approval/send/waiting");})
                .catch((error) => {console.error("문서 삭제 실패: ", error);});
        }
    }

    const handleModify = () => {
        if (window.confirm("해당 결재를 상신취소 및 수정 하시겠습니까?")) {
            dispatch(callmodifyStatusAPI(adCode))
                .then(() => {navigate(`/approval/form/${document.afCode}`, {state: {adCode, afName: document.afName}});})
                .catch((error) => {console.log("문서 수정 실패: ", error);});
        }
    }

    useEffect(() => {
        adCode && dispatch(callviewAttachAPI (adCode));
    }, [dispatch, adCode]);

    const handleDownload = (attachSave, attachOriginal) => {
        dispatch(calldownloadAttachAPI(attachOriginal, attachSave));
    }

    console.log("document", document);

    // viewlines 배열에서 talStatus가 "승인" 여부 체크
    const hasNoApproval = viewlines.every(line => line.talStatus !== "승인");

    return(
        <div className="ly_cont">
            <h4 className="el_lv1Head hp_mb30">{document.afName}</h4>
            <section className="bl_sect hp_padding15">
                <div className="ly_spaceBetween hp_mb10">
                    <h5 className="hp_fw700 hp_fs18">결재라인</h5>
                </div>
                <ViewLine document={document} viewlines={viewlines}/>
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
                            <ul>
                                {documents.map((doc, index) => (
                                    <li key={index}>
                                        <button onClick={() => handleDownload(doc.attachSave, doc.attachOriginal)}>{doc.attachOriginal}</button>
                                    </li>
                                ))}
                            </ul>
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
                {hasNoApproval && (
                    <>
                        <button type="button" className="el_btnS el_btnblueBord hp_ml5" onClick={handleModify}>수정</button>
                        <button type="button" className="el_btnS el_btn8Back hp_ml5" onClick={handleCancel}>삭제</button>
                    </>
                )}
            </div>
        </div>
    )
}
export default ViewMain;