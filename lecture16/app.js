let cards = data.map((course, index) => {
  return <Card key={index} data={course} />;
});

ReactDOM.render(
  <div className="row">{cards}</div>,
  document.getElementById("root")
);
