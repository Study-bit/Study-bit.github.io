const cache = await caches.open("v1")
let root = document.querySelector(".root")
cache.add("./page_data/home_one.o2")

function render(name)
{
	cache.match(name).then(res=>
	{	
	res.text().then(text=>
	{
		root.innerHTML = text
	})
	})	
}

export {render}