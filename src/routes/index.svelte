
<script>
    import Footer from '../_modules/footer.svelte';
    import Header from '../_modules/header.svelte';
    import posts from './posts.json';
</script>

<Header/>

<ul>
    {#each posts as post}
        <li><a href="{post.link}">{post.name}</a></li>
    {/each}
</ul>
<Footer/>