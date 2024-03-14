import React  from 'react';

const RegisterForm = (props) => {

  const formStyle = {
    maxWidth: '500px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor:'rgb(255,255,255,0.7)'
  };

  const labelStyle = {
    display: 'block',
    margin: '10px 0',
    borderRadius:'5px',
    // border: '2px solid red',
    fontSize:'18px',
  };

  const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '5px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div >
    <form style={formStyle} onSubmit={props.handleSubmit}>
    <h2 style={{textAlign: 'center',marginBottom:'20px'}}>Registration Form</h2>
      <label htmlFor='name' style={labelStyle}>
        {/* Name : {"  "} */}
        <input type="text" className='textarea' name="name" id='name' placeholder='Enter your name' value={props.formData.name} onChange={props.handleChange} required/>
      </label>

      <label htmlFor='email' style={labelStyle}>
        {/* Email :{"  "} */}
        <input type="email" className='textarea' name="email" id='email' placeholder='Enter your email' value={props.formData.email} onChange={props.handleChange} required/>
      </label>

      <label htmlFor='imagelink' style={labelStyle}>
        {/* Image Link :{"  "} */}
        <input type="text" className='textarea' name="imagelink" id='imagelink' placeholder='Enter image link' value={props.formData.imagelink} onChange={props.handleChange} />
      </label>

      <label style={labelStyle}>
        Gender :{"  "}
        <label style={{margin:'0 10px'}}>
          <input type="radio" name="gender" value="Male" checked={props.formData.gender === 'Male'} onChange={props.handleChange} />
          {" "} Male
        </label>
        <label>
          <input type="radio" name="gender" value="Female" checked={props.formData.gender === 'Female'} onChange={props.handleChange} />
          {" "} Female
        </label>
      </label>
      <label htmlFor='weblink' style={labelStyle}>
        {/* Weblink :{"  "} */}
        <input type="text" className='textarea' name="weblink" id='weblink' placeholder='Github profile link' value={props.formData.weblink} onChange={props.handleChange} />
      </label>
      <label style={labelStyle}>
        Skills :{"  "}
        <label style={{margin:'0 10px'}}>
          <input type="checkbox" name="skills" value="HTML" checked={props.formData.skills.includes('HTML')} onChange={props.handleChange} />
          {" "} HTML
        </label>
        <label style={{margin:'0 10px'}}>
          <input type="checkbox" name="skills" value="CSS" checked={props.formData.skills.includes('CSS')} onChange={props.handleChange} />
          {" "} CSS
        </label>
        <label style={{margin:'0 10px'}}>
          <input type="checkbox" name="skills" value="JavaScript" checked={props.formData.skills.includes('JavaScript')} onChange={props.handleChange} />
          {" "} JavaScript
        </label>
      </label>

      <button style={buttonStyle} type="submit">Submit</button>
    </form>
    </div>
  );
};

export default RegisterForm;
