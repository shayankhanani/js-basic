function singleIF(){
    if ((x === y || a === b) && c === d){
        g = h;
    }
    else{
        e = f;
    }
}
function nestedIF(){
    if(c===d){
        if(x===y){ g = h; }
        else if (a===b){ g = h; }
        else{ e = f; }
    }
    else{
        e = f;
    }
}