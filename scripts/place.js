// Footer: Set current year and last modified date
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// Weather: Wind Chill Calculation
const temp = 10; // Static value matching HTML [cite: 5, 7]
const windSpeed = 15; // Static value matching HTML [cite: 5, 7]

/**
 * Calculates Wind Chill factor for Metric units (°C, km/h)
 * Formula: 13.12 + 0.6215T - 11.37(V^0.16) + 0.3965T(V^0.16)
 */
const calculateWindChill = (t, v) =>
    (13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16)).toFixed(1);

const displayWindChill = () => {
    const windChillElement = document.querySelector(".weather-card ul li:last-child");

    // Requirements: Temp <= 10°C AND Wind > 4.8 km/h
    if (temp <= 10 && windSpeed > 4.8) {
        const chill = calculateWindChill(temp, windSpeed);
        windChillElement.innerHTML = `<strong>Wind Chill:</strong> ${chill}°C`;
    } else {
        windChillElement.innerHTML = `<strong>Wind Chill:</strong> N/A`;
    }
};

// Call function on page load
window.addEventListener("load", displayWindChill);