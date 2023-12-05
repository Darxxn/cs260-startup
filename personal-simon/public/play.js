var userName = localStorage.getItem("userName");
var playerNameElement = document.getElementById("playername");
var Password = localStorage.getItem("Password");
var playerPasswordElement = document.getElementById("playerpassword");
var points = 0;
var level = 1;
var isGameStarted = false;
var gameOver = false;

  if (userName) {
    playerNameElement.textContent = userName;
    playerPasswordElement.textContent = Password;
  } else {
    playerNameElement.textContent = "Guest";
    playerPasswordElement.textContent = "Guest";
    localStorage.setItem("userName", "Guest");
  }

  var characterButtons = document.querySelectorAll(".character-button");

  characterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      if (isGameStarted && !gameOver) {
        checkPattern(button.id);
      }
    });
  });

  function startGame() {
    if (!isGameStarted) {
      isGameStarted = true;
      gameOver = false;
      document.getElementById("startJourneyButton").disabled = true;
    }
  }

  function updatePoints() {
    var pointsElement = document.getElementById("points"); // Get the points input element
  }

  function checkPattern(buttonId) {
    if (isGameStarted && !gameOver) {
      var characterPoints = {
        "Knight": 10,
        "Ranger": 20,
        "Wizard": 30,
      };

      if (characterPoints.hasOwnProperty(buttonId)) {
        points += characterPoints[buttonId];
        localStorage.setItem("points", points);
        updatePoints();
        endGame();
        }
    }
  }

  function endGame() {
    isGameStarted = false;
    document.getElementById("startJourneyButton").disabled = false;
    alert("Game Over! Your score: " + points);
    resetGame();
  }