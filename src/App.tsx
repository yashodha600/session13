import  "./App.css";
import List from "./component/List";
import Search from "./component/Search";

const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function getTitle() {
  return "Hello React";
}

function App() {
  return (
    <div class = container>
      <h1>{getTitle()}</h1>
      <label htmlFor="search">Search</label>
      <input id="search" />

     
        </div>
        <Search />
<List />
      {list.map((item) => (
        <div>
          <span>{item.title}</span>
          <span>{item.url}</span>
          <span>{item.author}</span>
        </div>
      ))}
    </div>
  );
}
export default App;
