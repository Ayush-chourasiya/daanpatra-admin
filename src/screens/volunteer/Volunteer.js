import React, { useState, useEffect, useLayoutEffect } from "react";
import MUIDataTable from "mui-datatables";
import { getVolunteer } from "../../config/ApiHandler";





function Volunteer() {



  function acceptRequest(){

    alert("accept volnteer request")

  }
  
  function rejectRequest(){

    alert("reject volunteer request")

  }

  const [getdata, setGetdata] = useState([]);


  useEffect(() => {

    getVolunteer((response) => {
      let temp = [];
      if(response.length){
        response.map((item)=>{
          temp.push({
            id:item.id,
            name:item.full_name,
            Address:item.address,
            contact:item.contact_no,
            email:item.email
          })
        }) 
      }
      setGetdata(temp);

    }, 
    
    )
  }, [])

  const columns = [

    { name: "id", label: "S.No" },
    { name: "name", label: "user name" },
    { name: "Address", label: "User address" },
    { name: "contact", label: "Contact no" },
    { name: "email", label: "email" },
    {
      name: "View", label: "Accept request",

      options: {
        customBodyRender: (value) => {
          return <button className="btn" onClick={acceptRequest}>Accept</button>
        }
      }
    },

    {
      name: "View", label: "Reject request",

      options: {
        customBodyRender: (value) => {
          return <button className="btn"onClick={rejectRequest}>Reject</button>
        }
      }
    }

  ];


  const data = [ 

    

    {id: "1", name: "Ayush", Address: "indore", contact: "1234567890", email: "Ayush123@gmail.com" }

 
  ];

  const options = {
    filterType: "checkbox",
  };
  return (


    <article>
      <MUIDataTable
        title={"Employee List"}
        data={getdata}
        columns={columns}
        options={options}
      />
    </article>
  );
}

export default Volunteer;