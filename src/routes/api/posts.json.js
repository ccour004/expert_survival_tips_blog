export const get = async ({params}) => {
	const allPostFiles = import.meta.glob('../blog/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);
	const posts = await Promise.all(
	  iterablePostFiles.map(async ([path, resolver]) => {
		const { metadata } = await resolver()
		return {...metadata,'link':path.slice(2, -3)}
	  })
	)
	console.log("POSTS: ",posts);
	return {
		body:{posts}
	}
}