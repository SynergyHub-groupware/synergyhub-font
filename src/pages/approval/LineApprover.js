import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callLineEmpListAPI } from "../../apis/ApprovalAPICalls";

function LineApprover({lsCode, lines, empCode, deptCode, titleCode, handleTrueLineList}){
    const dispatch = useDispatch();
    const { lineemps } = useSelector(state => ({
        lineemps: state.approvalReducer.lineemps
    }));

    useEffect(() => {
        if (deptCode && titleCode && lsCode) dispatch(callLineEmpListAPI({ deptCode, titleCode, lsCode }));
    }, [dispatch, deptCode, titleCode, lsCode]);

    // 결재라인에 본인이 포함되어 있는 경우
    let newLines = [];
    let found = false;

    // 결재라인 for문 돌면서 empCode가 동일한게 있는지 확인
    useEffect(()=>{
        for (let i = 0; i < lineemps.length; i++) {
            if (lineemps[i].empCode == empCode) {   // 동일한 코드가 있으면 해당 코드의 다음배열부터 잘라서 newLines에 넣음
                if (i < lineemps.length - 1) newLines = lineemps.slice(i + 1);
                found = true;
                break;
            }
        }
        if (!found) newLines = lineemps.slice(); // 동일한 코드가 없으면, lineemps 전체 복사
        console.log("newLines:", newLines);
    }, [lineemps])


    // 실결재라인 배열 전달
    let trueLineList = "";
    useEffect(()=>{
        // trueLineList = "테스트중임다";
        trueLineList = lineemps.map((emp, index) => {
            const matchingLine = lines.find(line => line.alSort.includes(emp.titleCode));
            const role = matchingLine ? matchingLine.alRole : "결재";

            return {
                talOrder: index + 1,
                talRole: role,
                empCode: emp.empCode
            };
        });

        handleTrueLineList(trueLineList);
        console.log("자식 trueLineList:", trueLineList);
    }, [lineemps])

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