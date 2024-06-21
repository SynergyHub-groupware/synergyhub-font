// import '../../css/personal.css';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { callMyInfoAPI } from '../../apis/EmployeeAPICalls';

function MyInfo(){


    const dispatch = useDispatch();

    const employee = useSelector(state => state.employeeReducer.employee);

    console.log('employee in component: ', employee);

    useEffect(() => {
        dispatch(callMyInfoAPI());
    }, [dispatch]);


    // 주소 분리 함수
    const splitAddress = (address) => {

    if (!address) return { postalCode: '', mainAddress: '', detailAddress: '' };

    // 우편번호를 구하기 위해 첫 번째 공백 이전까지 자름
    const postalCode = address.split(' ')[0];

    // 주소 부분을 구하기 위해 우편번호 다음부터 끝까지 자름
    const addressPart = address.substring(postalCode.length).trim();

    // 주소에서 마지막 단어가 숫자라면 상세주소로 간주
    const lastWord = addressPart.split(' ').pop();
    const isLastWordNumber = !isNaN(lastWord);

    // 상세주소를 구하기 위해 주소에서 마지막 단어 이후를 자름
    const mainAddress = isLastWordNumber ? addressPart.substring(0, addressPart.lastIndexOf(' ')).trim() : addressPart;
    const detailAddress = isLastWordNumber ? lastWord : '';

    return { postalCode, mainAddress, detailAddress };
    };

    const { postalCode, mainAddress, detailAddress } = splitAddress(employee.address);

    /* 기본 프로필 이미지 경로 설정 */
    const profileImgUrl = employee.emp_img ? `${process.env.PUBLIC_URL}/${employee.emp_img}` : `${process.env.PUBLIC_URL}/images/profileImg/profileImg.png`;

    return(        
            <div className="ly_cont">
                <h4 className="el_lv1Head hp_mb30">나의 프로필</h4>
                <section className="bl_sect hp_padding15">
                    <h5 className="hp_fw700 hp_fs18 hp_mb10">기본정보</h5>
                    <table className="bl_tb3">
                        <colgroup>
                            <col style={{width: "150px"}} />
                            <col style={{width: "150px"}} />
                            <col style={{width: "*"}} />
                            <col style={{width: "150px"}} />
                            <col style={{width: "*"}} />
                        </colgroup>
                        <tbody key={employee.emp_code}>
                            <tr>
                                <th rowspan="3" className="hp_padding0">
                                    <div className= "el_profile__img" style={{ backgroundImage: `url(${profileImgUrl})`, height: "180px", width: "150px" }}></div>
                                </th>
                                <th >이름</th>
                                <td>{employee.emp_name}</td>
                                <th >입사일</th>
                                <td>{employee.hire_date}</td>
                            </tr>
                            <tr>
                                <th >사원번호</th>
                                <td>{employee.emp_code}</td>
                                <th >직통번호</th>
                                <td>{employee.direct_line}</td>
                            </tr>
                            <tr>
                                <th >부서</th>
                                <td>{employee.dept_title}</td>
                                <th >직급</th>
                                <td>{employee.position_name}</td>
                            </tr>
                            <tr>
                                <th >이메일</th>
                                <td colspan="4">
                                    <input type="text" className="hp_w100" id="" name="" value={employee.email} />
                                </td>
                            </tr>
                            <tr>
                                <th >휴대폰</th>
                                <td colspan="4">
                                    <input type="text" className="hp_w100" id="" name="" value={employee.phone} />
                                </td>
                            </tr>
                            <tr>
                                <th >주소</th>
                                <td colspan="4">
                                    <div className="ly_flex">
                                        <input type="button" className="hp_ml10 el_btnblueBord" value="우편번호 검색" />
                                        <input type="text" className="hp_w100" id="" name="" value = {postalCode} />
                                    </div>
                                    <input type="text" className="hp_w100 hp_mt10" id="" name="" value= {mainAddress} />
                                    <input type="text" className="hp_w100 hp_mt10" id="" name="" value= {detailAddress} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <h5 className="hp_fw700 hp_fs18 hp_mb10 hp_mt30">부가정보</h5>
                    <table className="bl_tb3">
                        <colgroup>
                            <col style={{width: "calc(100%/3)"}} />
                            <col style={{width: "calc(100%/3)"}} />
                            <col style={{width: "calc(100%/3)"}} />
                        </colgroup>
                        <thead>
                            <tr>
                                <th scope="col">사원번호</th>
                                <th scope="col">급여은행</th>
                                <th scope="col">급여계좌</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ textAlign: 'center' }}>{employee.emp_code}</td>
                                <td>
                                    <select className="hp_w100" id="bankName" value={employee.bank_name}>
                                        <option val="">선택</option>
                                        <option val="">KEB하나은행</option>
                                        <option val="">SC제일은행</option>
                                        <option val="">국민은행</option>
                                        <option val="">신한은행</option>
                                        <option val="">외환은행</option>
                                        <option val="">우리은행</option>
                                        <option val="">한국시티은행</option>
                                        <option val="">기업은행</option>
                                    </select>
                                </td>
                                <td>
                                    <input type="text" className="hp_w100" style={{ textAlign: 'center' }} value={employee.account_num} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <div className="hp_alignR hp_mt10">
                    <button type="button" className="el_btnS el_btnblueBack">저장</button>
                    <button type="button" className="el_btnS el_btn0Back hp_ml5">비밀번호 변경</button>
                {/*     <div className="bl_popBack">
                        <div className="bl_popup">
                            <div className="bl_popWrap">
                                <div className="bl_popHead ly_spaceBetween ly_fitemC">
                                    <div className="hp_fs18">비밀번호 변경</div>
                                    <button type="button" className="bl_popup__closeBtn"></button>
                                </div>
                                <div className="hp_padding30">
                                    <table className="bl_tb3">
                                        <colgroup>
                                            <col style={{width: "150px" }} />
                                            <col style={{width: "*" }} />
                                        </colgroup>
                                        <tbody>
                                            <tr>
                                                <th scope="row">기존 비밀번호</th>
                                                <td><input type="password" className="hp_w100 " id="" name="" value="" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">새 비밀번호</th>
                                                <td><input type="password" className="hp_w100 " id="" name="" value="" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">새 비밀번호 확인</th>
                                                <td><input type="password" className="hp_w100 " id="" name="" value="" />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="hp_marginAuto hp_mt20 hp_alignC">
                                        <button type="button" className="el_btnS el_btn8Back">취소</button>
                                        <button type="button" className="el_btnS el_btnblueBack hp_ml5">변경</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  */}
                </div>
            </div>
    )
}
export default MyInfo;