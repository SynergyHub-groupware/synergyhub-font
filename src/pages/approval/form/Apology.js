function Apology(){
    return(
        <div className="ly_cont">
            <h4 className="el_lv1Head hp_mb30">시말서</h4>
            <section className="bl_sect hp_padding15">
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
                            <td>시말서</td>
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
                            <th scope="col">위반내용</th>
                            <td><textarea className="hp_w100"></textarea></td>
                        </tr>
                        <tr>
                            <th scope="col">서약서</th>
                            <td>
                                <div className="hp_padding30">
                                    본인은 직원으로서 제 사규를 준수하고 맡은 바 책임과 의무를 다하여 성실히 복무하여야 함에도 불구하고 위와 같이 회사의 관련 규정을 위반하였는 바 이에 경위서를 제출하고 그에 따른 처벌을 감수하며 차후 본건을 계기로 과오의 재발이 없을 것임을 서약합니다.
                                    <label className="hp_dpBlock hp_dBack hp_pl10 hp_mt30">
                                        <input type="checkbox"/> 이에 동의합니다.
                                    </label>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className="bl_sect hp_padding15 hp_mt30">
                <table className="bl_tb3 el_approvalTb3__th">
                    <tbody>
                        <tr>
                            <th scope="col" className="hp_dBack">반려사유</th>
                            <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam sed fuga nobis architecto ex optio delectus fugiat explicabo numquam laudantium porro impedit dignissimos dicta, mollitia perspiciatis quibusdam voluptatem. Distinctio, maxime.</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <div className="hp_mt10 hp_alignR">
                {/* 작성중/결재대기 */}
                <button type="button" className="el_btnS el_btnblueBord">임시저장</button>
                <button type="button" className="el_btnS el_btnblueBack hp_ml5">결재상신</button>
                <button type="button" className="el_btnS el_btn8Back hp_ml5">취소</button>
                {/* 결재완료 */}
                <button type="button" className="el_btnS el_btn0Back hp_ml5">개인보관함에 저장</button>
                {/* 결재반려 */}
                <button type="button" className="el_btnS el_btn0Bord hp_ml5">재작성</button>
                <button type="button" className="el_btnS el_btn8Bord hp_ml5">목록</button>
            </div>
            {/* <div className="bl_popBack">
                <div className="bl_popup">
                    <div className="bl_popWrap bl_profile">
                        <div className="bl_popHead ly_spaceBetween ly_fitemC">
                            <div className="hp_fs18">개인보관함에 저장</div>
                            <button type="button" className="bl_popup__closeBtn"></button>
                        </div>
                        <div className="hp_padding15 hp_alignC">
                            <select className="hp_w100">
                                <option>보관함 선택</option>
                                <option value="">연차</option>
                                <option value="">교육</option>
                            </select>
                            <button type="button" className="el_btnS el_btn0Back hp_mt10">저장</button>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}
export default Apology;