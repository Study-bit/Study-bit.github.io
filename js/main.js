const cache = await caches.open("v1")
let root = document.querySelector(".root")
let page_data = ["./page_data/home_one.o2","./page_data/home_two.o2","./page_data/home_three.o2","./page_data/skill.o2","./page_data/about.o2"]
cache.addAll(page_data)

function render(index)
{
	cache.match(page_data[index]).then(res=>
	{	
	res.text().then(text=>
	{
		root.innerHTML = text
	})
	})	
}

self.addEventListener('activate', (event) => {
  var cacheKeeplist = ['v1'];

  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (cacheKeeplist.indexOf(key) === -1) {
          return caches.delete(key);
        }
      }));
    })
  );
});
export {render}

