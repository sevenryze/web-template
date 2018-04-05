// Import node.js libraries

// Import third-party libraries
import * as React from "react";
import * as ReactDOM from "react-dom";
import { injectGlobal } from "styled-components";

// Import own libraries
import App from "component/app";

/**********************************************************************************************************************/
injectGlobal`
  * {
    box-sizing: border-box;
      
    margin: 0;
    padding: 0;
      
    //font-family: Arial, Helmet, Freesans, "Microsoft YaHei", "微软雅黑", sans-serif;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 
                Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', 
                Helvetica, Arial, sans-serif;
    
    user-select: none;
    
    // Fix the blue highlight when click on mobile web.
    -webkit-tap-highlight-color: transparent;    
    
    //TODO: Need a better way to hidden the scrollbar natively
    /*&::-webkit-scrollbar {
      display:none;
    }*/
  }
  
  html {
    font-size: 10px;
  }
  
  body {
    // Disable scroll effects natively by browser.
    // See https://developers.google.com/web/updates/2017/11/overscroll-behavior
    overscroll-behavior-y: contain;
    overscroll-behavior-y: none;
  }
`;

ReactDOM.render(<App />, document.getElementById("app"));
