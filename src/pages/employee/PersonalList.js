// import '../../css/personal.css';

function PersonalList(){
    return(        
        <div className="ly_cont">
                <h4 className="el_lv1Head hp_mb30">인사내역</h4>
                <div className="ly_spaceBetween">
                    <button type="button" className="el_btnS el_btnblueBack" onClick={() => { window.location.href = 'personalRegist'}}>등록</button>
                    <form action="" method="">
                        <input type="text" className="" id="" name="" value="" placeholder="검색어를 입력해주세요" />
                        <input type="submit" className="el_btnS el_btnblueBord hp_ml5" id="" name="" value="검색" />
                    </form>
                </div>
                <section className="bl_sect hp_mt10">
                    <table className="bl_tb1">
                        <colgroup>
                            <col style={{width: "50px"}} />
                            <col style={{width: "150px"}} />
                            <col style={{width: "*"}} />
                            <col style={{width: "120px"}} />
                            <col style={{width: "120px"}} />
                        </colgroup>
                        <thead>
                            <tr>
                                <th scope="col"><input type="checkbox" className="" id="" name="" value="checkAll" /></th>
                                <th scope="col">인사번호</th>
                                <th scope="col">제목</th>
                                <th scope="col">결재상태</th>
                                <th scope="col">완료일</th>
                            </tr>
                        </thead>
                        {/* <!-- 15개씩 나열 --> */}
                        <tbody>
                            <tr onClick={() => window.location.href= 'personalView'}>
                                <th scope="row"><input type="checkbox" className="" id="" name="" value="checkOne" /></th>
                                <td>per-2024-05-0001</td>
                                <td className="" style={{ textAlign: 'center' }}>2024년 1분기 신입사원안내</td>
                                <td>진행중</td>
                                <td>2024.12.34</td>
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
                <section className="bl_sect hp_mt10 hp_padding5 hp_alignC" style={{ textAlign: 'center' }}>
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
export default PersonalList;