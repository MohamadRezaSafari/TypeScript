import ComparePlan from "./comparePlan";
import Price from "./price";

function Prices(){
    return(
        <>
             <main>
                <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                    <Price></Price>
                    <Price></Price>
                    <Price></Price>
                </div>

                <ComparePlan></ComparePlan>
                
            </main>
        </>
    );
}

export default Prices;