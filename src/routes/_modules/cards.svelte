<script>
    export let posts;
</script>
 
<div class="flex-container">
  {#if posts}
    {#each posts as post}
        <div class="card ml-2 mt-2 text-light bg-dark">
            <a href={post.link}>
            {#if post.src}<img class="card-img-top" src={'../' + post.src} alt={post.alt}>{/if}
            {#if post.video} <img class="card-img-top" alt={post.alt} src={"https://img.youtube.com/vi/"+post.video+"/0.jpg"}>{/if}
            <div class="card-body">
            <h5 class="card-title">{post.name}</h5>
            <!--<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>-->
            <p class="card-text"><small class="text-muted">{post.published}</small>
            </p>
            </div>
            </a>
        </div>
    {/each}
  {/if}
</div>

<style>
  .card-img-top{
    display: block;
    max-width: 370px;
    max-height: 215px;
    width: auto;
    height: auto;
    margin-left: auto;
    margin-right: auto;
  }

  .card{
    max-width: 370px;
    //max-height: 215px;
  }

  .flex-container{
    display: flex;
    flex-direction: row;
    flex-flow: row wrap;
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  @font-face {
    font-family: 'pantonRustHeavy';
    src: url('/fonts/PantonRustHeavy-GrSh.woff2') format('woff2'),
         url('/fonts/PantonRustHeavy-GrSh.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  a{color: lightgrey;}
  a:link {text-decoration: none;}
  a:visited {text-decoration: none;}
  a:hover {text-decoration: none;}
  a:active {text-decoration: none;}
</style>