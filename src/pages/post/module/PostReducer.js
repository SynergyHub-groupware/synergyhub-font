import { handleActions, createActions } from "redux-actions";
const initialState = {
  Postdata: []
};

const GET_POSTLIST = 'post/GET_POSTLIST';

  

export const { post: { getPostlist } } = createActions({
   [GET_POSTLIST]: postlist => ({ postlist })

});
console.log("list"+getPostlist)
console.log("state"+initialState)

const postReducer = handleActions(
  {
    [GET_POSTLIST]: (state, { payload }) => {
      console.log("Reducer payload:", payload); 
      console.log(payload.postlist)
      return{
              ...state,
      Postdata: payload.postlist 
      }      

    }
  },
  initialState
);
console.log("postReducer",postReducer);

export default postReducer;
