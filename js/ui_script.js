import {render} from "./main.js"
let con = document.querySelector(".con")
let item = document.querySelectorAll(".icons")
let demo = document.querySelector(".demo")
let page_data = ["./page_data/home_one.o2"]
let prev = null;
for (let i = 0;i < item.length ;i++)
{
item[i].addEventListener("click",event=>
{
	item[i].classList.add("anim")
	con.classList.add("anim_two")
	if (prev != null)
	{
		prev.classList.remove("icons-selected")
	}
	item[i].addEventListener( "animationend",  function() {

    	item[i].classList.remove("anim");    
    	con.classList.remove("anim_two")
		item[i].classList.add("icons-selected")
		prev = item[i]
		render(page_data[0])
    } );
})
}

function main()
{
	console.log("click")
}