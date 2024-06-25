import { useNavigate, useParams } from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {callacceptDocumentAPI, fetchImage} from "../../../apis/ApprovalAPICalls";

function ViewLine({viewlines, document={}}){
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // 서명 이미지 조회
    const [imageData, setImageData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            if (document && document.emp_code) {    // 상신한 사람의 서명 조회
                try {
                    const imageUrl = await fetchImage(document.emp_code);
                    if (imageUrl) setImageData(imageUrl);
                    else console.error('Failed to fetch image');
                } catch (error) {
                    console.error('Error fetching image:', error);
                }
            }
        };

        fetchData();
    }, [document.emp_code]);

    // 승인한 사람 서명 조회
    const [imageArr, setImageArr] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                // 승인된 사람들의 이미지 조회
                const approvedLines = viewlines.filter(emp => emp.talStatus === "승인");
                const imageUrls = await Promise.all(approvedLines.map(async (emp) => {
                    try {
                        const imageUrl = await fetchImage(emp.empCode);
                        return imageUrl;
                    } catch (error) {
                        console.error('Error fetching image for empCode', emp.empCode, ':', error);
                        return null;
                    }
                }));

                // 이미지 URL이 있는 것만 필터링하여 추가
                const filteredImageUrls = imageUrls.filter(url => url !== null);
                setImageArr(filteredImageUrls);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchData();
    }, [viewlines]);

    // console.log("imageArr", imageArr);

    // 첫번째 미결재인 사람한테 버튼 노출
    const [firstUnapprovedIndex, setFirstUnapprovedIndex] = useState(-1);
    useEffect(() => {
        for (let i = 0; i < viewlines.length; i++) {
            if (viewlines[i].talStatus === "미결재") {
                setFirstUnapprovedIndex(i);
                break;
            }
        }
    }, [viewlines]);

    // console.log("viewlines", viewlines);
    // console.log("document", document);

    // 승인
    const acceptHandler = (index) => {
        let status = "진행중";
        if (index === viewlines.length - 1) status = "완료";

        if (window.confirm("해당 결재를 승인 하시겠습니까?")) {
            document && dispatch(callacceptDocumentAPI({empCode: document.empCode, status, adCode: document.adCode}))
            .then(() => {navigate("/approval/receive/waiting");})
            .catch((error) => {console.error("결재 승인 실패: ", error);});
        }
    }

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
                    <td>{document.adReportDate}</td>
                </tr>
                <tr>
                    <td>{document.dept_title}</td>
                </tr>
                <tr>
                    <td>{document.title_name}</td>
                </tr>
                <tr>
                    <td>{document.emp_name}</td>
                </tr>
                <tr>
                    <td className="el_approvalSign" style={{backgroundImage: imageData ? `url(${imageData})` : 'none'}}></td>
                </tr>
                </tbody>
            </table>
            {viewlines.map((emp, index) => {
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
                            <td className="el_approvalSign" style={{backgroundImage: emp.talStatus === '승인' ? `url(${imageArr[index]})` : 'none'}}>
                                {document.menu !== 'send' && (
                                    <>
                                    {index === firstUnapprovedIndex && (
                                        <>
                                            <button type="button" className="el_btnS el_btnblueBack" onClick={() => acceptHandler(index)}>승인</button>
                                            <button type="button" className="el_btnS el_btn8Back hp_ml5">반려</button>
                                        </>
                                    )}
                                    </>
                                )}
                            </td>
                        </tr>
                        </tbody>
                    </table>
                )
            })}
            <div className="bl_popBack bl_rejectPop">
                <div className="bl_popup hp_w500px">
                    <div className="bl_popWrap bl_profile">
                        <div className="bl_popHead ly_spaceBetween ly_fitemC">
                            <div className="hp_fs18">결재 반려</div>
                            <button type="button" className="bl_popup__closeBtn"></button>
                        </div>
                        <div className="hp_padding15 hp_alignC">
                            <textarea placeholder="결재 반려 사유를 입력해 주세요"></textarea>
                            <button type="button" className="el_btnS el_btn8Back hp_mt10">반려하기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewLine;