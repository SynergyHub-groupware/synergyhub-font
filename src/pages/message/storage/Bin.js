import BinTable from "./table/BinTable";

function Bin() {
    return (
        <div className="ly_cont">
            <h4 className="el_lv1Head hp_mb30">휴지통</h4>
            <div className="ly_spaceBetween">
                <div>
                    <button type="button" className="el_btnS el_btn8Back">영구삭제</button>
                    <button type="button" className="el_btnS el_btn8Bord">복원</button>
                </div>
                <div>
                    <input type="text" placeholder="검색어를 입력해주세요" />
                    <input type="submit" className="el_btnS el_btnblueBord hp_ml5" id="" name="" value="검색" />
                </div>
            </div>
            <BinTable/>
            <section className="bl_sect hp_mt10 hp_padding5 hp_alignC">
                <div className="bl_paging">
                    {/* <a className="bl_paging__btn bl_paging__first" href="" title="첫 페이지로 이동"></a> */}
                    {/* <a className="bl_paging__btn bl_paging__prev" href="" title="이전 페이지로 이동"></a> */}
                    {/* <a className="bl_paging__btn bl_paging__num" href="">1</a> */}
                    {/* <a className="bl_paging__btn bl_paging__next" href="" title="다음 페이지로 이동"></a> */}
                    {/* <a className="bl_paging__btn bl_paging__last" href="" title="마지막 페이지로 이동"></a> */}
                </div>
            </section>
        </div>
    );
}

export default Bin;