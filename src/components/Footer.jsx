import React from 'react';
const style = { 
  backgroundColor: 'var(--accent-color)', 
  position: 'absolute', 
  bottom: '0', 
  width: '100%', 
  height: '2rem' 
};

function Footer() {
  return (
    <div className="footer" style={style}>
    </div>
  );
}

export default Footer;