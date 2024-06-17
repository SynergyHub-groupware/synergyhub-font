function PostDerailView(){





    return(
        <>
    <div className="main">
        <table>
            <thead>
                <tr>
                    <th colSpan="4">게시판</th>
                </tr>
                <tr>
                    <td>소분류</td>
                    <td>
                        <tr></tr>
                    </td>
                </tr>
                <tr>
                    <td>작성자</td>
                    <td>김씨</td>
                    <td>작성일</td>
                    <td>2024.10.01</td>
                </tr>
                <tr>
                    <td>첨부파일</td>
                    <td colSpan="3"></td>
                </tr>
                <tr>
                    <td>제목</td>
                    <td colSpan="3"></td>
                </tr>
                <tr>
                    <td>내용</td>
                    <td colSpan="3">
                    </td>
                </tr>
                <tr>
                    <td>
                    <input type="text"/>
                    <label><input type="checkbox"/>익명</label>
                    <button type="button">등록</button>
                    </td>
                </tr>
            </thead>
        </table>
</div>
        </>

    )
}