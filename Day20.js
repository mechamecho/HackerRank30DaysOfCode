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
    a = readLine().split(' ');
    a = a.map(Number);
    var track=0;


for (var i = 0; i < n; i++) {
    // Track number of elements swapped during a single array traversal
    var numberOfSwaps = 0;

    for (var j = 0; j < n-1; j++) {
        // Swap adjacent elements if they are in decreasing order
        if (a[j]>a[j + 1]) {
            numberOfSwaps++;
            var temp=a[j];
            a[j]=a[j+1];
            a[j+1]=temp;
        }


    }
    track+=numberOfSwaps;

    // If no elements were swapped during a traversal, array is sorted
    if (numberOfSwaps == 0) {
        break;
    }

}
    console.log("Array is sorted in "+ track+" swaps.\n\First Element: "+a[0]+"\n\Last Element: "+a[a.length-1]);



}