const countTime = (time)=>{
    const [hh, mm] = time.split(":")
    return count(hh, 24) * count(mm, 60)
    
}

const count = (str, limit) =>{
    let [a, b] = str.split("").map(d => Number(d))
    let res = 0
    
    if(isNaN(a) && isNaN(b)){
        return limit
    }
    if(isNaN(a)){
        for(let i = 0; i <= 9; i++){
            if(i * 10 + b < limit){
                res++
            }
        }
        return res
    }
    if(isNaN(b)){
        for(let i = 0; i <= 9; i++){
            if(a * 10 + i < limit){
                res++
            }
        }
        return res
    }
    console.log(res)
    return 1
}
countTime("?0:00")