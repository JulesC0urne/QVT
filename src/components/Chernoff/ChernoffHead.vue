<template>
    <select v-model="selectedEyes" id="eyes" class="eyes" @change="onChange($event)">
        <option v-for="(category, index) in this.listName" :key="index" :label="category"></option>
    </select>
    <select v-model="selectedForm" id="forme" class="forme" @change="onChange($event)">
        <option v-for="(category, index) in this.listName" :key="index" :label="category"></option>
    </select>
    <select v-model="selectedColor" id="color" class="color" @change="onChange($event)">
        <option v-for="(category, index) in this.listName" :key="index" :label="category"></option>
    </select>
    <select  v-model="selectedMouth" id="mouth" class="mouth" @change="onChange($event)">
        <option v-for="(category, index) in this.listName" :key="index" :label="category"></option>
    </select>
    <div class="head-container">
        <img class="head" src="..\..\assets\head.png">
    </div>
</template>

<style>
    .head-container{
        position: absolute;
        top: 7%;
        left: 20%;
        max-width: 60%;
    }
    .head{
        max-width: 100%;
        max-heigth: auto;
    }

    /*
        Elements liés aux yeux de l'emote
     */
    .eyes{
        position: absolute;
        left: 3%;
        top: 8%;
        width: 15%;
    }

    /*
        Elements liés à la bouche de l'emote
     */
    .mouth{
        position: absolute;
        right: 4%;
        top: 62%;
        width: 15%;
    }

    /*
        Elements liés à la couleur de l'emote
     */
    .color{
        position: absolute;
        right: 4%;
        top: 8%;
        width: 15%;
    }

    /*
        Elements liés à la bouche de l'emote
     */
    .forme{
        position: absolute;
        left: 3%;
        top: 62%;
        width: 15%;
    }
</style>

<script>
import { useDataStore } from "@/store/datastore";

    export default{
        name: "ChernoffHead",
        props: ['color','forme','eyes','mouth'],
        data() {
            return {
                listName: [],
                colorIndex: this.color,
                formeIndex: this.forme,
                mouthIndex: this.mouth,
                eyesIndex: this.eyes,
                store: useDataStore()
            }
        },
        methods:{
            onChange(event){

                let eyesID = '';
                let mouthID = '';
                let formeID = '';
                let colorID = '';

                switch (event.target.id) {
                    case "eyes":
                        eyesID = this.store.getQuestionIDByCategory(event.target.selectedOptions[0].label);
                        if(eyesID[eyesID.length -1].includes("MOY")){
                            this.eyesIndex = this.store.getColumnIndexByQuestionID(eyesID[eyesID.length -1]);
                            this.$emit('eyes', this.eyesIndex);
                        }
                        break;

                    case "mouth":
                        mouthID = this.store.getQuestionIDByCategory(event.target.selectedOptions[0].label);
                        if(mouthID[mouthID.length -1].includes("MOY")){
                            this.mouthIndex = this.store.getColumnIndexByQuestionID(mouthID[mouthID.length -1]);
                            this.$emit('mouth', this.mouthIndex);
                        }
                        break;

                    case "color":
                        colorID = this.store.getQuestionIDByCategory(event.target.selectedOptions[0].label);
                        if(colorID[colorID.length -1].includes("MOY")){
                            this.colorIndex = this.store.getColumnIndexByQuestionID(colorID[colorID.length -1]);
                            this.$emit('color', this.colorIndex);
                        }
                        break;

                    case "forme":
                        formeID = this.store.getQuestionIDByCategory(event.target.selectedOptions[0].label);
                        if(formeID[formeID.length -1].includes("MOY")){
                            this.formeIndex = this.store.getColumnIndexByQuestionID(formeID[formeID.length -1]);
                            this.$emit('forme', this.formeIndex);
                        }
                        break;
                }
            }
        },
        mounted(){
            this.listName = this.store.getAllCategory()
        }
    }
</script>
