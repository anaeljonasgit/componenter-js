call('components/Navbar');
call('components/Counter');

function App() {
	return (
		Navbar()+
		Counter()
	);
}