function Counter() {
	count = 0;

	Add = () => {
		count += 1;
		Render('#Counter', Component());
	}

	Component = () => {
		return `
			<div id='Counter'>
				<h1>${count}</h1>
				<button onclick='Add()'>Add</button>
			</div>
		`;
	}

	return Component();
}