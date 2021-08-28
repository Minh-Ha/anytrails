import {
    warningCardHeader,
    successCardHeader,
    dangerCardHeader,
    infoCardHeader,
    primaryCardHeader,
  } from "styles/jss/nextjs-material-kit.js";
  
  const cardHeaderStyle = {
    cardHeader: {     
      padding: "1rem 15px",
      padding: "0",
      marginLeft: "10px",
      marginRight: "10px",
      marginTop: "-30px",
      border: "1px",
      marginBottom: "0",
      boxShadow:
      "0 7px 7px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12)",
    },
    cardHeaderPlain: {
      marginLeft: "0px",
      marginRight: "0px",
    },
    warningCardHeader,
    successCardHeader,
    dangerCardHeader,
    infoCardHeader,
    primaryCardHeader,
  };
  
  export default cardHeaderStyle;
  