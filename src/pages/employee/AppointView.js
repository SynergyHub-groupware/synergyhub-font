// import '../../css/personal.css';

function AppointView(){
    return(        
        <div class="ly_cont">
            <h4 class="el_lv1Head hp_mb30">발령내용</h4>
            <section class="bl_sect hp_padding15">
                <table class="bl_tb3">
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
                            <td>2024년 1분기 인사발령</td>
                        </tr>
                    </tbody>
                </table>
                <h5 class="hp_fw700 hp_fs18 hp_mt20">발령상세내용</h5>
                <div class="bl_sect hp_mt10">
                    <table class="bl_tb1">
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
                                <th scope="col"><input type="checkbox" class="" id="" name="" value="checkAll" />
                                </th>
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
                                <th scope="row"><input type="checkbox" class="" id="" name="" value="checkOne" />
                                </th>
                                <td>2024-05-28</td>
                                <td>김대한</td>
                                <td>승진</td>
                                <td>대리</td>
                                <td>과장</td>
                            </tr>
                            <tr>
                                <th scope="row"><input type="checkbox" class="" id="" name="" value="checkOne" />
                                </th>
                                <td>2024-05-28</td>
                                <td>김대한</td>
                                <td>이동</td>
                                <td>영업부</td>
                                <td>고객관리팀</td>
                            </tr>
                            <tr>
                                <th scope="row"><input type="checkbox" class="" id="" name="" value="checkOne" />
                                </th>
                                <td>2024-05-28</td>
                                <td>김대한</td>
                                <td>승진</td>
                                <td>대리</td>
                                <td>과장</td>
                            </tr>
                            <tr>
                                <th scope="row"><input type="checkbox" class="" id="" name="" value="checkOne" />
                                </th>
                                <td>2024-05-28</td>
                                <td>김대한</td>
                                <td>이동</td>
                                <td>영업부</td>
                                <td>고객관리팀</td>
                            </tr>
                            <tr>
                                <th scope="row"><input type="checkbox" class="" id="" name="" value="checkOne" />
                                </th>
                                <td>2024-05-28</td>
                                <td>김대한</td>
                                <td>이동</td>
                                <td>영업부</td>
                                <td>고객관리팀</td>
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
export default AppointView;