let sect = document.getElementById("sect")
let input = document.getElementById("input")
let btn = document.getElementById("btn")
let clearbtn = document.getElementById("clearbtn")


btn.addEventListener("click", ()=> {
	let val = input.value
	
	if (!val == "") {
		let shit = document.createElement("div")
		shit.style.marginTop = 10 + "px"
		shit.style.width = 600 + "px"

		let h1 = document.createElement("h1")
		h1.innerHTML = val

		let remove = document.createElement("button")
		remove.innerHTML = "X"

		let done = document.createElement("button")
		done.innerHTML = "Done"

		shit.append(h1)
		shit.append(remove)
		shit.append(done)
		sect.append(shit)

		remove.addEventListener("click", (e)=> {
			e.target.parentElement.remove()
		})
		
		done.addEventListener("click", ()=> {
			h1.style.textDecoration = "line-through"
		})

	}
})