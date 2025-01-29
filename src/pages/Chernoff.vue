<template>
    <div class="screen left">
    <ChernoffGraph :eyesIndex="eyesInd" :mouthIndex="mouthInd" :colorIndex="colorInd" :formeIndex="formeInd"></ChernoffGraph>
    </div>
    <div class="screen right" id="right">
        <ChernoffHead @eyes="getEyesIndex" @mouth="getMouthIndex" @color="getColorIndex" @forme="getFormeIndex"></ChernoffHead>
    </div>
</template>

<style>

    /*
        Elements aux parties de l'écran
     */
    .screen{
        display: flex;
        height: 80%;
        position: absolute;
        padding-top: 2%;
        padding-bottom: 2%;
    }
    .left {
        left: 2%;
        top: 10%;
        min-width: 61%;
        border: 2px dashed black;
    }
    .right {
        right: 2%;
        min-width: 33%;
        top: 10%;
        border: 2px dashed black;
    }

</style>

<script>
    import ChernoffHead from "@/components/Chernoff/ChernoffHead";
    import ChernoffGraph from "@/components/Chernoff/ChernoffGraph";

    export default {
      name: "ChernoffPage",
      props: ['eyes','color','forme','mouth'],
      data() {
        return {
            eyesInd: this.eyes,
            mouthInd: this.mouth,
            formeInd: this.forme,
            colorInd: this.color
        };
      },
      components: {
        ChernoffGraph,
        ChernoffHead
      },
      methods: {
        getEyesIndex(eyesIndex){
            this.eyesInd = eyesIndex;
        },
        getMouthIndex(mouthIndex){
            this.mouthInd = mouthIndex;
        },
        getFormeIndex(formeIndex){
            this.formeInd = formeIndex;
        },
        getColorIndex(colorIndex){
            this.colorInd = colorIndex;
        },
      }
    }
</script>
