import { useEffect, useState } from "react";
import { calculateDuration } from "../../../apis/ApprovalHandler";

function ExceptionWork({handleDetail, formRefs}){
    const [exception, setException] = useState({
        aattSort: '',
        aattStart: '',
        aattEnd: '',
        aattPlace: '',
        aattCon: ''
    });

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setException(prev => ({
            ...prev,
            [name]: value
        }));
    };

    useEffect(() => {
        handleDetail(exception);
    }, [exception]);


    // 기간 계산
    const [duration, setDuration] = useState('');
    useEffect(() => {
        if (exception.aattStart && exception.aattEnd) {
            const startDateTime = new Date(exception.aattStart);
            const endDateTime = new Date(exception.aattEnd);

            if (endDateTime < startDateTime) {
                alert("종료일은 시작일보다 과거일 수 없습니다.");
                setException(prev => ({ ...prev, aattEnd: '' }));                
                setDuration('');
            } else {
                const durationText = calculateDuration(startDateTime, endDateTime);
                setDuration(durationText);
            }
        } else {
            setDuration('');
        }
    }, [exception.aattStart, exception.aattEnd]);

    return(
        <table className="bl_tb3 el_approvalTb3__th">
            <tbody>
                <tr>
                    <th scope="col">구분</th>
                    <td>
                        <select className="hp_w120px" name="aattSort" onChange={onChangeHandler} required ref={(el) => (formRefs.current['aattSort'] = el)}>
                            <option value=''>선택</option>
                            <option value="외근">외근</option>
                            <option value="출장">출장</option>
                            <option value="교육">교육</option>
                            <option value="훈련">훈련</option>
                            <option value="재택">재택</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th scope="col">시작일</th>
                    <td>
                        <input type="datetime-local" name="aattStart" value={exception.aattStart} required
                                onChange={(e) => setException(prev => ({ ...prev, aattStart: e.target.value }))} ref={(el) => (formRefs.current['aattStart'] = el)} />
                    </td>
                </tr>
                <tr>
                    <th scope="col">종료일</th>
                    <td>
                        <input type="datetime-local" name="aattEnd" value={exception.aattEnd} min={exception.aattStart} required
                                onChange={(e) => setException(prev => ({ ...prev, aattEnd: e.target.value }))} ref={(el) => (formRefs.current['aattEnd'] = el)} />
                    </td>
                </tr>
                <tr>
                    <th scope="col">기간</th>
                    <td>{duration}</td>
                </tr>
                <tr>
                    <th scope="col">근무지</th>
                    <td><input type="text" className="hp_w100" name="aattPlace" onChange={onChangeHandler} required ref={(el) => (formRefs.current['aattPlace'] = el)}/></td>
                </tr>
                <tr>
                    <th scope="col">업무내용</th>
                    <td><textarea rows="2" cols="20" wrap="hard" className="hp_w100" name="aattCon" onChange={onChangeHandler} required ref={(el) => (formRefs.current['aattCon'] = el)}></textarea></td>
                </tr>
            </tbody>
        </table>
    )
}

export default ExceptionWork;