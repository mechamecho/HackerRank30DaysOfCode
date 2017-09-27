process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
   // console.log(n);
    var counter=0;
    var max=0;
    n=n.toString(2);
    n=n.split("");
    for (var i=0; i<n.length;i++){

        if(n[i]==1){
            counter++;
            if(counter>max){
            max=counter;
        }
        }else{
            counter=0;
        }

    }
    console.log(max);



    //console.log(binary);


}
