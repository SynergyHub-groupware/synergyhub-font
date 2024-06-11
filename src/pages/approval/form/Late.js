function Late(){
    return(
        <div className="ly_cont">
            <h4 className="el_lv1Head hp_mb30">지각사유서</h4>
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
                            <td>지각사유서</td>
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
                            <th scope="col">근무계획</th>
                            <td>출근 09:00 / 퇴근 18:00</td>
                        </tr>
                        <tr>
                            <th scope="col">근무실행</th>
                            <td>출근 09:30 / 퇴근 00:00</td>
                        </tr>
                        <tr>
                            <th scope="col">구분</th>
                            <td>
                                <select className="hp_w120px">
                                    <option>선택</option>
                                    <option val="">지각사유서</option>
                                    <option val="">출근시각 정정요청</option>
                                    <option val="">퇴근시각 정정요청</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th scope="col">발생일</th>
                            <td><input type="date" className="hp_w120px"/></td>
                        </tr>
                        <tr>
                            <th scope="col">사유</th>
                            <td><textarea className="hp_w100"></textarea></td>
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
export default Late;