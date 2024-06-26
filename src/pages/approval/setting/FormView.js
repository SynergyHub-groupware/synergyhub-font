import FormLine from "./FormLine";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {useState} from "react";

function FormView(){

    const [editorData, setEditorData] = useState('');
    const handleChange = (event, editor) => {
        const data = editor.getData();
        setEditorData(data);    // 입력받은 내용 에디터에 넣음
    };

    return (
        <div className="ly_cont">
            <h4 className="el_lv1Head hp_mb30">결재양식 추가</h4>
            <section className="bl_sect hp_padding15">
                <FormLine/>
                <h5 className="hp_fw700 hp_fs18 hp_mb10">기본정보</h5>
                <table className="bl_tb3">
                    <colgroup>
                        <col style={{width: '200px'}}/>
                        <col style={{width: '*'}}/>
                    </colgroup>
                    <tbody>
                    <tr>
                        <th scope="col">양식명</th>
                        <td><input type="text" className="hp_w100" placeholder="예시: 예외근무신청서"/></td>
                    </tr>
                    <tr>
                        <th scope="col">양식설명</th>
                        <td><input type="text" className="hp_w100" placeholder="예시: 외근, 출장, 교육, 훈련, 재택"/></td>
                    </tr>
                    </tbody>
                </table>
                <h5 className="hp_fw700 hp_fs18 hp_mb10 hp_mt30">결재내용</h5>
                <CKEditor editor={ClassicEditor} onChange={handleChange} />
            </section>
            <div className="hp_mt10 hp_alignR">
                <button type="button" className="el_btnS el_btnblueBack">저장</button>
                <button type="button" className="el_btnS el_btn8Back hp_ml5">취소</button>
            </div>
        </div>
    )
}

export default FormView;