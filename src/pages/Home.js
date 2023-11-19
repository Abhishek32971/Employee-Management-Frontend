// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link, useParams } from "react-router-dom";

// export default function Home() {
//   const [users, setUsers] = useState([]);

//   const { id } = useParams();

//   useEffect(() => {
//     loadUsers();
//   }, []);

//   const loadUsers = async () => {
//     const result = await axios.get("http://localhost:8080/users");
//     setUsers(result.data);
//   };

//   const deleteUser = async (id) => {
//     await axios.delete(`http://localhost:8080/user/${id}`);
//     loadUsers();
//   };

//   return (
//     <div className="container">
//       <div className="py-4">
//         <table className="table border shadow">
//           <thead>
//             <tr>
//               <th scope="col">#</th>
//               <th scope="col">Name</th>
//               <th scope="col">Username</th>
//               <th scope="col">Email</th>
//               <th scope="col">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user, index) => (
//               <tr>
//                 <th scope="row" key={index}>
//                   {index + 1}
//                 </th>
//                 <td>{user.name}</td>
//                 <td>{user.username}</td>
//                 <td>{user.email}</td>
//                 <td>
//                   <Link
//                     className="btn btn-primary mx-2"
//                     to={`/viewuser/${user.id}`}
//                   >
//                     View
//                   </Link>

//                   <Link
//                     className="btn btn-outline-primary mx-2"
//                     to={`/edituser/${user.id}`}
//                   >
//                     Edit
//                   </Link>

//                   <button
//                     className="btn btn-danger mx-2"
//                     onClick={() => deleteUser(user.id)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
// Import necessary dependencies













// export default function Home() {
//   const [employees, setEmployees] = useState([]);

//   useEffect(() => {
//     loadEmployees();
//   }, []);

//   const loadEmployees = async () => {
//     const result = await axios.get("http://localhost:8000/employees");
//     setEmployees(result.data.employees);
//   };

//   const deleteEmployee = async (id) => {
//     await axios.delete(`http://localhost:8000/employees/${id}`);
//     loadEmployees();
//   };

//   return (
//     <div className="container">
//       <div className="py-4">
//         {/* Display employees in a table */}
//         <table className="table border shadow">
//           {/* Table header */}
//           {/* Table body with employee data */}
//         </table>
//       </div>
//     </div>
//   );
// }

























import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8000/employees");
    setUsers(result.data.employees);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8000/employees/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewuser/${user._id}`}
                  >
                    View
                  </Link>

                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/edituser/${user._id}`}
                  >
                    Edit
                  </Link>

                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}























// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link, useParams } from "react-router-dom";

// export default function Home() {
//   const [employees, setEmployees] = useState([]);

//   useEffect(() => {
//     loadEmployees();
//   }, []);

//   const loadEmployees = async () => {
//     const result = await axios.get("http://localhost:8000/employees");
//     setEmployees(result.data.employees);
//   };

//   const deleteEmployee = async (id) => {
//     await axios.delete(`http://localhost:8000/employees/${id}`);
//     loadEmployees();
//   };

//   return (
//     <div className="container">
//       <div className="py-4">
//         <table className="table border shadow">
//           <thead>
//             <tr>
//               <th scope="col">#</th>
//               <th scope="col">Name</th>
//               <th scope="col">Email</th>
//               <th scope="col">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {employees.map((employee, index) => (
//               <tr key={index}>
//                 <th scope="row">{index + 1}</th>
//                 <td>{employee.name}</td>
//                 <td>{employee.email}</td>
//                 <td>
//                   <Link
//                     className="btn btn-primary mx-2"
//                     to={`/viewuser/${employee._id}`}
//                   >
//                     View
//                   </Link>

//                   <Link
//                     className="btn btn-outline-primary mx-2"
//                     to={`/edituser/${employee._id}`}
//                   >
//                     Edit
//                   </Link>

//                   <button
//                     className="btn btn-danger mx-2"
//                     onClick={() => deleteEmployee(employee._id)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
