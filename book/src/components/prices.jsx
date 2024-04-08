import { useState, useEffect } from "react";
import ComparePlan from "./comparePlan";
import Price from "./price";

function Prices(){

    const[books, setBooks] = useState([]);
    const[loader, SetLoader] = useState(true);

    useEffect(() => {
        const fetchBooks = async () => {
            try{
                const res = await fetch('http://localhost:8000/books');
                const data = await res.json();
                setBooks(data);
            }
            catch (error){
                console.log('Error fetching data', error);
            }
            finally{
                SetLoader(false);
            }
        }
        fetchBooks();
    }, []);

    return(
        <>
            <main>
                <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                    {books.map((book) => (
                        <Price key={book.id} book={book}></Price>
                    ))}
                </div>
                <ComparePlan></ComparePlan>
            </main>
        </>
    );
}

export default Prices;