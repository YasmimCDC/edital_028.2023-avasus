import { useEffect } from "react";
import { Pagination } from "react-bootstrap";
import "../../styles/pagination/Pagination.sass"

export default function PaginationComponent({
    itemsCount,
    itemsPerPage,
    itemsShowed,
    currentPage,
    setCurrentPage,
    setItemsShowed
}) {
    const pagesCount = Math.ceil(itemsCount / itemsPerPage);
    const isCurrentPageFirst = currentPage === 1;
    const isCurrentPageLast = currentPage === pagesCount;

    const incrementPage = () => {
        let current = currentPage+1;
        let currentCount = itemsShowed+itemsPerPage;
        setCurrentPage(current);
        if (currentCount > itemsCount) {
            setItemsShowed(itemsCount);
        } else {
            setItemsShowed(currentCount);
        }
    }

    const decrementPage = () => {
        let current = currentPage-1;
        let currentCount = itemsShowed-itemsPerPage;
        setCurrentPage(current);
        setItemsShowed(currentCount);
    }

    const onPageClick = (page) => {
        setCurrentPage(page);
        let count = 0;
        for (var i = 0; i < page; i++) {
            count = count + itemsPerPage;
        }
        if (count > itemsCount) {
          setItemsShowed(itemsCount);
        } else {
          setItemsShowed(count);
        }
    }

    const setLastAsCurrent = () => {
        if (currentPage > pagesCount) {
          setCurrentPage(pagesCount);
        }
      };

    let pageNumberOutOfRange;
    const paginationItems = [...new Array(pagesCount)].map((_, index) => {
        const pageNumber = index + 1;
        const isFirstPage = pageNumber === 1;
        const isLastPage = pageNumber === pagesCount;
        const isCurrentPageWithinTwoPageNumbers =
          Math.abs(pageNumber - currentPage) <= 2;
    
        if (
          isFirstPage ||
          isLastPage ||
          isCurrentPageWithinTwoPageNumbers
        ) {
          pageNumberOutOfRange = false;
          return (
            <Pagination.Item
              key={pageNumber}
              onClick={() => onPageClick(pageNumber)}
              active={pageNumber === currentPage}
            >
              {pageNumber}
            </Pagination.Item>
          );
        }

        if (!pageNumberOutOfRange) {
            pageNumberOutOfRange = true;
            return <Pagination.Ellipsis key={pageNumber} className="muted" />;
          }
        return null;
    });

    const prev = () => {
        if (!(isCurrentPageFirst)){
            return <Pagination.Prev
            id="prev"
            onClick={() => decrementPage()}
            disabled={isCurrentPageFirst}
          >
            {"<"} {("Anterior")}
          </Pagination.Prev>
        }
    }

    const next = () => {
        if (!(isCurrentPageLast)){
            return <Pagination.Next
            id="next"
            onClick={() => incrementPage()}
            disabled={isCurrentPageLast}
          >
            Próximo {">"}
          </Pagination.Next>
        }
    }

    useEffect(setLastAsCurrent, [currentPage, pagesCount, setCurrentPage]);
   
    return (
        <Pagination>
            {prev()}
            {paginationItems}
            {next()}
        </Pagination>
    );
}