import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './Components/search_bar';

const API_KEY = 'AIzaSyCNXRwLIZBh3lm54gIbst8Rw2YkHO2Q3Nk';


//componeent make html
const App = ()=>{
  return (
    <div>
      <SearchBar />
    </div>
  );
}



//take this componeent's generted html and put
//it on the page in the dom

ReactDOM.render(<App />,document.querySelector('.container'));
