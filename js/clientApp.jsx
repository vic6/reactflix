import React from "react";
import { render } from "react-dom";

const ce = React.createElement;

const MyTitle = function(props) {
  const style = { color: props.color };
  return (
    <div>
      <h1 style={style}>{props.title}</h1>
    </div>
  );
};

// class MyTitle {
//   render() {
//     const color = {props.color}
//     return (
//       <div>
//         <h1 style={}>{props.title}</h1>
//       </div>
//     );
//   }
// }

const MyFirstComponent = function() {
  return (
    <div id="my-first-component">
      <MyTitle title="Carn Life" color="Peru" />
      <MyTitle title="Carn Life" color="blue" />
      <MyTitle title="Carn Life" color="green" />
      <MyTitle title="Carn Life" color="orange" />
    </div>
  );
};

render(React.createElement(MyFirstComponent), document.getElementById("app"));
