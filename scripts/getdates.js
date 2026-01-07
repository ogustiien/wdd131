const lastmodified = document.querySelector("#lastmodified");

const today = new Date();

full.innerHTML = `Today is <span class="lastmodified"> ${new Intl.DateTimeFormat(
    "en-US",
    {
        dateStyle: "#full"
    }
).format(today)}</span>`;