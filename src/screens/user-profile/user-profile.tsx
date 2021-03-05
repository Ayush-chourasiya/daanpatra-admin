import React from "react";
import MUIDataTable from "mui-datatables";
import "../user-profile/user-profile.css";
import img from '../user-profile/avatar.svg';



function UserProfile() {


  function blockuser () {
   
    alert("are you want to sure block this user")
  
  }


 const columns = [

    { name: "id", label: "S. no" },
    {name: "profile_pic", label: "Profile pic",
      options: {
        customBodyRender: (value) => {
          return <img style={{ width: 50, height: 50 }} src={img} alt={"s"} />
        }
      }
    },
    { name: "Name", label: "user name" },
    { name: "Address", label: "User address" },
    { name: "contact", label: "Contact no" },
    { name: "Number", label: "Status" },
    { name: "date_of_enroll", label: "date" },
     {name: "View", label: "Block",

      options: {
        customBodyRender: (value) => {
          return <button className="btn" onClick={blockuser}>Block</button>
        }

      }


    },
  ];

  const data =
    [
      { id: "1", profile_pic: "image", Name: "amanra1", Address: "biyabani", contact: "7354680822", Number: "1", date_of_enroll: "2018-03-31" },

    ]

  const options = {
    filterType: "checkbox",
  };
  return (
    <article>
      <MUIDataTable
        title={"Employee List"}
        columns={columns}
        data={data}
        options={options}
      />
    </article>

  );

}

export default UserProfile;
