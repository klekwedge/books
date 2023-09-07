import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/MainPage';
import BookPage from '../../pages/BookPage';
import './App.scss'

function App() {
  return (
    <div className='container'>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:bookId" element={<BookPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
