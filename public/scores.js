const points = localStorage.getItem("points");
    const playerName = localStorage.getItem("userName");

    if (points && playerName) {
      const leaderboardBody = document.getElementById("leaderboardBody");
      const newRow = leaderboardBody.insertRow();
      const cell1 = newRow.insertCell(0);
      const cell2 = newRow.insertCell(1);
      const cell3 = newRow.insertCell(2);
      const cell4 = newRow.insertCell(3);

      cell1.textContent = leaderboardBody.rows.length;
      cell2.textContent = playerName;
      cell3.textContent = points;
      cell4.textContent = new Date().toLocaleDateString();
    }