import './App.css';
import Header from './components/header/Header';
import BookTile from './components/book-info-page/BookTile';
import SearchSection from './components/search-component/SearchSection';
import { BookDataProvider } from './api/BookDataProvider';
import { Toaster } from 'react-hot-toast';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BookDataProvider>
      <div className="container">
        <Header />
        <SearchSection />
        <Routes>
          <Route path='/books' element={<BookTile />} />
        </Routes>
      </div>
      <Toaster
        position="top-center"
        reverseOrder={false} />
    </BookDataProvider>
  );
}

export default App;
