import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import About from './About';
import Users from './Users';
import UserId from './UserId';
import Error from './Error';
import './App.css';

function App() {
  return (
    <>
        <Router>
          
          <Header />

          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route exact path="/users" element={<Users />} />
            <Route path="/users/:userName" element={<UserId />} />
            <Route path="*" element={<Error />} />
          </Routes>

        </Router>
    </>
  );
}

export default App;
