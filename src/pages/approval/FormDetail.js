import { useLocation, useNavigate, useParams } from "react-router-dom";
import FormLine from "./FormLine";
import ExceptionWork from "./form/ExceptionWork";
import Overtime from "./form/Overtime";
import Late from "./form/Late";
import Vacation from "./form/Vacation";
import Leave from "./form/Leave";
import Resign from "./form/Resign";
import Apology from "./form/Apology";
import Etc from "./form/Etc";
import { useState } from "react";

function FormDetail(){
    const navigate = useNavigate();
    const location = useLocation();
    const {afName} = {...location.state};
    const {afCode} = useParams();

    const renderFormCont = () => {
        switch(afCode){
            case '2': return <ExceptionWork/>; break;
            case '3': return <Overtime/>; break;
            case '4': return <Late/>; break;
            case '5': return <Vacation/>; break;
            case '7': return <Leave/>; break;
            case '8': return <Resign/>; break;
            case '9': return <Apology/>; break;
            case '12': return <Etc/>; break;
        }
    }

    // 결재 상신
    const [trueLineList, setTrueLineList] = useState([]);
    
    // 실결재라인 배열 전달
    const handleTrueLineList = (data) => {setTrueLineList(data);}
    console.log("부모 trueLineList", trueLineList);

    const onClickApprovalDocRegist = () => {
        console.log("trueLineList", trueLineList);
    }

    return(
        <div className="ly_cont">
            <h4 className="el_lv1Head hp_mb30">{afName}</h4>
            <section className="bl_sect hp_padding15">
                <FormLine handleTrueLineList={handleTrueLineList}/>
                {/* <FormLine/> */}
                <h5 className="hp_fw700 hp_fs18 hp_mb10 hp_mt30">결재정보</h5>
                <table className="bl_tb3 el_approvalTb3__th">
                    <tbody>
                        <tr>
                            <th scope="row">기안양식</th>
                            <td>{afName}</td>
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
                {renderFormCont()}
            </section>
            <div className="hp_mt10 hp_alignR">
                <button type="button" className="el_btnS el_btnblueBord">임시저장</button>
                <button type="button" className="el_btnS el_btnblueBack hp_ml5" onClick={onClickApprovalDocRegist}>결재상신</button>
                <button type="button" className="el_btnS el_btn8Back hp_ml5">취소</button>
            </div>
        </div>
    )
}
export default FormDetail;