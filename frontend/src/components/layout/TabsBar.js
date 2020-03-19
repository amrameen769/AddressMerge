import React, {useState} from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import ManageSponsor from "../core/ManageSponsor";
import ManageCandidate from "../core/ManageCandidate"
import ManageFunds from "../core/donations/ManageFunds";

export default function ControlledTabs() {
  const [key, setKey] = useState(null);

  return (
    <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
      <Tab eventKey="manage-sponsors" title="Manage Sponsors">
        <ManageSponsor />
      </Tab>
      <Tab eventKey="manage-candidates" title="Manage Candidates">
        <ManageCandidate/>
      </Tab>
      <Tab eventKey="manage-funds" title="Manage Funds">
        <ManageFunds/>
      </Tab>
    </Tabs>
  );
}