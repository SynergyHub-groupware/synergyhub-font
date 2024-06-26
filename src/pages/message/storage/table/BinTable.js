import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callBinMsgListAPI } from "../../../../apis/MessageAPICalls";
import { useState } from "react";
import { Link } from "react-router-dom";

function BinTable() {

    const dispatch = useDispatch();
    const messages = useSelector(state => state.messageReducer.messages.message);
    const [sort, setSort] = useState("");   // 쪽지 정렬 상태

    /* 쪽지 배열 정렬 */
    const sortMsg = (messages, sort) => {

        if (!messages) {
            return [];
        }

        if (sort === "asc") {
            return messages.slice().sort((a, b) => new Date(a.sendDate) - new Date(b.sendDate));
        } else {
            return messages.slice().sort((a, b) => new Date(b.sendDate) - new Date(a.sendDate));
        }
    };


    const sortChangeHandler = (e) => {
        setSort(e.target.value);
    }

    const sortedMessages = sortMsg(messages, sort);

    useEffect(() => {
        console.log("API 작동");
        dispatch(callBinMsgListAPI());        
    }, [dispatch]);

    return(
        <div>
            <section className="bl_sect hp_mt10">
                <table className="bl_tb1">
                    <colgroup>
                        <col style={{ width: "90px" }} />
                        <col style={{ width: "150px" }} />
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
                            <th scope="col">받은사람</th>
                            <th scope="col">제목</th>
                            <th scope="col">긴급</th>
                            <th scope="col">첨부파일 (임시 보관함 번호)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedMessages && sortedMessages.length > 0 ? (
                            sortedMessages.map(msg => (
                            <tr key={msg.msgCode}>
                                <td><input type="checkbox" /></td>
                                <td>{msg.sendDate}</td>
                                {/* <td>{msg.sendName ?  `${msg.sendName} ${msg.sendPosition}` : `${msg.revName} ${msg.revPosition}`}</td> */}
                                <td>{msg.sendName} {msg.sendPosition}</td>
                                <td>{msg.revName} {msg.revPosition}</td>
                                <td className="hp_alighL">
                                    <Link to={`/message/storage/bin/detail/${msg.msgCode}`}>{msg.msgTitle}</Link>
                                </td>
                                <td>{msg.emerStatus}</td>
                                <td>{msg.storCode}</td>
                            </tr>
                            ))
                    ) : (
                        <tr>
                            <td colSpan={7} className="hp_pt50 hp_pb50 hp_7Color">목록이 없습니다.</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </section>
            <div className="ly_spaceBetween ly_fitemC hp_mt10">
                <div className="hp_ml10 hp_7Color">총 1 / <b className="hp_0Color hp_fw700">1</b> 페이지</div>
                <select value={sort} onChange={sortChangeHandler}>
                    <option value="">정렬방식</option>
                    <option value="asc">날짜 오름차순</option>
                </select>
            </div>
        </div>
    );
}

export default BinTable;