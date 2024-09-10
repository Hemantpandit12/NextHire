import React from 'react';
import './Header.css';
import Emp from './Freelance-Developer.svg';

function Header() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let currentInterval = null;
  let effectRunning = getCookie("effectRunning");

  if (effectRunning === "true") {
    startEffect();
  }

  document.querySelectorAll(".l2").forEach((element) => {
    setTimeout(() => {
      if (currentInterval) {
        clearInterval(currentInterval);
      }
      startEffect();
    }, 1000);
  });

  function startEffect() {
    let iterations = 0;
    currentInterval = setInterval(() => {
      document.querySelectorAll(".l2").forEach((element) => {
        element.innerText = element.innerText
          .split("")
          .map((letter, index) => {
            if (index < iterations) {
              return element.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");
        iterations += 1 / 3;
        if (iterations >= element.dataset.value.length) {
          iterations = 0;
        }
      });
    }, 70);
    setCookie("effectRunning", "true", 365); // Set cookie to expire in 1 year
  }

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }

  function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5);
    document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/`;
  }

  return (
    <>
    <div className='Header-container'>
      <div className='latter-container'>
        <p className='latter l1'>Refer.</p>
        <p className='latter l2' data-value="CONNECT.">CONNECT.</p>
        <p className='latter l3'>Thrive.</p><br/>
        <p className='latter l4'>"Help your network find their dream job!<br/> Refer friends and contacts to job openings that match their skills."</p>
      </div>
      <div className="line"></div>
      <div className='logo'>
      <img src={Emp} alt='Logo' height={550} width={550} />
      </div>
    </div>
    </>
  )
}
export default Header;