import { useState } from "react";

export default function SignupForm() {
  const [name, setName] = useState({
    firstname: "",
    lastname: "",
    password: "",
  });
    const updateName = (e) => {
      const fieldName = e.target.name;
      const value = e.target.value;
      setName((currName) => {
        currName[fieldName] = value;
        return { ...currName };
      });
    };
  const handleSubmit = () => {
    console.log(name);
  };

  return (
    <div>
      {/* <label htmlFor="firstname">First Name</label>
      <input
        type="text"
        placeholder="firstname"
        value={firstname}
        onChange={updateFirstname}
        id="firstname"
      />
      <label htmlFor="lastname">Last Name</label>
      <input
        type="text"
        placeholder="lastname"
        value={lastname}
        onChange={updateLastname}
        id="lastname"
      /> */}
      <label htmlFor="firstname">First Name</label>
      <input
        type="text"
        placeholder="first name"
        value={name.firstname}
        name="firstname"
        onChange={updateName}
        id="firstname"
      />
      <label htmlFor="lastname">Last Name</label>
      <input
        type="text"
        placeholder="last name"
        value={name.lastname}
        name="lastname"
        onChange={updateName}
        id="lastname"
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="password"
        value={name.password}
        name="password"
        onChange={updateName}
        id="password"
      />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
}
