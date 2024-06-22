import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {callviewDetailAPI} from "../../../apis/ApprovalAPICalls";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function ViewDetail({afCode, adDetail}){
    console.log("afCode", afCode);
    console.log("adDetail", adDetail);

    const dispatch = useDispatch();
    const content = useSelector(state => state.approvalReducer.content);

    useEffect(() => {
        adDetail && dispatch(callviewDetailAPI(adDetail));
    }, [adDetail, dispatch]);

    console.log("content", content);
    const keys = content ? Object.keys(content) : [];

    return(
        <div>
            {([2, 3, 4, 5, 7, 8, 9].includes(afCode)) && content && (
            <table className="bl_tb3 el_approvalTb3__th">
                <tbody>
                {keys.map((key) => {
                    const value = content[key];
                    let displayName = key;

                    if(key === "aattSort") displayName = "근무형태";
                    else if(key === "aattStart" || key === "apStart") displayName = "시작일";
                    else if(key === "aattEnd" || key === "apEnd") displayName = "종료일";
                    else if(key === "aattOccur") displayName = "발생일";
                    else if(key === "aattPlace") displayName = "근무지";
                    else if(key === "aattCon") displayName = "업무내용";
                    else if(key === "aattReason" || key === "apReason") displayName = "사유";
                    else if(key === "apContact") displayName = "비상연락처";
                    else if(afCode === 9 && key === "aeCon") displayName = "위반내용";

                    if (value) {
                        return (
                            <tr key={key}>
                                <th scope="col">{displayName}</th>
                                <td>{value}</td>
                            </tr>
                        );
                    }
                    return null;
                })}
                {afCode === 8 && (
                    <tr>
                        <th scope="col">서약서</th>
                        <td>
                            <div className="hp_padding30">
                                본인은 위와 같은 사유로 퇴사함에 있어 아래 조항을 성실히 준수할 것을 서약합니다.
                                <ol className="bl_listNum hp_mt20">
                                    <li className="hp_mb10">본인은 퇴직에 따른 사무 인수, 인계의 철저로 최종 퇴사시까지 책임과 의무를 완수하고, 재직시 알게된 업무상 회사의 주요 정보 및 제반 비밀사항을 타인에게 누설함이 귀사의 경영에 막대한 손해와 피해를 준다는 사실을 지각하고 일체 이를 누설하지 않겠습니다.</li>
                                    <li className="hp_mb10">재직 중 지급받은 공구, 비품, 등 물품은 퇴직일 전일까지 반환하겠습니다.</li>
                                    <li className="hp_mb10">기타 회사와 관련한 제반사항은 회사규정에 의거 퇴직일 전일까지 처리하겠습니다.</li>
                                    <li className="hp_mb10">만일 본인이 상기 사항을 위반하였을 때에는 이유 여하를 막론하고 서약에 의거 민, 형사상의 책임을 지며, 회사에서 요구하는 손해배상의 의무를 지겠습니다.</li>
                                </ol>
                                <label className="hp_dpBlock hp_dBack hp_pl10 hp_mt50">
                                    <input type="checkbox" name="agree" checked readOnly/> 이에 동의합니다.
                                </label>
                            </div>
                        </td>
                    </tr>
                )}
                {afCode === 9 && (
                    <tr>
                        <th scope="col">서약서</th>
                        <td>
                            <div className="hp_padding30">본인은 직원으로서 제 사규를 준수하고 맡은 바 책임과 의무를 다하여 성실히 복무하여야 함에도 불구하고 위와 같이 회사의 관련 규정을 위반하였는 바 이에 경위서를 제출하고 그에 따른 처벌을 감수하며 차후 본건을 계기로 과오의 재발이 없을 것임을 서약합니다.
                                <label className="hp_dpBlock hp_dBack hp_pl10 hp_mt30">
                                    <input type="checkbox" name="agree" checked readOnly/> 이에 동의합니다.
                                </label>
                            </div>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
            )}
            {!([2, 3, 4, 5, 7, 8, 9].includes(afCode)) && content && content.aeCon && (
                <CKEditor
                    editor={ClassicEditor}
                    data={content.aeCon}
                    disabled={true} // CKEditor 내부의 모든 기능 비활성화
                    config={{
                        toolbar: [],
                        readOnly: true
                    }}
                />
            )}
        </div>
    );
}
export default ViewDetail;