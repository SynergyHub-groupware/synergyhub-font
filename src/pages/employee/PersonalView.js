// import '../../css/personal.css';

function PersonalView(){
    return(        
        <div class="ly_cont">
            <h4 class="el_lv1Head hp_mb30">인사내역</h4>
            <section class="bl_sect hp_padding15">
                <table class="bl_tb3">
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
                            <td>2024년 1분기 신입사원안내</td>
                        </tr>
                    </tbody>
                </table>
                <h5 class="hp_fw700 hp_fs18 hp_mt20">인사내용</h5>
                <div class="bl_sect hp_mt10">
                    <table class="bl_tb1">
                        <colgroup>
                            <col style={{width: "50px"}} />
                            <col style={{width: "120px"}} />
                            <col style={{width: "120px"}} />
                            <col style={{width: "150px"}} />
                            <col style={{width: "180px"}} />
                            <col style={{width: "120px"}} />
                        </colgroup>
                        <thead>
                            <tr>
                                <th scope="col"><input type="checkbox" class="" id="" name="" value="checkAll" />
                                </th>
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
                                <th scope="row"><input type="checkbox" class="" id="" name="" value="checkOne" /></th>
                                <td>2024-06-13</td>
                                <td class="" style={{ textAlign: 'center' }}>홍길동</td>
                                <td>920402-1111111</td>
                                <td>영업부-고객관리팀</td>
                                <td>대리</td>
                                <td>사원</td>
                            </tr>
                            <tr>
                                <th scope="row"><input type="checkbox" class="" id="" name="" value="checkOne" /></th>
                                <td>2024-06-13</td>
                                <td class="" style={{ textAlign: 'center' }}>홍길동</td>
                                <td>920402-1111111</td>
                                <td>영업부-고객관리팀</td>
                                <td>대리</td>
                                <td>사원</td>
                            </tr>
                            <tr>
                                <th scope="row"><input type="checkbox" class="" id="" name="" value="checkOne" /></th>
                                <td>2024-06-13</td>
                                <td class="" style={{ textAlign: 'center' }}>홍길동</td>
                                <td>920402-1111111</td>
                                <td>영업부-고객관리팀</td>
                                <td>대리</td>
                                <td>사원</td>
                            </tr>
                            <tr>
                                <th scope="row"><input type="checkbox" class="" id="" name="" value="checkOne" /></th>
                                <td>2024-06-13</td>
                                <td class="" style={{ textAlign: 'center' }}>홍길동</td>
                                <td>920402-1111111</td>
                                <td>영업부-고객관리팀</td>
                                <td>대리</td>
                                <td>사원</td>
                            </tr>
                            <tr>
                                <th scope="row"><input type="checkbox" class="" id="" name="" value="checkOne" /></th>
                                <td>2024-06-13</td>
                                <td class="" style={{ textAlign: 'center' }}>홍길동</td>
                                <td>920402-1111111</td>
                                <td>영업부-고객관리팀</td>
                                <td>대리</td>
                                <td>사원</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="ly_spaceBetween ly_fitemC hp_mt10">
                    <div class="hp_ml10 hp_7Color">총 1 / <b class="hp_0Color hp_fw700">1</b> 페이지</div>
                    <select class="">
                        <option value="">정렬방식</option>
                    </select>
                </div>
                <section class="bl_sect hp_mt10 hp_padding5" style={{ textAlign: 'center' }}>
                    <div class="bl_paging">
                        <a class="bl_paging__btn bl_paging__first" href="" title="첫 페이지로 이동"></a>
                        <a class="bl_paging__btn bl_paging__prev" href="" title="이전 페이지로 이동"></a>
                        <a class="bl_paging__btn bl_paging__num" href="">1</a>
                        <a class="bl_paging__btn bl_paging__next" href="" title="다음 페이지로 이동"></a>
                        <a class="bl_paging__btn bl_paging__last" href="" title="마지막 페이지로 이동"></a>
                    </div>
                </section>
            </section>
        </div>
    )
}
export default PersonalView;