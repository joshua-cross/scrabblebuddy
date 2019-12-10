<template>
  <div>
    <app-animation-hero></app-animation-hero>
    <app-scrabble-form></app-scrabble-form>
  </div>
</template>

<script>
// @ is an alias to /src
import ScrabbleForm from '../components/ScrabbleForm/ScrabbleForm';
import AnimationHero from '../components/Animated/AnimationHero';
export default {
  name: "home",
  components: {
    appScrabbleForm: ScrabbleForm,
    appAnimationHero: AnimationHero
  }
};
</script>
