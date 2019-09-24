import React from "react";
import _ from "lodash";
import "./common.styles.scss";

export const Pagination = ({
  currentPage,
  pageSize,
  itemsCount,
  setsCount,
  onPageChange
}) => {
  let pagesCount;

  if (itemsCount) pagesCount = Math.ceil(itemsCount / pageSize);
  else if (setsCount) pagesCount = Math.ceil(setsCount / pageSize);

  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav className="pagination">
      <ul>
        {pages.map(page => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <div className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};
