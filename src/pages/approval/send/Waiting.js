import { useNavigate } from "react-router";

function Waiting({documents}){
    const navigate = useNavigate();

    console.log("documents", documents);

    return(
        <section className="bl_sect hp_mt10">
            <table className="bl_tb1">
                <colgroup>
                    <col style={{width:'50px'}}/>
                    <col style={{width:'120px'}}/>
                    <col style={{width:'120px'}}/>
                    <col style={{width:'*'}}/>
                    <col style={{width:'120px'}}/>
                </colgroup>
                <thead>
                    <tr>
                        <th scope="col"><input type="checkbox" value="checkAll"/></th>
                        <th scope="col">상신일</th>
                        <th scope="col">결재양식</th>
                        <th scope="col">제목</th>
                        <th scope="col">결재자</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {documents && documents.map(document => 
                        <tr onClick={ () => navigate(`/approval/send/waiting/${documents.adCode}`)}>
                            <th scope="row"><input type="checkbox" value=""/></th>
                            <td>2024.12.34</td>
                            <td>휴가신청서</td>
                            <td className="hp_alignL">휴가신청서_홍길동</td>
                            <td>김철수</td>
                        </tr>
                    )} */}
                </tbody>
            </table>
        </section>
    )
}
export default Waiting;