<template>
    <div class = "tile-holder">
        <div class = "tile" v-for="(letter, index) in letterArray" :key="index">{{letter.toUpperCase()}}<sub>{{getValue(letter)}}</sub></div>
    </div>
</template>

<script>
import {cost} from '../../utils/scrabbleCost';
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
            return cost(letter);
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