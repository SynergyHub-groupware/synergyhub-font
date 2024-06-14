function Leave(){
    return(
        <table className="bl_tb3 el_approvalTb3__th">
            <tbody>
                <tr>
                    <th scope="col">시작일</th>
                    <td><input type="date" className="hp_w120px"/></td>
                </tr>
                <tr>
                    <th scope="col">종료일</th>
                    <td><input type="date" className="hp_w120px"/></td>
                </tr>
                <tr>
                    <th scope="col">비상연락처</th>
                    <td>
                        <input type="number" className="hp_w70px"/> -
                        <input type="number" className="hp_w70px"/> -
                        <input type="number" className="hp_w70px"/>
                    </td>
                </tr>
                <tr>
                    <th scope="col">사유</th>
                    <td><textarea className="hp_w100"></textarea></td>
                </tr>
            </tbody>
        </table>
    )
}
export default Leave;