// import { useState, useEffect } from 'react';
import Main from './Main';
import logo from './assets/SoleRomanceLogoSmall.png';

function App() {
   return (
      <div>
         <header>
            <img className="logo" src={logo} alt="Sole Romance Logo" />
         </header>
         <Main />
         <footer></footer>
      </div>
   );
}

export default App;
