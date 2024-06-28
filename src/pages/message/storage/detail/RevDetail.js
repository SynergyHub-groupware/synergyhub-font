import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { callRevDetailAPI } from "../../../../apis/MessageAPICalls";

function RevDetail() {

    const { msgCode } = useParams();    // URL에서 msgCode 추출
    const dispatch = useDispatch();     
    const msgDetail = useSelector(state => state.messageReducer.messageDetail);

    useEffect(() => {
        
        const revMsgDetail = async () => {
            try {
                console.log("API 시작");
                await dispatch(callRevDetailAPI(msgCode));
                console.log("msgCode : ", msgCode);
            } catch (error) {
                console.log("error : ", error);
            }
        };
        
        console.log("msgDetail : ", msgDetail);
        revMsgDetail();

    }, [dispatch, msgCode]);

    if (!msgDetail) {
        console.log("msgDetail : ", msgDetail);
        return <div>로딩중..</div>;
    }

    return (
        <div className="ly_cont">
            <h4 className="el_lv1Head hp_mb30">받은 쪽지</h4>
            <section className="bl_sect hp_padding15">
                <table className="bl_tb3">
                    <colgroup>
                        <col style={{width: "120px"}} />
                        <col style={{width:"*"}} />
                    </colgroup>
                    <tbody>
                        <tr>
                            <th scope="col">보낸사람</th>
                            <td className="hp_alignL">{msgDetail.messageDetail && msgDetail.messageDetail.sendName} {msgDetail.messageDetail && msgDetail.messageDetail.sendPosition}</td>
                        </tr>
                        <tr>
                            <th scope="col">보낸날짜</th>
                            <td className="hp_alignL">{msgDetail.messageDetail && msgDetail.messageDetail.sendDate}</td>
                        </tr>
                        <tr>
                            <th scope="col">첨부파일</th>
                            <td className="hp_alignL">{msgDetail.messageDetail && msgDetail.messageDetail.storCode}</td>
                        </tr>
                        <tr>
                            <td colSpan="2" className="hp_alignL">{msgDetail.messageDetail && msgDetail.messageDetail.msgTitle}</td>
                        </tr>
                        <tr>
                            <td colSpan="2" className="hp_alignL">{msgDetail.messageDetail && msgDetail.messageDetail.msgCon}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="ly_spaceBetween hp_mt10">
                    <button type="button" className="el_btnS el_btn0Back">읽지않음 처리</button>
                    <div className="">
                        <button type="button" className="el_btnS el_btn8Back">삭제</button>
                        <button type="button" className="el_btnS el_btn8Bord hp_ml5">이동</button>
                        <button type="button" className="el_btnS el_btnblueBord hp_ml5">전달</button>
                        <button type="button" className="el_btnS el_btnblueBack hp_ml5">답장</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default RevDetail;