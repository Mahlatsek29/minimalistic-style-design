import React from 'react';
import greenchair from './Images/Chairs/5.png';
import backgroundImage from './Images/Others/light-removebg-preview.png';
import amosChairImage from './Images/Chairs/2.png';
import sofaChairImage from './Images/Chairs/3.png';
import kweChairImage from './Images/Chairs/4.png';
import thatChairImage from './Images/Chairs/9-removebg-preview-removebg-preview.png';
import bottomLeftImage from './Images/Others/plant2-removebg-preview.png'; // Import your bottom-left image



function LandingPage() {
  const pageStyle = {
    position: 'relative',
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const backgroundStyle = {
    border: '10px solid #004953',
    width: '100%',
    height: '130%',
    background: `url(${backgroundImage}) 35% 1% no-repeat, linear-gradient(#D3D3D3, #D3D3D3)`,
    position: 'relative',
    
  };

  const overlayStyle = {
    position: 'absolute',
    top: '2%',
    right: 280,
    width: '20%',
    height: '85%',
    background: 'rgba(0,73,83,0.6)',
    transform: 'translateY(-50%)',
    zIndex: 2,
  };

  const imageStyle = {
    position: 'absolute',
    top: '-4%',
    left: 'calc(45% + 200px)',
    width: '450px',
    zIndex: 3,
  };

  const cardsStyle = {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    top: '85%',
    left: 'calc(50% + 200px)',
    width: '100%',
    height: '15%',
    overflowX: 'hidden',
  };

  const headerStyle = {
    position: 'absolute',
    top: '30%',
    right: '65%',
    fontWeight: 'bold',
    fontSize: '96px',
    color: 'black',
  };

  const subHeaderStyle = {
    position: 'absolute',
    top: '40%',
    right: '82%',
    fontSize: '36px',
    color: 'black',
  };

  const paragraphStyle = {
    position: 'absolute',
    top: '50%',
    right: '57.0%',
    fontSize: '20px',
    color: 'black',
    textAlign: 'center',
  };

  const buttonStyle = {
    position: 'absolute',
    top: '60%',
    right: '85%',
    background: '#004953',
    color: 'white',
    padding: '15px 50px',
    borderRadius: '20px',
    fontSize: '14px',
    cursor: 'pointer',
  };

  const cardItemStyle = {
    backgroundColor: 'white',
    padding: '50px',
    marginRight: '40px',
    borderRadius: '15px',
    position: 'relative',
    zIndex: 7,
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)',
    border: '1px solid #e0e0e0', // Add a border to create the lift effect
  };
  const chairImageStyle = {
    position: 'absolute',
    left: '-80%',
    width: '155%',
    height: '170%',
    zIndex: 7, // Set a higher z-index
    top: '-90%', // Adjust this value to move the images to the top
  };

  const bottomLeftImageStyle = {
    position: 'absolute',
    bottom: -70,
    left: 0,
    width: '790px', // Adjust the width as needed
    height: '300px', // Adjust the height as needed
    background: `url(${bottomLeftImage}) no-repeat`,
    zIndex: 2, // Ensure it's above the background
  };
  

  return (
    <div style={pageStyle}>
      <div style={backgroundStyle}></div>
      <div style={bottomLeftImageStyle}></div>
      <div style={overlayStyle}></div>
      <img src={greenchair} alt="Image" style={imageStyle} />

      <div style={cardsStyle}>
        <div className="card" style={cardItemStyle}>
          <div className="card-body">
            Sofa Chair
            <div style={chairImageStyle}>
              <img
                src={sofaChairImage}
                alt="Sofa Chair"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
        <div className="card" style={cardItemStyle}>
          <div className="card-body">
            Amos Chair
            <div style={chairImageStyle}>
              <img
                src={amosChairImage}
                alt="Amos Chair"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
        <div className="card" style={cardItemStyle}>
          <div className="card-body">
            Kwe Chair
            <div style={chairImageStyle}>
              <img
                src={kweChairImage}
                alt="Kwe Chair"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
        <div className="card" style={cardItemStyle}>
          <div className="card-body">
            That Chair
            <div style={chairImageStyle}>
              <img
                src={thatChairImage}
                alt="That Chair"
                style={{ width: '110%', height: '120%' }}
              />
            </div>
          </div>
        </div>
      </div>
      <div style={headerStyle}>Minimalistic</div>
      <div style={subHeaderStyle}>Style Furniture</div>
      <div style={paragraphStyle}>
        Lorem ipsum dolor sit amet,
        consectetur adipiscing elit sed do eiusmod tempor
      </div>
      <button style={buttonStyle}>Shop Now</button>
    </div>
  );
}

export default LandingPage