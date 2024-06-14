function Vacation(){
    return(
        <table className="bl_tb3 el_approvalTb3__th">
            <tbody>
                <tr>
                    <th scope="col">구분</th>
                    <td>
                        <select className="hp_w120px">
                            <option>선택</option>
                            <option val="">연차</option>
                            <option val="">오전반차</option>
                            <option val="">오후반차</option>
                            <option val="">결혼</option>
                            <option val="">출산</option>
                            <option val="">병가</option>
                            <option val="">공가</option>
                            <option val="">경조사</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th scope="col">시작일</th>
                    <td>
                        <input type="date" className="hp_w120px"/>
                    </td>
                </tr>
                <tr>
                    <th scope="col">종료일</th>
                    <td>
                        <input type="date" className="hp_w120px"/>
                    </td>
                </tr>
                <tr>
                    <th scope="col">기간</th>
                    <td>1일</td>
                </tr>
            </tbody>
        </table>
    )
}
export default Vacation;