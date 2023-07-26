import { useState } from "react";
import Tab from "./Tab";
import TabContent from "./TabContent";
export default function Tabbed() {
  const [activeTab, setActiveTab] = useState("Home");
  return (
    <>
      <div className="tabs">
        <Tab title="Home" onClick={setActiveTab} />
        <Tab title="About" onClick={setActiveTab} />
        <Tab title="Projects and Work" onClick={setActiveTab} />
        <Tab title="Contact" onClick={setActiveTab} />
      </div>
      <TabContent title={activeTab} />
    </>
  );
}
