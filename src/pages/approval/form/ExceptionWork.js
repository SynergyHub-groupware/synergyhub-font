function ExceptionWork(){
    return(
        <table className="bl_tb3 el_approvalTb3__th">
            <tbody>
                <tr>
                    <th scope="col">근무형태</th>
                    <td>
                        <select className="hp_w120px">
                            <option>선택</option>
                            <option val="">외근</option>
                            <option val="">출장</option>
                            <option val="">교육</option>
                            <option val="">훈련</option>
                            <option val="">재택</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th scope="col">시작일</th>
                    <td>
                        <input type="date" className="hp_w120px"/>
                        <input type="time" className="hp_w120px hp_ml5"/>
                    </td>
                </tr>
                <tr>
                    <th scope="col">종료일</th>
                    <td>
                        <input type="date" className="hp_w120px"/>
                        <input type="time" className="hp_w120px hp_ml5"/>
                    </td>
                </tr>
                <tr>
                    <th scope="col">기간</th>
                    <td></td>
                </tr>
                <tr>
                    <th scope="col">예외근무지</th>
                    <td><input type="text" className="hp_w100"/></td>
                </tr>
                <tr>
                    <th scope="col">업무내용</th>
                    <td><textarea className="hp_w100"></textarea></td>
                </tr>
            </tbody>
        </table>
    )
}

export default ExceptionWork;