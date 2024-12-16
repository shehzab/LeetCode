//  Positions of Large Groups


function largeGroupPositions(s){
    const result=[];
    let start = 0;

    for(let end = 0 ; end < s.length ; end++){
        if(s[end] !== s[start]){
           if( end - start >= 3){
               result.push([start , end - 1]);
           }
           start = end;
        }   
    }
    if(s.length - start >= 3){
        result.push([start, s.length - 1])
    
    }

    return result;

}
