import React, { useState } from 'react';
import ReactDom from 'react-dom';
import { data } from './data';
import ListImages from './ListImages';

import './style.css';

const App = () => {
  const [picture, setPicture] = useState(data);
  return (
    <>
      <div className='title'>
        <main>
          <h2>image gallery from pexels</h2>
          <ListImages picture={picture} />
        </main>
      </div>
    </>
  );
};

ReactDom.render(<App />, document.getElementById('root'));
