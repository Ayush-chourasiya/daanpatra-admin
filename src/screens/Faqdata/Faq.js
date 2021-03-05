import React from "react";
import MUIDataTable from "mui-datatables";

function Faq() {
    const columns = ["Privacy Policy?", "Terms and conditions"];
  
    const data = [
      [<input placeholder="Privacy Policy?" /> , <input placeholder="Terms and conditions"/>]
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

  export default Faq;
  