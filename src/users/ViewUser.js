import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function ViewUser() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    dept_name:"",
    proj_name:"",
    amount_by_day:"",
    days_worked:""
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8000/employees/${id}`);
    setUser(result.data.employee);
  };

//   return (
//     // ... (same as your existing code)
//   );
// }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">User Details</h2>

          <div className="card">
            <div className="card-header">
              Details of User with ID: {user.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name:</b>
                  {user.name}
                </li>

                <li className="list-group-item">
                  <b>Username:</b>
                  {user.username}
                </li>

                <li className="list-group-item">
                  <b>Department:</b>
                  {user.dept_name}
                </li>

                <li className="list-group-item">
                  <b>Project:</b>
                  {user.proj_name}
                </li>

                <li className="list-group-item">
                  <b>Amount per day:</b>
                  {user.amount_by_day}
                </li>
                <li className="list-group-item">
                  <b>Days worked:</b>
                  {user.days_worked}
                </li>
               




              </ul>
            </div>
          </div>
          <Link className="btn btn-color my-2" to={"/"}>
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
