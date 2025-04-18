import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CourseDetail from './pages/CourseDetail';
import GPTChat from './pages/GPTChat';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/chat" element={<GPTChat />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
export default App;
