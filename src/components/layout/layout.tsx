import * as React from "react";
import LayoutContentMolecule from "../layout-content";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import "./layout.css";

const LayoutOrganism: React.FC = (props) => {
  return (
    <article className="layout">
      <Navbar />
      <Sidebar />
      <LayoutContentMolecule>{props.children}</LayoutContentMolecule>
    </article>
  );
};

export default LayoutOrganism;
