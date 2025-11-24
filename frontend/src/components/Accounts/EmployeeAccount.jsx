import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  editProfile,
  linkAccount,
  delinkAccount,
  selectUser,
  selectLoginStatus,
} from "../slices/accountSlice";
import Hero from "../Hero";
import { BACKEND_URL } from "../../App";

function EmployeeAccount() {
  const user = useSelector(selectUser);
  const loginStatus = useSelector(selectLoginStatus);
  const dispatch = useDispatch();

  const [clientList, setClientList] = useState([])
  const [empList, setEmpList] = useState([]); //temp
  const [showList, setShowStatus] = useState(false)

  useEffect( () => {
    if(showList){
        grabAllUsers()
    }
  }, [showList]);
  console.log("In Account Component, getting user:", user);
  
  const joinDate = user.joined_on.split("T")[0];

  async function grabAllUsers() {
    try {
      const response = await fetch(`${BACKEND_URL}/account`);
      const data = await response.json();
      console.log("Data",data)
      setClientList([...data.body.clients])
      setEmpList([...data.body.employees]);
      console.log("data");
    } catch (e) {
      console.log(e);
    }
  }
  function showUserList() {
    setShowStatus(!showList)
    
  }
  function handleEditDetails() {
    
  }
  const listAllEmployees = empList.map((e) => <li key={e._id}>{e.username}</li>);
  const listAllClients = clientList.map((c) => <li key={c._id}>{c.username}</li>);
  return (
    <>
      {loginStatus ? (
        <div className = "account-details">
          <Hero title={`Welcome Back ${user.first_name}!`} />
          <h1>Account Details</h1>
          <p>
            {" "}
            <b>Email: </b>
            {user.personal_contact?.email || ""}
          </p>
          <p>
            {" "}
            <b>Phone: </b>
            {user.personal_contact?.phone || ""}
          </p>
          <p>
            {" "}
            <b>Joined On: </b>
            {joinDate}
          </p>
         
            <div>
                <button className = "tlink">Edit Profile Details</button>

            </div>
          
        </div>
      ) : (
        ""
      )}
      {user.access_role == "Admin"
        ? (<>
            <button className = "tlink" onClick = {showUserList}> Display All Clients and Employees</button>
        <div id = "user-lists">
            {showList ? (
            <div>
            <h2>Employee List</h2>
            <ul>{listAllEmployees}</ul>
            </div>
            ) : ''}
        {showList ? (
            <div>
            <h2>Client List</h2>
            <ul>{listAllClients}</ul>
            </div>
            ) : ''}
        </div>
        
        </>
    )
        : ''}

        {user.access_role == "Admin" || user.access_role == "Manager" ? 
      (<button className = "tlink">Add New Employee</button>) : ''  
      }
    </>
  );
}

export default EmployeeAccount;


//   const [empList, setEmpList] = useState([]) //temp

//   async function displayAllInfo(){
//       const response = await fetch(`${BACKEND_URL}/account`)
//       const data = await response.json()
//       setEmpList([...data.body.clients, ...data.body.employees])
//       console.log("data")
//   }

//   console.log(empList)
//   const listAll = empList.map((e) => <li key = {e._id}>{e.username}</li>)