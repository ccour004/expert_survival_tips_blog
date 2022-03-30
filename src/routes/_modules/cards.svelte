<script>
    export let posts;
</script>
 
<div class="flex-container">
  {#if posts}
    {#each posts as post}
    <div class="card">
      <div class="card-body">
        <img alt={post.alt} class="custom-svg" src={`../../../static/icons/${post.icon}.svg?url`}/>
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
  {#if posts.length === 0}
    <div class="no-posts">No posts here.</div>
  {/if}
</div>

<style>
.custom-svg{
  width: 64px;
  height: 64px;
  filter: invert(19%) sepia(35%) saturate(3077%) hue-rotate(166deg) brightness(101%) contrast(102%);
}

.custom-read-more{
  background-color: #004d66;
  color: white;
}

.card-title{
  font-family: 'alkes';
  font-size: 2.5vmax;
}

.no-posts{
  font-family: 'alkes';
  padding-top: 30px;
  padding-bottom: 30px;
  font-size: 3.5vmax;
  text-align: center;
}

.card-text{
  font-size: 1.5vmax;
}

.card-body{
  display:flex;
  margin: 3%;
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
  background-color: #cccccc;
  width: 100%;
  padding-left: 10%;
  padding-right: 10%;
  justify-content: center;
}

@font-face {
    font-family: 'alkes';
    src: url('/fonts/AlkesDemo-Semibold.woff2') format('woff2'),
         url('/fonts/AlkesDemo-Semibold.woff') format('woff');
  }

a{color: black;}
a:link {text-decoration: none;}
a:visited {text-decoration: none;}
a:hover {text-decoration: none;}
a:active {text-decoration: none;}
</style>