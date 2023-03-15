import React, { useState, useEffect } from 'react';
import { ITEM_PER_PAGE } from 'helpers/constants';
import { useGetAllCoursesQuery } from 'redux/CourseSlice';
import Skeleton from 'components/Skeleton';
import CourseList from 'components/CourseList';
import Error from 'components/Error';
import { PaginateList, ButtonNext, ButtonPrev } from './Pagination.styled';

const Pagination = () => {
  const [currentItems, setCurrentItems] = useState(null);
  const [currentPage, setCurrentPage] = useState(
    Number(localStorage.getItem('currentPage')) ?? 1
  );
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const { data, isLoading, error } = useGetAllCoursesQuery();
  const totalCourses = data?.courses.length;

  useEffect(() => {
    setItemOffset(JSON.parse(localStorage.getItem('itemOffset')) ?? 0);
    const endOffset = itemOffset + ITEM_PER_PAGE;
    setCurrentItems(data?.courses.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(totalCourses / ITEM_PER_PAGE));
  }, [data?.courses, itemOffset, totalCourses]);

  const handlePageClick = event => {
    const newOffset = (event.selected * ITEM_PER_PAGE) % totalCourses;
    localStorage.setItem('itemOffset', newOffset);
    setItemOffset(newOffset);
    setCurrentPage(localStorage.setItem('currentPage', event.selected + 1));
  };

  return (
    <>
      {error && <Error />}
      {isLoading ? (
        <Skeleton />
      ) : (
        <>
          <CourseList currentItems={currentItems} />
          <PaginateList
            breakLabel="..."
            nextLabel={<ButtonNext />}
            previousLabel={<ButtonPrev />}
            onPageChange={handlePageClick}
            pageCount={pageCount}
            renderOnZeroPageCount={null}
            forcePage={currentPage && currentPage - 1}
          />
        </>
      )}
    </>
  );
};

export default Pagination;
