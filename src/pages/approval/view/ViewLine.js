import { useParams } from "react-router";

function ViewLine({adReportDate}){
    const {adCode} = useParams();

    return(
        <div className="ly_flex hp_relative">
            <table className="bl_tb3 hp_alignC hp_w200px ly_fshirnk">
                <tbody>
                    <tr>
                        <th>구분</th>
                    </tr>
                    <tr>
                        <th>결재상태</th>
                    </tr>
                    <tr>
                        <th>결재일</th>
                    </tr>
                    <tr>
                        <th>소속</th>
                    </tr>
                    <tr>
                        <th>직책</th>
                    </tr>
                    <tr>
                        <th>이름</th>
                    </tr>
                    <tr>
                        <th>서명</th>
                    </tr>
                </tbody>
            </table>
            <table className="bl_tb3 hp_alignC ly_fgrow1">
                <tbody>
                    <tr>
                        <th>작성자</th>
                    </tr>
                    <tr>
                        <td>상신</td>
                    </tr>
                    <tr>
                        <td>{adReportDate}</td>
                    </tr>
                    <tr>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>1</td>
                    </tr>
                    <tr>
                        {/* <td className="el_approvalSign" style={{backgroundImage: imageData ? `url(${imageData})` : 'none'}}></td> */}
                        <td>s</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default ViewLine;