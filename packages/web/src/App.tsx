import React from "react";
import { QueryRenderer, graphql } from "react-relay";
import { Flex, Typography } from "@captalys-platform/core";

import environment from "./environment";

type HelloProp = {
  hello?: string;
};

const renderQuery = ({ error, props }: { error: Error; props: HelloProp }) => {
  console.log("error: ", error);
  if (error) {
    return (
      <Typography color="primary" variant="h1">
        Error!
      </Typography>
    );
  }
  if (!props) {
    return (
      <Typography color="primary" variant="h1">
        Loading...
      </Typography>
    );
  }
  return (
    <Typography color="primary" variant="h2">
      {props.hello}
    </Typography>
  );
};

const App = () => {
  return (
    <Flex alignItems="center">
      <QueryRenderer
        environment={environment}
        query={graphql`
          query AppQuery {
            hello
          }
        `}
        variables={{}}
        // @ts-ignore
        render={renderQuery}
      />
    </Flex>
  );
};

export default App;
