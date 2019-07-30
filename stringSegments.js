var text = "It is startling to think that, even in the darkest depths \
of World War II, J. R. R. Tolkien was writing the trilogy, which contains, \
with the weird applicability available only to poetry and myth, the essential \
notion that the good gray wizard can understand the evil magi preciselybecause \
he is just enough like them to grasp their minds and motives in ways that they \
cannot grasp his.";

function replaceSegmentWithSlice(){
    for(var i =0; i < text.length ; i++){
        if(text.slice(i, i+12) === "World War II"){
            text = text.slice(0, i) + " the Second World War" + text.slice(i+12);
        }
    }
}

var getPosition = text.indexOf("World War II");
console.log(getPosition); //indexOf finds the index of first character segment 

function replaceSegmentWithIndexOf(){
    var getPosition = text.indexOf("World War II");
    if(getPosition !== -1){
        text = text.slice(0, getPosition) + " the Second World War" + text.slice(getPosition+12);
    }
}

var sample = "To be or not to be"
var getLastIndex = sample.lastIndexOf("be");
console.log(getLastIndex);