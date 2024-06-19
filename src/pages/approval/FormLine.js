import Line from "./Line";

function FormLine(){
    const empCode = "2021048";
    const empName = "박하늘";
    const deptCode = "D15";
    const deptTitle = "정보보안팀";
    const titleCode = "T6";
    const titleName = "팀원";
    // const empCode = "2021091";
    // const empName = "이서연";
    // const deptCode = "D3";
    // const deptTitle = "경영지원부";
    // const titleCode = "T4";
    // const titleName = "팀장";

    return(
        <>
            <div className="ly_spaceBetween hp_mb10">
                <h5 className="hp_fw700 hp_fs18">결재라인</h5>
                <button type="button" className="el_btnS el_btn8Bord hp_p3-5">결재라인 수정</button>
            </div>
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
                            <th>소속</th>
                        </tr>
                        <tr>
                            <th>직위</th>
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
                            <td>작성중</td>
                        </tr>
                        <tr>
                            <td>{deptTitle}</td>
                        </tr>
                        <tr>
                            <td>{titleName}</td>
                        </tr>
                        <tr>
                            <td>{empName}</td>
                        </tr>
                        <tr>
                            <td className="el_approvalSign" style={{ backgroundImage: "url('')" }}></td>
                        </tr>
                    </tbody>
                </table>
                <Line deptCode={deptCode} titleCode={titleCode}/>
            </div>
        </>
    )
}
export default FormLine;