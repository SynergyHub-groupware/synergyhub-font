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
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callApprovalAttachRegistAPI, callApprovalDocRegistAPI } from "../../apis/ApprovalAPICalls";
import { resetSuccess } from "../../modules/ApprovalModules";

function FormDetail(){
    const empCode = "2021048";


    const navigate = useNavigate();
    const location = useLocation();
    const {afName} = {...location.state};
    const {afCode} = useParams();

    const renderFormCont = () => {
        switch(afCode){
            case '2': return <ExceptionWork handleDetail={handleDetail}/>; break;
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
    const [document, setDocument] = useState({});

    useEffect(() => {
        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0];

        setDocument(prev => ({
            ...prev,
            adReportDate: formattedDate,    // 오늘 날짜
            employee: {
              emp_code: empCode             // 로그인한 사람의 empCode
            },
            adStatus: "대기",
            form: {
                afCode: Number(afCode)      // 양식코드
            }
        }));
    }, [afCode]);

    // 제목 전달, document에 추가
    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setDocument(prev => ({
            ...prev,
            [name]: value
        }));
    };
    console.log("document", document);
    
    // 실결재라인 배열 전달, document에 추가
    const handleTrueLineList = (data) => {
        setDocument(prev => ({
            ...prev,
            trueLineList: data
        }));
    }

    // 결재상세내용 객체 전달, document에 추가
    const handleDetail = (data) => {
        let key;
        if(afCode == 2 || afCode == 3 || afCode == 4 || afCode == 5) key = "approvalAttendance";
        else if(afCode == 7 || afCode == 8) key = "personal";
        else if(afCode == 1) key = "approvalAppoint";
        else key = "etc";

        setDocument(prev => ({
            ...prev,
            [key]: data
        }));

        console.log("handleDetail", data);
    };

    const dispatch = useDispatch();
    const onClickApprovalDocRegist = async (temporary) => {
        // await dispatch(callApprovalDocRegistAPI({ document: document, temporary: temporary }));


        const formData = new FormData();
        formData.append('document', JSON.stringify(document));

        for (let i = 0; i < files.length; i++) {
            formData.append("files", files[i]);
            formData.append("attachOriginal", files[i].name);
        }

        await dispatch(callApprovalDocRegistAPI({ formData: formData, temporary: temporary }));


        // await dispatch(callApprovalAttachRegistAPI({formData: formData}));
    }

    const success = useSelector(state => state.approvalReducer.success);
    useEffect(() => {
        if(success){
            alert("결재문서가 " + success + " 되었습니다.");
    
            if(success === "임시저장") navigate("/approval/temporary");
            else if(success === "상신") navigate("/approval/send/waiting");
    
            dispatch(resetSuccess());
            setDocument({});
        }
    }, [success]);


    // 첨부파일 
    const [files, setFiles] = useState([]);

    const handleFileChange = (event) => {
        setFiles(prevFiles => [...prevFiles, ...Array.from(event.target.files)]);
    };

    const handleRemoveFile = (index) => {
        const newFiles = [...files];
        newFiles.splice(index, 1);
        setFiles(newFiles);
    };

    return(
        <div className="ly_cont">
            <h4 className="el_lv1Head hp_mb30">{afName}</h4>
            <section className="bl_sect hp_padding15">
                <FormLine handleTrueLineList={handleTrueLineList}/>
                <h5 className="hp_fw700 hp_fs18 hp_mb10 hp_mt30">결재정보</h5>
                <table className="bl_tb3 el_approvalTb3__th">
                    <tbody>
                        <tr>
                            <th scope="row">기안양식</th>
                            <td>{afName}</td>
                        </tr>
                        <tr>
                            <th scope="row">첨부파일</th>
                            <td colSpan="3">
                                <div className="ly_flex ly_fitemStart">
                                    <ul className="hp_w100 hp_mr10">
                                        {files.map((file, index) => (
                                            <li key={index}>
                                                <button type="button" className="hp_mr10 hp_fw700" onClick={() => handleRemoveFile(index)} title="삭제">X</button>
                                                {file.name} 
                                            </li>
                                        ))}
                                    </ul>
                                    <label className="bl_attachBtn__label el_btnS el_btn8Back hp_p3-5">
                                        <input type="file" className="bl_attachBtn__input" multiple onChange={handleFileChange} /> 파일선택
                                    </label>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">제목</th>
                            <td colSpan="3"><input type="text" className="hp_w100" name="adTitle" onChange={onChangeHandler} placeholder="[팀명] MM/DD 기안양식명_이름"/></td>
                        </tr>
                    </tbody>
                </table>
                <h5 className="hp_fw700 hp_fs18 hp_mb10 hp_mt30">결재내용</h5>
                {renderFormCont()}
            </section>
            <div className="hp_mt10 hp_alignR">
                <button type="button" className="el_btnS el_btnblueBord"onClick={() => onClickApprovalDocRegist(true)}>임시저장</button>
                <button type="button" className="el_btnS el_btnblueBack hp_ml5" onClick={() => onClickApprovalDocRegist(false)}>결재상신</button>
                <button type="button" className="el_btnS el_btn8Back hp_ml5">취소</button>
            </div>
        </div>
    )
}
export default FormDetail;