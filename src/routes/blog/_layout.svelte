<script>
  export let name
  export let alt
  export let src
  export let video
</script>
  
<div class="flex-container">
  {#if name} <h1>{name}</h1> {/if}
  {#if src} <img alt={alt} src={'../' + src}/><br/> {/if}
  <p><slot/></p>
  {#if video} <iframe title={name} width="420" height="315" src={"https://www.youtube.com/embed/"+video}/> {/if}
</div>

<style>
  img{
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 70vh;
  }
  h1{
      font-family: 'pantonRustHeavy';
      text-align: center;
      font-size: 8vh;
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