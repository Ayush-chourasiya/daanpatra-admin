import * as React from "react";

import "./layout-content.css";

const LayoutContentMolecule: React.FC = (props) => {
  return <main className="content">{props.children}</main>;
};

// LayoutHeaderMolecule.defaultProps = {
//   optionalSample: 'optional Sample',
// };

export default LayoutContentMolecule;
