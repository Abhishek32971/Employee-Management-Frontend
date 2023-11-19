// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";

// export default function EditUser() {
//   let navigate = useNavigate();

//   const { id } = useParams();

//   const [user, setUsers] = useState({
//     name: "",
//     username: "",
//     email: "",
//   });

//   const { name, username, email } = user;

//   const onInputChange = (e) => {
//     setUsers({ ...user, [e.target.name]: e.target.value });
//   };

//   useEffect(() => {
//     loadUser();
//   }, []);

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     await axios.put(`http://localhost:8080/user/${id}`, user);
//     navigate("/");
//   };

//   const loadUser = async () => {
//     const result = await axios.get(`http://localhost:8080/user/${id}`);
//     setUsers(result.data);
//   };
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";

// export default function EditUser() {
//   let navigate = useNavigate();
//   const { id } = useParams();

//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//   });

//   const { name, email } = user;

//   const onInputChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   useEffect(() => {
//     loadUser();
//   }, []);

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     await axios.put(`http://localhost:8000/employees/${id}`, user);
//     navigate("/");
//   };

//   const loadUser = async () => {
//     const result = await axios.get(`http://localhost:8000/employees/${id}`);
//     setUser(result.data.employee);
//   };



//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
//           <h2 className="text-center m-4">Edit User</h2>

//           <form onSubmit={(e) => onSubmit(e)}>
//             <div className="mb-3">
//               <label htmlFor="Name" className="form-label">
//                 Name
//               </label>
//               <input
//                 type={"text"}
//                 className="form-control"
//                 placeholder="Name"
//                 name="name"
//                 value={name}
//                 onChange={(e) => onInputChange(e)}
//               ></input>
//             </div>

//             <div className="mb-3">
//               <label htmlFor="Username" className="form-label">
//                 Username
//               </label>
//               <input
//                 type={"text"}
//                 className="form-control"
//                 placeholder="Username"
//                 name="username"
//                 value={username}
//                 onChange={(e) => onInputChange(e)}
//               ></input>
//             </div>

//             <div className="mb-3">
//               <label htmlFor="Email" className="form-label">
//                 E-mail
//               </label>
//               <input
//                 type={"text"}
//                 className="form-control"
//                 placeholder="E-mail"
//                 name="email"
//                 value={email}
//                 onChange={(e) => onInputChange(e)}
//               ></input>
//             </div>
//             <button type="submit" className="btn btn-outline-primary">
//               Submit
//             </button>
//             <Link type="submit" className="btn btn-outline-danger mx-2" to="/">
//               Cancel
//             </Link>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }


















































import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  let navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const { name, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8000/employees/${id}`, user);
    navigate("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8000/employees/${id}`);
    setUser(result.data.employee);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              ></input>
            </div>

            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                E-mail
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="E-mail"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              ></input>
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link
              type="submit"
              className="btn btn-outline-danger mx-2"
              to="/"
            >
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
















































// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";

// export default function EditUser() {
//   let navigate = useNavigate();
//   const { id } = useParams();

//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     dept_name: "",
//     proj_name: "",
//     amount_by_day: 0,
//     days_worked: 0,
//   });

//   const { name, email, dept_name, proj_name, amount_by_day, days_worked } = user;

//   const onInputChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   useEffect(() => {
//     loadUser();
//   }, []);

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     await axios.put(`http://localhost:8000/employees/${id}`, user);
//     navigate("/");
//   };

//   const loadUser = async () => {
//     const result = await axios.get(`http://localhost:8000/employees/${id}`);
//     setUser(result.data.employee);
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
//           <h2 className="text-center m-4">Edit User</h2>

//           <form onSubmit={(e) => onSubmit(e)}>
//             <div className="mb-3">
//               <label htmlFor="Name" className="form-label">
//                 Name
//               </label>
//               <input
//                 type={"text"}
//                 className="form-control"
//                 placeholder="Name"
//                 name="name"
//                 value={name}
//                 onChange={(e) => onInputChange(e)}
//               ></input>
//             </div>

//             <div className="mb-3">
//               <label htmlFor="Email" className="form-label">
//                 E-mail
//               </label>
//               <input
//                 type={"text"}
//                 className="form-control"
//                 placeholder="E-mail"
//                 name="email"
//                 value={email}
//                 onChange={(e) => onInputChange(e)}
//               ></input>
//             </div>

//             <div className="mb-3">
//               <label htmlFor="DeptName" className="form-label">
//                 Department Name
//               </label>
//               <input
//                 type={"text"}
//                 className="form-control"
//                 placeholder="Department Name"
//                 name="dept_name"
//                 value={dept_name}
//                 onChange={(e) => onInputChange(e)}
//               ></input>
//             </div>

//             <div className="mb-3">
//               <label htmlFor="ProjName" className="form-label">
//                 Project Name
//               </label>
//               <input
//                 type={"text"}
//                 className="form-control"
//                 placeholder="Project Name"
//                 name="proj_name"
//                 value={proj_name}
//                 onChange={(e) => onInputChange(e)}
//               ></input>
//             </div>

//             <div className="mb-3">
//               <label htmlFor="AmountByDay" className="form-label">
//                 Amount by Day
//               </label>
//               <input
//                 type={"number"}
//                 className="form-control"
//                 placeholder="Amount by Day"
//                 name="amount_by_day"
//                 value={amount_by_day}
//                 onChange={(e) => onInputChange(e)}
//               ></input>
//             </div>

//             <div className="mb-3">
//               <label htmlFor="DaysWorked" className="form-label">
//                 Days Worked
//               </label>
//               <input
//                 type={"number"}
//                 className="form-control"
//                 placeholder="Days Worked"
//                 name="days_worked"
//                 value={days_worked}
//                 onChange={(e) => onInputChange(e)}
//               ></input>
//             </div>

//             <button type="submit" className="btn btn-outline-primary">
//               Submit
//             </button>
//             <Link
//               type="submit"
//               className="btn btn-outline-danger mx-2"
//               to="/"
//             >
//               Cancel
//             </Link>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
