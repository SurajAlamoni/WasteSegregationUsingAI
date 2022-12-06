import React from "react";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export const Result = ({
  materialType
}) => {
  return (
      <>
        <Row>
          <Col>
            <h3>We have classified the items in the choosen image as <b>{materialType}</b></h3>
          </Col>
        </Row>
      </>
  );
};