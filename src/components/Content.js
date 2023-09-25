import React, { useEffect, useState } from 'react';
import { fetchAPI } from '../apis/user';
import './component.scss'
function Content(props) {
  const [list, setList] = useState([]);

  useEffect(() => {
    // Call API when the component is mounted
    getAPI();
  }, []);

  const getAPI = async () => {
      const res = await fetchAPI();
      if (res && res.data) {
        setList(res.data);
      }
    
  };

  return (
    <div className="content-container">
      {list.map((item, index) => (
        <div key={index} className="content-item">
          <img src={item.avatar}  alt='img'/>
          <p>ID: {item.id}</p>
          <p>Email: {item.first_name}</p>
        </div>
      ))}
    </div>
  );
}

export default Content;
