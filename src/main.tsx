import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Nav from './components/Nav'
import Hero from './components/Hero'
import SubPage from './subpage'
import Footer from './components/footer'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Nav />
    <Hero />
    <div className='w-[80%] mx-auto mb-20'>
      <SubPage />
    </div>
    <Footer />
  </React.StrictMode>,
)
