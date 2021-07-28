import {render} from "./main.js"
render(0)
let con = document.querySelector(".con")
let item = document.querySelectorAll(".icons")
let demo = document.querySelector(".demo")
let root = document.querySelector(".root")
let prev = item[0];
item[0].classList.add("icons-selected")
let num =0;
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
		switch(i)
		{
			case 0:
				num = 0
				break
			case 1:
				num = 3
				break
			case 2:
				num = 4
				break
		}
		render(num)
    } );
})
}
let touchstartX = 0;
let touchendX = 0;

function handleGesture() {
  if (touchendX < touchstartX)
  {
  	if(touchstartX - touchendX > 200)
  	{
  		num++
  		if(num ==5)
  		{
  			num--
  		}
  		setNav(num)
  		render(num)
  	}
  }
  if (touchendX > touchstartX)
  {
  	if(touchstartX - touchendX < -200)
  	{
  		num--
  		if(num == -1)
  		{
  			num++
  		}
  		setNav(num)
  		render(num)
  	}
  }
}

document.body.addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenY;
});

document.body.addEventListener('touchmove',e=>
{
	root.style.filter = "blur("+4+"px)"
})

document.body.addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenY;
  root.style.filter = null	
  handleGesture();
});

function setNav(num)
{
	switch(num)
	{
		case 0:
			prev.classList.remove("icons-selected")
			item[0].classList.add("icons-selected")
			prev = item[0]
			break;

		case 3:
			prev.classList.remove("icons-selected")
			item[1].classList.add("icons-selected")
			prev = item[1]
			break;
		case 4:
			prev.classList.remove("icons-selected")
			item[2].classList.add("icons-selected")
			prev = item[2]
			break;
	}
}

let test=()=>
{
	console.log("this")
}