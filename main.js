function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}

if(detectMob()==false)
{
    let heading = document.createElement("h1")
    heading.textContent = "this site is not made for pc"
    document.body.innerHTML = null
    document.body.appendChild(heading)

}