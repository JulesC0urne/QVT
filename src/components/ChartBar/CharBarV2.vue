<template>
  <div :id="this.$props.questionID" v-if="!this.$props.questionID.includes('NO_MOY')"></div>
  <div class="not-ready" v-if="this.$props.questionID.includes('NO_MOY')"></div>
</template>

<script>

import embed from 'vega-embed';
import { convertToJson } from '@/utils/chartbar.utils'
import { useDataStore } from "@/store/datastore";


export default {
  name: "CharBarV2",
  props: ['questionID'],
  // setup() receives props as the first argument.
  setup ( props ) {
    const store = useDataStore()
    const questionID = props.questionID.slice()
    if (!props.questionID.includes("NO_MOY")) {
      const response = store.getResponseByID( props.questionID, store.getCSVData)
      const json = convertToJson( response , props.questionID )
      const barchar = {
          data: {
          values: json
      },
          title: questionID.includes('MOY') ? questionID.slice(0,7) : questionID,
            mark: 'bar',
            encoding: {
              y: {field: 'nb of reponses', type: 'quantitative', title: "", scale: {domain: [0,275]} },
            x: {field: props.questionID, type: 'ordinal', orient: "vertical", title: "", axis: {labelAngle: 0}}
          },
          
          width: 80,
          height: 80,
          
        };
      embed( `#${props.questionID}` , barchar, {actions:false});
    }
    
  },

}
</script>

<style scoped>
.not-ready {
  width: 104px;
  height: 114px;
  background-color: #2c3e50;
}
</style>