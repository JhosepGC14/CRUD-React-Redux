import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <Spinner
      className="justify-content-md-center"
      animation="border"
      variant="primary"
    />
  );
};

export default Loading;
