function addItem() {
	let input = document.getElementById("item");
	let itemText = input.value.trim();
	if (itemText === "") return;

	let list = document.getElementById("list");
	let li = document.createElement("li");

	li.innerHTML = `<span onclick="toggleComplete(this)">${itemText}</span>
			<button onclick="removeItem(this)">X</button>`;

	list.appendChild(li);
	input.value = "";
}

function toggleComplete(element) {
	element.classList.toggle("completed");
}

function removeItem(button) {
	button.parentElement.remove();
}

function clearList() {
	document.getElementById("list").innerHTML = "";
}

function handleKeyPress(event) {
	if (event.key === "Enter") {
		addItem();
	}
}
