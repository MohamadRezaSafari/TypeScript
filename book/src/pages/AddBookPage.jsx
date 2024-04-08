import { useState } from "react";
import {Route, useNavigate, useLocation } from 'react-router-dom';
import BooksPage from '../pages/BooksPage';

function AddBookPage ({ addBookSubmit }){

    const[id, setId] = useState(0);
    const[name, setName] = useState('');
    const[price, setPrice] = useState('');

    const navigate = useNavigate();
    let location = useLocation();

    const submitForm = (e) => {
        e.preventDefault();

        const newBook = {
            id,
            name,
            price
        };

        // console.log(newBook);
        addBookSubmit(newBook);

        
        // return <BooksPage />

        return navigate('/books');
    };

  return (
    <>
        <form onSubmit={submitForm}>

            Id:
            <input
                type="number"
                id="id"
                name="id"
                required
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            
            Name:
            <input
                type="text"
                id="name"
                name="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            Price:
            <input
                type="text"
                id="price"
                name="price"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />

            <button type="submit">Submit</button>
        </form>
    </>
  )
}

export default AddBookPage;