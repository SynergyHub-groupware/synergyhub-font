import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { callFormLineAPI, fetchImage } from "../../apis/ApprovalAPICalls";
import LineApprover from "./LineApprover";

function Line({handleTrueLineList}){
    const empCode = "2021048";
    const empName = "박하늘";
    const deptCode = "D15";
    const deptTitle = "정보보안팀";
    const titleCode = "T6";
    const titleName = "팀원";
    // const empCode = "2021091";
    // const empName = "이서연";
    // const deptCode = "D3";
    // const deptTitle = "경영지원부";
    // const titleCode = "T4";
    // const titleName = "팀장";

    let myRole = '';

    const navigate = useNavigate();
    const location = useLocation();
    const { lsCode } = { ...location.state };

    const dispatch = useDispatch();

    const { lines } = useSelector(state => ({
        lines: state.approvalReducer.lines
    }));

    useEffect(() => {
        lsCode && dispatch(callFormLineAPI({ lsCode }));
    }, [dispatch, lsCode]);


    // 서명 이미지 조회
    const [imageData, setImageData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (empCode) {
                try {
                    const imageUrl = await fetchImage (empCode);
                    if (imageUrl) setImageData(imageUrl);
                    else console.error('Failed to fetch image');
                } catch (error) {
                    console.error('Error fetching image:', error);
                }
            }
        };

        fetchData();
    }, [empCode]);

    return(
        <>
            <table className="bl_tb3 hp_alignC ly_fgrow1">
                <tbody>
                    <tr>
                        <th>
                            {lines.map((line) => {
                                const matchingLine = lines.find(line => line.alSort >= titleCode && line.alRole === '전결');
                                myRole = matchingLine ? '(전결자)' : '';
                            })}
                            작성자 {myRole}
                        </th>
                    </tr>
                    <tr>
                        <td><b className="hp_7Color">작성중</b></td>
                    </tr>
                    <tr>
                        <td>{deptTitle}</td>
                    </tr>
                    <tr>
                        <td>{titleName}</td>
                    </tr>
                    <tr>
                        <td>{empName}</td>
                    </tr>
                    <tr>
                        <td className="el_approvalSign" style={{backgroundImage: imageData ? `url(${imageData})` : 'none'}}></td>
                    </tr>
                </tbody>
            </table>
            <LineApprover lsCode={lsCode} lines={lines} empCode={empCode} deptCode={deptCode} titleCode={titleCode} handleTrueLineList={handleTrueLineList}/>
        </>
    )
}
export default Line;