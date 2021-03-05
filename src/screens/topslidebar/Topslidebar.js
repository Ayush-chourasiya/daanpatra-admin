import React from "react";
import MUIDataTable from "mui-datatables";


function Topslidebar () {
    const columns = ["Name", "Company", "City", "State"];
  
    const data = [
      ["Joe James",  "Test Corp", "Yonkers", "NY"]
    ];
  
    const options = {
      filterType: "checkbox",
    };
    return (
      <article>
        <MUIDataTable
          title={"Employee List"}
          data={data}
          columns={columns}
          options={options}
        />
      </article>
    );
  }

  export default   Topslidebar;
  