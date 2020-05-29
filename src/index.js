import React from "react";
import ReactDOM from "react-dom";
//import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends React.Component {
  state = {
    counter: 0
  };

  CountHandler = () => {
    const amount = document.querySelector("#AmountEntry");

    //const desc = document.querySelector("#Description");

    const expense = parseInt(amount.value);

    this.setState({ counter: this.state.counter + expense });
  };

  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-dark bg-dark">
          <span class="navbar-brand mb-0 h1">Expenditure</span>
          <span class="navbar-brand mb-0 h1">Total:{this.state.counter}</span>
        </nav>

        <div class="container-fluid bg-light">
          <div class="container">
            <div class="jumbotron mt-4">
              <div class="input-group mb-3">
                <input
                  id="AmountEntry"
                  type="text"
                  placeholder="Amount spent"
                  aria-describedby="spent in rupee"
                />
                <div class="input-group-append">
                  <span class="input-group-text" id="spent in rupee">
                    ₹
                  </span>
                </div>
              </div>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="spent at">
                    @
                  </span>
                </div>
                <input
                  id="Description"
                  type="text"
                  placeholder="spent on"
                  aria-label="spent On"
                  aria-describedby="spent at"
                />
                <div class="input-group-append">
                  <button
                    class="btn btn-outline-primary"
                    type="button"
                    onClick={this.CountHandler}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
