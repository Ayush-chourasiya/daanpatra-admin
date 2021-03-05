import React from "react";
import MUIDataTable from "mui-datatables";

function About() {
    const columns = ["Image", "We Are Data"];
  
    const data = [
      [<input type="file" />,<input />]
    ];
  
    const options = {
      filterType: "checkbox",
    };
    return (
      <article>
        <MUIDataTable
          title={"We Are"}
          data={data}
          columns={columns}
          options={options}
        />
      </article>
    );
  }

  export default About;
  