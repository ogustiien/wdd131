
const lastModifiedElement = document.querySelector("#lastModified");

const lastModifiedDate = new Date(document.lastModified);

lastModifiedElement.innerHTML = `Last Modified: <span> ${new Intl.DateTimeFormat(
    "en-US",
    {
        dateStyle: "full"
    }
).format(lastModifiedDate)}</span>`;