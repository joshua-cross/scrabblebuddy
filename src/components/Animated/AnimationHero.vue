<template>
    <div class="animation">
        <div class = "title">
            <div>
                <h1>
                    {{ title }}
                </h1>
            </div>
            <div class = "typer">
                <vue-typed-js 
                :strings="helps" 
                :loop="true" 
                :backDelay="2000" 
                :backSpeed="35">
                    <h1>Helps <span class="typing"></span></h1>
                </vue-typed-js>
            </div>
        </div>
        <app-tile 
        v-for="n in tileCount"
        :key="n"
        :removed="removed"
        ></app-tile>
    </div>
</template>

<script>
import Tile from './Tile';
export default {
    data() {
        return {
            tileCount: 20,
            currentTiles: 10,
            title: "Scrabble Buddy",
            helps: ["Find Words", "Improve Your Score", "Win!"]
        }
    },
    components: {
        appTile: Tile
    },
    methods: {
        removed() {
            this.currentTiles -= 1;
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../../assets/mixins.scss';
    $shadow: rgb(19, 36, 27);
    .title {
        z-index: 100;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        h1 {
            text-shadow: 3px 3px 4px $shadow;
            @include mobile() {
                font-size: 2em;
            }
            @include tablet() {
                font-size: 3.5em;
            }
            @include desktop() {
                font-size: 4.25em;
            }
            // font-size: 4.25em;
            font-weight: 700;
            letter-spacing: -1.25px;
        }
    }
    .animation {
        height: 50vh;
        overflow: hidden;
        position: relative;
    }
    .typer {
        h1 {
           @include mobile() {
                font-size: 1.33em;
            }
            @include tablet() {
                font-size: 2em;
            }
            @include desktop() {
                font-size: 2.5em
            } 

            letter-spacing: 0.75px;
            font-weight: 600;
        }
    }
</style>