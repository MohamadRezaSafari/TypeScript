// import { useEffect, useState } from 'react';
import { useParams, useLoaderData, useNavigate, NavLink } from 'react-router-dom';


function BookPage({ deleteBook }) {

    const { id } = useParams();
    const book = useLoaderData();
    const navigate = useNavigate();

    const onDeleteClick = (bookId) => {
      const confirm = window.confirm('Are you sure?');

      if(!confirm) return;

      deleteBook(bookId);

      navigate('/books');
    }

    // const { id } = useParams();
    // const [job, setJob] = useState(null);

    // useEffect(() => {
    //     const fetchBook = async () => {
    //         try{
    //             const res = await fetch(`http://localhost:8000/books/${id}`);
    //             const data = await res.json();
    //             setJob(data);
    //         }
    //         catch (error){
    //             console.log('Error fetching data', error);
    //         }
    //         finally{
    //             //SetLoader(false);
    //         }
    //     }

    //     fetchBook();
    // }, []);

  return (
    <>
        <h1>{ book.id }</h1>
        <h1>{ book.name }</h1>
        <h1>{ book.price }</h1>

        <NavLink 
          to={`/edit-book/${book.id}`}
          className='btn btn-success'
          >
            Edit Book
        </NavLink>
        <button 
          onClick={() => onDeleteClick(book.id)}
          className='btn btn-danger'
          >
            Delete Book
        </button>
    </>
  )
}

const bookLoader = async ({ params }) => {
    const res = await fetch(`http://localhost:8000/books/${params.id}`);
    const data = await res.json();
    return data;
};

export { BookPage as default, bookLoader };

// export default BookPage