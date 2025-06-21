import React from 'react';

import Nav from './component/Nav.js';
import Main from './component/Main.js';
import Footer from './component/Footer.js';
import Head from './component/Head.js'
import './App.css';

function App() {
  return (
   <div className='App'>

   
<Head />

<Nav/>
<Main/>
<Footer/>
  </div>
  );
}

export default App;
