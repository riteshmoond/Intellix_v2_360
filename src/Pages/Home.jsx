import React from 'react'

const Home = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      minHeight: '80vh',
      background: '#f9f9ff',
      borderRadius: '20px',
      padding: '40px',
      boxSizing: 'border-box'
    }}>
      {/* Left Side: Text and Buttons */}
      <div style={{ maxWidth: '50%' }}>
        <h1 style={{ color: '#ff5a36', fontSize: '2.5rem', margin: 0 }}>Best Online</h1>
        <h1 style={{ color: '#ff5a36', fontWeight: 400, fontSize: '2.5rem', margin: 0 }}>Education</h1>
        <p style={{ color: '#555', margin: '20px 0 30px 0', fontSize: '1.1rem' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
        </p>
        <div>
          <button style={{
            background: '#ff5a36',
            color: '#fff',
            border: 'none',
            borderRadius: '25px',
            padding: '12px 32px',
            fontSize: '1rem',
            marginRight: '16px',
            cursor: 'pointer'
          }}>
            Read more
          </button>
          <button style={{
            background: '#fff',
            color: '#ff5a36',
            border: '2px solid #ff5a36',
            borderRadius: '25px',
            padding: '12px 32px',
            fontSize: '1rem',
            cursor: 'pointer'
          }}>
            Join now
          </button>
        </div>
      </div>
      {/* Right Side: Two Images */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px'
      }}>
        <img
          src="https://via.placeholder.com/180x180?text=Photo+1"
          alt="Photo 1"
          style={{
            width: '180px',
            height: '180px',
            borderRadius: '20px',
            objectFit: 'cover',
            boxShadow: '0 4px 24px rgba(0,0,0,0.08)'
          }}
        />
        <img
          src="https://via.placeholder.com/180x180?text=Photo+2"
          alt="Photo 2"
          style={{
            width: '180px',
            height: '180px',
            borderRadius: '20px',
            objectFit: 'cover',
            boxShadow: '0 4px 24px rgba(0,0,0,0.08)'
          }}
        />
      </div>
    </div>
  )
}

export default Home
