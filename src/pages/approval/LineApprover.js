import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {callFormLineAPI, callLineEmpListAPI, callviewLineListAPI} from "../../apis/ApprovalAPICalls";

function LineApprover({lsCode, lines, employee, handleTrueLineList, docInfo = {}}){
    const myCode = employee.emp_code;
    const deptCode = employee.dept_code;
    const titleCode = employee.title_code;

    const [newLines, setNewLines] = useState([]);
    const dispatch = useDispatch();
    const { lineemps, viewlines } = useSelector(state => ({
        lineemps: state.approvalReducer.lineemps,
        viewlines: state.approvalReducer.viewlines,
    }));

    useEffect(() => {
        if (deptCode && titleCode && lsCode) dispatch(callLineEmpListAPI({ deptCode, titleCode, lsCode }));
    }, [dispatch, deptCode, titleCode, lsCode]);

    useEffect(() => {
        if (docInfo.adCode) dispatch(callviewLineListAPI(docInfo.adCode));
    }, [docInfo.adCode, dispatch]);

    useEffect(() => {
        if (viewlines.length > 0) setNewLines(viewlines);
    }, [viewlines]);

    // 결재라인에 본인이 포함되어 있는 경우
    useEffect(() => {
        const generateNewLines = (lineemps, myCode) => {
            let found = false;
            const updatedLineemps = lineemps.map(emp => {
                const matchingLine = lines && lines.find(line => line.alSort === emp.titleCode);
                return {
                    ...emp,
                    alRole: matchingLine ? matchingLine.alRole : "결재",
                    alOrder: matchingLine ? matchingLine.alOrder : null
                };
            });

            for (let i = 0; i < updatedLineemps.length; i++) { // 결재라인 for문 돌면서 empCode가 동일한게 있는지 확인
                if (updatedLineemps[i].empCode === myCode) {
                    setNewLines(updatedLineemps.slice(i + 1)); // 동일한 코드가 있으면 해당 코드의 다음배열부터 잘라서 newLines에 넣음
                    found = true;
                    break;
                }
            }
            if (!found) setNewLines([...updatedLineemps]);     // 동일한 코드가 없으면, lineemps 전체 복사
        };
        generateNewLines(lineemps, myCode);
    }, [lineemps, myCode, lines]);

    // 실결재라인 배열 전달
    useEffect(()=>{
        const trueLineList = newLines.map((emp, index) => {
            const matchingLine = lines && lines.find(line => line.alSort && line.alSort.includes(emp.titleCode));
            const role = matchingLine ? matchingLine.alRole : "결재";

            return {talOrder: index + 1, talRole: role, employee: {emp_code: emp.empCode}};
        });

        handleTrueLineList(trueLineList);

        // console.log("trueLineList", trueLineList);

    }, [newLines, lines]);

    const [role, setRole] = useState('결재');

    const handleRoleChange = (event, empCode) => {
        const updatedRole = event.target.value;

        // 한 명의 전결자만 선택되도록 처리
        if (updatedRole === "전결") {
            const updatedLines = newLines.map(emp =>
                emp.empCode === empCode ? { ...emp, alRole: updatedRole } : { ...emp, alRole: "결재" }
            );
            setNewLines(updatedLines);
        } else {
            setNewLines(prevNewLines =>
                prevNewLines.map(emp =>
                    emp.empCode === empCode ? { ...emp, alRole: updatedRole } : emp
                )
            );
        }
    };

    console.log("lines", lines);
    console.log("lineemps", lineemps);
    console.log("newLines", newLines);

    return (
        <>
            {newLines.map((emp, index) => (
                <table className="bl_tb3 hp_alignC ly_fgrow1" key={index}>
                    <tbody>
                    <tr>
                        <th className="hp_padding0">
                            <select
                                className="hp_w100 el_approvalRole__select"
                                value={emp.alRole}
                                onChange={(event) => handleRoleChange(event, emp.empCode)}
                            >
                                <option value="결재">결재자</option>
                                <option value="전결">전결자</option>
                            </select>
                        </th>
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
            ))}
        </>
    );
}
export default LineApprover;