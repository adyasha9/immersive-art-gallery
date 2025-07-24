import React from 'react';
import ReactDOM from 'react-dom/client';
import MainApp from './main';
import './index.css'
import { useEffect, useState } from 'react';


const SplashScreen: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(onFinish, 1000); 
    return () => clearTimeout(timer);
  }, [onFinish]);
  return (
    <div className="splash-screen" style={{
      position: 'fixed',
      inset: 0,
      background: 'linear-gradient(135deg, #181818 60%, #2d2d2d 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      transition: 'opacity 1s',
      color: '#fff',
      fontFamily: 'Segoe UI, Arial, sans-serif',
      flexDirection: 'column',
      fontSize: '2.5rem',
      letterSpacing: '0.1em',
      textAlign: 'center',
    }}>
      <div style={{ fontWeight: 700, fontSize: '3rem', marginBottom: '1.5rem' }}>
        Immersive Art Gallery
      </div>
      <div style={{ fontSize: '1.2rem', color: '#bdbdbd', marginBottom: '2rem' }}>
        Powered by React, Three.js, and the Art Institute of Chicago API
      </div>
      <div style={{ fontSize: '1rem', color: '#888' }}>
        Loading experience...
      </div>
    </div>
  );
};

const Root = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    if (!showSplash) return;
    const fadeTimer = setTimeout(() => setFade(true), 500); 
    return () => clearTimeout(fadeTimer);
  }, [showSplash]);

  return (
    <React.StrictMode>
      {showSplash && (
        <div style={{
          opacity: fade ? 0 : 1,
          transition: 'opacity 0.5s',
          pointerEvents: fade ? 'none' : 'auto',
        }}>
          <SplashScreen onFinish={() => setShowSplash(false)} />
        </div>
      )}
      {!showSplash && <MainApp />}

    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('app')!).render(<Root />);
