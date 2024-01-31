import React, { useState } from 'react';
import BsAccordion from '../Accordion';
import "../navbar"
import { Navbar } from '../navbar';

const TwoColumnLayout = () => {
  const [boxes, setBoxes] = useState([]);

  const addBox = () => {
    setBoxes((prevBoxes) => [
      { id: Date.now(), content: `Box ${prevBoxes.length + 1}` },
      ...prevBoxes,
    ]);
  };
  const deleteBox = (id) => {
    setBoxes((prevBoxes) => prevBoxes.filter((box) => box.id !== id));
  };

  return (
   <div>
   {/* Navbar */}
   <Navbar />

    <div style={{ display: 'flex' }}>
      {/* First Column */}
      <div style={{ flex: 1, padding: '20px', maxWidth: '35%', boxShadow: '2px 2px #eae3e3',borderRadius: '3px',backgroundColor: '#d8d6d5', fontWeight: '650', fontFamily: 'Ubuntu' }}>
        <h2>How does it work?</h2>
        <p>Simply select the slot you are looking for and drag it to a desired position on the holder. If you need more slots, simply press the plus symbol on the row in the holder or if you need a larger holder, simply make the holder a little larger. You can see the dimensions of the holder at the top of the screen.</p>
        <BsAccordion />
      </div>

       {/* Second Column */}
      <div style={{ 
        flex: 1, 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px', 
        maxWidth: '65%', 
        boxShadow: '2px 2px #eae3e3', 
        borderRadius: '3px', 
        backgroundColor: '#292727', 
        color: '#fff', 
        fontFamily: 'Ubuntu',
      }}>
    
        {/* Container with Line, Minus Button, and Plus Button */}
        <div style={{ 
          position: 'center', 
          marginTop: '160px',
          marginBottom: '20px',
          width: '20%'
        }}>

          {/* Boxes */}
          {boxes.map((box) => (
            <div key={box.id} style={{ 
              width: '95px', 
              height: '95px',
              boxSizing: 'border-box', 
              marginLeft: '48px',
              display: 'flex', 
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#444', 
              borderRadius: '0px',
              position: 'relative',
              borderTop: '1px solid #f9f6e2',
            }}>
            {/* Minus Button */}
            <button 
                onClick={() => deleteBox(box.id)}
                style={{ 
                  position: 'relative', 
                  top: '10px', 
                  left: '0px', 
                  backgroundColor: 'none', 
                  color: 'white', 
                  border: 'none', 
                  padding: '0px', 
                  height: '0px', 
                  cursor: 'pointer',
                  fontSize: '30px',
                }}
              >
                -
              </button>
              
              {/* Blank Box Content */}
              
            </div>  
          ))}
          <div style={{
            width: '95px',
            height: '45px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0px auto',
            backgroundColor: '#ff9900',
            borderTop: '1px solid #f9f6e2',
          }}>
          {/* Plus Button */}
          <button 
            onClick={addBox}
            style={{  
              color: 'black', 
              border: 'none',
              backgroundColor: '#fff', 
              borderRadius: '1px', 
              cursor: 'pointer',
              position: 'absolute',
              display: 'flex',
            }}
          >
            +
          </button>
          </div>

        </div>
          
        </div> 
    </div>
    </div>
  );
};

export default TwoColumnLayout;
