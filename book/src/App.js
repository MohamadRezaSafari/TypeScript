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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={ <HomePage /> } />
      <Route path='/books' element={ <BooksPage /> } />
      <Route path='/books/:id' element={ <BookPage /> } loader={bookLoader} />
      <Route path='/*' element={ <NotFoundPage /> } />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />
}

export default App;
