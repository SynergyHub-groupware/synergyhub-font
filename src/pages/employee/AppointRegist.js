// import '../../css/personal.css';

function AppointRegist(){
    return(        
        <div className="ly_cont">
            <div className="ly_spaceBetween ly_fitemEnd hp_mb30">
                <h4 className="el_lv1Head">발령등록</h4>
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
                            <th scope="row">발령번호</th>
                            <td>app-2024-05-0001</td>
                        </tr>
                        <tr>
                            <th scope="row">제목</th>
                            <td><input type="text" className="hp_w100" value="2024년 1분기 인사발령" /></td>
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
                            <th scope="row">발령일</th>
                            <td><input type="date" className="hp_w100" value="내용1" /></td>
                            <th scope="row">이름</th>
                            <td><input type="text" className="hp_w100" value="내용3" /></td>
                            <th scope="row">발령종류</th>
                            <td>
                                <select type="text" className="hp_w100" value="내용2">
                                    <option>선택</option>
                                    <option>승진</option>
                                    <option>이동</option>
                                    <option>휴직</option>
                                    <option>복직</option>
                                    <option>정직</option>
                                    <option>해고</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">부서</th>
                            <td><input type="text" className="hp_w100" value="내용3" /></td>
                            <th scope="row">직책</th>
                            <td><input type="text" className="hp_w100" value="내용1" /></td>
                            <th scope="row">직급</th>
                            <td><input type="text" className="hp_w100" value="내용1" /></td>
                        </tr>
                        <tr>
                            <th scope="row">발령 전</th>
                            <td><input type="text" className="hp_w100" value="내용2" /></td>
                            <th scope="row">발령 후</th>
                            <td><input type="text" className="hp_w100" value="내용2" /></td>
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
                    </colgroup>
                    <thead>
                        <tr>
                            <th scope="col"><input type="checkbox" className="" id="" name="" value="checkAll" /></th>
                            <th scope="col">발령일</th>
                            <th scope="col">이름</th>
                            <th scope="col">발령종류</th>
                            <th scope="col">발령 전</th>
                            <th scope="col">발령 후</th>
                        </tr>
                    </thead>
                    {/* <!-- 5개씩 나열 --> */}
                    <tbody>
                        <tr>
                            <th scope="row"><input type="checkbox" className="" id="" name="" value="checkOne" /></th>
                            <td>2024-12-34</td>
                            <td className="" style={{ textAlign: 'center' }}>홍길동</td>
                            <td>이동</td>
                            <td>영업팀</td>
                            <td>고객관리팀</td>
                        </tr>
                        <tr>
                        <th scope="row"><input type="checkbox" className="" id="" name="" value="checkOne" /></th>
                            <td>2024-12-34</td>
                            <td className="" style={{ textAlign: 'center' }}>홍길동</td>
                            <td>이동</td>
                            <td>영업팀</td>
                            <td>고객관리팀</td>
                        </tr>
                        <tr>
                        <th scope="row"><input type="checkbox" className="" id="" name="" value="checkOne" /></th>
                            <td>2024-12-34</td>
                            <td className="" style={{ textAlign: 'center' }}>홍길동</td>
                            <td>이동</td>
                            <td>영업팀</td>
                            <td>고객관리팀</td>
                        </tr>
                        <tr>
                        <th scope="row"><input type="checkbox" className="" id="" name="" value="checkOne" /></th>
                            <td>2024-12-34</td>
                            <td className="" style={{ textAlign: 'center' }}>홍길동</td>
                            <td>이동</td>
                            <td>영업팀</td>
                            <td>고객관리팀</td>
                        </tr>
                        <tr>
                        <th scope="row"><input type="checkbox" className="" id="" name="" value="checkOne" /></th>
                            <td>2024-12-34</td>
                            <td className="" style={{ textAlign: 'center' }}>홍길동</td>
                            <td>이동</td>
                            <td>영업팀</td>
                            <td>고객관리팀</td>
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
export default AppointRegist;