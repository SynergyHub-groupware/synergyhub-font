import '../../css/approval.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {callFormListAPI} from "../../apis/ApprovalAPICalls";
import Form from "./Form";

function FormList(){
    const dispatch = useDispatch();
    const {forms} = useSelector(state => state.approvalReducer);

    useEffect(() => {
        dispatch(callFormListAPI());
    }, []);

    return(
        <div className="ly_cont">
            <h4 className="el_lv1Head hp_mb30">작성하기</h4>
            {/* <div className="hp_alignR">
                <form action="" method="">
                    <input type="text" className="" id="" name="" value="" placeholder="검색어를 입력해주세요"/>
                    <input type="submit" className="el_btnS el_btnblueBord hp_ml5" id="" name="" value="검색"/>
                </form>
            </div> */}
            {forms && <Form data={forms}/>}
        </div>
    )
}

export default FormList;