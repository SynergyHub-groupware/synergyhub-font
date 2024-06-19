import {getForms, getLineemps, getLines, getSuccess} from "../modules/ApprovalModules";
import { request } from "./api";

export const callFormListAPI = () => {
    return async (dispatch, getState) => {
        const result = await request('GET', '/approval/formList');
        if(result && result.status === 200) dispatch(getForms(result));
    }
}

export const callFormLineAPI = ({lsCode}) => {
    return async (dispatch, getState) => {
        const result = await request('GET', `/approval/formLine?lsCode=${lsCode}`);
        if(result && result.status === 200) dispatch(getLines(result));
    }
}

export const callLineEmpListAPI = ({deptCode, titleCode, lsCode}) => {
    return async (dispatch, getState) => {
        const result = await request('GET', `/approval/formLineEmp?deptCode=${deptCode}&titleCode=${titleCode}&lsCode=${lsCode}`);
        if(result && result.status === 200) dispatch(getLineemps(result));
    }
}

export const fetchImage = async (empCode) => {
    try {
        const response = await fetch(`http://localhost:8080/approval/sign?empCode=${empCode}`);
        if (response.ok) {
            const blob = await response.blob();
            const imageUrl = URL.createObjectURL(blob);
            return imageUrl;
        } else {
            console.error('Failed to fetch image');
            return null;
        }
    } catch (error) {
        console.error('Error fetching image:', error);
        return null;
    }
};

export const callApprovalDocRegistAPI = ({formData, temporary}) => {
    return async (dispatch, getState) => {
        try {
            const response = await request('POST', `/approval/regist?temporary=${temporary}`,
                {"Content-Type": "multipart/form-data"},
                formData
            );

            if (response && response.status === 201) {
                dispatch(temporary ? getSuccess("임시저장") : getSuccess("상신"));
            };

        } catch (error) {
            console.error("Document and file upload error:", error);
        }
    }
}