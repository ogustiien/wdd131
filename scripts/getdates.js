const currentyear = document.querySelector("#currentyear");

const today = new Date();

full.innerHTML = `Today is <span class="currentyear"> ${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "full"
	}
).format(today)}</span>`;
