
<script>
import {Icon } from '@iconify/vue'


 export default {
  props:['identifiant' , 'nom'] ,
  components:{
    Icon , 
  },
  methods:
  {
    openFileNav(){
        this.$refs.fileInput.click()
    } ,
    retransmit(event){
       dispatchEvent(event)
       console.log(event)
    }
  }
}
</script>
<template>
    <div class="btn_upload"  @click="openFileNav">
        <Icon class="btn_upload_icon" icon="ic:round-upload" color="white" :inline="true"/>
        <span class="btn_upload_nom"> {{nom}}</span>
        <input :id="identifiant" type="file" style="display: none" ref="fileInput" @change="retransmit"
           accept=".csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
    </div>
</template>
<style scoped>  
    .btn_upload 
    {
        display: flex;
        flex-direction: row;
        align-items:center ; 
        width: max-content ;
        padding: 15px 22.9688px 16.25px 24px;        
        background: #300A44;
        box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.1);
        border-radius: 24px;
        transform: rotate(-0.43deg);
        margin: 0 2em;
    }
    .btn_upload_nom
    {
        font-family: 'Space Mono';
        font-style: normal;
        font-weight: 650;
        font-size:   1.5em;
        line-height: 0.5em ;
        display: flex;
        align-items: center;
        color: #FFFFFF;
        transform: rotate(-0.43deg);
    }
    .btn_upload_icon 
    {
        width: 2em;
        height: 1.5em;
        transform: rotate(-0.43deg);
    }

</style>