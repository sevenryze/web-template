// Import node.js libraries

// Import third-party libraries
import * as React from "react";
import { hot } from "react-hot-loader";

// Import own libraries
import { HomePage } from "component/page/home";
  
/**********************************************************************************************************************/
class App extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        hello <HomePage />
      </div>
    );
  }
}

export default hot(module)(App);
