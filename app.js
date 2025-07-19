function App() {
    try {
        const [currentPage, setCurrentPage] = React.useState('home');
        const [cartCount, setCartCount] = React.useState(0);
        const [loginMessage, setLoginMessage] = React.useState('');

        React.useEffect(() => {
            updateCartCount();
        }, []);

        const updateCartCount = () => {
            const cart = StorageUtils.getCart();
            setCartCount(cart.length);
        };

        const handleAddToCart = () => {
            updateCartCount();
        };

        const handleNavigate = (page, message = '') => {
            setCurrentPage(page);
            if (message) {
                setLoginMessage(message);
            } else {
                setLoginMessage('');
            }
        };

        const renderCurrentPage = () => {
            switch (currentPage) {
                case 'home':
                    return <Home onNavigate={handleNavigate} onAddToCart={handleAddToCart} />;
                case 'catalog':
                    return <Catalog />;
                case 'marvel':
                    return <Marvel onAddToCart={handleAddToCart} onNavigate={handleNavigate} />;
                case 'dc':
                    return <DC onAddToCart={handleAddToCart} onNavigate={handleNavigate} />;
                case 'cart':
                    return <Cart onNavigate={handleNavigate} />;
                case 'profile':
                    return <Profile onNavigate={handleNavigate} />;
                case 'login':
                    return <Login onNavigate={handleNavigate} loginMessage={loginMessage} />;
                case 'search':
                    return <Search onNavigate={handleNavigate} onAddToCart={handleAddToCart} />;
                default:
                    return <Home onNavigate={handleNavigate} onAddToCart={handleAddToCart} />;
            }
        };

        return (
            <div data-name="app" data-file="app.js" className="min-h-screen bg-gray-50">
                <Navbar 
                    currentPage={currentPage} 
                    setCurrentPage={setCurrentPage}
                    cartCount={cartCount}
                />
                <main className="min-h-screen">
                    {renderCurrentPage()}
                </main>
                <Footer />
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-red-600 mb-4">Error de Aplicación</h1>
                    <p className="text-gray-600">Ha ocurrido un error inesperado. Por favor, recarga la página.</p>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
