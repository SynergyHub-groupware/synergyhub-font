import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callLineEmpListAPI } from "../../apis/ApprovalAPICalls";

function LineApprover({lsCode, lines, empCode, deptCode, titleCode}){
    const dispatch = useDispatch();
    const {lineemps} = useSelector(state => state.approvalReducer);

    useEffect(() => {
        if (deptCode && titleCode && lsCode) dispatch(callLineEmpListAPI({ deptCode, titleCode, lsCode }));
    }, [dispatch, deptCode, titleCode, lsCode]);

    let newLines = [];
    let found = false;

    for (let i = 0; i < lineemps.length; i++) {
        if (lineemps[i].empCode == empCode) {
            if (i < lineemps.length - 1) newLines = lineemps.slice(i + 1);
            found = true;
            break;
        }
    }

    if (!found) newLines = lineemps.slice(); // lineemps 전체 복사

    console.log("newLines:", newLines);

    return(
        <>
            {newLines.map((emp, index) => {
                const matchingLine = lines.find(line => line.alSort.includes(emp.titleCode));
                const role = matchingLine ? matchingLine.alRole : "결재";

                return(
                    <table className="bl_tb3 hp_alignC ly_fgrow1" key={emp.empCode}>
                        <tbody>
                            <tr>
                                <th>{role}자</th>
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
export default LineApprover;