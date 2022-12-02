import React, { useState, useEffect } from 'react';
import './style.css';
import RedditListContainer from './ListComponent/RedditListContainer';

export default function App() {
  const [listItems, setListItems] = useState([]);
  const [after, setAfter] = useState('');
  const [loading, setLoading] = useState(false);

  //fetch data from reddit
  const fetchData = async () => {
    let postFix = after ? `?after=${after}` : '';
    let url = `https://www.reddit.com/r/aww.json${postFix}`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        const { data } = body;
        const { children, after } = data;
        console.log(after);
        setAfter(after);
        setListItems([...listItems, ...children.map((val) => val.data)]);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        
      });
  };

  /**
   * populate listItems
   * then listen to the scroll window event
   */
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [listItems]);

  const handleScroll = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setLoading(true);
      setTimeout(async () => {
        fetchData();
      }, 1500);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <RedditListContainer
        fetchData={fetchData}
        listItems={listItems}
        setLoading={setLoading}
        loading={loading}
      />
    </div>
  );
}
