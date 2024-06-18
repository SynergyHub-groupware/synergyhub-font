import DirForm from "./DirForm";

function AddressDir() {


    return (
        <>
            <div className="ly_cont" id="modal">
                <section className="bl_sect ly_flex hp_w70" style={{height: 'calc(100% - 30px - 42px)'}}>
                    <div className="ly_body hp_bordDE hp_w30 hp_margin15 ly_flexC hp_f9Back ly_fdirecCol ly_fitemC"
                        style={{height:'calc(100% - 20px)'}}>
                        <DirForm/>
                    </div>
                    <div className="">
                    </div>
                    <div className="ly_body hp_bordDE hp_w70 hp_margin15 hp_f9Back ly_flexC hp_f9Back ly_fdirecCol ly_fitemC"
                        style={{height:'calc(100% - 20px)'}}>
                        <div className="hp_w95 hp_h100 hp_alignC hp_bordDE hp_br5 hp_fBack hp_mt30 hp_mb30">
                            <table className="bl_tb3">
                                <colgroup>
                                    <col style={{width:'120px'}} />
                                    <col style={{width:'*'}} />
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <th scope="row">
                                            받는 사람
                                            <button type="button" className="el_btnS el_btn8Bord hp_mt5">+ 추가</button>
                                        </th>
                                        <td><input type="text" className="hp_w100" style={{height: '103px'}} /></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            인원 참조
                                            <button type="button" className="el_btnS el_btn8Bord hp_mt5">+ 추가</button>
                                        </th>
                                        <td><input type="text" className="hp_w100" style={{height: '103px'}} /></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            숨은 참조
                                            <button type="button" className="el_btnS el_btn8Bord hp_mt5">+ 추가</button>
                                        </th>
                                        <td><input type="text" className="hp_w100" style={{height: '103px'}} /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="hp_w95 ly_flexEnd hp_pb10">
                            <button type="submit" className="el_btnS el_btnblueBack hp_mr5">확인</button>
                            <button type="button" className="el_btnS el_btn8Back" id="closeButton">취소</button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default AddressDir;