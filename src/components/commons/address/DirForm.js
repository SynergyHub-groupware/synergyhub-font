import axios from "axios";
import { useEffect, useState } from "react";

function DirForm() {

    const [originEmp, setOriginEmp] = useState([]);     // 원본 저장
    const [employees, setEmployees] = useState([]);        // 검색 결과 저장
    const [searchType, setSearchType] = useState('전체');   // 기본 검색
    const [searchKeyword, setSearchKeyword] = useState(''); // 검색어

    useEffect(() => {
        // axios로 페이지 로딩 시 데이터 가져오기
        axios.get('http://localhost:8080/address/select')
        .then(res => {
            setOriginEmp(res.data);
            setEmployees(res.data);
        })
        .catch(error => {
            console.log('error : ', error);
        });
    }, []);

    // 검색어 입력
    const handleKeywordChange = (e) => {
        setSearchKeyword(e.target.value);
    };

    // 검색 유형 선택
    const handleSearchTypeChange = (e) => {
        setSearchType(e.target.value);
    };

    const handleSearch = () => {
        let employeeFilter = [];

        switch (searchType) {
            
            // 전체 혹은 해당하는 부서, 이름, 직급 전부 가져오기
            case '전체' :
                employeeFilter = originEmp.filter(emp => emp.dept_title.includes(searchKeyword) || emp.emp_name.includes(searchKeyword) || emp.position_name.includes(searchKeyword));
                break;

            // 부서에 맞는 값 가져오기    
            case '부서' :
                employeeFilter = originEmp.filter(emp => emp.dept_title.includes(searchKeyword));
                break;
            
            // 이름에 맞는 값 가져오기
            case '이름' : 
                employeeFilter = originEmp.filter(emp => emp.emp_name.includes(searchKeyword));
                break;

            // 직급에 맞는 값 가져오기    
            case '직급' :
                employeeFilter = originEmp.filter(emp => emp.position_name.includes(searchKeyword));
                break;    
            
            // 페이지 로딩 시 기본 값
            default :
                employeeFilter = originEmp;
        }
        setEmployees(employeeFilter);
    }


    return (
        <>
            <div className="hp_w90 hp_mt30 hp_alignC" style={{ height: '10%' }}>
                <h5 className="el_lv1Head">주소록</h5>
                <select className="hp_w100" onChange={handleSearchTypeChange}>
                    <option>전체</option>
                    <option>부서</option>
                    <option>이름</option>
                    <option>직급</option>
                </select>
                    <input type="text" className="hp_mt15 hp_w200px hp_floatL" onChange={handleKeywordChange}/>
                    <input type="submit" className="el_btnS el_btnblueBord hp_ml5 hp_mt15 hp_floatR" value="검색" onClick={handleSearch}/>
            </div>

            <div className="hp_w90 hp_mt30 hp_mb30 hp_alignC hp_bordDE hp_br5 hp_fBack" style={{ overflow: 'scroll', height: '265px' }}>
                <table>
                    <thead>
                        <tr>
                            <th><input type="checkbox" /></th>
                            <th>부서</th>
                            <th>이름</th>
                            <th>직급</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* employee 하나씩 꺼내기 */}
                        {employees.map(employee => (
                            <tr key={employee.emp_code}>
                                <td><input type="checkbox" /></td>
                                <td>{employee.dept_title}</td>
                                <td>{employee.emp_name}</td>
                                <td>{employee.position_name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default DirForm;