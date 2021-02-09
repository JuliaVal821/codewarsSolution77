https://www.codewars.com/kata/58e6868cfd2d89e9370001ad/train/javascript

    function countLetters (string) {
        if(typeof string !== "string") return null;
        string = string.toLowerCase().replace(/[^a-z]/g, '');
        let obj = {};
        for (letter of string){
            if(letter in obj){
                obj[letter]++;
            }
            else {
                obj[letter] = 1;
            }
        }
        return obj;
    }