<script>
  export let name
  export let alt
  export let video
  export let icon
</script>
  
<div class="flex-container">
  {#if icon} <img alt={alt} class="custom-svg" src={`/icons/${icon}.svg?url`}/> {/if}
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
      font-family: 'CooperHewitt-Medium';
      text-align: center;
      font-size: 4vmax;
  }

  p{
      font-family: 'CooperHewitt-Light';
      box-sizing: border-box; width: 100%; padding: 10px;
      font-size: 2.5vmax;
  }

  .flex-container{
      margin-left: 7vw;
      margin-right: 7vw;
      overflow-x: hidden; 
  }
</style>