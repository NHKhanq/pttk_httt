import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { fetchAPI } from '../apis/user';
import './component.scss'
function Content(props) {
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState(0);

  useEffect(() => {
    // Call API when the component is mounted
    getAPI(1);
  }, []);

  const getAPI = async (page) => {
      const res = await fetchAPI(page);
      if (res && res.data) {
        setTotal(res.total)
        setList(res.data);
        setPages(res.total_pages)
      }
    
  };


  const handlePageClick = (event) => {
    getAPI(+event.selected + 1);
  };

  return (
    <div>
      <div className="content-container">
        {list.map((item, index) => (
          <div key={index} className="content-item">
            <img src={item.avatar} alt='img' />
            <p>ID: {item.id}</p>
            <p>Email: {item.first_name}</p>
          </div>
        ))}
      </div>
      <ReactPaginate

        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pages}
        previousLabel="< previous"
        renderOnZeroPageCount={null}

        pageClassName='page-item'
        pageLinkClassName='page-link'
        previousClassName='page-link'
        nextClassName='page-item'
        nextLinkClassName='page-link'
        breakClassName='page-item'
        breakLinkClassName='page-link'
        containerClassName={"pagination"}
        activeClassName='active'

      
      />
      
    </div>
  );
  
}

export default Content;
