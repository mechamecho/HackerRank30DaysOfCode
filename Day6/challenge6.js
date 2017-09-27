function processData(input) {
       function buildOutStr(str){

   }

   var linesArray=input.split('\n');
   linesArray.shift();
   var odd="";
   var even="";
   var output="";
    linesArray.forEach(function(word){
        for (var i=0; i<word.length; i++){
        if(i%2===0){
            even+=word[i];
        }else{
            odd+=word[i];
        }
    }
    output+=even+" "+odd+"\n";
        even="";
        odd="";
    });
  console.log(output);




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
