class DetailsSummary extends React.Component {
  constructor(props) {
    super(props);
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.state = {
      visibility: false,
    };
  }

  toggleVisibility() {
    this.setState((state) => {
      return {
        visibility: !state.visibility,
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>

        <button onClick={this.toggleVisibility}>
          {this.state.visibility ? "Hide details" : "Show details"}
        </button>

        {this.state.visibility && (
          <p>Hey These are some details you can now see!</p>
        )}
      </div>
    );
  }
}

ReactDOM.render(<DetailsSummary />, document.getElementById("app"));

/**
 * Stateless react
 */
// let visibility = false;

// const toggleVisibility = () => {
//   visibility = !visibility;
//   render();
// };

// const render = () => {
//   const jsx = (
//     <div>
//       <h1>Visibility Toggle</h1>

//       <button onClick={toggleVisibility}>
//         {visibility ? "Hide details" : "Show details"}
//       </button>

//       {visibility && (
//         <div>
//           <p>Hey. These are some details you can now see!</p>
//         </div>
//       )}
//     </div>
//   );

//   ReactDOM.render(jsx, document.getElementById("app"));
// };

// render();
