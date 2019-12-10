<template>
    <div class = "tile-holder">
        <div class = "tile" v-for="(letter, index) in letterArray" :key="index">{{letter.toUpperCase()}}<sub>{{getValue(letter)}}</sub></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            letterArray: []
        }
    },
    props: {
        scrabbleWord: {
            type: String,
            required: true
        }
    },
    watch: {
        //watching the scrabble word prop for changes, when they do occur, convert them to a char array.
        scrabbleWord(newVal) {
            // console.log(newVal + " old " + oldVal);
            this.toChars(newVal)
        }
    },
    created() {
        this.toChars(this.scrabbleWord)
    },
    methods: {
        //convert a scrabble word to a character array.
        toChars(word) {
            this.letterArray = word.split("");
        },
        //checking the score of each tile
        getValue(letter) {
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
    }
}
</script>

<style lang="scss" scoped>
    $radius: 3px;

    .tile-holder {
        display: flex;
        justify-content: center;
    }

    .tile {
        border-radius: $radius;
        width: 50px;
        height: 50px;
        background: url("../../assets/wood-min.jpg");
        background-repeat: no-repeat;
        background-size: contain;
        // padding: 10px;
        color: black;
        display: inline-block;
        margin-right: 20px;
        box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
        border: 2px solid black;
        text-align: center;
        vertical-align: middle;
        line-height: 50px;
        font-weight: 900;
        font-size: 24px;

        sub {
            color: black;
            font-weight: 600;
            font-size: 12px;
            margin-left: 2.5px;
        }
        
        // text-shadow: 0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7);
        &:last-of-type {
            margin-right: 0px;
        }
    }
</style>