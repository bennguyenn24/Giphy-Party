const form = document.querySelector("#form");
const btn = document.querySelector("#btn");
const clearAllBTN = document.querySelector('#clearAllBTN');
const gifContainer = document.getElementById('gifContainer');
const input = document.querySelector('#search');

btn.addEventListener("click", (e) => {
	e.preventDefault();
	getGif();
});

clearAllBTN.addEventListener('click', () => {
    gifContainer.innerText = "";
})


async function getGif() {
    const GIPHY = "https://api.giphy.com/v1/gifs/trending?api_key=LmYeWALxOE1ntPwxxQExS8ZMiUVTW8zb&limit=25&rating=g"
	const response = await axios.get(GIPHY);

    // generates random number to grab random gif
    const random = Math.floor(Math.random() * 25)

    const newGif = document.createElement("img");

    newGif.src = response.data.data[random].images.original.url
    gifContainer.append(newGif);


    }

// getGif();

//GIPHY API KEY: LmYeWALxOE1ntPwxxQExS8ZMiUVTW8zb
