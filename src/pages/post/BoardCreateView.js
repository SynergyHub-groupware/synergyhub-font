import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllLowBoard } from './postApi/PostAPI';


function BoradCreateView() {
    const dispatch = useDispatch();
    const AllLowState = useSelector(state => state.post.AllLowState);

    useEffect(() => {
        dispatch(getAllLowBoard());
    }, [dispatch]);

    const groupByBoard = () => {
        const groupedBoards = {};

        AllLowState.forEach(lowBoard => {
            const boardName = lowBoard.boardCode.boardName;

            if (!groupedBoards[boardName]) {
                groupedBoards[boardName] = [];
            }

            groupedBoards[boardName].push(lowBoard);
        });

        return groupedBoards;
    };
    const groupedBoards = groupByBoard();
    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 5
            }}
        />
    );


    return (
        <>
            <div class="button-container">
                <h1>게시판 관리</h1>
                <table className="">
                    <thead>
                        <tr >
                            <th>분류</th>
                            <th>게시판</th>
                            <th>권한</th>
                        </tr >
                    </thead>
                    <tbody>
                        <th >
                            <tr className="board-management">
                                {Object.keys(groupedBoards).map(boardName => (
                                    <tr key={boardName} className="parent-board">
                                        <td className='tableHead'>{boardName}
                                        </td >

                                        <td   >
                                            {groupedBoards[boardName].map(lowBoard => (
                                                <tr key={lowBoard.lowBoardCode} className="button-wrapper">
                                                    <td >
                                                        <input value={lowBoard.lowBoardName} />

                                                    </td >                                                        <div className="button-group">

                                                        <h1>읽기: <button className='button'>보기</button></h1>

                                                        <h1>쓰기: <button className='button'>보기</button></h1>

                                                        <h1>관리자: <button className='button'>보기</button></h1>
                                                    </div>


                                                </tr >
                                            ))}
                                            <ColoredLine color="black" />

                                        </td   >

                                    </tr    >

                                ))}
                            </tr   >

                        </th >
                    </tbody>
                </table>
            </div>

        </>
    )
}
export default BoradCreateView;