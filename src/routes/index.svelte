<script context="module">
    export const load = async ({ fetch }) => {
        const allPosts = await fetch('/api/posts.json');
        const posts = await allPosts.json();    
        console.log("INDEX POSTS!");
        return {props: {'posts':posts.posts}}
    }
</script>

<script>
    import Cards from './_modules/cards.svelte';
    export let posts;
</script>
 
<Cards posts={posts}/>