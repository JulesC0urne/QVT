<script>
import embed from 'vega-embed'
import { convertToJson } from '@/utils/chartbar.utils'
import {INDEX_FIRST_QUESTION} from '@/utils/constants/constants'

export default {
/* eslint-disable */
    name: 'ChartBar',
    props: {
        firstRaw: Array,
        index: Number,
        csv: Array,
    },
    data() {
  	return {
      title : ""
  	}
	},
    mounted () { // au chargement
        
    const store = useDataStore();
    const index = this.index + INDEX_FIRST_QUESTION;
    if (index >= store.getCSVData[0].length) return 

    this.title = this.firstRaw[index];
    const column = store.getColumnData(index)
    const result = store.getResultPerQuestion( column )
    
    const json = convertToJson( result, this.title)
      
      const barchar = {
        data: {
        values: json
      },
        mark: 'bar',
        encoding: {
          x: {field: 'number of reponses', type: 'quantitative'},
          y: {field: this.title, type: 'ordinal'}
        },
        width: 80, //largeur et hauteur du chart bar
        height: 80,
      };

      embed( `#${this.title}` , barchar,{actions:false} ); //desactiver le truc d'option vega
    }
}
</script>

<template>
    <div class="window">
        <div class="pov" style="display: block">
            <div class="row_pov" style="display: inline-block">
                <div id="MOY_POV" class="MOY_PGC"></div>
            </div>
            <div class="row_pgc" style="display: inline-block">
                <div id="MOY_PGC" class="MOY_PGC"></div>
                <div id="PGC2" class="PGC2"></div>
                <div id="PGC3" class="PGC3"></div>
                <div id="PGC4" class="PGC4"></div>
            </div>
            <div class="row_evpvp" style="display: inline-block">
                <div id="MOY_EVPVP" class="MOY_EVPVP"></div>
                <div id="EVPVP3" class="EVPVP3"></div>
                <div id="EVPVP4" class="EVPVP4"></div>
                <div id="EVPVP5" class="EVPVP5"></div>
            </div>
            <div class="row_just" style="display: inline-block">
                <div id="MOY_JUST" class="MOY_JUST"></div>
                <div id="JUST3" class="JUST3"></div>
                <div id="JUST4" class="JUST4"></div>
                <div id="JUST6" class="JUST6"></div>
            </div>
            <div class="row_reco" style="display: inline-block">
               <div id="MOY_RECO" class="MOY_RECO"></div>
               <div id="RECO1" class="RECO1"></div>
               <div id="RECO3" class="RECO3"></div>
               <div id="RECO5" class="RECO5"></div>
            </div>
            <div class="row_com" style="display: inline-block">
                <div id="MOY_COM" class="MOY_COM"></div>
                <div id="COM3" class="COM3"></div>
                <div id="COM4" class="COM4"></div>
                <div id="COM5" class="COM5"></div>
            </div>
            <div class="row_ppd" style="display: inline-block">
                <div id="MOY_PPD" class="MOY_PPD"></div>
                <div id="PPD1" class="PPD1"></div>
                <div id="PPD2" class="PPD2"></div>
                <div id="PPD3" class="PPD3"></div>
            </div>
             <div class="row_dl" style="display: inline-block">
                <div id="MOY_DL" class="MOY_DL"></div>
                <div id="DL3" class="DL3"></div>
                <div id="DL4" class="DL4"></div>
                <div id="DL5" class="DL5"></div>
            </div>
            <div class="row_cs" style="display: inline-block">
                 <div id="MOY_CS" class="MOY_CS"></div>
                 <div id="CSA5" class="CSA5"></div>
                   <div id="CSE4" class="CSE4"></div>
                   <div id="CSE5" class="CSE5"></div>
            </div>
        </div>
        <div class="pof" style="display: block">
            <div class="row_pof" style="display: inline-block">
               <div id="MOY_POF" class="MOY_CS"></div>
               <div id="POF1" class="POF1"></div>
               <div id="POF2" class="POF2"></div>
               <div id="POF3" class="POF3"></div>
            </div>
        </div>
        <div class="conf" style="display: block">
            <div class="row_conf" style="display: inline-block">
                <div id="MOY_CONF" class="MOY_CONF"></div>
                <div id="CONF1" class="CONF1"></div>
                <div id="CONF2" class="CONF2"></div>
                <div id="CONF3" class="CONF3"></div>
            </div>
        </div>
        <div class="equi" style="display: block">
            <div class="row_equi" style="display: inline-block">
                <div id="MOY_EQUI" class="MOY_EQUI"></div>
                <div id="EQUI1" class="EQUI1"></div>
                <div id="EQUI2" class="EQUI2"></div>
                <div id="EQUI3" class="EQUI3"></div>
            </div>
        </div>
        <div class="eng" style="display: block">
            <div class="row_moy_eng" style="display: inline-block">
               <div id="MOY_ENG" class="MOY_ENG"></div>
            </div>
            <div class="row1_eng" style="display: inline-block">
                <div id="ENG1" class="ENG1"></div>
                <div id="ENG2" class="ENG2"></div>
                <div id="ENG3" class="ENG3"></div>
             </div>
            <div class="row2_eng" style="display: inline-block">
                <div id="ENG4" class="ENG4"></div>
                <div id="ENG5" class="ENG5"></div>
                <div id="ENG6" class="ENG6"></div>
            </div>
        </div>
         <div class="croi" style="display: block">
            <div class="row_moy_croi" style="display: inline-block">
                <div id="MOY_CROI" class="MOY_CROI"></div>
            </div>
            <div class="row_moy_croivi" >
                <div id="MOY_CROI_VI" class="MOY_CROI_VI"></div>
            </div>
            <div class="row_moy_croiapp" style="display: inline-block">
                <div id="MOY_CROI_APP" class="MOY_CROI_APP"></div>
            </div>
            <div class="row1_croivi" style="display: inline-block">
                    <div id="CROI_VI1" class="CROI_VI1"></div>
                    <div id="CROI_VI2" class="CROI_VI2"></div>
            </div>
            <div class="row2_croivi" style="display: inline-block">
                    <div id="CROI_VI3" class="CROI_VI3"></div>
                    <div id="CROI_VI4" class="CROI_VI4"></div>
                    <div id="CROI_VI5" class="CROI_VI5"></div>
            </div>
            <div id="CROI_VI5" class="CROI_VI5"></div>
            <div class="row1_croiapp" style="display: inline-block">
                <div id="CROI_APP1" class="CROI_APP1"></div>
                <div id="CROI_APP2" class="CROI_APP2"></div>
            </div>
            <div class="row2_croiapp" style="display: inline-block">
                <div id="CROI_APP3" class="CROI_APP3"></div>
                <div id="CROI_APP4" class="CROI_APP4"></div>
                <div id="CROI_APP5" class="CROI_APP5"></div>
            </div>

        </div>
        <div class="ocbo" style="display: block">
            <div class="row_moy_ocbo" style="display: inline-block">
                <div id="MOY_OCBO" class="MOY_OCBO"></div>
            </div>
            <div class="row_moy_ocbi" style="display: inline-block">
                <div id="MOY_OCBI" class="MOY_OCBI"></div>
            </div>
            <div class="row1_ocbo" style="display: inline-block">
                <div id="OCBO1" class="OCBO1"></div>
                <div id="OCBO2" class="OCBO0"></div>
                <div id="OCBO3" class="OCBO3"></div>
                <div id="OCBO4" class="OCBO4"></div>
            </div>
            <div class="row2_ocbo" style="display: inline-block">
                <div id="OCBO5" class="OCBO5"></div>
                <div id="OCBO6" class="OCBO6"></div>
                <div id="OCBO7" class="OCBO7"></div>
                <div id="OCBO8" class="OCBO8"></div>
            </div>
        </div>
        <div class="row_ocbi" style="display: inline-block">
            <div class="row1_ocbi" style="display: inline-block">
                <div id="OCBI1" class="OCBI1"></div>
                <div id="OCBI2" class="OCBI0"></div>
                <div id="OCBI3" class="OCBI3"></div>
                <div id="OCBI4" class="OCBI4"></div>
            </div>
            <div class="row2_ocbi" style="display: inline-block">
                <div id="OCBI5" class="OCBI5"></div>
                <div id="OCBI6" class="OCBI6"></div>
                <div id="OCBI7" class="OCBI7"></div>
                <div id="OCBI8" class="OCBI8"></div>
            </div>
        </div>
        <div class="psyc" style="display: block">
            <div class="row_moy_psy" style="display: inline-block">
                <div id="MOY_PSYCAP" class="MOY_PSYCAP"></div>
            </div>
            <div class="row_psy_res" style="display: inline-block">
                <div id="MOY_PSYCRES" class="MOY_PSYCRES"></div>
                <div id="PSYC_RES1" class="PSYC_RES1"></div>
                <div id="PSYC_RES2" class="PSYC_RES2"></div>
                <div id="PSYC_RES3" class="PSYC_RES3"></div>
            </div>
            <div class="row_psy_opt" style="display: inline-block">
                <div id="MOY_PSYCOPT" class="MOY_PSYCOPT"></div>
                <div id="PSYC_OPT1" class="PSYC_OPT1"></div>
                <div id="PSYC_OPT2" class="PSYC_OPT2"></div>
            </div>
            <div class="row_psy_auto" style="display: inline-block">
                <div id="MOY_PSYCAUTO" class="MOY_PSYCAUTO"></div>
                <div id="PSYC_AUTO1" class="PSYC_AUTO1"></div>
                <div id="PSYC_AUTO2" class="PSYC_AUTO2"></div>
                <div id="PSYC_AUTO3" class="PSYC_AUTO3"></div>
            </div>
            <div class="row_psy_esp" style="display: inline-block">
                <div id="MOY_PSYCESP" class="MOY_PSYCESP"></div>
                <div id="PSYC_ESP1" class="PSYC_ESP1"></div>
                <div id="PSYC_ESP2" class="PSYC_ESP2"></div>
                <div id="PSYC_ESP3" class="PSYC_ESP3"></div>
            </div>
        </div>
        <div class="reste" style="display: block">
            <div class="row_intr" style="display: inline-block">
                <div id="INT_R" class="INT_R"></div>
            </div>
            <div class="row_sat1" style="display: inline-block">
                <div id="SAT1" class="SAT1"></div>
            </div>
        </div>
        <div class="vl1"></div>
        <div class="vl2"></div>
        <div class="hl1"></div>
    </div>
