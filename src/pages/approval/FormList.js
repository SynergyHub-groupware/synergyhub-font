import '../../css/approval.css';

function FormList(){
    return(
        <div className="ly_cont">
            <h4 className="el_lv1Head hp_mb30">작성하기</h4>
            <div className="hp_alignR">
                {/* <form action="" method=""> */}
                    <input type="text" className="" id="" name="" value="" placeholder="검색어를 입력해주세요"/>
                    <input type="submit" className="el_btnS el_btnblueBord hp_ml5" id="" name="" value="검색"/>
                {/* </form> */}
            </div>
            <section className="bl_sect hp_mt10">
                <table className="bl_tb2">
                    <colgroup>
                        <col style={{width:'200px'}}/>
                        <col style={{width:'*'}}/>
                    </colgroup>
                    <tbody>
                        <tr>
                            <th scope="row">근태/휴가</th>
                            <td>
                                <a className="el_draftApply" href="form/exceptionWork">예외근무신청서 <b className="hp_7Color">(외근, 출장, 교육, 훈련, 재택)</b></a>
                                <a className="el_draftApply" href="form/overtime">초과근무신청서 <b className="hp_7Color">(연장, 휴일근무)</b></a>
                                <a className="el_draftApply" href="form/late">지각사유서 <b className="hp_7Color">(출퇴근 시각 정정요청)</b></a>
                                <a className="el_draftApply" href="form/vacation">휴가신청서 <b className="hp_7Color">(연차, 반차, 결혼, 출산, 병가, 공가, 경조사)</b></a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">인사</th>
                            <td>
                                <a className="el_draftApply" href="form/recruit">채용요청서</a>
                                <a className="el_draftApply" href="form/leave">휴직신청서</a>
                                <a className="el_draftApply" href="form/resign">사직신청서</a>
                                <a className="el_draftApply" href="form/apology">시말서</a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">회계</th>
                            <td>
                                <a className="el_draftApply" href="form/educationFee">교육비지원신청서</a>
                                <a className="el_draftApply" href="form/disbursement">지출결의서 <b className="hp_7Color">(법인카드 사용 후 증빙과 함께 제출)</b></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default FormList;