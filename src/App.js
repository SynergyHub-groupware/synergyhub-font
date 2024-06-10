import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import Main from './pages/Main';
import FormList from './pages/approval/FormList';
import Temporary from './pages/approval/Temporary';
import ExceptionWork from './pages/approval/form/ExceptionWork';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path="approval">
            <Route path="FormList" element={<FormList/>} />
            <Route path="Temporary" element={<Temporary/>} />
            <Route path="form/ExceptionWork" element={<ExceptionWork/>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
