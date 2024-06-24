import { useEffect, useState } from "react";
import { calculateDuration } from "../../../apis/ApprovalHandler";

function Leave({handleDetail, formRefs, writtenCont = {}}){
    const [exception, setException] = useState({
      apStart: '',
      apEnd: '',
      apContact: '',
      apReason: ''
    });

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setException(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // 연락처 따로 입력받아서 하나로 합쳐서 전달
    const onContactChange = (e) => {
        const { name, value } = e.target;

        const formattedContact = formRefs.current['apContact1'].value + '-' +
                                 formRefs.current['apContact2'].value + '-' +
                                 formRefs.current['apContact3'].value;

        setException(prev => ({
            ...prev,
            apContact: formattedContact
        }));
    };

    useEffect(() => {
        handleDetail(exception);
    }, [exception]);

    // 기간 계산
    const [duration, setDuration] = useState('');
    useEffect(() => {
        if (exception.apStart && exception.apEnd) {
            const startDateTime = new Date(exception.apStart);
            const endDateTime = new Date(exception.apEnd);

            if (endDateTime < startDateTime) {
                alert("종료일은 시작일보다 과거일 수 없습니다.");
                setException(prev => ({ ...prev, apEnd: '' }));
                setDuration('');
            } else {
                const durationText = calculateDuration(startDateTime, endDateTime);
                setDuration(durationText);
            }
        } else {
            setDuration('');
        }
    }, [exception.apStart, exception.apEnd]);

    // 숫자 입력 길이 제한
    const maxLengthCheck = (e) => {
        if (e.target.value.length > e.target.maxLength) e.target.value = e.target.value.slice(0, e.target.maxLength);
    };

    // writtenCont 값이 있을 경우
    useEffect(()=>{
        if(writtenCont !== null && Object.keys(writtenCont).length > 0){
            setException(prev => ({
                ...prev,
                apStart: writtenCont.apStart,
                apEnd: writtenCont.apEnd,
                apContact: writtenCont.apContact,
                apReason: writtenCont.apReason
            }));
        }
    },[writtenCont])

    return(
        <table className="bl_tb3 el_approvalTb3__th">
            <tbody>
                <tr>
                    <th scope="col">시작일</th>
                    <td><input type="date" className="hp_w120px" name="apStart" value={exception.apStart || (writtenCont ? writtenCont.apStart : '')} onChange={onChangeHandler} required ref={(el) => (formRefs.current['apStart'] = el)} /></td>
                </tr>
                <tr>
                    <th scope="col">종료일</th>
                    <td><input type="date" className="hp_w120px" name="apEnd" value={exception.apEnd || (writtenCont ? writtenCont.apEnd : '')} onChange={onChangeHandler} required ref={(el) => (formRefs.current['apEnd'] = el)} /></td>
                </tr>
                <tr>
                    <th scope="col">기간</th>
                    <td>{duration}</td>
                </tr>
                <tr>
                    <th scope="col">비상연락처</th>
                    <td>
                        <input type="number" maxLength="3" onInput={maxLengthCheck} className="hp_w70px" name="apContact1" onChange={onContactChange} required ref={(el) => (formRefs.current['apContact1'] = el)} /> -
                        <input type="number" maxLength="4" onInput={maxLengthCheck} className="hp_w70px" name="apContact2" onChange={onContactChange} required ref={(el) => (formRefs.current['apContact2'] = el)} /> -
                        <input type="number" maxLength="4" onInput={maxLengthCheck} className="hp_w70px" name="apContact3" onChange={onContactChange} required ref={(el) => (formRefs.current['apContact3'] = el)} />
                    </td>
                </tr>
                <tr>
                    <th scope="col">사유</th>
                    <td><textarea rows="2" cols="20" wrap="hard" className="hp_w100" name="apReason" value={exception.apReason || (writtenCont ? writtenCont.apReason : '')} onChange={onChangeHandler} required ref={(el) => (formRefs.current['apReason'] = el)}></textarea></td>
                </tr>
            </tbody>
        </table>
    )
}
export default Leave;