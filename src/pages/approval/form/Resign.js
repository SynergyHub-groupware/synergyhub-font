function Resign(){
    return(
        <div className="ly_cont">
            <h4 className="el_lv1Head hp_mb30">사직신청서</h4>
            <section className="bl_sect hp_padding15">
                <div className="ly_spaceBetween hp_mb10">
                    <h5 className="hp_fw700 hp_fs18">결재라인</h5>
                    <button type="button" className="el_btnS el_btn8Bord hp_p3-5">결재라인 불러오기</button>
                </div>
                <div className="ly_flex">
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
                                <td>시스템팀</td>
                            </tr>
                            <tr>
                                <td>팀원</td>
                            </tr>
                            <tr>
                                <td>홍길동</td>
                            </tr>
                            <tr>
                                <td className="el_approvalSign" style={{ backgroundImage: "url('')" }}></td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="bl_tb3 hp_alignC ly_fgrow1">
                        <tbody>
                            <tr>
                                <th>결재자</th>
                            </tr>
                            <tr>
                                <td>미결재</td>
                            </tr>
                            <tr>
                                <td>시스템팀</td>
                            </tr>
                            <tr>
                                <td>팀장</td>
                            </tr>
                            <tr>
                                <td>김철수</td>
                            </tr>
                            <tr>
                                <td className="el_approvalSign">
                                    <button type="button" className="el_btnS el_btnblueBack">승인</button>
                                    <button type="button" className="el_btnS el_btn8Back hp_ml5">반려</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="bl_tb3 hp_alignC ly_fgrow1">
                        <tbody>
                            <tr>
                                <th>결재자</th>
                            </tr>
                            <tr>
                                <td>미결재</td>
                            </tr>
                            <tr>
                                <td>IT부</td>
                            </tr>
                            <tr>
                                <td>부서장</td>
                            </tr>
                            <tr>
                                <td>김영미</td>
                            </tr>
                            <tr>
                                <td className="el_approvalSign"></td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="bl_tb3 hp_alignC ly_fgrow1">
                        <tbody>
                            <tr>
                                <th>결재자</th>
                            </tr>
                            <tr>
                                <td>미결재</td>
                            </tr>
                            <tr>
                                <td>임원</td>
                            </tr>
                            <tr>
                                <td>대표</td>
                            </tr>
                            <tr>
                                <td>이순신</td>
                            </tr>
                            <tr>
                                <td className="el_approvalSign"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h5 className="hp_fw700 hp_fs18 hp_mb10 hp_mt30">결재정보</h5>
                <table className="bl_tb3 el_approvalTb3__th">
                    <tbody>
                        <tr>
                            <th scope="row">기안양식</th>
                            <td>사직신청서</td>
                        </tr>
                        <tr>
                            <th scope="row">첨부파일</th>
                            <td colSpan="3"></td>
                        </tr>
                        <tr>
                            <th scope="row">제목</th>
                            <td colSpan="3"><input type="text" className="hp_w100" placeholder="[팀명] MM/DD 기안양식명_이름"/></td>
                        </tr>
                    </tbody>
                </table>
                <h5 className="hp_fw700 hp_fs18 hp_mb10 hp_mt30">결재내용</h5>
                <table className="bl_tb3 el_approvalTb3__th">
                    <tbody>
                        <tr>
                            <th scope="col">입사일</th>
                            <td>2024.12.34</td>
                        </tr>
                        <tr>
                            <th scope="col">퇴사일</th>
                            <td><input type="date" className="hp_w120px"/></td>
                        </tr>
                        <tr>
                            <th scope="col">퇴사후 연락처</th>
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
                        <tr>
                            <th scope="col">서약서</th>
                            <td>
                                <div className="hp_padding30">
                                    본인은 위와 같은 사유로 퇴사함에 있어 아래 조항을 성실히 준수할 것을 서약합니다.
                                    <ol className="bl_listNum hp_mt20">
                                        <li className="hp_mb10">본인은 퇴직에 따른 사무 인수, 인계의 철저로 최종 퇴사시까지 책임과 의무를 완수하고, 재직시 알게된 업무상 회사의 주요 정보 및 제반 비밀사항을 타인에게 누설함이 귀사의 경영에 막대한 손해와 피해를 준다는 사실을 지각하고 일체 이를 누설하지 않겠습니다.</li>
                                        <li className="hp_mb10">재직 중 지급받은 공구, 비품, 등 물품은 퇴직일 전일까지 반환하겠습니다.</li>
                                        <li className="hp_mb10">기타 회사와 관련한 제반사항은 회사규정에 의거 퇴직일 전일까지 처리하겠습니다.</li>
                                        <li className="hp_mb10">만일 본인이 상기 사항을 위반하였을 때에는 이유 여하를 막론하고 서약에 의거 민, 형사상의 책임을 지며, 회사에서 요구하는 손해배상의 의무를 지겠습니다.</li>
                                    </ol>
                                    <label className="hp_dpBlock hp_dBack hp_pl10 hp_mt50">
                                        <input type="checkbox"/> 이에 동의합니다.
                                    </label>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <div className="hp_mt10 hp_alignR">
                <button type="button" className="el_btnS el_btnblueBord">임시저장</button>
                <button type="button" className="el_btnS el_btnblueBack hp_ml5">결재상신</button>
                <button type="button" className="el_btnS el_btn8Back hp_ml5">취소</button>
            </div>
        </div>
    )
}
export default Resign;