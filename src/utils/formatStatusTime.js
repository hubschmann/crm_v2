function formatStatusTime(seconds) {
    if (seconds < 60) {
        return seconds === 1 ? "1 секунда" : seconds + " секунд";
      } else if (seconds < 3600) {
        const minutes = Math.floor(seconds / 60);
        return minutes === 1 ? "1 хвилина" : minutes + " хвилин";
      } else if (seconds < 86400) {
        const hours = Math.floor(seconds / 3600);
        return hours === 1 ? "1 година" : hours + " годин";
      } else if (seconds < 604800) {
        const days = Math.floor(seconds / 86400);
        return days === 1 ? "1 день" : days + " днів";
      } else {
        const weeks = Math.floor(seconds / 604800);
        return weeks === 1 ? "1 тиждень" : weeks + " тижні";
      }
  }
  export default formatStatusTime;