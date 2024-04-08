import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/pricing.css'
import HomePage from './pages/HomePage';
import BooksPage from './pages/BooksPage';
import BookPage, { bookLoader } from './pages/BookPage';
import MainLayout from './layouts/MainLayout';
import NotFoundPage from './pages/NotfoundPage';
import AddBookPage from './pages/AddBookPage';
import EditBookPage from './pages/EditBookPage';



function App() {

  const updateBook = async (book) => {
    const res = await fetch(`http://localhost:8000/books/${book.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book)
    });
    return;
  };

  const deleteBook = async (id) => {
    const res = await fetch(`http://localhost:8000/books/${id}`, {
      method: 'DELETE'
    });
    return;
  };

  const addBook = async (newBook) => {
    const res = await fetch('http://localhost:8000/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBook)
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={ <HomePage /> } />
        <Route path='/books' element={ <BooksPage /> } />
        <Route path='/books/:id' element={ <BookPage deleteBook={deleteBook} /> } loader={bookLoader} />
        <Route path='/add-book' element={ <AddBookPage addBookSubmit={addBook} /> } />
        <Route path='/edit-book/:id' element={ <EditBookPage updateBookSubmit={updateBook} /> } loader={bookLoader} />
        <Route path='/*' element={ <NotFoundPage /> } />
      </Route>
    )
  );


  return <RouterProvider router={router} />
}

export default App;
