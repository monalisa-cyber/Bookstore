import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./paginationstyle.css";
function Paginations({ postsPerPage, totalPosts, paginate}) {
    const pageNumbers = [];
    for(var i=1; i <=Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    };
    return(
        <nav id="paginationDiv">
           
            <div className="pagination " >
                {pageNumbers.map(number =>(
                    <li key={number} className='page-item'>
                        <a onClick={() => paginate(number)} href='!#' className='page-link'>
                            {number}
                        </a>
                    </li>
                    
                    
                ))}
            </div>
        </nav>
    )
    
}


 export default Paginations;