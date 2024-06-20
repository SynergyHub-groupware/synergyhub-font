import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '@ckeditor/ckeditor5-build-classic/build/translations/ko.js'; // 한국어 번역을 추가하려면 import

function Etc({handleDetail}) {
    const [editorData, setEditorData] = useState('');
    const [exception, setException] = useState({});

    // 양식내용 출력
    const {afCode} = useParams();

    useEffect(() => {
        switch(afCode){
            case '6': setEditorData(''); break;
            case '10': setEditorData(''); break;
            case '11': setEditorData(''); break;
            default: setEditorData(''); break;
        }
    }, [afCode]);
    


    const handleChange = (event, editor) => {
        const data = editor.getData();
        setEditorData(data);

        console.log("data", data);

        setException(prev => ({
            ...prev,
            aeCon: data
        }));
    };

    useEffect(() => {
        handleDetail(exception);
    }, [exception]);

    return (
        <div>
            <CKEditor
                editor={ClassicEditor}
                data={editorData}
                onChange={handleChange}
                config={{}}
            />
        </div>
    );
}

export default Etc;
