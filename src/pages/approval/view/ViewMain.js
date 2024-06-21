import { useLocation } from "react-router";
import ViewLine from "./ViewLine";
import ViewDetail from "./ViewDetail";

function ViewMain(){
    const location = useLocation();
    const {document} = {...location.state};

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
                <ViewDetail adDetail={document.adDetail}/>
            </section>
            <div className="hp_mt10 hp_alignR">
                <button type="button" className="el_btnS el_btn8Bord">목록</button>
                <button type="button" className="el_btnS el_btnblueBord hp_ml5">수정</button>
                <button type="button" className="el_btnS el_btn8Back hp_ml5">취소</button>
            </div>
        </div>
    )
}
export default ViewMain;