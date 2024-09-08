function lovetime() {
   window.setTimeout(lovetime, 1000);
      const secondsInMilliseconds = 1000;
      const minutesInMilliseconds = secondsInMilliseconds * 60;
      const hoursInMilliseconds = minutesInMilliseconds * 60;
      const daysInMilliseconds = hoursInMilliseconds * 24;
      const startDateStr = "2024-5-28";
      const startDate = new Date(startDateStr);
      const now = new Date();
      let diff = now - startDate;

      let years = Math.floor(diff / daysInMilliseconds / 365.25);
      diff -= years * daysInMilliseconds * 365.25;

      let days = Math.floor(diff / daysInMilliseconds);
      diff -= days * daysInMilliseconds;

      let hours = Math.floor(diff / hoursInMilliseconds);
      diff -= hours * hoursInMilliseconds;

      let minutes = Math.floor(diff / minutesInMilliseconds);
      diff -= minutes * minutesInMilliseconds;

      let seconds = Math.floor(diff / secondsInMilliseconds);

      document.getElementById("lovetime").innerHTML =  years + "年" + days + "天" + hours + "小时" + minutes + "分钟" + seconds + "秒啦";
    }
lovetime()