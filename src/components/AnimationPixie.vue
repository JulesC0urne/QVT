<template>
    <div class="stage"></div>
</template>

<script>
import * as PIXI from "pixi.js"
import{COULEURS} from "@/utils/constants/constants"
export default {
    name: "animationPixie",

    data () {

        return {
            app : null , 
            colors : COULEURS , 
            numMaxParticle : 150 ,
            particles :[]
        };
    },
    mounted()
    {
        this.app = new PIXI.Application(
            {
                transparent : true ,
                antialias : true ,
                background: "white"
            }
        );
        this.$el.appendChild(this.app.view); 
        this.app.renderer.view.style.display= "block";
        this.app.renderer.autoresize =true ;
        this.app.renderer.resize(window.innerWidth, window.innerHeight) ; 
        this.app.ticker.add(()=>
        {this.update()
        })
    }, 
    methods: {
        update()
        {
            this.particles.map((p)  => {
                if(p.x < 0 || p.x > this.app.view.width  || p.y < 0 || p.y > this.app.view.height )
                {
                    p.x = Math.random() * this.app.view.width  + 25 ;
                    p.y = Math.random() * this.app.view.height + 25 ;
                    p.v= {
                    x : Math.random() * 10 - 5 ,
                    y : Math.random() * 10 - 5 
                }
                }
                else
                {
                    p.x += p.v.x;
                    p.y += p.v.y ;
                }

            })
            if(this.particles.length < this.numMaxParticle){
                let particle = new PIXI.Graphics();
                let rand = Math.floor(Math.random() * this.colors.length + 1);
                particle.beginFill("0x" + this.colors[rand-1]) ;
                particle.drawCircle(0, 0, 1 + Math.random() * 6 )
                particle.endFill();
                particle.x = Math.random() * this.app.view.width  + 25 ;
                particle.y = Math.random() * this.app.view.height + 25 ;
                particle.v= {
                    x : Math.random() * 10 - 5 ,
                    y : Math.random() * 10 - 5 
                }
                this.particles.push(particle); 
                this.app.stage.addChild(particle);
            }
        }
    }

}
</script>
<style>
.stage
{
 position: absolute;
 z-index: -1;
}
</style>
