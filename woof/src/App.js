import React from 'react';

function Food({ fave }) {
  return <h1>I love {fave}</h1>;
}

const foodFav = ["test", "two", "three"];

function App() {
  return <div>Hello!
    <Food fave="test" />
  </div>;
}

export default App;
