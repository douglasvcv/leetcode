var passThePillow = function(n, time) {
  if(n>time) return time +1

  const cycle = Math.floor(time/(n-1))
  const timeLeft = time % (n-1)
  if(cycle%2 == 0){
    return 1 +timeLeft
  }else{
    return n - timeLeft
  }
};

module.exports = passThePillow
