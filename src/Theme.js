import React from 'react'
import './components/header/Header.css'

function Theme() {

    const setDarkMood = () => {
        document.querySelector('body').setAttribute("data-theme", "dark");
        localStorage.setItem('selectedTheme', 'dark');
    }

    const setLightMood = () => {
        document.querySelector('body').setAttribute("data-theme", "light");
        localStorage.setItem('selectedTheme', 'light');
    }

    const selectedTheme = localStorage.getItem('selectedTheme')

    if (selectedTheme === 'dark') {
        setDarkMood();
    }

    const toggleTheme = e => {
        (e.target.checked) ? setDarkMood() : setLightMood();
    }

    return (
        <div className="toggle-btn-container">
            <label className="switch">
                <input defaultChecked={selectedTheme === 'dark'} onChange={toggleTheme} type="checkbox" />
                <span className="slider"></span>
            </label>
        </div>
    )
}

export default Theme