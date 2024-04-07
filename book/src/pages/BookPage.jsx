// import { useEffect, useState } from 'react';
import { useParams, useLoaderData } from 'react-router-dom';


function BookPage() {

    const { id } = useParams();
    const book = useLoaderData();

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
    <h1>{ book.name }</h1>
  )
}

const bookLoader = async ({ params }) => {
    const res = await fetch(`http://localhost:8000/books/${params.id}`);
    const data = await res.json();
    return data;
};

export { BookPage as default, bookLoader };

// export default BookPage