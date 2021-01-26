import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Remarkable } from 'remarkable';
import * as S from './style';

const md = new Remarkable({
  html: true, // Enable HTML tags in source
  xhtmlOut: true, // Use '/' to close single tags (<br />)
  breaks: true, // Convert '\n' in paragraphs into <br>
  langPrefix: 'language-', // CSS language prefix for fenced blocks

  // Enable some language-neutral replacement + quotes beautification
  typographer: false,

  // Double + single quotes replacement pairs, when typographer enabled,
  // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
  quotes: '“”‘’',

  // Highlighter function. Should return escaped HTML,
  // or '' if the source string is not changed
  highlight(/* str, lang */) { return ''; },
});

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
    <S.PostWrapper dangerouslySetInnerHTML={ { __html: codes } } />
  );
}

export default Post;
