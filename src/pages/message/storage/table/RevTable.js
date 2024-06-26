import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { callRevMsgListAPI } from "../../../../apis/MessageAPICalls";
import { useState } from "react";

function RevTable({ selectMsgCode, setSelectMsgCode, search }) {
    const dispatch = useDispatch();
    const [allCheck, setAllCheck] = useState(false);
    const messages = useSelector(state => state.messageReducer.messages.message);
    const [sort, setSort] = useState("");   // 쪽지 정렬 상태

    useEffect(() => {
        console.log('API 호출');
        dispatch(callRevMsgListAPI());
    }, [dispatch]);

    /* 쪽지 배열 정렬 */
    const sortMsg = (messages, sort) => {
    
        if(!messages) {
            return [];
        }

        if(sort === "asc") {
            return messages.slice().sort((a, b) => new Date(a.sendDate) - new Date(b.sendDate));
        } else {
            return messages.slice().sort((a, b) => new Date(b.sendDate) - new Date(a.sendDate));
        }
    };

    const sortChangeHandler = (e) => {
        setSort(e.target.value);
    }

    /* 검색어 필터링 */
    const filterMsg = (messages, search) => {
        
        if (!search) {
            return messages;
        }

        const lowerfilter = search.toLowerCase();
        return messages.filter(msg =>
            msg.msgTitle.toLowerCase().includes(lowerfilter) ||
            msg.sendName.toLowerCase().includes(lowerfilter) ||
            msg.sendPosition.toLowerCase().includes(lowerfilter)
        );
    };

    const sortedMessages = sortMsg(filterMsg(messages, search), sort);

    /* 체크박스 선택 */
    const checkboxChange = (msgCode) => {
        if (selectMsgCode.includes(msgCode)) {
            setSelectMsgCode(selectMsgCode.filter(code => code !== msgCode));
        } else {
            setSelectMsgCode([...selectMsgCode, msgCode]);
        }
    };

    /* 전체 체크박스 선택 */
    const allCheckChange = () => {
        setAllCheck(prev => !prev);

        if (allCheck) {
            setSelectMsgCode([]);
        } else {
            const allMsg = messages.map(msg => msg.msgCode);
            setSelectMsgCode(allMsg);
        }
        setAllCheck(!allCheck);
    }

    return (
        <div>
            <section className="bl_sect hp_mt10">
                <table className="bl_tb1">
                    <colgroup>
                        <col style={{ width: "90px" }} />
                        <col style={{ width: "120px" }} />
                        <col style={{ width: "120px" }} />
                        <col style={{ width: "*" }} />
                        <col style={{ width: "*" }} />
                        <col style={{ width: "120px" }} />
                    </colgroup>
                    <thead>
                        <tr>
                            <th scope="col"><input type="checkbox" value="checkAll"  checked={allCheck} onChange={allCheckChange} /></th>
                            <th scope="col">작성일</th>
                            <th scope="col">보낸사람</th>
                            <th scope="col">제목</th>
                            <th scope="col">긴급</th>
                            <th scope="col">첨부파일</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedMessages && sortedMessages.length > 0 ? (
                            sortedMessages.map(msg => (
                                <tr key={msg.msgCode}>
                                    <td><input type="checkbox" onChange={() => checkboxChange(msg.msgCode)} checked={selectMsgCode.includes(msg.msgCode)}/></td>
                                    <td>{msg.sendDate}</td>
                                    <td>{msg.sendName} {msg.sendPosition}</td>
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
            <div className="ly_spaceBetween ly_fitemC hp_mt10">
                <div className="hp_ml10 hp_7Color">총 {messages ? messages.length : 0} / <b className="hp_0Color hp_fw700">1</b> 페이지</div>
                <select value={sort} onChange={sortChangeHandler}>
                    <option value="">정렬방식</option>
                    <option value="asc">날짜 오름차순</option>
                </select>
            </div>
        </div>
    );
}

export default RevTable;
