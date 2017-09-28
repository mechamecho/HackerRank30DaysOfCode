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
    var arr = [];
    for(arr_i = 0; arr_i < 6; arr_i++){
       arr[arr_i] = readLine().split(' ');
       arr[arr_i] = arr[arr_i].map(Number);
    }
    function hourGlass(dimArray, firstDim, secDim){
        return upper(dimArray, firstDim, secDim)+mid(dimArray, firstDim, secDim)+lower(dimArray, firstDim, secDim);
    }
    function mid(dimArray, firstDim, secDim){
        return dimArray[firstDim+1][secDim+1];
    }
    function upper(dimArray, firstDim, secDim){
        return dimArray[firstDim][secDim]+dimArray[firstDim][secDim+1]+dimArray[firstDim][secDim+2];
    }
    function lower(dimArray, firstDim, secDim){
        firstDim=firstDim+2;
        return dimArray[firstDim][secDim]+dimArray[firstDim][secDim+1]+dimArray[firstDim][secDim+2];
    }


    var hourglassSum=0;
    var max=-56;//minimum hourglass sum from restrictions
    for (var i=0; i<4; i++){
       for(var j=0; j<4;j++){
            //j is the secDim
           hourglass=hourGlass(arr, i, j);
           if(hourglass>max){
               max=hourglass;
           }
       }
    }
    console.log(max);



}
