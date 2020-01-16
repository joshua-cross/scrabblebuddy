export function cost(letter) {
    //the letters for each score.
    const onePointLetters = ["a", "e", "i", "l", "n", "o", "r", "s", "t", "u"];
    const twoPointLetters = ["d", "g"]
    const threePointLetters = ["b", "c", "m", "p"];
    const fourPointLetters = ["f", "h", "v", "w", "y"];
    const fivePointLetters = ["k"]
    const eightPointLetters = ["j", "x"];
    const tenPointLetters = ["q", "z"];

    if(onePointLetters.includes(letter.toLowerCase())) {
        return 1;
    } else if(twoPointLetters.includes(letter.toLowerCase())) {
        return 2;
    } else if(threePointLetters.includes(letter.toLowerCase())) {
        return 3;
    } else if(fourPointLetters.includes(letter.toLowerCase())) {
        return 4;
    } else if(fivePointLetters.includes(letter.toLowerCase())) {
        return 5;
    } else if(eightPointLetters.includes(letter.toLowerCase())) {
        return 8;
    } else if(tenPointLetters.includes(letter.toLowerCase())) {
        return 10;
    }
}