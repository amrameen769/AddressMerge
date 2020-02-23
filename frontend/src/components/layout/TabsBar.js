import React, {useState} from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import ManageSponsor from "./ManageSponsor";

export default function ControlledTabs() {
  const [key, setKey] = useState(null);

  return (
    <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
      <Tab eventKey="manage-sponsors" title="Manage Sponsors">
        <ManageSponsor />
      </Tab>
      <Tab eventKey="manage-candidates" title="Manage Candidates">
        <h1>White</h1>
      </Tab>
      <Tab eventKey="manage-funds" title="Manage Funds">
        <h1>Dark</h1>
      </Tab>
    </Tabs>
  );
}