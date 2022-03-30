<script context="module">
    export const load = async ({ params, fetch }) => {
        let currentCategory = params.category;
        const response = await fetch('/api/posts.json')
        const posts = await response.json();
        const matchingPosts = posts.posts.filter(post => post.categories.includes(currentCategory));
        currentCategory = currentCategory.split("_").map((item)=>item[0].toUpperCase() + item.slice(1)).join(" ")
        console.log("CATEGORY: ",currentCategory);
        return {props: {posts: matchingPosts ? matchingPosts : [],category: currentCategory}}
    }
</script>

<script>
    import Cards from '../_modules/cards.svelte';
    export let posts;
    export let category;
</script>
 
<Cards posts={posts} category={category}/>