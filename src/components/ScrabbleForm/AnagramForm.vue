<template>
    <div class="form">
        <app-scrabble-tiles v-if="submitWord !== ''" :scrabbleWord="submitWord" />
        <label for = "scrabbleWord">Word</label><br>
        <input type = "text" v-model="scrabbleWord" maxlength="9">
        <p>{{ submitWord }}</p>
        <button @click="submit">Submit</button>
        <div v-for="(anagram, index) in anagrams" :key="index">
            {{anagram}}
        </div>
    </div>
</template>

<script>
import ScrabbleTiles from './ScrabbleTiles';
import axios from 'axios';
export default {
    data() {
        return {
            scrabbleWord: "test",
            submitWord: "",
            errors: [],
            anagrams: []
        }
    },
    components: {
        appScrabbleTiles: ScrabbleTiles
    },
    methods: {
        //when submit is selected, remove every character that is not a letter.
        async submit() {
            console.log(word)
            var word = this.scrabbleWord;
            this.scrabbleWord = word.replace(/\d+/g, '')
                                  .replace(/[^\w\s]|_/g, "")
                                  .replace(/\s+/g, " ");
            this.submitWord = word.replace(/\d+/g, '')
                                  .replace(/[^\w\s]|_/g, "")
                                  .replace(/\s+/g, " ");
            var anagrams = await axios.get(`http://www.anagramica.com/all/:${word}`);
            //filtering all words above 1 character.
            this.anagrams = anagrams.data.all.filter((word) => word.length > 1);
            console.log("Anagrams: ", anagrams);
        },
        removeChars(word) {
            return word.length > 1;
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../../assets/variables";
    input {
        background-color: lighten($bkg, 5%);
        color: white;
        width: 50%;
        border: 1px solid $bkg-light;
        border-radius: 3px;
        padding: 10px;
        font-family: poppins;
    }
</style>