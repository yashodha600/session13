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
  
  const List = () => (
   <div>
        <div className="tableHeader">
      <span>title</span>
          <span>url</span>
          <span>author</span>
</div>
      {list.map((item) => (
    <div>
      <span>{item.title}</span>
      <span>{item.url}</span>
      <span>{item.author}</span>
      ))}
      </div>

  );


export default List;