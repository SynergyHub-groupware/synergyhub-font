import { removeToken, saveToken } from "./TokenUtils";
import { authRequest, request } from "./api";
import { success } from "../../modules/LoginModules";
import { toast } from "react-toastify";

export const callLoginAPI = ({loginRequest}) => {
    
    return async (dispatch, getState) => {
        
        console.log("시작");

        const result = await request(
            'POST',
            '/emp/auth/login',
            {'Content-Type' : 'application/json'},
            JSON.stringify(loginRequest)
        );
        console.log("loginRequest : ", loginRequest);
        console.log('callLoginApi result : ', result);

        if(result?.status === 200) {
            saveToken(result.headers);
            console.log("200");
            dispatch(success());
            console.log("dispatch 작동 완료");
        } else {
            toast.error("아이디와 비밀번호를 확인해주세요");
        }
    }
}

export const callLogoutAPI = () => {
    
    return async (dispatch, getState) => {

        const result = await authRequest.post(`/employee/logout`);
        console.log('callLogoutAPI result : ', result);
        
        if(result.status === 200) {
            removeToken();
            dispatch(success());
            alert("로그아웃 되었습니다.");
        } 
    }
}