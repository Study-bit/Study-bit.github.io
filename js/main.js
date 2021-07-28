let root = document.querySelector(".root")
console.log(Cache)
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