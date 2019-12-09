import React from "react";
import Routes from "./routes";
import store from "./store";
import { Provider }from "react-redux"

function App() {
  return (
    <div>
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
