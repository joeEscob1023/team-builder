import React from "react";

const Form = (props) => {
  const { values, update, submit } = props;

  const onChange = (e) => {
    const { name, value } = e.target;
    update(name, value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    submit();
  };
  return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="form-group inputs">
        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        <label>
          Name
          {/* 🔥 STEP 3 - Make an input of type `text` for username.
            Controlled inputs need `value` and `onChange` props.
            Inputs render what they're told - their current value comes from app state.
            At each keystroke, a change handler fires to change app state. */}
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={onChange}
            value={values.username}
          />
        </label>
        <label>
          Email
          {/* 🔥 STEP 4 - Make an input of type `email` or `text` for email. */}
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={onChange}
          />
        </label>
        <label>
          Role
          <select value={values.role} name="role" onChange={onChange}>
            <option value="">-- Select a Role --</option>
            <option value="Front End Engineer">Front End Engineer</option>
            <option value="Back End Engineer">Back End Engineer</option>
            <option value="Full Stack Engineer">Full Stack Engineer</option>
            <option value="Data Science">Data Science</option>
          </select>
        </label>
        <div>
          <button disabled={!values.name || !values.email || !values.role}>
            submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
