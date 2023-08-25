import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './components/Form';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Form />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
