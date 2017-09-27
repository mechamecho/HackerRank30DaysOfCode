function processData(input) {
    var input=input.toString();
    //to put the input into an array sperated by the lines and remove the first number
    //and store it in var n
    var linesArray=input.split("\n");
    var n=linesArray[0];
    linesArray.shift();

    //to populate the map, by taking each individual line, splitting it into an array
    //with the key and value pair, and then putting the pair into the map
    var resultingMap={};
    var line;
    for (var i=0; i<n; i++){
       line =linesArray[i].split(" ");
       resultingMap[line[0]]=line[1];

    };

    //checking if key value pair exist in map, and format the output based on that
    for (var i=n; i<linesArray.length; i++){
        if(resultingMap[linesArray[i]]){
            console.log(linesArray[i]+"="+resultingMap[linesArray[i]]);
        }else{
            console.log("Not found");
        }
    }

}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
