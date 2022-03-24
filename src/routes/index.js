export const get = async () => {
	const allPostFiles = import.meta.glob('./blog/*.md')
	const iterablePostFiles = Object.entries(allPostFiles)
  
	const allPosts = await Promise.all(
	  iterablePostFiles.map(async ([path, resolver]) => {
		const { metadata } = await resolver()
		const postPath = path.slice(2, -3)
		return {...metadata,'link':path.replace(".md","")}
	  })
	)
  
	/*const sortedPosts = allPosts.sort((a, b) => {
	  return new Date(b.date) - new Date(a.date)
	})*/
	//console.log("AllPosts: ",{body:{'allPosts':allPosts}})
	return {
		body:{'allPosts':allPosts}
	}
  }