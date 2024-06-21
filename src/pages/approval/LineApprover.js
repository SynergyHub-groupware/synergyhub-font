import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callLineEmpListAPI } from "../../apis/ApprovalAPICalls";

function LineApprover({lsCode, lines, myCode, deptCode, titleCode, handleTrueLineList}){
    const dispatch = useDispatch();
    const { lineemps } = useSelector(state => state.approvalReducer);

    useEffect(() => {
        if (deptCode && titleCode && lsCode) dispatch(callLineEmpListAPI({ deptCode, titleCode, lsCode }));
    }, [dispatch, deptCode, titleCode, lsCode]);

    // 결재라인에 본인이 포함되어 있는 경우
    const [newLines, setNewLines] = useState([]);
    useEffect(() => {
        const generateNewLines = (lineemps, myCode) => {
            let found = false;
            for (let i = 0; i < lineemps.length; i++) { // 결재라인 for문 돌면서 empCode가 동일한게 있는지 확인
                if (lineemps[i].empCode === myCode) {
                    setNewLines(lineemps.slice(i + 1)); // 동일한 코드가 있으면 해당 코드의 다음배열부터 잘라서 newLines에 넣음
                    found = true;
                    break;
                }
            }
            if (!found) setNewLines([...lineemps]);     // 동일한 코드가 없으면, lineemps 전체 복사
        };
        generateNewLines(lineemps, myCode);
    }, [lineemps, myCode]);

    // 실결재라인 배열 전달
    useEffect(()=>{
        const trueLineList = newLines.map((emp, index) => {
            const matchingLine = lines.find(line => line.alSort.includes(emp.titleCode));
            const role = matchingLine ? matchingLine.alRole : "결재";
    
            return {talOrder: index + 1, talRole: role, employee: {emp_code: emp.empCode}};
        });

        handleTrueLineList(trueLineList);
    }, [newLines]);
    
    const [role, setRole] = useState('결재');

    const handleRoleChange = (event) => {
        setRole(event.target.value);
    };

    return(
        <>
            {newLines.map((emp, index) => {
                const matchingLine = lines.find(line => line.alSort.includes(emp.titleCode));
                const role = matchingLine ? matchingLine.alRole : "결재";

                return(
                    <table className="bl_tb3 hp_alignC ly_fgrow1" key={emp.empCode}>
                        <tbody>
                            <tr>
                                <th className="hp_padding0">
                                    <select className="hp_w100 el_approvalRole__select" value={role} onChange={handleRoleChange}>
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
                )
            })}
        </>
    )
}
export default LineApprover;