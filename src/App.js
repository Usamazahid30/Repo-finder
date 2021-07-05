import './App.css';
import React, { useEffect, useState } from 'react';
function App() {
  const [repos, setRepos] = useState([{}]);


  useEffect(() => {
    async function getRepos() {
      const response = await fetch("https://api.github.com/users/usamazahid30/repos")
      const data = await response.json();
      console.log(data)
      setRepos(data)
    }

    getRepos();
  })


  return (
    <div className="App">
      <h1>All repository</h1>
      <ul className="list">
        {repos.map((repoObj, ind) => {
          return (
            <li key={ind}>{repoObj.name} </li>
          )
        })}
      </ul>
    </div>


  );
}

export default App;
