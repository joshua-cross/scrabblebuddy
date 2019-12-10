<template>
    <div class="animation">
        <div class = "title">
            <h1>
                {{ title }}
            </h1>
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
            title: "Scrabble Buddy"
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
    $shadow: rgb(19, 36, 27);
    .title {
        z-index: 100;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        h1 {
            text-shadow: 2px 2px 1px $shadow;
            font-size: 4.25em;
            font-weight: 700;
        }
    }
    .animation {
        height: 50vh;
        overflow: hidden;
        position: relative;
    }
</style>