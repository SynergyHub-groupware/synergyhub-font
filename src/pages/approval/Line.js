import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { callFormLineAPI } from "../../apis/ApprovalAPICalls";

function Line(){
    const navigate = useNavigate();
    const location = useLocation();
    const {lsCode} = {...location.state};

    const dispatch = useDispatch();
    const {lines} = useSelector(state => state.approvalReducer);

    useEffect(() => {
        lsCode && dispatch(callFormLineAPI({lsCode: lsCode}));
    }, [lsCode]);

    console.log("lsCode : ", lsCode);
    console.log("lines : ", lines);

    return(
        lines &&
        <>        
            {lines.map((line, index) => (
                <table className="bl_tb3 hp_alignC ly_fgrow1" key={line.alOrder}>
                    <tbody>
                        <tr>
                            <th>{line.alRole}자</th>
                        </tr>
                        <tr>
                            <td>미결재</td>
                        </tr>
                        <tr>
                            <td>시스템팀</td>
                        </tr>
                        <tr>
                            <td>팀장</td>
                        </tr>
                        <tr>
                            <td>김철수</td>
                        </tr>
                        <tr>
                            <td className="el_approvalSign"></td>
                        </tr>
                    </tbody>
                </table>
            ))}
        </>
    )
}
export default Line;