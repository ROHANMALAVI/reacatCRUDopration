import logo from './logo.svg';
import './App.css';
import ListUser from './ListUser';
import Hedar from './component/Hedar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from './component/User';
import Users from './component/Users';
import { Container } from 'react-bootstrap';


function App() {
  return (
<Container>
    <BrowserRouter>
      <Hedar />
      <Routes>
        <Route path='/' element={<Users />}></Route>
        <Route path='/add' element={<User />}></Route>
        <Route path='/edit/:id' element={<User />}></Route>


      </Routes>
      {/* <ListUser /> */}
    </BrowserRouter>
    </Container>
  );
}

export default App;
