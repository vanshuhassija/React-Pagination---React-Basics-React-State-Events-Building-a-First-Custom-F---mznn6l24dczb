import React from "react";
const PaginationButtonsList = (props) => {
  const per_page = 5;
  const getPageArray = () => {
    const pages = [];
    const totalRecords = 100;
    const pageCount = totalRecords / per_page;
    for (let i = 1; i <= pageCount; i++) {
      pages.push(i);
    }
    //[1,2,3,4,5,6,7....20 ]
    return pages;
  };

  return (
    <div className="pagination-buttons-list">
      {getPageArray().map((page) => {
        return (
          <button
            id={`button-${page}`}
            className={props.currentPage === page ? "active-btn" : ""}
            onClick={()=>{
                props.getPageData(page)
            }}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export { PaginationButtonsList };
