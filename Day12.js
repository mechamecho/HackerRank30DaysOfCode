class Student extends Person {
    /*
    *   Class Constructor
    *
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here
        constructor(firstName, lastName, id, scores){
            super(firstName, lastName, id);
            this.name={
                firstName, lastName
            }
            this.scores=scores;
        }


    /*
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here
    calculate(){
        var letter;
        var sum=0;
        for(var i=0; i<this.scores.length; i++){
            sum+=this.scores[i];
        }
        var av=sum/(this.scores.length);
        if(av>=90&&av<=100){
            return "O";
        }else if(av<90&&av>=80){
            return "E";
        }else if(av<80&&av>=70){
            return "A";
        }else if(av<70&&av>=55){
            return "P";
        }else if(av<55&&av>=40){
            return "D";
        }else{
            return "T";
        }
    }

}
