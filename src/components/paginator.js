import React from "react"
import { Link } from "gatsby"

const Paginator = ({ pageContext }) => {
  const postPerPage = 5
  const currentPage = pageContext.index / postPerPage + 1
  const lastPage = parseInt((pageContext.postCount - 1) /postPerPage + 1)
  const prevPage = currentPage - 1
  const nextPage = currentPage + 1
  return lastPage === 1 || 
    <div className="pagenator">
      {currentPage === 1
        ? <div className="pagenator-unlinked">
            <svg transform="scale(-1, 1)" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000" xmlSpace="preserve">
              <g><path d="M767.9,499.9L291.6,10l-59.4,61.3l416.6,428.7L232.1,928.7l59.5,61.3L767.9,499.9z"/></g>
            </svg> 
          </div>
        : <Link className="pagenator-link" to={prevPage === 1 ?`/` :`/` + prevPage}>
            <svg transform="scale(-1, 1)" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000" xmlSpace="preserve">
              <g><path d="M767.9,499.9L291.6,10l-59.4,61.3l416.6,428.7L232.1,928.7l59.5,61.3L767.9,499.9z"/></g>
            </svg> 
          </Link>}
      <div>Seite {currentPage}</div>
      {currentPage === lastPage
        ? <div className="pagenator-unlinked">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000" xmlSpace="preserve">
              <g><path d="M767.9,499.9L291.6,10l-59.4,61.3l416.6,428.7L232.1,928.7l59.5,61.3L767.9,499.9z"/></g>
            </svg>
          </div>
        : <Link className="pagenator-link" to={`/` + nextPage}>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000" xmlSpace="preserve">
              <g><path d="M767.9,499.9L291.6,10l-59.4,61.3l416.6,428.7L232.1,928.7l59.5,61.3L767.9,499.9z"/></g>
            </svg>
          </Link>}
    </div>
}


export default Paginator
