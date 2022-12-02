import React, { useState, useEffect } from 'react';
import './style.css';
import MimeList from './ListComponent/MimeList';

export default function App() {
  let after = '';
  const [listItems, setListItems] = useState(null);
  const fetchData = async () => {
    let url = 'https://www.reddit.com/r/aww.json';

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        const { data } = body;
        console.log(data);
        const { children } = data;

        console.log(children.map((val) => val.data));

        setListItems(children.map((val) => val.data));
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>

      <MimeList fetchData={fetchData} listItems={listItems} />
    </div>
  );
}
