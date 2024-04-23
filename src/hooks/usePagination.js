import { useEffect, useState } from "react";
const MAX_ROWS = 7;

export function usePagination(taskList){
  const [pages,setPages] = useState(1);
  const [pageToRender,setPageToRender] = useState([]);
  const [currentPage,setCurrentPage] = useState(1);

      useEffect(()=>{
        setPageToRender(newItemsToRender());
        setPages(pagesAmount());
      },[taskList,currentPage]);

      function newItemsToRender(){
        const startPosition = (currentPage - 1) * MAX_ROWS;
        const endPosition = startPosition  + MAX_ROWS;
        const newPageToRender = taskList.slice(startPosition,endPosition);
        return newPageToRender;
      }

      function pagesAmount(){
        const newPages = Math.ceil(taskList.length/MAX_ROWS);
        return newPages;
      }

      function nextPage(_,value){
        setCurrentPage(value)
      }

      return {
        pageToRender,
        pages,
        nextPage,
        currentPage,
        setCurrentPage
      }
    
}