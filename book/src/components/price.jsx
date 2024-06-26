import { NavLink } from "react-router-dom";

function Price(props){
    return(
        <>
            <div className="col">
                <div className={`${ props.color } card mb-4 rounded-3 shadow-sm`}>
                    <div className="card-header py-3">
                        <h4 className="my-0 fw-normal">{props.book.id}/{props.book.name}</h4>
                    </div>
                    <div className="card-body active">
                        <h1 className="card-title pricing-card-title">{props.book.price}<small className="text-muted fw-light">/mo</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                        </ul>
                        <NavLink to={`/books/${props.book.id}`} type="button" className="w-100 btn btn-lg btn-outline-primary">Detail</NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Price;