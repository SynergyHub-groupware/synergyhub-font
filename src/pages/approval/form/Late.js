function Late(){
    return(
        <table className="bl_tb3 el_approvalTb3__th">
            <tbody>
                <tr>
                    <th scope="col">근무계획</th>
                    <td>출근 09:00 / 퇴근 18:00</td>
                </tr>
                <tr>
                    <th scope="col">근무실행</th>
                    <td>출근 09:30 / 퇴근 00:00</td>
                </tr>
                <tr>
                    <th scope="col">구분</th>
                    <td>
                        <select className="hp_w120px">
                            <option>선택</option>
                            <option val="">지각사유서</option>
                            <option val="">출근시각 정정요청</option>
                            <option val="">퇴근시각 정정요청</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th scope="col">발생일</th>
                    <td><input type="date" className="hp_w120px"/></td>
                </tr>
                <tr>
                    <th scope="col">사유</th>
                    <td><textarea className="hp_w100"></textarea></td>
                </tr>
            </tbody>
        </table>
    )
}
export default Late;