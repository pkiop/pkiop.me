import React, {
  FC,
} from 'react';

interface Props {
  subTitle?: string,
}

const App: FC<Props> = ({ subTitle = '깔깔깔' }) => (

  <>
    <h1>LM</h1>
    <h2>subTitle : {subTitle}</h2>
  </>
);

export default App;