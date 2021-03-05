import React,{useEffect,useState} from "react";
import MUIDataTable from "mui-datatables";
import { getContact } from "../../config/ApiHandler";








function Contactus() {
  

  // const View  = () => {
  //   alert(`
         
  //     addess:- 477, Sudama Nagar, Sethi Gate,&nbsp;Indore, (M.P.) 452009

  //     Phone :- 7772869222 ,6263362660

  //     Email:- daanpatra18@gmail.com

  //   `) 

  // } ;

  const [contact, setContact] = useState([])


  useEffect(() => {
    getContact((response) => {
      console.log(response)
      let temp = [];
      if(response.length){
        response.map((item)=>{
          temp.push({
            Sl:item.id,
            first_name:item.first_name,
            last_name:item.last_name,
            email:item.email,
            message:item.message
          })
        })
      }
      setContact(temp);
    })
  }, [])



  
  const handleActionRender = () => {
    return (
      <button >View</button>
      
    )
  };

    const columns = [
      {name : "SL",lable : "Sl.no"},
      {name : "first_name",lable : "Fristname"},
      {name : "last_name",lable : "Lastname"},
      {name : "email",lable : "Email"},
      {name : "message",lable : "Message"}
    , {

      name: 'actions',
      label: 'View',
      options: {
        filter: false,
        sort: false,
        download: false,
        customBodyRender: function ff(value, tableMeta, updateData) {
          return handleActionRender();
        },
      },
    },
    {

      name: 'actions',
      label: 'View',
      options: {
        filter: false,
        sort: false,
        download: false,
        customBodyRender: function ff(value, tableMeta, updateData) {
          return handleActionRender();
        },
      },
    },
  ];
  
    const data = [
      {SL: "1",first_name: "Rahul", last_name: "Kirar", email: "Rahul123@gmail.com", message: "jnfdkjnvdjfgb dfhbghkdg dfjbkd" }
     
    ];
  
    const options = {
      filterType: "checkbox",
    };
  
    
    




    return (
      <article>
        <MUIDataTable
          title={"Employee List"}
          data={contact}
          columns={columns}
          options={options}
        />
        
      </article>
    );
  }

  export default Contactus;
  