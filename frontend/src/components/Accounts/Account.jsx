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

function Account() {
  const user = useSelector(selectUser);
  const loginStatus = useSelector(selectLoginStatus);
  const dispatch = useDispatch();
  console.log("In Account Component, getting user:", user);
  
  const joinDate = user.joined_on.split("T")[0];
  
  function handleEditDetails() {

  }

  return (
    <>
      {loginStatus ? (
        <div className = "account-details">
          <Hero title={`Welcome Back ${user.first_name}!`} />
          <h1>Account Details</h1>
           <p>
            {" "}
            <b>Name: </b>
            {user.first_name + " " + user.last_name}
          </p>
          <p>
            {" "}
            <b>Email: </b>
            {user.contact?.email || ""}
          </p>
          <p>
            {" "}
            <b>Phone: </b>
            {user.contact?.phone|| ""}
          </p>
          <p>
            {" "}
            <b>Joined On: </b>
            {joinDate}
          </p>
          <p>
            <button className = "tlink" disabled = {true}>Edit Profile Details</button>
            {user.curr_appts?.length > 0 
              ? `Upcoming Appointments: ${user.curr_appts[0]}`
              : <button className = "tlink" disabled = {true}>Schedule An Appointment</button>}
          </p>
          
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Account;


//   const [empList, setEmpList] = useState([]) //temp

//   async function displayAllInfo(){
//       const response = await fetch(`${BACKEND_URL}/account`)
//       const data = await response.json()
//       setEmpList([...data.body.clients, ...data.body.employees])
//       console.log("data")
//   }

//   console.log(empList)
//   const listAll = empList.map((e) => <li key = {e._id}>{e.username}</li>)