function BoradCreateView() {


    return (
        <>
    <div class="container">
        <h1>게시판 관리</h1>
        <table class="board-table">
            <thead>
                <tr>
                    <th>분류</th>
                    <th>게시판</th>
                    <th>권한</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th rowspan="3" class="board-category">기본 게시판</th>
                    <td class="board-item">전체 게시판</td>
                    <td class="board-item">
                        <div class="permissions">
                            <div>읽기: <button>보기</button></div> 

                            <div>쓰기: <button>보기</button></div> 

                            <div>관리자: <button>보기</button></div> 
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="board-item">시스템사업부 게시판</td>
                    <td class="board-item">
                        <div class="permissions">
                            <div>읽기: <button>보기</button></div> 

                            <div>쓰기: <button>보기</button></div> 

                            <div>관리자: <button>보기</button></div> 
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="board-item">시스템팀 게시판</td>
                    <td class="board-item">
                        <div class="permissions">
                            <div>읽기: <button>보기</button></div> 

                            <div>쓰기: <button>보기</button></div> 

                            <div>관리자: <button>보기</button></div> 
                        </div>
                    </td>
                </tr>
                <tr>
                    <th rowspan="3" class="board-category">자유 게시판 <button>+추가</button>
                    </th>

                    <td class="board-item">
                        <input type="text" placeholder="등산 동아리"/>
                        <div class="actions">
                            <button>저장</button>
                            <button>삭제</button>
                        </div>

                    </td>
                    <td class="board-item">
                        <div class="permissions">
                            <div>읽기: <button>보기</button></div> 

                            <div>쓰기: <button>보기</button></div> 

                            <div>관리자: <button>보기</button></div> 
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="board-item">
                        <input type="text" placeholder="독서 동아리"/> <button>저장</button>
                        <button>삭제</button>

                    </td>
                    <td class="board-item">
                        <div class="permissions">
                            <div>읽기: <button>보기</button></div> 

                            <div>쓰기: <button>보기</button></div> 

                            <div>관리자: <button>보기</button></div> 
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="board-item">
                        <input type="text" placeholder="게시판 이름 입력"/> <button>저장</button>

                    </td>
                    <td class="board-item">
                        <div class="permissions">
                            <div>읽기: <button>보기</button></div> 

                            <div>쓰기: <button>보기</button></div> 

                            <div>관리자: <button>보기</button></div> 

                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

        </>
    )
}