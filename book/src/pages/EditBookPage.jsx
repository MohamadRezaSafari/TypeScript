import { useState } from "react";
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';


function EditBookPage({ updateBookSubmit }) {

    const book = useLoaderData();
    const navigate = useNavigate();
    const { id } = useParams();

    const[name, setName] = useState(book.name);
    const[price, setPrice] = useState(book.price);

    const submitForm = (e) => {
        e.preventDefault();

        const updatedBook = {
            id,
            name,
            price
        };

        updateBookSubmit(updatedBook);

        return navigate(`/books/${id}`);
    };

  return (
    <>
        <form onSubmit={submitForm}>
            {/* Id:
            <input
                type="number"
                id="id"
                name="id"
                required
                value={id}
                onChange={(e) => setId(e.target.value)}
            /> */}

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

export default EditBookPage;