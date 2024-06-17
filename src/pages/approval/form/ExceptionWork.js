import { useEffect, useState } from "react";
import { calculateDuration } from "../../../apis/ApprovalHandler";

function ExceptionWork({handleDetail}){
    const [exception, setException] = useState({});

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


    // 기간 계산 + 추가 : 시작일과 종료일이 같을 경우 시간이 마이너스가 되면 기간에 알럿으로 과거선택 불가 라고 표시
    const [duration, setDuration] = useState('');
    useEffect(() => {
        if (exception.aattStart && exception.aattEnd) {
            const startDateTime = new Date(exception.aattStart);
            const endDateTime = new Date(exception.aattEnd);
            const durationText = calculateDuration(startDateTime, endDateTime);
            setDuration(durationText);
        } else {
            setDuration('');
        }
    }, [exception.aattStart, exception.aattEnd]);

    return(
        <table className="bl_tb3 el_approvalTb3__th">
            <tbody>
                <tr>
                    <th scope="col">근무형태</th>
                    <td>
                        <select className="hp_w120px" name="aattSort" onChange={onChangeHandler}>
                            <option>선택</option>
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
                        <input type="datetime-local" name="aattStart" onChange={onChangeHandler}/>
                    </td>
                </tr>
                <tr>
                    <th scope="col">종료일</th>
                    <td>
                        <input type="datetime-local" name="aattEnd" onChange={onChangeHandler} min={exception.aattStart}/>
                    </td>
                </tr>
                <tr>
                    <th scope="col">기간</th>
                    <td>
                        {duration}
                    </td>
                </tr>
                <tr>
                    <th scope="col">예외근무지</th>
                    <td><input type="text" className="hp_w100" name="aattPlace" onChange={onChangeHandler}/></td>
                </tr>
                <tr>
                    <th scope="col">업무내용</th>
                    <td><textarea className="hp_w100" name="aattCon" onChange={onChangeHandler}></textarea></td>
                </tr>
            </tbody>
        </table>
    )
}

export default ExceptionWork;