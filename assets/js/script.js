

// Replace pre blocks with code editor blocks
Array.from(document.getElementsByClassName("language-scpleditor")).forEach(elem => {
	let preblock = elem.parentNode
	let container = preblock.parentNode;
	
	// create code editor block
	let editor = document.createElement("div");
	editor.classList.add("code");
	let textarea = document.createElement("textarea");
	textarea.setAttribute("autosize", true);
	textarea.setAttribute("rows", 8);
	textarea.value = elem.textContent;
	editor.appendChild(textarea);
	let enableJavascriptOverlay = document.createElement("div");
	enableJavascriptOverlay.classList.add("enablejavascript");
	enableJavascriptOverlay.textContent = "Enable javascript to edit this text";
	editor.appendChild(enableJavascriptOverlay);
	let tryitbtn = document.createElement("a");
	tryitbtn.classList.add("tryitbtn");
	tryitbtn.setAttribute("href", "https://editor.scpl.dev/?scpl="+encodeURIComponent(textarea.value));
	tryitbtn.textContent = "Try It!";
	editor.appendChild(tryitbtn);
	
	container.replaceChild(editor, preblock);
});

// Autosizing for code editor blocks
function autosize(t){t.setAttribute("rows", Math.max(t.value.split(`\n`).length, 5));}

Array.from(document.getElementsByClassName("code")).forEach(el => {
	let t = el.children[0];
	let tryitbtn = el.children[2];
	autosize(t);
	t.removeAttribute("disabled");
	t.addEventListener("keyup", () => {
		autosize(t);
		tryitbtn.setAttribute("href", "https://editor.scpl.dev/?scpl="+encodeURIComponent(t.value))
	});
})

// Fix for fragment links breaking page scrolling
setTimeout(() => {
	let intendedScroll = document.getElementById("fragmentfix").scrollTop;
	document.getElementById("fragmentfix").scrollTop = 0;
	window.scrollTo(0, intendedScroll);
}, 0)