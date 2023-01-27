import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Admin.css";
import * as UserApi from "../../API/userRequest";

function Admin() {
  const [rval, setrval] = useState(0);
  const [userData, setuserData] = useState([]);


  const getAllUser=async()=>{
    const {data}=await UserApi.getAllUser();
    console.log(data)
    setuserData(data)
  }

  const deleteUser=async(id,status)=>{
    await UserApi.deleteUser(id)
  }
  useEffect(() => {
   getAllUser();
  }, []);



  async function Deluser(a) {
    await deleteUser(a,true)
    alert(`User with id ${a} deleted`);
    console.log(a);
  }

  var Data = userData;
  Data=Data.filter((e)=>e._id!=="6390dad46982cc052e7539ec")

  
  return (
    <div>
      <div className="Container">
        {rval === 0 ? <h1>USERS</h1> : <h1>ADMIN</h1>}
        <div className="box">
          <table>
            <tr>
              <th style={{ textAlign: "center", width: "17%" }}>Id</th>

              <th>Username</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th style={{ textAlign: "center", width: "10%" }}>Action</th>
            </tr>
            {Data.map((x) => {
              return (
                <tr>
                  <td>{x._id}</td>
                  <td className="admin">{x.username}</td>
                  <td className="admin">{x.firstname}</td>
                  <td className="admin">{x.lastname}</td>
                  <td>
                    <button                     
                      onClick={() => Deluser(x._id)}
                    >Delete</button>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}

export default Admin;
