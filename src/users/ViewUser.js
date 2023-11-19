// import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import axios from "axios";


// export default function ViewUser() {
//   const [user, setUser] = useState({
//     name: "",
//     username: "",
//     email: "",
//   });

//   const { id } = useParams();

//   useEffect(() => {
//     loadUser();
//   }, []);

//   const loadUser = async () => {
//     const result = await axios.get(`http://localhost:8080/user/${id}`);
//     setUser(result.data);
//   };


























import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function ViewUser() {
  const [user, setUser] = useState({
    name: "",
    email: "",
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
                  <b>Email:</b>
                  {user.email}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}




















// import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import axios from "axios";

// export default function ViewUser() {
//   const [user, setUser] = useState({
//     id: "",
//     name: "",
//     email: "",
//   });

//   const { id } = useParams();

//   useEffect(() => {
//     loadUser();
//   }, []);

//   const loadUser = async () => {
//     const result = await axios.get(`http://localhost:8000/employees/${id}`);
//     setUser(result.data.employee);
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
//           <h2 className="text-center m-4">User Details</h2>

//           <table className="table">
//             <thead>
//               <tr>
//                 <th>Sl. No.</th>
//                 <th>Name</th>
//                 <th>Email</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>{user.id}</td>
//                 <td>{user.name}</td>
//                 <td>{user.email}</td>
//               </tr>
//             </tbody>
//           </table>

//           <Link className="btn btn-primary my-2" to={"/"}>
//             Home
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }





























// import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import axios from "axios";

// export default function ViewUser() {
//   const [employee, setEmployee] = useState({
//     name: "",
//     email: "",
//   });

//   const { id } = useParams();

//   useEffect(() => {
//     loadEmployee();
//   }, []);

//   const loadEmployee = async () => {
//     const result = await axios.get(`http://localhost:8000/employees/${id}`);
//     setEmployee(result.data.employee);
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
//           <h2 className="text-center m-4">Employee Details</h2>

//           <div className="card">
//             <div className="card-header">
//               Details of Employee with ID: {id}
//               <ul className="list-group list-group-flush">
//                 <li className="list-group-item">
//                   <b>Name:</b> {employee.name}
//                 </li>

//                 <li className="list-group-item">
//                   <b>Email:</b> {employee.email}
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <Link className="btn btn-primary my-2" to={"/"}>
//             Home
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }
