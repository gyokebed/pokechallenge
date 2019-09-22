import React from "react";
import { connect } from 'react-redux';
import _ from "lodash";
import { fetchCards } from '../../redux/actions';
import "./pagination.styles.scss";

export const Pagination = ({
  currentPage,
  pageSize,
  itemsCount,
  onPageChange
}) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  console.log(currentPage, 'From pagination');
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const mapDispatchToProps = {
  fetchCards
}

export default connect(null, mapDispatchToProps);