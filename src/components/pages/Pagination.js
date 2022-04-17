import React, {useState, useEffect} from "react";

const Pagination = ({showPerPage, onPaginationChange, total }) => {
   const[counter, setCounter] = useState(1);
   const [numberOfButtons, setnumberOfButtons] = useState(
    Math.ceil(total / showPerPage)
   )

   useEffect(() => {
       const value = showPerPage * counter;
       console.log("start value: ", value - showPerPage);
       console.log("end value:", value);
       onPaginationChange( value - showPerPage, value);
   },[counter]);

   const onButtonClick = (type) => {
      if (type === "prev") {
          if(counter === 1){
            setCounter(1);
          } else {
              setCounter(counter - 1);
          }
      } else if (type === "next") {
          if (numberOfButtons === counter){
              setCounter(counter);
          } else {
            setCounter(counter+1);
          }
            
      }
   };
    return (
        <>   
         <div className="d-flex justify-content-between">
         <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><button class="page-link"  onClick={() => onButtonClick("prev")}>Previous</button></li>
    
  
    {  new Array(numberOfButtons).fill("").map((el, index) =>(
     <li class={`page-item ${index + 1 === counter ? "active" : null }`}>
         <button class="page-link" >
       {index + 1}
    </button></li>
        
      )) }
 
    <li class="page-item"><button class="page-link"  onClick={() => onButtonClick("next")}>Next</button></li>
  </ul>
</nav>
        
    </div>
    </>

    );
};

export default Pagination;