import React from "react";
import img from '../../../assets/images/avatar.svg';

import MUIDataTable from "mui-datatables";

function Donationrecieved() {
  const columns = [ 
    {name: "id", label:"S.no"},
    {name:"name", label:"Donator Name"}, 
    {name:"contact", label:"contact no."},
    {name:"Address",label:"Pickup address"},
    {name: "donation_item",label:"Donation type"}, 
    {name:"Item_quantity",label:"Donation sub type"},
    {name:"donation_details",label:"Donation Details"},
    {
      name: "image", label: "item Image",
      options: {
        customBodyRender: (value) => {
          return <img style={{ width: 50, height: 50 }} src={img} alt={"ds"} />
  
        }
      }
    }, 


    {name:"donation_date", label:"Donation Date"},
    {name:"donation_staus", label:"Donation status"},

    { name: "View", label: "View",

    options: {
      customBodyRender: (value) => {
        return <button className="btn">View</button>
      }

    }


  },

    ];

  const data = [
    {id:"1",name:"Ayush", contact:"1234567895", Address:"indore", donation_item:"cloth", item_quantity:"10-15 items", donation_details:"moong daal",  donation_date:"24/10/1996", donation_staus:"item recieved",},
    {id:"1",name:"Ayush", contact:"1234567895", Address:"indore", donation_item:"Food", donation_date:"24/10/1996", donation_staus:"item recieved",},
    {id:"1",name:"Ayush", contact:"1234567895", Address:"indore", donation_item:"Books", donation_date:"24/10/1996", donation_staus:"item recieved",},
    {id:"1",name:"Ayush", contact:"1234567895", Address:"indore", donation_item:"cloth", donation_date:"24/10/1996", donation_staus:"item recieved",},
  
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

export default Donationrecieved;
