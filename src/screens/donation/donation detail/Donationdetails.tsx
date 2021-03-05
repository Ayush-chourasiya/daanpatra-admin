import React from "react";
import MUIDataTable from "mui-datatables"
import img from '../../../assets/images/avatar.svg';
import './Donationdetail.css'
import { Button } from "@material-ui/core";


function Donationdetails() {



  

  const columns = [
  { name: "id", label: "S. No" },
  { name: "name", label: "Donator Name" },
  { name: "contact", label: "Contact No" },
  { name: "address", label: "Pickup Address" },
  {
    name: "image", label: "item Image",
    options: {
      customBodyRender: (value) => {
        return <img style={{ width: 50, height: 50 }} src={img} alt={"ds"} />

      }
    }
  },
  { name: "donation_date", label: "donationdate" },
  { name: "quantity", label: "item quantity" },
  { name: "details", label: "items" },
  { name: "View", label: "View",

    options: {
      customBodyRender: (value) => {
        return <button className="btn">View</button>
      }

    }


  },
  { name: "Status", label: "Donation status",

    options: {
      customBodyRender: (value) => {
        return <button className="btn">recieve</button>
      }

    }


  },

  ];

  const data = [
    { id: "1", name: "Ayush", contact: "1234567897", address: "indore", donation_date: "24/10/1996", quantity: "10", details: "cloths" },
    { id: "1", name: "rahul", contact: "1234567897", address: "indore", donation_date: "24/10/1996", quantity: "10", details: "cloths" },
    { id: "1", name: "Ayush", contact: "1234567897", address: "indore", donation_date: "24/10/1996", quantity: "10", details: "cloths" },
    { id: "1", name: "Ayush", contact: "1234567897", address: "indore", donation_date: "24/10/1996", quantity: "10", details: "cloths" },
    { id: "1", name: "Ayush", contact: "1234567897", address: "indore", donation_date: "24/10/1996", quantity: "10", details: "cloths" },
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

export default Donationdetails;
