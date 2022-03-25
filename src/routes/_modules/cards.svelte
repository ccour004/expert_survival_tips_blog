<script>
    export let posts;
</script>
 
<div class="flex-container">
  {#if posts}
    {#each posts as post}
    <div class="card">
      <div class="card-body">
        <i class={"bi-"+post.icon+" custom-post-logo"}/>
        <div class="custom-post-content">
          <h5 class="card-title">{post.name}</h5>
          <p class="card-text">{post.snippet ? 
            post.snippet : "With supporting text below as a natural lead-in to additional content."}</p>
          <a href={post.link} class="btn custom-read-more">Read More</a>
        </div>
      </div>
    </div>
    {/each}
  {/if}
</div>

<style>
  .custom-read-more{
    background-color: #b3ecff
  }

  .card-title{
    font-family: 'pantonRustHeavy';
    font-size: 2.5vmax;
  }

  .card-text{
    font-size: 1.5vmax;
  }

.card-body{
  display:flex;
  margin: 3%;
}

.custom-post-logo{
  font-size: 4em; 
  color: cornflowerblue;
}

.custom-post-content{
  padding-left: 2em;
  width: 100%;
  overflow-wrap: anywhere;
 
}

  .flex-container{
    display: flex;
    gap: 20px;
    flex-direction: column;
    width: 100%;
    padding-left: 10%;
    padding-right: 10%;
    justify-content: center;
  }

  @font-face {
    font-family: 'pantonRustHeavy';
    src: url('/fonts/PantonRustHeavy-GrSh.woff2') format('woff2'),
         url('/fonts/PantonRustHeavy-GrSh.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  a{color: black;}
  a:link {text-decoration: none;}
  a:visited {text-decoration: none;}
  a:hover {text-decoration: none;}
  a:active {text-decoration: none;}
</style>