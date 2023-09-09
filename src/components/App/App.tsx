import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/MainPage';
import BookPage from '../../pages/BookPage';
import Page404 from '../../pages/Page404/Page404';
import './App.scss'

function App() {
  return (
    <div className='container'>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:bookId" element={<BookPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
