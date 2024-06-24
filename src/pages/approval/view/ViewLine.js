import { useParams } from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {callviewLineListAPI} from "../../../apis/ApprovalAPICalls";

function ViewLine({adReportDate}){
    const {adCode} = useParams();
    const dispatch = useDispatch();
    const lines = useSelector(state => state.approvalReducer.lines);

    useEffect(() => {
        adCode && dispatch(callviewLineListAPI(adCode));
    }, [adCode, dispatch]);

    // const firstPendingIndex = lines.findIndex(emp => emp.talStatus === '미결재');

    return(
        <div className="ly_flex hp_relative">
            <table className="bl_tb3 hp_alignC hp_w200px ly_fshirnk">
                <tbody>
                <tr>
                    <th>구분</th>
                </tr>
                <tr>
                    <th>결재상태</th>
                </tr>
                <tr>
                    <th>결재일</th>
                </tr>
                <tr>
                    <th>소속</th>
                </tr>
                <tr>
                    <th>직책</th>
                </tr>
                <tr>
                    <th>이름</th>
                </tr>
                <tr>
                    <th>서명</th>
                </tr>
                </tbody>
            </table>
            <table className="bl_tb3 hp_alignC ly_fgrow1">
                <tbody>
                <tr>
                    <th>작성자</th>
                </tr>
                <tr>
                    <td>상신</td>
                </tr>
                <tr>
                    <td>{adReportDate}</td>
                </tr>
                <tr>
                    <td>1</td>
                </tr>
                <tr>
                    <td>1</td>
                </tr>
                <tr>
                    <td>1</td>
                </tr>
                <tr>
                    {/* <td className="el_approvalSign" style={{backgroundImage: imageData ? `url(${imageData})` : 'none'}}></td> */}
                    <td>s</td>
                </tr>
                </tbody>
            </table>
            {lines.map((emp, index) => {
                return (
                    <table className="bl_tb3 hp_alignC ly_fgrow1" key={index}>
                        <tbody>
                        <tr>
                            <th>{emp.talRole}자</th>
                        </tr>
                        <tr>
                            <td>{emp.talStatus}</td>
                        </tr>
                        <tr>
                            <td className="el_approvalSign">{emp.talDate}</td>
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
                            <td className="el_approvalSign">
                                {/*{index === firstPendingIndex ? (*/}
                                {/*    <>*/}
                                {/*        <button type="button" className="el_btnS el_btnblueBack">승인</button>*/}
                                {/*        <button type="button" className="el_btnS el_btn8Back hp_ml5">반려</button>*/}
                                {/*    </>*/}
                                {/*) : null}*/}
                            </td>
                        </tr>
                        </tbody>
                    </table>
                )
            })}
        </div>
    )
}

export default ViewLine;