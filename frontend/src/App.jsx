import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from '../components/loginPage'
import Particles from '../components/Practicles';

function App() {


  return (
    <>
    <div style={{ position: 'relative', height: '100vh', width: '100vw', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, zIndex: 0, height: '100%', width: '100%' }}>
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <LoginPage />
      </div>
    </div>
  </>
  
  )
}

export default App



