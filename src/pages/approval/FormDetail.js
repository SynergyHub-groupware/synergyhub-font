import { Outlet, useParams } from "react-router-dom";
import FormLine from "./FormLine";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callFormListAPI } from "../../apis/ApprovalAPICalls";

function FormDetail(){
    const dispatch = useDispatch();
    const {forms} = useSelector(state => state.approvalReducer);

    console.log("forms", forms);

    useEffect(() => {
        dispatch(callFormListAPI());
    }, []);

    return(
        <div className="ly_cont">
            {/* <h4 className="el_lv1Head hp_mb30">{selectedFormName}</h4> */}
            <section className="bl_sect hp_padding15">
                <FormLine/>
                <h5 className="hp_fw700 hp_fs18 hp_mb10 hp_mt30">결재정보</h5>
                <table className="bl_tb3 el_approvalTb3__th">
                    <tbody>
                        <tr>
                            <th scope="row">기안양식</th>
                            {/* <td>{selectedFormName}</td> */}
                        </tr>
                        <tr>
                            <th scope="row">첨부파일</th>
                            <td colSpan="3"></td>
                        </tr>
                        <tr>
                            <th scope="row">제목</th>
                            <td colSpan="3"><input type="text" className="hp_w100" placeholder="[팀명] MM/DD 기안양식명_이름"/></td>
                        </tr>
                    </tbody>
                </table>
                <h5 className="hp_fw700 hp_fs18 hp_mb10 hp_mt30">결재내용</h5>
                <Outlet/>
            </section>
            <div className="hp_mt10 hp_alignR">
                <button type="button" className="el_btnS el_btnblueBord">임시저장</button>
                <button type="button" className="el_btnS el_btnblueBack hp_ml5">결재상신</button>
                <button type="button" className="el_btnS el_btn8Back hp_ml5">취소</button>
            </div>
        </div>
    )
}
export default FormDetail;