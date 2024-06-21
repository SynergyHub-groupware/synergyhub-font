// import '../../css/personal.css';

function PersonalRegist(){
    return(        
        <div className="ly_cont">
            <div className="ly_spaceBetween ly_fitemEnd hp_mb30">
                <h4 className="el_lv1Head">인사등록</h4>
                <button type="button" className="el_btnS el_btnblueBack">일괄등록 & 파일업로드</button>
            </div>
            <section className="bl_sect hp_padding15">
                <table className="bl_tb3">
                    <colgroup>
                        <col style={{width: "120px"}} />
                        <col style={{width: "*"}} />
                    </colgroup>
                    <tbody>
                        <tr>
                            <th scope="row">인사번호</th>
                            <td>per-2024-05-0001</td>
                        </tr>
                        <tr>
                            <th scope="row">제목</th>
                            <td><input type="text" className="hp_w100" value="2024년 1분기 신입사원안내" /></td>
                        </tr>
                    </tbody>
                </table>
                <div className="ly_spaceBetween hp_mt20">
                    <h5 className="hp_fw700 hp_fs18">개별등록</h5>
                    <div>
                        <button type="button" className="el_btnS el_btn8Back">비우기</button>
                        <button type="button" className="el_btnS el_btn0Back">저장</button>
                    </div>
                </div>
                <table className="bl_tb3 hp_mt10">
                    <colgroup>
                        <col style={{width: "120px"}} />
                        <col style={{width: "*"}} />
                        <col style={{width: "120px"}} />
                        <col style={{width: "*"}} />
                        <col style={{width: "120px"}} />
                        <col style={{width: "*"}} />
                    </colgroup>
                    <tbody>
                        <tr>
                            <th scope="row">입사일</th>
                            <td><input type="date" className="hp_w100" value="" /></td>
                            <th scope="row">이름</th>
                            <td><input type="text" className="hp_w100" value="내용1" /></td>
                            <th scope="row">주민등록번호</th>
                            <td><input type="text" className="hp_w100" value="내용2" /></td>
                        </tr>
                        <tr>
                            <th scope="row">부서</th>
                            <td>
                                <select type="text" className="hp_w100" value="">
                                    <option>선택</option>
                                    <option>임원진</option>
                                    <option>전략기획부</option>
                                    <option>경영지원부</option>
                                    <option>인사부</option>
                                    <option>마케팅부</option>
                                    <option>영업부</option>
                                    <option>정보기술부</option>
                                </select>
                            </td>
                            <th scope="row">직급</th>
                            <td>
                                <select type="text" className="hp_w100" value="">
                                    <option>선택</option>
                                    <option>대표</option>
                                    <option>이사</option>
                                    <option>부장</option>
                                    <option>과장</option>
                                    <option>대리</option>
                                    <option>사원</option>
                                </select>
                            </td>
                            <th scope="row">직책</th>
                            <td>
                                <select type="text" className="hp_w100" value="">
                                    <option>선택</option>
                                    <option>대표</option>
                                    <option>책임자</option>
                                    <option>부서장</option>
                                    <option>팀장</option>
                                    <option>사원</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <div className="ly_spaceBetween hp_mt70">
                <button type="button" className="el_btnS el_btn8Back">삭제</button>
                <form action="" method="">
                    <input type="text" className="" id="" name="" value="" placeholder="검색어를 입력해주세요" />
                    <input type="submit" className="el_btnS el_btnblueBord hp_ml5" id="" name="" value="검색" />
                </form>
            </div>
            <section className="bl_sect hp_mt10">
                <table className="bl_tb1">
                    <colgroup>
                        <col style={{width: "50px"}} />
                        <col style={{width: "120px"}} />
                        <col style={{width: "120px"}} />
                        <col style={{width: "120px"}} />
                        <col style={{width: "120px"}} />
                        <col style={{width: "120px"}} />
                        <col style={{width: "120px"}} />
                    </colgroup>
                    <thead>
                        <tr>
                            <th scope="col"><input type="checkbox" className="" id="" name="" value="checkAll" /></th>
                            <th scope="col">입사일</th>
                            <th scope="col">이름</th>
                            <th scope="col">주민등록번호</th>
                            <th scope="col">부서</th>
                            <th scope="col">직급</th>
                            <th scope="col">직책</th>
                        </tr>
                    </thead>
                    {/* <!-- 5개씩 나열 --> */}
                    <tbody>
                        <tr>
                            <th scope="row"><input type="checkbox" className="" id="" name="" value="checkOne" /></th>
                            <td>2024-06-13</td>
                            <td className="hp_alignC">홍길동</td>
                            <td>920402-1111111</td>
                            <td>영업부-고객관리팀</td>
                            <td>대리</td>
                            <td>사원</td>
                        </tr>
                        <tr>
                            <th scope="row"><input type="checkbox" className="" id="" name="" value="checkOne" /></th>
                            <td>2024-06-13</td>
                            <td className="hp_alignC">홍길동</td>
                            <td>920402-1111111</td>
                            <td>영업부-고객관리팀</td>
                            <td>대리</td>
                            <td>사원</td>
                        </tr>
                        <tr>
                            <th scope="row"><input type="checkbox" className="" id="" name="" value="checkOne" /></th>
                            <td>2024-06-13</td>
                            <td className="hp_alignC">홍길동</td>
                            <td>920402-1111111</td>
                            <td>영업부-고객관리팀</td>
                            <td>대리</td>
                            <td>사원</td>
                        </tr>
                        <tr>
                            <th scope="row"><input type="checkbox" className="" id="" name="" value="checkOne" /></th>
                            <td>2024-06-13</td>
                            <td className="hp_alignC">홍길동</td>
                            <td>920402-1111111</td>
                            <td>영업부-고객관리팀</td>
                            <td>대리</td>
                            <td>사원</td>
                        </tr>
                        <tr>
                            <th scope="row"><input type="checkbox" className="" id="" name="" value="checkOne" /></th>
                            <td>2024-06-13</td>
                            <td className="hp_alignC">홍길동</td>
                            <td>920402-1111111</td>
                            <td>영업부-고객관리팀</td>
                            <td>대리</td>
                            <td>사원</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <div className="ly_spaceBetween ly_fitemC hp_mt10">
                <div className="hp_ml10 hp_7Color">총 1 / <b className="hp_0Color hp_fw700">1</b> 페이지</div>
                <select className="">
                    <option value="">정렬방식</option>
                </select>
            </div>
            <section className="bl_sect hp_mt10 hp_padding5" style={{ textAlign: 'center' }}>
                <div className="bl_paging">
                    <a className="bl_paging__btn bl_paging__first" href="" title="첫 페이지로 이동"></a>
                    <a className="bl_paging__btn bl_paging__prev" href="" title="이전 페이지로 이동"></a>
                    <a className="bl_paging__btn bl_paging__num" href="">1</a>
                    <a className="bl_paging__btn bl_paging__next" href="" title="다음 페이지로 이동"></a>
                    <a className="bl_paging__btn bl_paging__last" href="" title="마지막 페이지로 이동"></a>
                </div>
            </section>
        </div>
    )
}
export default PersonalRegist;