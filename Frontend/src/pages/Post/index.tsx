import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Remarkable } from 'remarkable';

const md = new Remarkable();

function Post() {
  const [data, setData] = useState<string>('');

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/pkiop/lifemanager/dev/README.md')
      .then((el: any) => {
        console.log('el : ', el.data);
        setData(el.data);
      });
  }, []);

  if (data === '') {
    return (
      <>
        로딩중
      </>);
  }
  const codes = md.render(data);
  return (
    <>
      <div dangerouslySetInnerHTML={ { __html: codes } }/>
    </>
  );
}

export default Post;
