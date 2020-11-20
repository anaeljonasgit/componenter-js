window.onload = () => Render('#App', App());

function Render(root, component) {
	if (typeof(root) == 'function') {
		document.querySelector(Root).innerHTML = root();
	} else {
		document.querySelector(root).innerHTML = component;
	}
}

function call(path) {
	let Component = document.createElement('script');
	Component.src = path+'.js';
	Component.onerror = () => {
		document.head.removeChild(Component);
		let NewComponent = document.createElement('script');
		NewComponent.src = path+'/index.js';
		document.head.appendChild(NewComponent);
	}
	document.head.appendChild(Component);
}

function style(path) {
	Component = document.createElement('link');
	Component.rel = 'stylesheet';
	Component.type = 'text/css';
	Component.href = path+'/style.css';
	document.head.appendChild(Component);
}

function $(element) {
	return document.querySelector(element);
}