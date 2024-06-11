function Storage(){
    return(
        <div className="ly_cont">
            <h4 className="el_lv1Head hp_mb30">보관함 관리</h4>
            <section className="bl_sect">
                <table className="bl_tb2">
                    <colgroup>
                        <col style={{width:'200px'}}/>
                        <col style={{width:'*'}}/>
                        <col style={{width:'200px'}}/>
                        <col style={{width:'*'}}/>
                    </colgroup>
                    <thead>
                        <tr>
                            <th scope="row">분류</th>
                            <th scope="row">쪽지함</th>
                            <th scope="row">기안 수</th>
                            <th scope="row">관리</th>
                        </tr>
                    </thead>
                    <tbody className="hp_alignC">
                        <tr>
                            <th scope="row">임시저장</th>
                            <td>임시저장</td>
                            <td>10</td>
                            <td><button type="button" className="el_btnS el_btn8Back hp_ml5">비우기</button></td>
                        </tr>
                        <tr>
                            <th scope="row" rowspan="3">개인보관함<br />
                                <button type="button" className="el_btnS el_btn8Bord hp_mt5">+ 추가</button>
                            </th>
                            <td>
                                <div className="ly_flex">
                                    <input type="text" className="hp_w100" value="연차" placeholder="보관함 이름 입력"/>
                                    <button type="button" className="el_btnS el_btnblueBord hp_ml5">저장</button>
                                    <button type="button" className="el_btnS el_btn8Bord hp_ml5">삭제</button>
                                </div>
                            </td>
                            <td>10</td>
                            <td>
                                <button type="button" className="el_btnS el_btn8Back hp_ml5">비우기</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="ly_flex">
                                    <input type="text" className="hp_w100" value="교육" placeholder="보관함 이름 입력"/>
                                    <button type="button" className="el_btnS el_btnblueBord hp_ml5">저장</button>
                                    <button type="button" className="el_btnS el_btn8Bord hp_ml5">삭제</button>
                                </div>
                            </td>
                            <td>5</td>
                            <td>
                                <button type="button" className="el_btnS el_btn8Back hp_ml5">비우기</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="ly_flex">
                                    <input type="text" className="hp_w100" value="" placeholder="보관함 이름 입력"/>
                                    <button type="button" className="el_btnS el_btnblueBord hp_ml5">저장</button>
                                    <button type="button" className="el_btnS el_btn8Bord hp_ml5">삭제</button>
                                </div>
                            </td>
                            <td>0</td>
                            <td>
                                <button type="button" className="el_btnS el_btn8Back hp_ml5">비우기</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    )
}
export default Storage;