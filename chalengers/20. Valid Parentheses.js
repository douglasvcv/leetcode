var isValid = function(s) {
    let result = 0
    for(i=0; i<s.length; i++){
       switch (s[i]) {
        case '(':
            if(')'==s[i+1]){
               result++
            }
            break;
        case '[':
            if(']'==s[i+1]){
                result++
            }
            break;
            case '{':
                if('}'==s[i+1]){
                result++    
            }  
            break;
        default:
            break;
       } 
    }
    if(result>0){
     console.log(true)
     return true
    }else{
     console.log(false)
     return false
    }
};

isValid("([])")