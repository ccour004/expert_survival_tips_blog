<script context="module">
    export const load = async ({ params, fetch }) => {
        const currentCategory = params.category;
        const response = await fetch('/api/posts.json')
        const posts = await response.json();
        const matchingPosts = posts.posts.filter(post => post.categories.includes(currentCategory));
        console.log("MATCHING POSTS:",matchingPosts);
        return {props: {posts: matchingPosts ? matchingPosts : []}}
    }
</script>

<script>
    import Cards from '../_modules/cards.svelte';
    export let posts;
</script>
 
<Cards posts={posts}/>