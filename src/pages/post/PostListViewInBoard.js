import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { callGETInboardList, callGETInboardPinList } from './postApi/PostAPI';
import { useParams } from 'react-router-dom';

function PostListViewInBoard() {
  const dispatch = useDispatch();
  const PostdataInBoardState = useSelector(state => state.post.PostdataInBoard); // Redux store에서 PostdataInBoard 상태 가져오기
  const PostdataInBoardPinState = useSelector(state => state.post.PostdataInBoardPin); // Redux store에서 PostdataInBoardPin 상태 가져오기

  const { PostdataInBoard } = PostdataInBoardState; // PostdataInBoard 필드 추출
  const { PostdataInBoardPin } = PostdataInBoardPinState; // PostdataInBoardPin 필드 추출
  const { lowBoardCode } = useParams(); // URL의 파라미터로부터 lowBoardCode 가져오기

  console.log(lowBoardCode);
  useEffect(() => {
    dispatch(callGETInboardList(lowBoardCode));
  }, [dispatch, lowBoardCode]);

  useEffect(() => {
    dispatch(callGETInboardPinList(lowBoardCode));
  }, [dispatch, lowBoardCode]);

  console.log("Current posts data:", PostdataInBoard);

  const renderRows = (posts) => {
    if (!Array.isArray(posts) || posts.length === 0) {
      return <tr><td colSpan="6">로딩 중...</td></tr>;
    }

    return posts.map(item => {
      const lowBoardName = item.lowBoardCode ? item.lowBoardCode.lowBoardName : 'N/A';

      return (
        <tr key={item.postCode}>
          <td>{item.postCode}</td>
          <td>{lowBoardName}</td>
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
      <div className="main">
        <h1 style={{ fontSize: '50px' }}>전체 게시판</h1>
        <br /><br /><br />
        <div className="searchZone">
          <input />
          <button type='button' className='button button'>검색</button>
        </div>
        <table className='bl_tb1'>
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
            {renderRows(PostdataInBoardPin)}
            {renderRows(PostdataInBoard)}
          </tbody>
        </table>
        <div className="bl_paging" style={{ display: 'flex' }}>
          <button className='bl_paging__btn bl_paging__prev'>  </button>
          <h4>1</h4>
          <button className='bl_paging__btn '>  </button>
        </div>
      </div>
    </>
  );
}

export default PostListViewInBoard;
