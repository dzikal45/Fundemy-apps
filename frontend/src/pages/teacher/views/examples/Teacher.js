
import { useState } from "react";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
// core components
import Headeradmin from "../../components/Headers/Header.js";

const Teacher = () => {
  const [copiedText, setCopiedText] = useState();
  return (
    <>
      <Headeradmin />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
     
    
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Teacher;
