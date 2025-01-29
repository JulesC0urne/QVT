
<template>
  <div v-if="this.csv.length === 0">
  
    <!-- Sélection du fichier à parser -->
    <div class="onboarding1">
      <AnimationPixieVue />
      <div class="onBoarding-appname">
      {{ APPNAME }}
       </div>
      <div class="onBoarding-btn">
      <ButtonCSV identifiant="input" nom="data 1" /> 
      <ButtonCSV identifiant="input1" nom="data 2" /> 
    </div>
    </div>
  
    <div class="onBoarding-card">
      <div v-for="(organisation,index ) in ORGANISATIONS" :key="index" >
      <Card :orga="organisation" />
    </div>
    </div>
 
  </div>



  <!-- Affichage des graphiques -->
  <div v-if="this.csv.length > 0" class="char_bar_panel">
    <div>
      <div v-for="(category, index) in charGroups[0]" :key="index" class="categories_panel">
        <CharBarGroup :category=category :csv=this.csv />
      </div>
    </div>
    <div>
      <div v-for="(category, index) in charGroups[1]" :key="index" class="categories_panel_md">
        <CharBarGroup :category=category :csv=this.csv />
      </div>
    </div>
    <div>
      <div v-for="(category, index) in charGroups[2]" :key="index" class="categories_panel_large">
        <CharBarGroup :category=category :csv=this.csv />
      </div>
      <div>
        <CharBarGroup :category="charGroups[3]" :csv=this.csv />
      </div>
    </div>
  </div>
</template>

<script>
import { INDEX_FIRST_QUESTION, ORGANISATIONS , APPNAME } from '@/utils/constants/constants'
import {getAllCategory, getAllMeans, parseXY} from '@/utils/parser.utils'
import CharBarGroup from "@/components/CharBarGroup/CharBarGroup";

import {useDataStore} from "@/store/datastore";
import ButtonCSV from '@/components/button/ButtonCSV.vue';
import Card from '@/components/Card/Card.vue';
import AnimationPixieVue from '@/components/AnimationPixie.vue';

export default {
  name: 'OnBoarding',
  props: { },
  components: {
    CharBarGroup,
    ButtonCSV,
    Card,
    AnimationPixieVue
},
  data() {
    return {
      listofp : [],
      csv: [],
      categories: [],
      means: [],
      INDEX_FIRST_QUESTION: INDEX_FIRST_QUESTION,
      charGroups: [] ,
      ORGANISATIONS : ORGANISATIONS,
      APPNAME: APPNAME,
    }
  },

  mounted () { // au chargement
    const store = useDataStore()

    const file = document.getElementById( 'input' )
    file.addEventListener( 'change', async ( e ) => {

      const file = e.target.files[ 0 ]
      const text = await file.text()
      // Store parser csv data from text file

      store.initStore(text)
      this.csv = store.getCSVData;

      this.categories = getAllCategory(this.csv)
      this.means = getAllMeans(this.csv)

      this.charGroups.push(this.categories.slice(0, 8))
      this.charGroups.push(this.categories.slice(8, 13))
      this.charGroups.push(this.categories.slice(13, 20))
      this.charGroups.push(this.categories.slice(20, 23))
    })

    const tt = document.getElementById( 'input1' )
    tt.addEventListener( 'change', async ( e ) => {
      const amazing = e.target.files[ 0 ]
      const toto = await amazing.text()
      const testdemort = parseXY(toto);
      console.log(testdemort)
      store.setCSVDataBis(testdemort)
    })


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h3 {
  margin: 10px 0 0;
}

.char_bar_panel {
  display: flex;
  justify-content: center;
}

.categories_panel {
  min-width: 480px;
}

.categories_panel_md {
  width: 585px;
}

.categories_panel_large {
  width: 100%;
}

a {
  color: #42b983;
}
 .onboarding1{
  width:100%;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content:space-evenly;
  align-items:center;
}
.onBoarding-btn {
  margin: 0 3em 8em;
  width: 50%;
  display: flex;
  flex-direction: row ;
  cursor : pointer ;
  justify-content: space-between;
}
.onBoarding-card
{
  margin: 0 3em 2em;
  display: flex;
  flex-direction: row ;
  justify-content: center;

}
.onBoarding-appname
{
  width: 90%;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 6.4285714286rem;
  line-height: 1.03;
  margin: 0 2em 0.4em;
  color: #300A44;
}
</style>
