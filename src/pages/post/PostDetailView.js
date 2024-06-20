import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { callGETDetail,callGETFile,callGETComment } from './postApi/PostAPI';
import axios from 'axios';

function PostDetailView() {
    const dispatch = useDispatch();
    const { postCode } = useParams(); // URL의 파라미터로부터 postCode 가져오기
    const [newComment, setNewComment] = useState('');
    const [comments, setComments] = useState([]);

    useEffect(() => {
        dispatch(callGETDetail(postCode));
    }, [dispatch, postCode]);
    useEffect(() => {
        dispatch(callGETFile(postCode));
    }, [dispatch, postCode]);
    useEffect(()=>{
        dispatch(callGETComment(postCode));
    },[dispatch,postCode])

    const DetailData = useSelector(state => state.post.DetailState);
    console.log(DetailData);
    const FileData=useSelector(state=>state.post.FileState)
    console.log(FileData);
    const CommentState=useSelector(state=>state.post.CommentState);


    const downloadAttachment = (attachmentUrl, filename) => {
        // 클릭한 첨부 파일을 다운로드하는 함수
        const link = document.createElement('a');
        link.href = attachmentUrl;
        link.setAttribute('download', filename); // 파일 이름 설정
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleCommentChange = (e) => {
        setNewComment(e.target.value);
    };

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        const commentData = {
            postId: DetailData.postCode,
            content: newComment,
            author: 'Anonymous', // 현재 미구현, 댓글 익명화 설정 후 구현 필요
        };

        try {
            const response = await axios.post('http://localhost:8080/comments/add', commentData);
            setComments([...comments, response.data]);
            setNewComment('');
        } catch (error) {
            console.error('Failed to add comment:', error);
        }
    };


    // DetailData가 배열이 아니라 객체일 경우 처리
    // 일반적으로 DetailData가 배열이라고 가정하지만, 객체로 반환되는 경우를 대비하여 처리
    const renderDetail = () => {
        if (!DetailData) return null; // DetailData가 없으면 아무것도 렌더링하지 않음

        return (
            <div className="main">
                <table>
                    <thead>
                        <tr>
                            <th colSpan="4">게시판</th>
                        </tr>
                        <tr>
                            <td>게시글 번호</td>
                            <td>{DetailData.postCode}</td>
                        </tr>
                        <tr>
                            <td>작성자</td>
                            <td>{DetailData.empCode}</td>
                            <td>작성일</td>
                            <td>{DetailData.postDate}</td>
                        </tr>
                        <tr>
                            <td>첨부파일</td>
                            <td colSpan="3">
                            {FileData && FileData.length > 0 ? (
                                    FileData.map((file, index) => (
                                        <a 
                                          key={index} 
                                          href={`http://localhost:8080/post/downloadFile/${file.attachSave}`} 
                                          target="_blank" 
                                          rel="noopener noreferrer"
                                        >
                                            {file.attachOriginal}
                                        </a>
                                    ))
                                ) : (
                                    <span>첨부 파일이 없습니다.</span>
                                )}

                            </td>
                        </tr>
                        <tr>
                            <td>제목</td>
                            <td colSpan="3">{DetailData.postName}</td>
                        </tr>
                        <tr>
                            <td>내용</td>
                            <td colSpan="3">{DetailData.postCon}</td>
                        </tr>
                        <tr>
                            <td colSpan="4">
                                <h1>댓글 구현위치</h1>
                                {DetailData.postCommSet === 'ALLOW_NORMAL' && (
                <>
                    <h2>댓글</h2>
                    <ul>
                        {comments.map((comment) => (
                            <li key={comment.id}>
                                <strong>{comment.author}:</strong> {comment.content}
                            </li>
                        ))}
                    </ul>
                    <form onSubmit={handleCommentSubmit}>
                        <textarea value={newComment} onChange={handleCommentChange} />
                        <button type="submit">댓글 작성</button>
                    </form>
                </>
            )}
            {DetailData.postCommSet === 'ALLOW_ANONYMOUS' && (
                <>
                    <h2>익명 댓글</h2>
                    <ul>
                        {comments.map((comment) => (
                            <li key={comment.id}>
                                {comment.content}
                            </li>
                        ))}
                    </ul>
                    <form onSubmit={handleCommentSubmit}>
                        <textarea value={newComment} onChange={handleCommentChange} />
                        <button type="submit">익명 댓글 작성</button>
                    </form>
                </>
            )}
            {DetailData.postCommSet === 'ALLOW_BOTH' && (
                <>
                    <h2>댓글</h2>
                    <ul>
                        {CommentState.map((comment) => (
                            <li key={comment.commonCode}>
                                <strong>{comment.empCode}:</strong> {comment.commCon}
                            </li>
                        ))}
                    </ul>
                    <form onSubmit={handleCommentSubmit}>
                        <textarea value={newComment} onChange={handleCommentChange} />
                        <button type="submit">댓글 작성</button>
                    </form>
                    <hr />
                    <h2>익명 댓글</h2>
                    <ul>
                        {CommentState.map((comment) => (
                            <li key={comment.commonCode}>
                                {comment.commCon}
                            </li>
                        ))}
                    </ul>
                    <form onSubmit={handleCommentSubmit}>
                        <textarea value={newComment} onChange={handleCommentChange} />
                        <button type="submit">익명 댓글 작성</button>
                    </form>
                </>
            )}
            {DetailData.postCommSet === 'ALLOW_NONE' && <p>댓글이 비허용되었습니다.</p>}

                            </td>
                        </tr>
                    </thead>
                </table>
            </div>
        );
    };

    return (
        <>
            {renderDetail()}
        </>
    );
}

export default PostDetailView;
