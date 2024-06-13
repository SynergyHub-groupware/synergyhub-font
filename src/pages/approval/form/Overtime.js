function Overtime(){
    return(
        <table className="bl_tb3 el_approvalTb3__th">
            <tbody>
                <tr>
                    <th scope="col">사유</th>
                    <td><textarea className="hp_w100"></textarea></td>
                </tr>
                <tr>
                    <th scope="col">구분</th>
                    <td>
                        <select className="hp_w120px">
                            <option>선택</option>
                            <option val="">연장근무</option>
                            <option val="">휴일근무</option>
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
                    <td>0일</td>
                </tr>
                <tr>
                    <th scope="col">근무지</th>
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
export default Overtime;