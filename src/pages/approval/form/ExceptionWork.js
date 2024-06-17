import { useEffect, useState } from "react";

function ExceptionWork({handleDetail}){
    const [exception, setException] = useState({});

    const onChangeHandler = e => {
        const { name, value } = e.target;

        if (name === "aattStartDate" || name === "aattStartTime") {
            const startDate = name === "aattStartDate" ? value : exception.aattStart?.aattStartDate;
            const startTime = name === "aattStartTime" ? value : exception.aattStart?.aattStartTime;

            const combinedDateTime = `${startDate}T${startTime}`;
            setException(prevState => ({
                ...prevState,
                aattStart: {combinedDateTime}
            }));
        } else if (name === "aattEndDate" || name === "aattEndTime") {
            // Combine end date and end time
            const endDateTime = `${exception.aattEnd?.aattEndDate || ""}T${exception.aattEnd?.aattEndTime || ""}`;
            setException(prevState => ({
                ...prevState,
                aattEnd: {
                    ...prevState.aattEnd,
                    [name]: value
                }
            }));
        } else {
            // For other fields like aattSort, aattPlace, aattCon
            setException({
                ...exception,
                [name]: value
            });
        }
    };

    useEffect(()=>{
        handleDetail(exception);
    },[exception]);

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
                        <input type="date" className="hp_w120px" name="aattStartDate" onChange={onChangeHandler} />
                        <input type="time" className="hp_w120px hp_ml5" name="aattStartTime" onChange={onChangeHandler} />
                    </td>
                </tr>
                <tr>
                    <th scope="col">종료일</th>
                    <td>
                        <input type="date" className="hp_w120px" name="aattEndDate" onChange={onChangeHandler} />
                        <input type="time" className="hp_w120px hp_ml5" name="aattEndTime" onChange={onChangeHandler} />
                    </td>
                </tr>
                <tr>
                    <th scope="col">기간</th>
                    <td></td>
                </tr>
                <tr>
                    <th scope="col">예외근무지</th>
                    <td><input type="text" className="hp_w100" name="aattPlace" onKeyUp={onChangeHandler}/></td>
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