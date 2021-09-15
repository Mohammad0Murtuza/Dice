const btn = document.querySelector(".btn");
btn.addEventListener('click', onclick);
function onclick(e){
	e.preventDefault();

	const player1 = document.querySelector(".player1").value;
	const player2 = document.querySelector(".player2").value;
	
	// dice 1

	const randomNumber1 = Math.floor(Math.random() * 6 + 1);
	const sourceImage1 = "dice" + randomNumber1 + ".JPG";
	const image1 = document.querySelector(".img1").setAttribute("src",sourceImage1 );

	// dice 2

	const randomNumber2 = Math.floor(Math.random() * 6 + 1);
	const sourceImage2 = "dice" + randomNumber2 + ".JPG";
	const image2 = document.querySelector(".img2").setAttribute("src",sourceImage2 );

	// result

	const a = document.querySelector(".result");
	
	if (randomNumber1>randomNumber2) {
		a.textContent = player1 + " WINS!!";
	} else if(randomNumber1<randomNumber2){
		a.textContent = player2 + " WINS!!";
	}
	else{
		a.textContent = "Match DRAW";
	}
}
