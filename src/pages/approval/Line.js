import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { callFormLineAPI, callLineEmpListAPI } from "../../apis/ApprovalAPICalls";

function Line({deptCode, titleCode}){
    const navigate = useNavigate();
    const location = useLocation();
    const { lsCode } = { ...location.state };

    const dispatch = useDispatch();

    const { lines, lineemps } = useSelector(state => ({
        lines: state.approvalReducer.lines,
        lineemps: state.approvalReducer.lineemps,
    }));

    useEffect(() => {
        lsCode && dispatch(callFormLineAPI({ lsCode }));
    }, [dispatch, lsCode]);

    useEffect(() => {
        if (deptCode && titleCode) dispatch(callLineEmpListAPI({ deptCode, titleCode }));
    }, [dispatch, deptCode, titleCode]);

    console.log("lines : ", lines);
    console.log("lineemps : ", lineemps);

    return(
        <>
            {lineemps.map((emp, index) => {
                return(
                    <table className="bl_tb3 hp_alignC ly_fgrow1" key={emp.empCode}>
                        <tbody>
                            <tr>
                                <th>{lines[index] ? lines[index].alRole : ''}자</th>
                            </tr>
                            <tr>
                                <td>미결재</td>
                            </tr>
                            <tr>
                                <td>{emp.deptTitle}</td>
                            </tr>
                            <tr>
                                <td>{emp.titleName}</td>
                            </tr>
                            <tr>
                                <td>{emp.empName}</td>
                            </tr>
                            <tr>
                                <td className="el_approvalSign"></td>
                            </tr>
                        </tbody>
                    </table>
                )
            })}
        </>
    )
}
export default Line;