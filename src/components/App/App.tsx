import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/MainPage';
import BookPage from '../../pages/BookPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:bookId" element={<BookPage />} />
      </Routes>
    </Router>
  );
}

export default App;
