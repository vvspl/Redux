/* eslint-disable arrow-body-style */
import React from 'react';

const Pagination = ({ currentPage, goNext, goPrev, itemsPerPage, totalItems }) => {
  // input: currentPage, itemsPerPage, usersCount
  // output: boolean

  const isPrevPageAvailable = currentPage > 1;
  const isNextPageAvailable = totalItems - currentPage * itemsPerPage > 1;
  console.log(totalItems - currentPage * itemsPerPage, isNextPageAvailable);
  const arrowPrev = isPrevPageAvailable? '←' : '';
  const arrowNext = isNextPageAvailable? '→' : '';

  return (
    <div>
      <div className="pagination">
        <button className="btn" onClick={goPrev} disabled={!isPrevPageAvailable}>
          {arrowPrev}
        </button>
        <span className="pagination__page">{currentPage}</span>
        <button className="btn" onClick={goNext} disabled={!isNextPageAvailable}>
        {arrowNext}
        </button>
      </div>
    </div>
  );
};

export default Pagination;
