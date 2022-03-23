
<script>
    import Footer from '../_modules/footer.svelte';
    import Header from '../_modules/header.svelte';
    import posts from './posts.json';

</script>

<Header/>

<div class="card-columns">
    {#each posts as post}
        <a href={post.link}>
            <div class="card">
            <img class="card-img-top" src={post.src} alt={post.alt}>
            <div class="card-body">
            <h5 class="card-title">{post.name}</h5>
            {#if post.video} <img class="card-img-bottom" alt={post.alt} src={"https://img.youtube.com/vi/"+post.video+"/0.jpg"}>{/if}
            <!--<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>-->
            <p class="card-text"><small class="text-muted">{post.published}</small>
            </p>
            </div>
        </div>
        </a>
    {/each}
    </div>

<Footer/>

<style>
  a{color: black;}
  a:link {text-decoration: none;}
  a:visited {text-decoration: none;}
  a:hover {text-decoration: none;}
  a:active {text-decoration: none;}
</style>