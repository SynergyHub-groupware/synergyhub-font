import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllLowBoard } from './postApi/PostAPI';

function BoardCreateView() {
    const dispatch = useDispatch();
    const AllLowState = useSelector(state => state.post.AllLowState);
    const [boards, setBoards] = useState({});

    useEffect(() => {
        dispatch(getAllLowBoard());
    }, [dispatch]);

    useEffect(() => {
        if (AllLowState.length > 0) {
            const groupedBoards = AllLowState.reduce((acc, lowBoard) => {
                const boardName = lowBoard.boardCode.boardName;
                const boardCode = lowBoard.boardCode; // 게시판 코드 객체
    
                if (!acc[boardName]) {
                    acc[boardName] = {
                        boardCode: boardCode,
                        lowBoards: []
                    };
                }
    
                acc[boardName].lowBoards.push(lowBoard);
                return acc;
            }, {});
            setBoards(groupedBoards);
        }
    }, [AllLowState]);
    
    const addNewRow = (boardName) => {
        const newLowBoard = {
            lowBoardCode: Date.now(),  // 임시 고유 ID
            lowBoardName: '',
            boardCode: { boardName: boardName },
            isNew: true  // 새로 추가된 항목 표시
        };
        setBoards(prevBoards => ({
            ...prevBoards,
            [boardName]: [...prevBoards[boardName], newLowBoard]
        }));
    };

    const handleInputChange = (e, boardName, index) => {
        const { value } = e.target;
        setBoards(prevBoards => {
            const updatedBoards = { ...prevBoards };
            updatedBoards[boardName][index].lowBoardName = value;
            return updatedBoards;
        });
    };

    const saveRow = (boardName, index) => {
        // 여기에 저장 로직을 추가할 수 있습니다.
        console.log(`Saving row for ${boardName} at index ${index}`);
        // 저장 후 isNew 속성 제거 등의 처리를 추가할 수 있습니다.
    };

    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 2
            }}
        />
    );

    return (
        <>
            <div className="button-container">
                <h1>게시판 관리</h1>
                <table className="">
                    <thead>
                        <tr>
                            <th>분류</th>
                            <th>게시판</th>
                            <th>권한</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(boards).map(boardName => (
                            <tr key={boardName} className="parent-board">
                                <td className='tableHead'>
                                    {boardName}
                                    <button className='button' onClick={() => addNewRow(boardName)}>
                                        소분류 추가
                                    </button>
                                </td>

                                <td>
                                    {boards[boardName].map((lowBoard, index) => (
                                        <tr key={lowBoard.lowBoardCode} className="button-wrapper">
                                            <td>
                                                <input
                                                    value={lowBoard.lowBoardName}
                                                    onChange={(e) => handleInputChange(e, boardName, index)}
                                                />
                                            </td>

                                            {lowBoard.isNew && (
                                                <td>
                                                    <button className="save-button" onClick={() => saveRow(boardName, boards.boardCode)}>
                                                        저장
                                                    </button>
                                                </td>
                                            )}

                                            <div className="button-group">
                                                <h1>읽기: <button className='button'>보기</button></h1>
                                                <h1>쓰기: <button className='button'>보기</button></h1>
                                                <h1>관리자: <button className='button'>보기</button></h1>
                                            </div>
                                            <ColoredLine color="black" />
                                        </tr>
                                    ))}
                                    <ColoredLine color="black" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default BoardCreateView;
