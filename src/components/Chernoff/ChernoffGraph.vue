<template>
  <div id="magic"></div>
</template>
<script>
import embed from "vega-embed";
import {generateChernov} from "@/utils/tchernov.utils";
import {useDataStore} from "@/store/datastore";


export default{
  name : "ChernoffGraph",
  props: ['eyesIndex','mouthIndex','formeIndex','colorIndex'],
  mounted() {
    const store = useDataStore()
    const maincsv = store.getCSVData;
    const csvbis = store.getCSVDatabis;
    console.log(maincsv)
    console.log(csvbis)

  },
  watch: {
    eyesIndex(newVal, oldVal){
        const store = useDataStore()
        const maincsv = store.getCSVData;
        const csvbis = store.getCSVDatabis;
        console.log(oldVal, newVal)
        if (this.colorIndex != undefined &&  this.formeIndex != undefined && this.eyesIndex != undefined && this.mouthIndex != undefined){
            embed(`#magic`, generateChernov(maincsv,csvbis,this.colorIndex,this.formeIndex,this.mouthIndex,newVal), {actions:true});
        }

    },
    mouthIndex(newVal, oldVal){
        const store = useDataStore()
        const maincsv = store.getCSVData;
        const csvbis = store.getCSVDatabis;
        console.log(oldVal, newVal)
        if (this.colorIndex != undefined &&  this.formeIndex != undefined && this.eyesIndex != undefined && this.mouthIndex != undefined){
            embed(`#magic`, generateChernov(maincsv,csvbis,this.colorIndex,this.formeIndex,newVal,this.eyesIndex), {actions:true});
        }
    },
    formeIndex(newVal, oldVal){
        const store = useDataStore()
        const maincsv = store.getCSVData;
        const csvbis = store.getCSVDatabis;
        console.log(oldVal, newVal)
        if (this.colorIndex != undefined &&  this.formeIndex != undefined && this.eyesIndex != undefined && this.mouthIndex != undefined){
            embed(`#magic`, generateChernov(maincsv,csvbis,this.colorIndex,newVal,this.mouthIndex,this.eyesIndex), {actions:true});
        }
    },
    colorIndex(newVal, oldVal){
        const store = useDataStore()
        const maincsv = store.getCSVData;
        const csvbis = store.getCSVDatabis;
        console.log(oldVal, newVal)
        if (this.colorIndex != undefined &&  this.formeIndex != undefined && this.eyesIndex != undefined && this.mouthIndex != undefined){
            embed(`#magic`, generateChernov(maincsv,csvbis,newVal,this.formeIndex,this.mouthIndex,this.eyesIndex), {actions:true});
        }
    },
  }
}
</script>
