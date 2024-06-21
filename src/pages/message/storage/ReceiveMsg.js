import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callRevMsgListAPI } from "../../../apis/MessageAPICalls";

function ReceiveMsg() {

    const dispatch = useDispatch();
    const { messages } = useSelector(state => state.message) || {};

    useEffect(() => {
        console.log('api 작동');
        dispatch(callRevMsgListAPI());
    }, [dispatch]);

    if(!messages) {
        return null;
    }

    return (
        <div className="ly_body" style={{ width: "100%" }}>
            <div className="ly_cont">
                <h4 className="el_lv1Head hp_mb30">받은 쪽지</h4>
                <div className="ly_spaceBetween">
                    <div className="">
                        <button type="button" className="el_btnS el_btn8Back">삭제</button>
                        <button type="button" className="el_btnS el_btn8Bord">이동</button>
                    </div>
                    <div>
                        <input type="text" placeholder="검색어를 입력해주세요" />
                        <input type="submit" className="el_btnS el_btnblueBord hp_ml5" value="검색" />
                    </div>
                </div>
                <section className="bl_sect hp_mt10">
                    <table className="bl_tb1">
                        <colgroup>
                            <col style={{ width: "50px" }} />
                            <col style={{ width: "120px" }} />
                            <col style={{ width: "120px" }} />
                            <col style={{ width: "*" }} />
                            <col style={{ width: "*" }} />
                            <col style={{ width: "120px" }} />
                        </colgroup>
                        <thead>
                            <tr>
                                <th scope="col"><input type="checkbox" value="checkAll" /></th>
                                <th scope="col">작성일</th>
                                <th scope="col">보낸사람</th>
                                <th scope="col">제목</th>
                                <th scope="col">긴급</th>
                                <th scope="col">첨부파일</th>
                            </tr>
                        </thead>
                        <tbody>
                            {messages.length > 0 ? (
                                messages.map(msg => (
                                    <tr key={msg.msgCode}>
                                        <td><input type="checkbox"/></td>
                                        <td>{msg.sendDate}</td>
                                        <td>{msg.empSend.empCode}</td>
                                        <td className="hp_alighL">{msg.msgTitle}</td>
                                        <td>{msg.emerStatus}</td>
                                        <td>{msg.storCode.storCode}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={6} className="hp_pt50 hp_pb50 hp_7Color">목록이 없습니다.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </section>
                <div className="ly_spaceBetween ly_fitemC hp_mt10">
                    <div className="hp_ml10 hp_7Color">총 {messages.length} / <b className="hp_0Color hp_fw700">1</b> 페이지</div>
                    <select className="">
                        <option value="">정렬방식</option>
                    </select>
                </div>
                <section className="bl_sect hp_mt10 hp_padding5 hp_alignC">
                    <div className="bl_paging">
                        <a href="#" className="bl_paging__btn bl_paging__first" title="첫 페이지로 이동"></a>
                        <a href="#" className="bl_paging__btn bl_paging__prev" title="이전 페이지로 이동"></a>
                        <a href="#" className="bl_paging__btn bl_paging__num">1</a>
                        <a href="#" className="bl_paging__btn bl_paging__next" title="다음 페이지로 이동"></a>
                        <a href="#" className="bl_paging__btn bl_paging__last" title="마지막 페이지로 이동"></a>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default ReceiveMsg;