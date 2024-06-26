import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callBinMsgListAPI } from "../../../../apis/MessageAPICalls";

function BinTable() {

    const dispatch = useDispatch();
    const messages = useSelector(state => state.messageReducer.messages.message);

    useEffect(() => {
        console.log("API 작동");
        dispatch(callBinMsgListAPI());        
    }, [dispatch]);

    return(
        <div>
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
                            <th scope="col">첨부파일 (임시 보관함 번호)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {messages && messages.length > 0 ? (
                            messages.map(msg => (
                            <tr key={msg.msgCode}>
                                <td><input type="checkbox" /></td>
                                <td>{msg.sendDate}</td>
                                <td>{msg.sendName ?  `${msg.sendName} ${msg.sendPosition}` : `${msg.revName} ${msg.revPosition}`}</td>
                                <td className="hp_alighL">{msg.msgTitle}</td>
                                <td>{msg.emerStatus}</td>
                                <td>{msg.storCode}</td>
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
        </div>
    );
}

export default BinTable;