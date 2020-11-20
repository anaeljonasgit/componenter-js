call('components/Navbar');
call('components/Session');

function App() {
	return (
		Navbar()+
		Session({ title: 'Welcome to my site!' })+
		Session({ title: 'Componenter.js' })+
		Session({ title: 'For every HTML sites!' })+
		Session({ title: 'Without React' })
	);
}