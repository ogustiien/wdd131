document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

const temp = 10; 
const windSpeed = 15; 

const calculateWindChill = (t, v) =>
    (13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16)).toFixed(1);

const displayWindChill = () => {
    const windChillElement = document.querySelector(".weather-card ul li:last-child");

    if (temp <= 10 && windSpeed > 4.8) {
        const chill = calculateWindChill(temp, windSpeed);
        windChillElement.innerHTML = `<strong>Wind Chill:</strong> ${chill}°C`;
    } else {
        windChillElement.innerHTML = `<strong>Wind Chill:</strong> N/A`;
    }
};

window.addEventListener("load", displayWindChill);