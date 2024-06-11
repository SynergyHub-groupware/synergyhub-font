function Form(){
    return(
        <div className="ly_cont">
            <div className="ly_spaceBetween ly_fitemEnd hp_mb30">
                <h4 className="el_lv1Head">결재양식 관리</h4>
                <a className="el_btnS el_btnblueBack" href="">결재양식 추가</a>
            </div>
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
                            <th scope="row">양식명</th>
                            <th scope="row">관리</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" rowspan="4">근태/휴가</th>
                            <td>예외근무신청서 <b className="hp_7Color">(외근, 출장, 교육, 훈련, 재택)</b></td>
                            <td className="hp_alignC">
                                <button type="button" className="el_btnS el_btnblueBord hp_ml5">수정</button>
                                <button type="button" className="el_btnS el_btn8Bord hp_ml5">삭제</button>
                            </td>
                        </tr>
                        <tr>
                            <td>초과근무신청서 <b className="hp_7Color">(연장, 휴일근무)</b></td>
                            <td className="hp_alignC">
                                <button type="button" className="el_btnS el_btnblueBord hp_ml5">수정</button>
                                <button type="button" className="el_btnS el_btn8Bord hp_ml5">삭제</button>
                            </td>
                        </tr>
                        <tr>
                            <td>지각사유서 <b className="hp_7Color">(출퇴근 시각 정정요청)</b></td>
                            <td className="hp_alignC">
                                <button type="button" className="el_btnS el_btnblueBord hp_ml5">수정</button>
                                <button type="button" className="el_btnS el_btn8Bord hp_ml5">삭제</button>
                            </td>
                        </tr>
                        <tr>
                            <td>휴가신청서 <b className="hp_7Color">(연차, 반차, 결혼, 출산, 병가, 공가, 경조사)</b></td>
                            <td className="hp_alignC">
                                <button type="button" className="el_btnS el_btnblueBord hp_ml5">수정</button>
                                <button type="button" className="el_btnS el_btn8Bord hp_ml5">삭제</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" rowspan="4">인사</th>
                            <td>채용요청서</td>
                            <td className="hp_alignC">
                                <button type="button" className="el_btnS el_btnblueBord hp_ml5">수정</button>
                                <button type="button" className="el_btnS el_btn8Bord hp_ml5">삭제</button>
                            </td>
                        </tr>
                        <tr>
                            <td>휴직신청서</td>
                            <td className="hp_alignC">
                                <button type="button" className="el_btnS el_btnblueBord hp_ml5">수정</button>
                                <button type="button" className="el_btnS el_btn8Bord hp_ml5">삭제</button>
                            </td>
                        </tr>
                        <tr>
                            <td>사직신청서</td>
                            <td className="hp_alignC">
                                <button type="button" className="el_btnS el_btnblueBord hp_ml5">수정</button>
                                <button type="button" className="el_btnS el_btn8Bord hp_ml5">삭제</button>
                            </td>
                        </tr>
                        <tr>
                            <td>시말서</td>
                            <td className="hp_alignC">
                                <button type="button" className="el_btnS el_btnblueBord hp_ml5">수정</button>
                                <button type="button" className="el_btnS el_btn8Bord hp_ml5">삭제</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" rowspan="2">회계</th>
                            <td>교육비지원신청서</td>
                            <td className="hp_alignC">
                                <button type="button" className="el_btnS el_btnblueBord hp_ml5">수정</button>
                                <button type="button" className="el_btnS el_btn8Bord hp_ml5">삭제</button>
                            </td>
                        </tr>
                        <tr>
                            <td>지출결의서 <b className="hp_7Color">(법인카드 사용 후 증빙과 함께 제출)</b></td>
                            <td className="hp_alignC">
                                <button type="button" className="el_btnS el_btnblueBord hp_ml5">수정</button>
                                <button type="button" className="el_btnS el_btn8Bord hp_ml5">삭제</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    )
}
export default Form;