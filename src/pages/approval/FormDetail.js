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
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callApprovalDocRegistAPI } from "../../apis/ApprovalAPICalls";
import { resetSuccess } from "../../modules/ApprovalModules";

function FormDetail(){
    const empCode = "2021048";

    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const {afName} = {...location.state};
    const {afCode} = useParams();

    const renderFormCont = () => {
        switch(afCode){
            case '2': return <ExceptionWork handleDetail={handleDetail} formRefs={formRefs}/>; break;
            case '3': return <Overtime handleDetail={handleDetail} formRefs={formRefs}/>; break;
            case '4': return <Late handleDetail={handleDetail} formRefs={formRefs}/>; break;
            case '5': return <Vacation handleDetail={handleDetail} formRefs={formRefs}/>; break;
            case '7': return <Leave handleDetail={handleDetail} formRefs={formRefs}/>; break;
            case '8': return <Resign handleDetail={handleDetail} formRefs={formRefs}/>; break;
            case '9': return <Apology handleDetail={handleDetail} formRefs={formRefs}/>; break;
            default: return <Etc handleDetail={handleDetail}/>; break;
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

        // console.log("handleDetail", data);
    };

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

    // 결재정보 한번에 전달
    const formRefs = useRef({});
    const [triggerUpdate, setTriggerUpdate] = useState(false);
    const [temporaryFlag, setTemporaryFlag] = useState(false);

    const onClickApprovalDocRegist = async (temporary) => {
        if (temporary) {
            setTemporaryFlag(true);
            setTriggerUpdate(true);
        } else {
            await performValidationAndSubmit(temporary);
        }
    }

    const performValidationAndSubmit = async (temporary) => {
        // 필수 정보 입력 확인
        const requiredFields = Object.values(formRefs.current);
        let agreeCheckbox = null;

        for (let field of requiredFields) {
            if (field.type === 'checkbox' && field.name === 'agree') {
                agreeCheckbox = field;
                if (!agreeCheckbox.checked) {
                    alert('서약서 동의는 필수입니다.');
                    return;
                }
            } else if (field.hasAttribute('required') && !field.value) {
                field.focus();
                alert('필수 정보를 입력해주세요.');
                return;
            }
        }

        // etc 키가 존재하고, 그 내부의 aeCon 값이 공백이거나 null인지 확인
        if (document.etc && (!document.etc.aeCon || document.etc.aeCon.trim() === '')) {
            alert('내용을 입력해주세요.');
            return;
        }

        const formData = new FormData();
        formData.append('document', JSON.stringify(document));

        for (let i = 0; i < files.length; i++) {
            formData.append("files", files[i]);
            formData.append("attachOriginal", files[i].name);
        }

        await dispatch(callApprovalDocRegistAPI({ formData: formData, temporary: temporary }));
    }

    useEffect(() => {
        if (triggerUpdate) {
            setDocument(prevDocument => ({
                ...prevDocument,
                adStatus: '임시저장'
            }));
            setTriggerUpdate(false);
        }
    }, [triggerUpdate]);

    useEffect(() => {
        if (temporaryFlag) {
            performValidationAndSubmit(true);
            setTemporaryFlag(false);
        }
    }, [document.adStatus]);

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
                        <td colSpan="3"><input type="text" className="hp_w100" name="adTitle" onChange={onChangeHandler} ref={(el) => (formRefs.current['field1'] = el)} placeholder="[팀명] MM/DD 기안양식명_이름" required /></td>
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