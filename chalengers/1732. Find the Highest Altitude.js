var largestAltitude = function(gain) {
    let topNumber=0
    gain.unshift(0)
    for(let i = 0; i<gain.length; i++){
        if(gain[i]>topNumber || gain[i]==topNumber){
          
            topNumber=i
        }
    }
    return topNumber
};

//gain is array that contain the numbers, i have return the high number inside gain