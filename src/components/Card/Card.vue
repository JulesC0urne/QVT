<template>
    <div class="card">
        <img :src="orga.imgSource" :alt="nomOrganisation">
        <span>{{ orga.nomOrganisation }}</span>  
        <div class="card-description">{{ orga.description }}</div>
    </div>
</template>

<script>
    export default {
        name: 'CardOrg',
        props: ['orga'],
    }
  
</script>

<style>
    .card{
        width: min-content;
        display: flex ;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 2em;
        }

    .card img{

        flex-basis: 100% ;
        margin: 1em;
        
       }
    .card span {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 26px;
        color: #300A44;
       }
       .card-description
       {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 24px;
        color: #54565A;
       }

</style>