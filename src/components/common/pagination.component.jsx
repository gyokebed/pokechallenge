import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import "./common.styles.scss";

const Pagination = ({ currentPage, pageSize, totalCount, onPageChange }) => {
  const pagesCount = Math.ceil(totalCount / pageSize);
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

const mapStateToProps = ({ cards, totalCount, currentPage, pageSize }) => {
  return {
    cards,
    totalCount,
    currentPage,
    pageSize
  };
};

export default connect(mapStateToProps)(Pagination);
