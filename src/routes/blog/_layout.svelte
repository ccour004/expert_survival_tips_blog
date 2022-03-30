<script>
  export let name
  export let alt
  export let src
  export let video
  export let icon
</script>
  
<div class="flex-container">
  {#if icon} <img alt={alt} class="custom-svg" src={`../../../static/icons/${icon}.svg?url`}/> {/if}
  {#if name} <h1>{name}</h1> {/if}
  <p><slot/></p>
  {#if video} <iframe title={name} width="420" height="315" src={"https://www.youtube.com/embed/"+video}/> {/if}
</div>

<style>
  img{
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 128px;
      height: 128px;
      padding-left: 10px;
      padding-top: 30px;
      padding-bottom: 15px
      /*width: 40vmax;*/
  }

  h1{
      font-family: 'alkes';
      text-align: center;
      font-size: 4vmax;
  }

  a{
    color: blue;
  }

  p{
      box-sizing: border-box; width: 100%; padding: 10px;
      font-size: 1.3em;
  }

  iframe{
      display: block;
      max-width: 100%;
      margin-left: auto;
      margin-right: auto;      
  }

  .flex-container{
      overflow-x: hidden; 
  }
</style>