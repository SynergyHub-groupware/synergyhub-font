import { handleActions, createActions } from "redux-actions";

const initialState = {
  Postdata: [],
  BoardState: [], // 게시판 데이터
  LowBoardState: [], // 소분류 게시판 데이터
  SortListState:[],
  PostdataInBoard:[], //특정 게시판의 글
  PostdataInBoardPin:[] //특정 게시판의 고정글
};

const GET_POSTLIST = 'post/GET_POSTLIST';
const GET_ALLBOARD = 'post/GET_ALLBOARD';
const GET_ALLLOWBOARD = 'post/GET_ALLLOWBOARD';
const GET_SORTLIST='post/GET_SORTLIST';
const GET_POSTDATAINBOARD='post/GET_POSTDATAINBOARD';
const GET_POSTDATAINBOARDPIN='post/GET_POSTDATAINBOARDPIN';

// 액션 생성자 함수 생성
export const { post: { getPostlist, getAllboard, getAlllowboard,getSortlist,getPostdataInboard,getPostdataInboardPin } } = createActions({
  [GET_POSTLIST]: postlist => ({ postlist }),
  [GET_ALLBOARD]: boardlist => ({ boardlist }),
  [GET_ALLLOWBOARD]: lowboardlist => ({ lowboardlist }),
  [GET_SORTLIST]:sortlist=>({sortlist}),
  [GET_POSTDATAINBOARD]: postdatainboardlist=>({postdatainboardlist}),
  [GET_POSTDATAINBOARDPIN]: postdatainboardpin=>({postdatainboardpin})
});

// 확인용 로그
console.log("getPostlist", getPostlist);
console.log("getAllBoard", getAllboard);
console.log("getAllLowBoard", getAlllowboard);
console.log("getSortlist",getSortlist);

// 초기 상태 및 리듀서 정의
const postReducer = handleActions(
  {
    [GET_POSTLIST]: (state, { payload }) => ({
      ...state,
      Postdata: payload.postlist
    }),
    [GET_ALLBOARD]: (state, { payload }) => ({
      ...state,
      BoardState: payload.boardlist
    }),
    [GET_ALLLOWBOARD]: (state, { payload }) => ({
      ...state,
      LowBoardState: payload.lowboardlist
    }),
    [GET_SORTLIST]:(state,{payload})=>({
      ...state,
      SoftListState:payload.sortlist
    }),
    [GET_POSTDATAINBOARD]:(state,{payload})=>({
      ...state,
      PostdataInBoard:payload.postdatainboardlist
    }),
    [GET_POSTDATAINBOARDPIN]: (state, { payload }) => ({
      ...state,
      PostdataInBoardPin: payload.postdatainboardpin
    })

  },
  initialState
);

// 콘솔 로그를 통해 상태 및 리듀서 확인
console.log("postReducer", postReducer);
console.log("initialState.Postdata", initialState.Postdata);
console.log("initialState.BoardState", initialState.BoardState);
console.log("initialState.LowBoardState", initialState.LowBoardState);
console.log("initialState.SoftListState",initialState.SortListState);

export default postReducer;