</template>
  
<style>
    .window{
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        padding: 10px;
        overflow-y: hidden;
        overflow-x: hidden;
    }
    .vl1{
        border-left: 4px solid black;
        height: 100%;
        position: absolute;
        left: 680px;
        top: 0;
    }

    .vl2{
            border-left: 4px solid black;
            height: 100%;
            position: absolute;
            left: 1390px;
            top: 0;
        }
    .row_sat1{
      position: absolute;
      top: 1050px;
      left: 1500px;
    }
    .row_intr{
       position: absolute;
       top: 1050px;
       left: 1900px;
    }
    .row_moy_psy{
       position: absolute;
       top: 730px;
       left: 1420px;
    }
    .row_psy_res{
        position: absolute;
       top: 530px;
       left: 1550px;
    }
    .row_psy_opt{
       position: absolute;
       top: 660px;
       left: 1550px;
    }
    .row_psy_auto{
       position: absolute;
       top: 790px;
       left: 1550px;
    }
    .row_psy_esp{
       position: absolute;
       top: 920px;
       left: 1550px;
    }
    .row1_ocbi{
       position: absolute;
       top: 270px;
       left: 1550px;
    }
     .row2_ocbi{
       position: absolute;
       top: 400px;
       left: 1550px;
    }
    .row1_ocbo{
       position: absolute;
       top: 10px;
       left: 1550px;
    }
     .row2_ocbo{
       position: absolute;
       top: 140px;
       left: 1550px;
    }
    .row_moy_ocbo{
        position: absolute;
        top: 80px;
        left: 1420px;
    }
    .row_moy_ocbi{
        position: absolute;
        top: 340px;
        left: 1420px;
    }
    .row_moy_croi{
        position: absolute;
        top: 850px;
        left: 700px;
     }
     .row_moy_croivi{
         position: absolute;
         top: 730px;
         left: 830px;
      }
      .row_moy_croiapp{
          position: absolute;
          top: 980px;
          left: 830px;
       }
    .row1_croiapp{
        position: absolute;
        top: 920px;
        left: 960px;
    }
    .row2_croiapp{
        position: absolute;
        top: 1050px;
        left: 960px;
    }
    .row1_croivi{
        position: absolute;
        top: 660px;
        left: 960px;
    }
    .row2_croivi{
        position: absolute;
        top: 790px;
        left: 960px;
    }
    .row_moy_eng{
        position: absolute;
        top: 470px;
        left: 700px;
    }

    .row1_eng{
        position: absolute;
        top: 400px;
        left: 830px;
    }
    .row2_eng{
            position: absolute;
            top: 530px;
            left: 830px;
    }
    .row_equi{
        position: absolute;
        top: 260px;
        left: 700px;
    }
    .row_conf{
        position: absolute;
        top: 135px;
        left: 700px;
    }
    .row_pof{
        position: absolute;
        top: 5px;
        left: 700px;
    }
    .row_pov{
       position: absolute;
       top: 460px;
       left: 5px;
    }
    .row_pgc{
       position: absolute;
       top: 5px;
       left: 140px;
    }
    .row_evpvp{
           position: absolute;
           top: 135px;
           left: 140px;
        }
    .row_reco{
       position: absolute;
       top: 270px;
       left: 140px;
    }
    .row_com{
       position: absolute;
       top: 400px;
       left: 140px;
        }
    .row_ppd{
       position: absolute;
       top: 530px;
       left: 140px;
    }
    .row_dl{
       position: absolute;
       top: 660px;
       left: 140px;
    }
    .row_cs{
       position: absolute;
       top: 790px;
       left: 140px;
    }
    .row_just{
       position: absolute;
       top: 920px;
       left: 140px;
    }
</style>

