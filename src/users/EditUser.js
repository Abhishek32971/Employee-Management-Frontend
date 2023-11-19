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
//     amount_by_day: "",
//     days_worked: ""
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
//     // Validation
//     if (!/^\d+(\.\d{1,2})?$/.test(amount_by_day) || !/^\d+$/.test(days_worked)) {
//       alert("Invalid input. Please enter valid values.");
//       return;
//     }
//     try {
//       await axios.put(`http://localhost:8000/employees/${id}`, user);
//       navigate("/");
//     } catch (error) {
//       console.error("Error updating user:", error);
//     }
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
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

export default function EditUser() {
  let navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    email: "",
    dept_name: "",
    proj_name: "",
    amount_by_day: "",
    days_worked: ""
  });

  const [error, setError] = useState(null);
  const handleClose = () => setError(null);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const { name, email, dept_name, proj_name, amount_by_day, days_worked } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // Validation
    if (!/^\d+(\.\d{1,2})?$/.test(amount_by_day)) {
      setError("enter a float value for amount ");
      return;
    }
    if (!/^\d+$/.test(days_worked)) {
      setError("enter a int value for days");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("enter a valid email");
      return;
    }
    try {
      await axios.put(`http://localhost:8000/employees/${id}`, user);
      navigate("/");
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8000/employees/${id}`);
    setUser(result.data.employee);
  };

  useEffect(() => {
    loadUser();
  }, []);

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


            <div className="mb-3">
              <label htmlFor="dept_name" className="form-label">
                Department
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="dept_name"
                name="dept_name"
                value={dept_name}
                onChange={(e) => onInputChange(e)}
              ></input>
            </div>

            <div className="mb-3">
              <label htmlFor="proj_name" className="form-label">
                Project
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="proj_name"
                name="proj_name"
                value={proj_name}
                onChange={(e) => onInputChange(e)}
              ></input>
            </div>

            <div className="mb-3">
              <label htmlFor="amount_by_day" className="form-label">
                Amount per day
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="amount_by_day"
                name="amount_by_day"
                value={amount_by_day}
                onChange={(e) => onInputChange(e)}
              ></input>
            </div>


            <div className="mb-3">
              <label htmlFor="days_worked" className="form-label">
                Days worked
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="days_worked"
                name="days_worked"
                value={days_worked}
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

      <Modal show={error !== null} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>{error}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
            {/* <button type="submit" className="btn btn-outline-primary">
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
} */}
