import React from "react";
import { QueryRenderer } from "react-relay";

import environment from "./environment";

const graphql = require("babel-plugin-relay/macro");

const App = () => {
  return (
    <div>
      <QueryRenderer
        environment={environment}
        query={graphql`
          query AppQuery {
            hello
          }
        `}
        variables={{}}
        render={({ error, props }) => {
          console.log("error: ", error);
          if (error) {
            return <div>Error!</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }
          // @ts-ignore
          return <div>Teste: {props.hello}</div>;
        }}
      />
    </div>
  );
};

export default App;
