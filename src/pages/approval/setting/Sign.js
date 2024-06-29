import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { callMyInfoAPI } from "../../../apis/EmployeeAPICalls";

function Sign() {
    const dispatch = useDispatch();
    const { employee } = useSelector(state => ({
        employee: state.employeeReducer.employee
    }));

    useEffect(() => {
        dispatch(callMyInfoAPI());
    }, [dispatch]);

    console.log("employee", employee);



    return (
        <div className="ly_cont">
            <h4 className="el_lv1Head hp_mb30">서명관리</h4>
            <section className="bl_sect hp_mt10">
                <table className="bl_tb2">
                    <colgroup>
                        <col style={{ width: '200px' }} />
                        <col style={{ width: '*' }} />
                    </colgroup>
                    <tbody>
                    <tr>
                        <th scope="row">소속</th>
                        <td>{employee.dept_title}</td>
                    </tr>
                    <tr>
                        <th scope="row">직위</th>
                        <td>{employee.title_name}</td>
                    </tr>
                    <tr>
                        <th scope="row">이름</th>
                        <td>{employee.emp_name}</td>
                    </tr>
                    <tr>
                        <th scope="row">서명<br/>
                            <button type="button" className="el_btnS el_btn8Bord hp_mt5">파일첨부</button>
                        </th>
                        <td><img src=" " alt={`${employee.emp_name} 서명`}/></td>
                    </tr>
                    </tbody>
                </table>
            </section>
            <button type="button" className="el_btnM el_btnblueBack hp_marginAuto hp_mt50"s>저장</button>
        </div>
    )
}

export default Sign;
