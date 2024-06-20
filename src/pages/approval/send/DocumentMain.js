import { useDispatch, useSelector } from "react-redux";
import PagingBar from "../../../components/commons/PagingBar";
import { useEffect, useState } from "react";
import { callsendDocListAPI } from "../../../apis/ApprovalAPICalls";
import { useParams } from "react-router";
import Waiting from "./Waiting";
import Progress from "./Progress";
import Complete from "./Complete";
import Return from "./Return";

function DocumentMain(){
    const empCode = "2021048";
    const {status} = useParams();
    const [title, setTitle] = useState();

    useEffect(() => {
        switch (status) {
            case 'waiting': setTitle('대기'); break;
            case 'progress': setTitle('진행중'); break;
            case 'complete': setTitle('완료'); break;
            case 'return': setTitle('반려'); break;
            default: setTitle('');
        }
    }, [status]);
    
    const renderDocList = () => {
        switch(status){
            case 'waiting': return <Waiting documents={documents} />; break;
            case 'progress': return <Progress />; break;
            case 'complete': return <Complete />; break;
            case 'return': return <Return />; break;
        }
    }

    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const {documents} = useSelector(state => state.approvalReducer);

    useEffect(() => {
        dispatch(callsendDocListAPI({currentPage, empCode, status}));
    }, [currentPage, empCode, status]);

    console.log("documents", documents);


    const [searchTerm, setSearchTerm] = useState('');
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return(        
        <div className="ly_cont">
            <h4 className="el_lv1Head hp_mb30">보낸결재함 [{title}]</h4>
            <div className="ly_spaceBetween">
                <button type="button" className="el_btnS el_btn8Back">삭제</button>
                <form action="" method="">
                    <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="검색어를 입력해주세요"/>
                    <input type="submit" className="el_btnS el_btnblueBord hp_ml5" id="" name="" value="검색"/>
                </form>
            </div>
            {renderDocList()}
            <div className="ly_spaceBetween ly_fitemC hp_mt10">
                <div className="hp_ml10 hp_7Color">총 1 / <b className="hp_0Color hp_fw700">1</b> 페이지</div>
                <select className="">
                    <option value="">정렬방식</option>
                </select>
            </div>
            <PagingBar />
        </div>
    )
}
export default DocumentMain;