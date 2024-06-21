// import '../../css/personal.css';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { callRecordCardAPI } from '../../apis/EmployeeAPICalls';

function MyPersonalRecordCard(){

    const dispatch = useDispatch();

    const recordCard = useSelector(state => state.employeeReducer.recordCard);

    console.log('recordCard in component: ', recordCard);

    useEffect(() => {
        dispatch(callRecordCardAPI());
    }, [dispatch]);

    return(        
        <div class="ly_cont">
            <div class="ly_spaceBetween ly_fitemEnd hp_mb30">
                <h4 class="el_lv1Head">인사기록카드</h4>
                <button type="button" class="el_btnS el_btn0Bord">출력하기</button>
            </div>
            <section class="bl_sect hp_padding15">
                <h5 class="hp_fw700 hp_fs18 hp_mb10">기본정보</h5>
                <table class="bl_tb3">
                    <colgroup>
                        <col style={{width: "150px"}} />
                        <col style={{width: "150px"}} />
                        <col style={{width: "*"}} />
                        <col style={{width: "150px"}} />
                        <col style={{width: "*"}} />
                    </colgroup>
                    <tbody>
                        <tr>
                            <th rowspan="3">사진</th>
                            <th scope="row">이름</th>
                            <td>{recordCard.emp_name}</td>
                            <th scope="row">주민등록번호</th>
                            <td>{recordCard.social_security_no}</td>
                        </tr>
                        <tr>
                            <th scope="row">휴대폰</th>
                            <td>{recordCard.phone}</td>
                            <th scope="row">이메일</th>
                            <td>{recordCard.email}</td>
                        </tr>
                        <tr>
                            <th scope="row">주소</th>
                            <td colspan="3">{recordCard.address}</td>
                        </tr>
                    </tbody>
                </table>
                <h5 class="hp_fw700 hp_fs18 hp_mb10 hp_mt30">발령내역</h5>
                <table class="bl_tb3">
                    <colgroup>
                        <col style={{width: "calc(100% / 7)"}} />
                        <col style={{width: "calc(100% / 7)"}} />
                        <col style={{width: "calc(100% / 7)"}} />
                        <col style={{width: "calc(100% / 7)"}} />
                        <col style={{width: "calc(100% / 7)"}} />
                        <col style={{width: "calc(100% / 7)"}} />
                        <col style={{width: "calc(100% / 7)"}} />
                    </colgroup>
                    <thead>
                        <tr>
                            <th scope="col">발령일</th>
                            <th scope="col">발령유형</th>
                            <th scope="col">발령명</th>
                            <th scope="col">소속</th>
                            <th scope="col">직급</th>
                            <th scope="col">고용구분</th>
                            <th scope="col">근무지</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ textAlign: 'center' }}></td>
                            <td style={{ textAlign: 'center' }}></td>
                            <td style={{ textAlign: 'center' }}></td>
                            <td style={{ textAlign: 'center' }}></td>
                            <td style={{ textAlign: 'center' }}></td>
                            <td style={{ textAlign: 'center' }}></td>
                            <td style={{ textAlign: 'center' }}></td>
                        </tr>
                    </tbody>
                </table>
                <h5 class="hp_fw700 hp_fs18 hp_mb10 hp_mt30">경력사항</h5>
                <table class="bl_tb3">
                    <colgroup>
                        <col style={{width: "calc(100% / 7)"}} />
                        <col style={{width: "calc(100% / 7)"}} />
                        <col style={{width: "calc(100% / 7)"}} />
                        <col style={{width: "calc(100% / 7)"}} />
                        <col style={{width: "calc(100% / 7)"}} />
                        <col style={{width: "calc(100% / 7)"}} />
                        <col style={{width: "calc(100% / 7)"}} />
                    </colgroup>
                    <thead>
                        <tr>
                            <th scope="col">입사일</th>
                            <th scope="col">퇴사일</th>
                            <th scope="col">직장명</th>
                            <th scope="col">담당업무</th>
                            <th scope="col">직급</th>
                            <th scope="col" colspan="2">퇴사사유</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input style={{ textAlign: 'center' }} /></td>
                            <td><input style={{ textAlign: 'center' }} /></td>
                            <td><input style={{ textAlign: 'center' }} /></td>
                            <td><input style={{ textAlign: 'center' }} /></td>
                            <td><input style={{ textAlign: 'center' }} /></td>
                            <td colspan="2"><input style={{ textAlign: 'center', width: "416px" }} /></td>
                        </tr>
                    </tbody>
                </table>
                <h5 class="hp_fw700 hp_fs18 hp_mb10 hp_mt30">학력사항</h5>
                <table class="bl_tb3">
                    <colgroup>
                        <col style={{width: "calc(100% / 7)"}} />
                        <col style={{width: "calc(100% / 7)"}} />
                        <col style={{width: "calc(100% / 7)"}} />
                        <col style={{width: "calc(100% / 7)"}} />
                        <col style={{width: "calc(100% / 7)"}} />
                        <col style={{width: "calc(100% / 7)"}} />
                        <col style={{width: "calc(100% / 7)"}} />
                    </colgroup>
                    <thead>
                        <tr>
                            <th scope="col">학교명</th>
                            <th scope="col">졸업여부</th>
                            <th scope="col">입학일</th>
                            <th scope="col">졸업일</th>
                            <th scope="col">전공</th>
                            <th scope="col">주야</th>
                            <th scope="col">소재지</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recordCard.schoolInfos && recordCard.schoolInfos.map((school, index) => (
                            <tr key={index}>
                                <td><input style={{ textAlign: 'center' }} value={school.sch_name}></input></td>
                                <td><input style={{ textAlign: 'center' }} value={school.grad_status} /></td>
                                <td><input style={{ textAlign: 'center' }} value={school.enrole_date} /></td>
                                <td><input style={{ textAlign: 'center' }} value={school.grad_date} /></td>
                                <td><input style={{ textAlign: 'center' }} value={school.major} /></td>
                                <td><input style={{ textAlign: 'center' }} value={school.day_n_night} /></td>
                                <td><input style={{ textAlign: 'center' }} value={school.location} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div class="ly_spaceBetween ly_fitemC hp_mt30 hp_mb10">
                    <h5 class="hp_fw700 hp_fs18">자격증</h5>
                    <div class="">
                        <button type="button" class="el_btnS el_btnblueBack">저장</button>
                        <button type="button" class="el_btnS el_btn8Bord">추가</button>
                    </div>
                </div>
                <table class="bl_tb3">
                    <colgroup>
                        <col style={{width: "calc(100% / 5)"}} />
                        <col style={{width: "calc(100% / 5)"}} />
                        <col style={{width: "calc(100% / 5)"}} />
                        <col style={{width: "calc(100% / 5)"}} />
                        <col style={{width: "calc(100% / 5)"}} />
                    </colgroup>
                    <thead>
                        <tr>
                            <th scope="col">자격증 명</th>
                            <th scope="col">급수(점수)</th>
                            <th scope="col">취득일</th>
                            <th scope="col">자격증 번호</th>
                            <th scope="col">발행기관</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recordCard.certificates && recordCard.certificates.map((cer, index) => (
                            <tr key={index}>
                                <td>
                                    <input style={{ textAlign: 'center' }} type="text" class="hp_w100" value={cer.cer_name} />
                                </td>
                                <td>
                                    <input style={{ textAlign: 'center' }} type="number" class="hp_w100" value={cer.cer_score} />
                                </td>
                                <td>
                                    <input style={{ textAlign: 'center' }} type="date" class="hp_w100" value={cer.cer_date} />
                                </td>
                                <td>
                                    <input style={{ textAlign: 'center' }} type="text" class="hp_w100" value={cer.cer_num} />
                                </td>
                                <td>
                                    <input style={{ textAlign: 'center' }} type="text" class="hp_w100" value={cer.iss_organ} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    )
}
export default MyPersonalRecordCard;