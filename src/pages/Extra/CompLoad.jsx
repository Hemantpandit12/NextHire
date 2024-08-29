import React, { useState, useEffect } from 'react';
import { HashLoader } from 'react-spinners';

function CompLoad() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setData();
      setLoading(false);
      setTimeout(() => {
        setShowLoader(false);
      }, 500);
    }, 500);
  }, []);

  return (
    <>
      {showLoader && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            
          }}
          >
          <HashLoader color="white" size={50}  className='CompLoad'/>
        </div>
      )}
      <div
        style={{
          opacity: loading ? 0 : 1,
          transition: 'opacity 1.2s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0s',
        }}
      >
        {data}
      </div>
    </>
  );
}

export default CompLoad;
