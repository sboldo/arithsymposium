{
		// all this just to highlight the current menu entry.
		// Otherwise we could do it completely statically

// Full ARITH pages:
    let menufiles=["index.html","committees.html","bylaws.html","archives.html","memoriam.html"];
    let menuentries=["Main page","Committees","Bylaws","Archives","In memory"];

		let url = window.location.pathname;
		let filename = url.substring(url.lastIndexOf('/')+1);
		let navbar = ``;
		for(i=0; i<menufiles.length; i++) {
				navbar+= `<a href="` + menufiles[i] + `"` ;
				if (filename==menufiles[i]) {
						navbar+= `class="current"`
				}
				navbar+=` > ` + menuentries[i]  + `</a>`;
		}

		let oldelem = document.querySelector("script#replace_with_navbar");
		let newelem = document.createElement("div");
		newelem.innerHTML = navbar;
		oldelem.parentNode.replaceChild(newelem,oldelem);
}


