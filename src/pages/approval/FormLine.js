import Line from "./Line";

function FormLine({handleTrueLineList}){

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
                <Line handleTrueLineList={handleTrueLineList}/>
            </div>
        </>
    )
}
export default FormLine;