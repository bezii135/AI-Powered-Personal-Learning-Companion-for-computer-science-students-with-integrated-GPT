import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import CourseDetail from './pages/CourseDetail';
import GPTChat from './pages/GPTChat';
import Tracker from './pages/Tracker';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/gptchat" element={<GPTChat />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
