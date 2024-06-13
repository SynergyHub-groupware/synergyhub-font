// script.js
function renderRows(data) {
    return data.map(item => `
        <tr key=${item.id}>
            <td>${item.id}</td>
            <td>${item.category}</td>
            <td>${item.title}</td>
            <td>${item.author}</td>
            <td>${item.date}</td>
            <td>${item.views}</td>
        </tr>
    `).join('');
}

function App() {
    return (
        <>
        <h1>전체 게시판</h1>
        <br /><br /><br />
        <div class="searchZone">
            <input />
            <button>검색</button>
        </div>
        <span class="main">
            <table>
                <thead>
                    <tr class="tableHead">
                        <th>No</th>
                        <th>분류</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                        <th>열람</th>
                    </tr>
                    {renderRows()}
                </thead>
                <tbody id="table-body">
                </tbody>
            </table>
            <div class="button">
                <button> 이전 </button>
                <h4>1</h4>
                <button> 다음 </button>
            </div>
        </span>
        </>
    );
}

function renderApp(data) {
    document.getElementById('root').innerHTML = App();
    document.getElementById('table-body').innerHTML = renderRows(data);
}

// Sample data
const data = [
    { id: 1, category: 'aa', title: 'bb', author: 'cc', date: 'dd', views: 'ee' },
    { id: 2, category: 'ff', title: 'gg', author: 'hh', date: 'ii', views: 'jj' }
];

// Render the application
document.addEventListener('DOMContentLoaded', () => renderApp(data));
