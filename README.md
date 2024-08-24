<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>情侣爱心计时</title>
  <style>
    body {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      background-color: #f2f2f2;
      font-family: Arial, sans-serif;
    }

   .love-timer {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

   .years,
   .months,
   .days,
   .hours {
      display: flex;
      align-items: center;
    }

   .digit {
      width: 50px;
      height: 50px;
      background-color: pink;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      margin: 5px;
    }

   .separator {
      font-size: 36px;
      margin: 5px;
    }
  </style>
</head>

<body>
  <div class="love-timer">
    <div class="years">
      <div class="digit" id="yearDigit1">0</div>
      <div class="separator">年</div>
      <div class="digit" id="yearDigit2">0</div>
    </div>
    <div class="months">
      <div class="digit" id="monthDigit1">0</div>
      <div class="separator">月</div>
      <div class="digit" id="monthDigit2">0</div>
    </div>
    <div class="days">
      <div class="digit" id="dayDigit1">0</div>
      <div class="separator">日</div>
      <div class="digit" id="dayDigit2">0</div>
    </div>
    <div class="hours">
      <div class="digit" id="hourDigit1">0</div>
      <div class="separator">:</div>
      <div class="digit" id="hourDigit2">0</div>
    </div>
  </div>

  <script>
    function updateTimer() {
      const startDate = new Date('2023-01-01'); // 设置起始日期
      const currentDate = new Date();
      const timeDiff = currentDate - startDate;

      const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
      const months = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
      const days = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

      document.getElementById('yearDigit1').textContent = Math.floor(years / 10);
      document.getElementById('yearDigit2').textContent = years % 10;
      document.getElementById('monthDigit1').textContent = Math.floor(months / 10);
      document.getElementById('monthDigit2').textContent = months % 10;
      document.getElementById('dayDigit1').textContent = Math.floor(days / 10);
      document.getElementById('dayDigit2').textContent = days % 10;
      document.getElementById('hourDigit1').textContent = Math.floor(hours / 10);
      document.getElementById('hourDigit2').textContent = hours % 10;
    }

    setInterval(updateTimer, 1000);
    updateTimer();
  </script>
</body>

</html>
