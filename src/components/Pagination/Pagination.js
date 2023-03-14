import React, { useState, useEffect } from 'react';
import { ITEM_PER_PAGE } from 'helpers/constants';
import { useGetAllCoursesQuery } from 'redux/CourseSlice';
import CourseList from 'components/CourseList';
import { PaginateList, ButtonNext, ButtonPrev } from './Pagination.styled';

const Pagination = () => {
  const [currentItems, setCurrentItems] = useState(null);
  const [currentPage, setCurrentPage] = useState(
    localStorage.getItem('currentPage') ?? 1
  );
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const { data } = useGetAllCoursesQuery();
  const totalCourses = data?.courses.length;

  useEffect(() => {
    setItemOffset(Number(localStorage.getItem('itemOffset')) ?? 0); //? кинуть вiдразу в стейт?
    const endOffset = itemOffset + ITEM_PER_PAGE;
    setCurrentItems(data?.courses.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(totalCourses / ITEM_PER_PAGE));
  }, [data?.courses, itemOffset, totalCourses]);

  const handlePageClick = event => {
    const newOffset = (event.selected * ITEM_PER_PAGE) % data?.courses.length;
    localStorage.setItem('itemOffset', newOffset);
    setItemOffset(newOffset);
    setCurrentPage(localStorage.setItem('currentPage', event.selected + 1));
  };

  if (!currentItems) return;

  return (
    <>
      <CourseList currentItems={currentItems} />
      <PaginateList
        breakLabel="..."
        nextLabel={<ButtonNext />}
        previousLabel={<ButtonPrev />}
        onPageChange={handlePageClick}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        forcePage={currentPage ? currentPage - 1 : 0}
      />
    </>
  );
};

export default Pagination;
