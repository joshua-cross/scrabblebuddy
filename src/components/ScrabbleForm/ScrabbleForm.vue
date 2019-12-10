<template>
    <div>
        <app-scrabble-tiles :scrabbleWord="submitWord" />
        <label for = "scrabbleWord">Word</label><br>
        <input type = "text" v-model="scrabbleWord" maxlength="9">
        <p>{{ submitWord }}</p>
        <button @click="submit">Submit</button>
    </div>
</template>

<script>
import ScrabbleTiles from './ScrabbleTiles';
export default {
    data() {
        return {
            scrabbleWord: "test",
            submitWord: "",
            errors: []
        }
    },
    components: {
        appScrabbleTiles: ScrabbleTiles
    },
    methods: {
        //when submit is selected, remove every character that is not a letter.
        submit() {;
            console.log(word)
            var word = this.scrabbleWord;
            this.scrabbleWord = word.replace(/\d+/g, '')
                                  .replace(/[^\w\s]|_/g, "")
                                  .replace(/\s+/g, " ");
            this.submitWord = word.replace(/\d+/g, '')
                                  .replace(/[^\w\s]|_/g, "")
                                  .replace(/\s+/g, " ");
        }
    }
}
</script>

<style lang="scss">
    input, button {
        color: black;
    }
</style>