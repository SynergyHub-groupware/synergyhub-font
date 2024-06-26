import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {callFormLineAPI, callviewLineListAPI} from "../../../apis/ApprovalAPICalls";
import line from "../Line";

function FormLine(){
    const dispatch = useDispatch();
    const { lines } = useSelector(state => ({
        lines: state.approvalReducer.lines,
    }));

    useEffect(() => {
        dispatch(callFormLineAPI({}));
    }, [dispatch]);

    console.log("lines", lines);

    return (
        <>
            <div className="ly_spaceBetween hp_mb10">
                <h5 className="hp_fw700 hp_fs18">결재라인</h5>
                <button type="button" className="el_btnS el_btn8Bord hp_p3-5">결재라인 선택</button>
            </div>
            <div className="ly_flex hp_relative">
                <table className="bl_tb3 hp_alignC hp_w200px ly_fshirnk">
                    <tbody>
                    <tr>
                        <th>구분</th>
                    </tr>
                    <tr>
                        <th>소속</th>
                    </tr>
                    <tr>
                        <th>직위</th>
                    </tr>
                    <tr>
                        <th>이름</th>
                    </tr>
                    </tbody>
                </table>
                <table className="bl_tb3 hp_alignC ly_fgrow1">
                    <tbody>
                    <tr>
                        <th></th>
                    </tr>
                    <tr>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </>
)
}

export default FormLine;