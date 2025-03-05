const computer = document.querySelector(".computer img");
const player = document.querySelector(".player img");
const computerpoint = document.querySelector(".computerpoint");
const playerpoint = document.querySelector(".playerpoint");
const options = document.querySelectorAll(".options button");

options.forEach((option) => {
  option.addEventListener("click", () => {
    computer.classList.add("shakeComputer");
    player.classList.add("shakePlayer");
    setTimeout(() => {
      computer.classList.remove("shakeComputer");
      player.classList.remove("shakePlayer");
      player.src = "./" + option.innerHTML + "player.png";
      const choice = ["STONE", "PAPER", "SCISSORS"];
      let arrayno = Math.floor(Math.random() * 3);
      let computerchoice = choice[arrayno];
      computer.src = "./" + computerchoice + "computer.png";
      let cpoint = parseInt(computerpoint.innerHTML);
      let ppoint = parseInt(playerpoint.innerHTML);
      if (option.innerHTML === "STONE") {
        if (computerchoice === "PAPER") computerpoint.innerHTML = cpoint + 1;
        else if (computerchoice === "SCISSORS")
          playerpoint.innerHTML = ppoint + 1;
      } else if (option.innerHTML === "PAPER") {
        if (computerchoice === "STONE") playerpoint.innerHTML = ppoint + 1;
        else if (computerchoice === "SCISSORS")
          computerpoint.innerHTML = cpoint + 1;
      } else {
        if (computerchoice === "STONE") computerpoint.innerHTML = cpoint + 1;
        else if (computerchoice === "PAPER") playerpoint.innerHTML = ppoint + 1;
      }
    }, 1000);
  });
});
