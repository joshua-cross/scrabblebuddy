<template>
    <div>
        <div class = "holder">
            <app-anagram-form></app-anagram-form>
            <!-- <div class = "form-controls">
                <div>
                    <button @click="selectedForm = 'appAnagramForm'">Anagram Form</button>
                </div>
                <div>
                    <button @click="selectedForm='appDictionaryForm'">Dictionary Form</button>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
import AnagramForm from './AnagramForm';
export default {
    data() {
        return {
            scrabbleWord: "test",
            submitWord: "",
            errors: [],
            selectedForm: "appAnagramForm"
        }
    },
    components: {
        appAnagramForm: AnagramForm,
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

<style lang="scss" scoped>
    @import '../../assets/variables';

    @mixin button {
        border-radius: 10px;
    }

    div {
        background-color: $bkg-dark;
    }
    .holder {
        width: 60%;
        margin: 0px auto;
    }

    input, button {
        color: black;
    }

    input {
        background-color: lighten($bkg, 5%);
        color: white;
        width: 50%;
        border: 1px solid $bkg-light;
        border-radius: 3px;
        padding: 10px;
        font-family: poppins;
    }

    .form-controls {
        div {
            display: inline-block;
            margin-right: 20px;
        }
    }
</style>