import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import RegisterForm from './components/RegisterForm';
import Description from './components/Description';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    imagelink: '',
    weblink:'',
    gender: 'Male', 
    skills: [],
  });
  const [records, setRecords] = useState([]);

  let count= records.length;

const handleSubmit = (e) => {
  e.preventDefault();
  let join = records.some((elem)=>{
    return elem.email===formData.email;
  })
  if(! join){
    const newRecord = {...formData,id:new Date().getTime().toString()}
  setRecords([...records,newRecord]);
  console.log('Form submitted with data:', formData);
  }
  else{
    alert("Email already used."); 
  }
};

const handleChange = (e) => {
  console.log(e.target);
  const { name, value, type, checked } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: type === 'checkbox' ? (checked ? [...prevData[name], value] : prevData[name].filter(skill => skill !== value)) : value,
  }));
};

  return (
    <>
    <Header/>
    <div className="container" style={{display:"flex",justifyContent: 'space-between',alignItems:'center'}}>
    <RegisterForm handleSubmit={handleSubmit} handleChange={handleChange} formData={formData}/>
    <Description records={records} count={count}/>
    </div>
    </>
  );
}

export default App;
