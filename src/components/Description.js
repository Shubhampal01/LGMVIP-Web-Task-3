import React from 'react'
import Card from './Card'

const containerStyle = {
    height: '500px',
    overflow: 'auto', 
    width: '600px'
  };
export default function Description(props) {
  return (
    <div  >
        <h2 style={{textAlign: 'center'}}>Enrolled Students : {props.count}</h2>
        <div className='student-detail' style={containerStyle}>
            {
                props.records.map((desc)=>(
                    <Card desc={desc} key={desc.id}/>))
                    
            }
        </div>
    </div>
  )
}
