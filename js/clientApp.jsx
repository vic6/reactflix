const ce = React.createElement;

const MyTitle = function(props) {
  return ce(
    "div",
    null,
    ce("h1", { style: { color: props.color } }, props.title)
  );
};

const MyFirstComponent = function() {
  return ce(
    "div",
    null,
    ce(MyTitle, { title: "Sauce", color: "blue" }),
    ce(MyTitle, { title: "carn", color: "Peru" }),
    ce(MyTitle, { title: "paper", color: "medium-aqua-marine" }),
    ce(MyTitle, { title: "Trap", color: "Lime" })
  );
};

ReactDOM.render(
  React.createElement(MyFirstComponent),
  document.getElementById("app")
);
