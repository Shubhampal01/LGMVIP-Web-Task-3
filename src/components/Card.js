import React from 'react';

const cardStyle = {
  display: 'flex',
  border: '1px solid #ccc',
  borderRadius: '5px',
  padding: '10px',
  margin: '10px',
  backgroundColor:'rgb(255,255,255,0.7)'
};

const textColumnStyle = {
  flex: 1,
  marginRight: '20px',
  fontSize:'18px'
};

const imageColumnStyle = {
  width: '150px',// Fixed width for the image column
  height: '150px',
  objectFit:'contain',
  borderRadius: '100%',
  border: '2px solid black',
  padding: '5px'
};
const defautImg1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-xMGa_FHSggsAtK24wR6hffuGDp7e5QAM8oGbx1i8ew&s";
const defaultImg2= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShajNcvXWtyxFfNFR0JN2LgBJxlOK8YWL6ZQ&s";
const Card = (props) => {
  let printArray=[];
  {props.desc.skills.forEach((element,i) => {
    printArray[i]=element+="  "
  })} 
  return (
      <div style={cardStyle}>
      <div style={textColumnStyle}>
        <h2>{props.desc.name}</h2>
        <p><b>Email :</b> {props.desc.email}</p>
        <p><b>Gender :</b> {props.desc.gender}</p>
        <p><b>Github link :</b>{props.desc.weblink}</p>
        <p><b>Skills :</b> {(props.desc.skills.length===0)?"No skills":printArray}</p>
      </div>

      <div className='img' style={imageColumnStyle}>
        <img src={props.desc.imagelink.length===0?(props.desc.gender=='Male')?defautImg1:defaultImg2:props.desc.imagelink} alt="Student image"  />
      </div>
    </div>
    
  );
};

export default Card;
