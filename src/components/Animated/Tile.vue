// transform: 'rotate(' + rot + ')',
//         transform: 'scale(' + scale + ')',

<template>
    <div class = "tile"
    :style="{
        transform: `scale(${scale}) rotate(${rot}deg)`,
        left: xPos + '%', 
        top: yPos + 'px',
        display: display
    }
    ">
        {{letter.toUpperCase()}}<sub>{{ getValue(letter) }}</sub>
    </div>
</template>

<script>
export default {
    data() {
        return {
            letter: this.randomLetter(),
            rot: this.getRandom(0, 360),
            scale: this.getRandom(1, 3),
            xPos: this.getRandom(0, 100),
            yPos: -100,
            display: "inline-block",
            deathTime: this.getRandom(3000, 5000),
            shouldRotate: this.shouldRot(),
            rotRate: this.getRandom(0.1, 0.5),
            ySpeed: this.getRandom(0.6, 1.75),
            xSpeed: this.getRandom(-0.05, 0.05),
            complete: false
        }
    },
    props: {
        // letter: {
        //     type: String,
        //     required: true
        // },
        removed: {
            type: Function,
            required: true
        }
    },
    created() {
        this.tick();
        this.deathTimer();
    },
    methods: {
        randomLetter() {
            return String.fromCharCode(97+Math.floor(Math.random() * 26))
        },
        shouldRot() {
            var rand = this.getRandom(1, 4);
            rand = Math.round(rand)
            console.log(rand)
            if(rand === 3) {
                return true;
            } else {
                return false;
            }
        },
        tick() {
            const that = this;
            setInterval(() => {
                that.yPos += that.ySpeed;
                that.xPos = that.xPos + that.xSpeed;
                // console.log(that.yPos);
                // console.log(that.complete)
                if(that.shouldRotate) {
                    that.rot += that.rotRate;
                }
            }, 1);
        },
        deathTimer() {
            var that = this;
            setTimeout(() => {
                that.letter = that.randomLetter();
                that.rot = that.getRandom(0, 360);
                that.scale = that.getRandom(1, 3),
                that.xPos = that.getRandom(0, 100)
                that.yPos = -100
                that.deathTime = that.getRandom(3000, 5000)
                that.shouldRotate = that.shouldRot();
                that.rotRate = that.getRandom(0.1, 0.5);
                that.ySpeed = that.getRandom(0.6, 1.75);
                that.xSpeed = that.getRandom(-0.05, 0.05);
                // console.log("xSpeed: ", that.xSpeed);
                that.deathTimer();
            }, that.deathTime)
        },
        getRandom(min, max) {
            return Math.random() * (max - min) + min;
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

.tile {
    z-index: 0;
    border-radius: $radius;
    width: 50px;
    height: 50px;
    background: url("../../assets/wood-min.jpg");
    background-repeat: no-repeat;
    background-size: contain;
    // padding: 10px;
    color: black;
    // display: inline-block;
    margin-right: 20px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
    border: 2px solid black;
    text-align: center;
    vertical-align: middle;
    line-height: 50px;
    font-weight: 900;
    font-size: 24px;

    // transform: scale(1.2);
    position: absolute;
    // top: -100px;
    // left: 100%;
    // transform: rotate(90deg);
    // transform: scale(1.2)
    //            rotate(10deg);

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
