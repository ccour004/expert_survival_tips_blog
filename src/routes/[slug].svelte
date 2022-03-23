<script>
    import Footer from '../_modules/footer.svelte';
    import Header from '../_modules/header.svelte';
    import { page } from '$app/stores';
    import posts from './posts.json';
    import { onMount } from 'svelte';

    let post,postData;
    onMount(async ()=>{
        console.log("ONMOUNT!");
        post = posts.find((val)=>val.link === $page.params.slug);
        console.log("POST: ",post);
        if(!post.video){
            console.log("POST FETCH: ",'../__posts/' + post.link + ".svelte");
            postData = (await import('../__posts/' + post.link + ".svelte")).default;
            console.log("POST DATA: ",postData);
        }
    });
</script>

{#if post}
    <Header/>

    <h1>{post.name}</h1>

    <img alt={post.alt} src={post.src}/><br/>
  
    {#if postData}<p>
        <svelte:component this={postData}/>
    </p>{/if}
    {#if post.video} <iframe title={post.name} width="420" height="315" src={"https://www.youtube.com/embed/"+post.video}/> {/if}

    <Footer/>
{/if}

<style>
    img{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 40%;
    }
    h1{
        text-align:center;
        font-size: 4em;
    }

    p{
        padding-left: 31%;
        padding-right: 31%;
        font-size: 1.3em;
    }

    iframe{
        display: block;
        margin-left: auto;
        margin-right: auto;      
    }
</style>