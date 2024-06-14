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

    return Postdata.map(item => (
      <tr key={item.PostCode}>
          <td>{item.PostCode}</td>
          <td>{item.LowBoardCode}</td>
          <td>{item.PostName}</td>
          <td>{item.EmpCode}</td>
          <td>{item.PostDate}</td>
          <td>{item.PostViewCnt}</td>
      </tr>
  ));
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
