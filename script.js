<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Student Profile</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #f4f4f4;
    }

    .profile-container {
      text-align: center;
      max-width: 600px;
      padding: 20px;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    .student-info {
      margin-bottom: 20px;
    }

    .student-info img {
      width: 200px;
      border-radius: 50%;
      cursor: pointer;
    }

    .buttons button {
      margin: 0 10px;
      padding: 10px 20px;
      background-color: #006400;
      color: #ffffff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    .enlarged-image {
      display: none;
      position: fixed;
      z-index: 9999;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8);
    }

    .enlarged-image img {
      display: block;
      margin: auto;
      max-width: 90%;
      max-height: 90%;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div class="profile-container">
    <h1>Student Profile</h1>
    <div class="student-info">
      <img id="studentImage" src="random_image_url" alt="Student Image" onclick="showEnlargedImage()">
      <p>Name: Angel Woods</p>
      <p>Student ID: 0000000</p>
    </div>
    <div class="buttons">
      <button id="transactionsBtn" onclick="openTransactionsPage()">Transactions</button>
      <button id="mealPlanBtn">Meal Plan</button>
    </div>
  </div>

  <!-- Enlarged Image -->
  <div class="enlarged-image" onclick="hideEnlargedImage()">
    <img id="enlargedImage" src="" alt="Enlarged Image">
  </div>

  <script src="profile.js"></script>
  <script>
    function showEnlargedImage() {
      var studentImage = document.getElementById('studentImage');
      var enlargedImage = document.getElementById('enlargedImage');

      enlargedImage.src = studentImage.src;
      document.querySelector('.enlarged-image').style.display = 'block';
    }

    function hideEnlargedImage() {
      document.querySelector('.enlarged-image').style.display = 'none';
    }

    function openTransactionsPage() {
      window.location.href = 'transactions.html';
    }
  </script>
</body>
</html>
