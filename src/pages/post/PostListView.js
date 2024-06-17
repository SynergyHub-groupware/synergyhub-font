import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { callGETPostList } from './postApi/PostAPI';
import axios from 'axios';

function PostListView() {
  const dispatch = useDispatch();
  const postState = useSelector(state => state.post); // Redux store에서 post 상태 가져오기
  const { Postdata } = postState; // Postdata 필드 추출

console.log("postView");
  useEffect(() => {
    dispatch(callGETPostList());
  }, [dispatch]);
  console.log("Current posts data:",Postdata)

  const renderRows = () => {
    if (!Array.isArray(Postdata) || Postdata.length === 0) {
      return <tr><td colSpan="6">로딩 중...</td></tr>;
    }
    console.log("로딩 성공");

    return Postdata.map(item => {
      // item과 lowBoardCode의 구조를 로그로 출력
      console.log("Item:", item);
      console.log("LowBoardCode:", item.lowBoardCode);

      // lowBoardCode 객체 내의 필드 접근
      const lowBoardCode = item.lowBoardCode ? item.lowBoardCode.lowBoardCode : 'N/A';
      const lowBoardName = item.lowBoardCode ? item.lowBoardCode.lowBoardName : 'N/A';

      return (
        <tr key={item.postCode}>
          <td>{item.postCode}</td>
          <td>{lowBoardName}</td> {/* lowBoardCode 및 lowBoardName 출력 */}
          <td>{item.postName}</td>
          <td>{item.empCode}</td>
          <td>{item.postDate}</td>
          <td>{item.postViewCnt}</td>
        </tr>
      );
    });
  };

  return (
    <>
      <h1>전체 게시판</h1>
      <br /><br /><br />
      <div className="searchZone">
        <input />
        <button>검색</button>
      </div>
      <span className="main">
        <table>
          <thead>
            <tr className="tableHead">
              <th>No</th>
              <th>분류</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
              <th>열람</th>
            </tr>
          </thead>
          <tbody>
            {renderRows()}
          </tbody>
        </table>
        <div className="button">
          <button> 이전 </button>
          <h4>1</h4>
          <button> 다음 </button>
        </div>
      </span>
    </>
  );
}

export default PostListView;
