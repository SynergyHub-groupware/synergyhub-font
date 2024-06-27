import WorkTable from "./table/WorkTable";

function WorkMsg() {
    return (
        <div className="ly_body" style={{ width: "100%" }}>
            <div className="ly_cont">
                <h4 className="el_lv1Head hp_mb30">업무 보관함</h4>
                <div className="ly_spaceBetween">
                    <div>
                        <button type="button" className="el_btnS el_btn8Back">삭제</button>
                        <button type="button" className="el_btnS el_btn8Bord">이동</button>
                    </div>
                    <div>
                        <input type="text" placeholder="검색어를 입력해주세요" />
                        <input type="submit" className="el_btnS el_btnblueBord hp_ml5" value="검색" />
                    </div>
                </div>
                <WorkTable/>
                <section className="bl_sect hp_mt10 hp_padding5 hp_alignC">
                    <div className="bl_paging">
                        {/* <a href="#" className="bl_paging__btn bl_paging__first" title="첫 페이지로 이동"></a> */}
                        {/* <a href="#" className="bl_paging__btn bl_paging__prev" title="이전 페이지로 이동"></a> */}
                        {/* <a href="#" className="bl_paging__btn bl_paging__num">1</a> */}
                        {/* <a href="#" className="bl_paging__btn bl_paging__next" title="다음 페이지로 이동"></a> */}
                        {/* <a href="#" className="bl_paging__btn bl_paging__last" title="마지막 페이지로 이동"></a> */}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default WorkMsg;