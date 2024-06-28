import React from 'react';

function DefaultSchedule({ employee }) {
    return (
        <section className="bl_sect hp_padding30 el_shadowD4 hp_mb30 section1">
            <div className="hp_fw700">지정 근무시간</div>
            <div className="ly_spaceBetween ly_fitemC hp_mt5">
                <div className="hp_fw700 hp_fs28">{employee.dept_title}</div>
                <ul className="hp_alignR">
                    <li className=""><b className="hp_fw700 hp_mr5">출근 가능 시간</b> 00:00:00</li>
                    <li className=""><b className="hp_fw700 hp_mr5">퇴근 가능 시간</b> 00:00:00</li>
                </ul>
            </div>
            <button type="button" className="el_btn8Back el_btnF hp_mt20 hp_fs16">
                변경하기
            </button>
        </section>
    );
}

export default DefaultSchedule;