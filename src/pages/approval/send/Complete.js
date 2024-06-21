import { useNavigate } from "react-router";

function Complete({data}){
    const navigate = useNavigate();
    
    return(
        <section className="bl_sect hp_mt10">
            <table className="bl_tb1">
                <colgroup>
                    <col style={{width:'50px'}}/>
                    <col style={{width:'120px'}}/>
                    <col style={{width:'*'}}/>
                    <col style={{width:'120px'}}/>
                    <col style={{width:'120px'}}/>
                </colgroup>
                <thead>
                    <tr>
                        <th scope="col"><input type="checkbox" className="" id="" name="" value="checkAll"/></th>
                        <th scope="col">결재양식</th>
                        <th scope="col">제목</th>
                        <th scope="col">최종결재자</th>
                        <th scope="col">완료일</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </section>
    )
}
export default Complete;