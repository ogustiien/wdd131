const siteInfo = {
name: "Japan Driven Mountain",
    established: 2024,
        passions: ["Drifting", "Touge", "Mechanical Purity"]
};

const mountainPasses = [
    {
        name: "Hakone Turnpike",
        location: "Kanagawa",
        difficulty: "Moderate",
        description: "Known as the Japanese Nürburgring, offering wide sweeping curves and high-speed sections."
    },
    {
        name: "Irohazaka",
        location: "Tochigi",
        difficulty: "Expert",
        description: "A pair of winding roads with 48 hair-raising hairpin turns representing the Japanese alphabet."
    },
    {
        name: "Mount Haruna (Akina)",
        location: "Gunma",
        difficulty: "Advanced",
        description: "The legendary home of Initial D, famous for its five consecutive hairpins at the finish line."
    },
    {
        name: "Shiga Kusatsu Route",
        location: "Nagano",
        difficulty: "Moderate",
        description: "The highest national road in Japan, providing stunning volcanic views and technical turns."
    },
    {
        name: "Mount Akagi",
        location: "Gunma",
        difficulty: "Expert",
        description: "A narrow and relentless technical course known for its tight rhythm and steep downhill sections favored by lightweight agility builds."
    },
    {
        name: "Mount Myogi",
        location: "Gunma",
        difficulty: "Moderate",
        description: "Characterized by its unique high-speed mid-section and treacherous guardrails, offering a mix of high-velocity sweeps and sudden sharp breaks."
    },
    {
        name: "Usui Pass",
        location: "Gunma/Nagano",
        difficulty: "Advanced",
        description: "Home to the famous C-121 corner, this pass features over 180 turns and an ancient brick bridge (Megane Bridge) as a backdrop."
    },
    {
        name: "Mount Tsukuba",
        location: "Ibaraki",
        difficulty: "Advanced",
        description: "A favorite for night runs, featuring a distinct 'Fruits Line' and 'Purple Line' known for their technical low-speed maneuvers."
    },
    {
        name: "Nishisetsu (Nishi-Izu Skyline)",
        location: "Shizuoka",
        difficulty: "Moderate",
        description: "A high-elevation ridge road offering breathtaking views of Mt. Fuji and smooth, flowing curves that reward momentum-based driving styles."
    }
];

const displayWelcome = (info) => {
    const welcomeTarget = document.querySelector("#welcome-message");
    if (welcomeTarget) {
        welcomeTarget.innerHTML = `<h1>Welcome to ${info.name}</h1>
                                   <p>Celebrating ${info.passions.join(" & ")} since ${info.established}.</p>`;
    }
};

const updateFooter = () => {
    const yearSpan = document.querySelector("#currentyear");
    const modSpan = document.querySelector("#lastModified");

    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
    if (modSpan) modSpan.textContent = document.lastModified;
};

const trackVisits = () => {
    const visitDisplay = document.querySelector("#visit-info");
    if (!visitDisplay) return;

    let numVisits = Number(window.localStorage.getItem("visitCount-ls")) || 0;

    if (numVisits !== 0) {
        visitDisplay.textContent = `Welcome back! You have visited this pass ${numVisits} times.`;
    } else {
        visitDisplay.textContent = `This is your first time on the mountain. Drive safe!`;
    }

    numVisits++;
    localStorage.setItem("visitCount-ls", numVisits);
};

const renderPassCards = (passes) => {
    const container = document.querySelector("#directory-container");
    if (!container) return;

    container.innerHTML = "";

    passes.forEach(pass => {
        const card = document.createElement("section");
        card.className = "card";

        card.innerHTML = `
            <h3>${pass.name}</h3>
            <p><strong>Location:</strong> ${pass.location}</p>
            <p class="difficulty-tag">${pass.difficulty}</p>
            <p>${pass.description}</p>
        `;

        container.appendChild(card);
    });
};

document.addEventListener("DOMContentLoaded", () => {
    updateFooter();
    displayWelcome(siteInfo);
    trackVisits();
    renderPassCards(mountainPasses);
});