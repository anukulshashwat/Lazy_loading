import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Collections from "./Collections";

const Album = () => {
  const listInnerRef = useRef();
  const [loading, setLoading] = useState(false);
  const [currPage, setCurrPage] = useState(1);
  const [prevPage, setPrevPage] = useState(0);
  const [userList, setUserList] = useState([]);
  const [lastList, setLastList] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/photos?_page=${currPage}&_limit=15`
    );
    if (!response.data.length) {
      setLastList(true);
      return;
    }
    setPrevPage(currPage);
    setUserList([...userList, ...response.data]);
    setLoading(false);
  };

  useEffect(() => {
    if (!lastList && prevPage !== currPage) {
      fetchData();
    }
  }, [currPage, lastList, prevPage, userList]);

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        setCurrPage(currPage + 1);
      }
    }
  };
  return (
    <Collections
      onScroll={onScroll}
      listInnerRef={listInnerRef}
      userList={userList}
      loading={loading}
    />
  );
};

export default Album;
