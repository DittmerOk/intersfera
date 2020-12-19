var showSideBlocks =  (curr, idx) => {
	document.querySelector("#switch"+(idx+1)).classList.remove("hide");
}

var hideOthersSideBlocks = (ownIdx) => {	//ownIdx - index of shown element
	document.querySelectorAll(".content").forEach((curr,idx) => {
		if(ownIdx != idx) curr.classList.add("hide"); //hide all except shown
	})
}


document.querySelectorAll(".anchors").forEach((curr, idx) => {
	curr.onclick = () => {
		showSideBlocks(curr, idx)
		hideOthersSideBlocks(idx)
	}
})