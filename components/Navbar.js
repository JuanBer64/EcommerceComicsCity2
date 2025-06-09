function Navbar({ currentPage, setCurrentPage, cartCount }) {
    try {
        const [user, setUser] = React.useState(null);

        React.useEffect(() => {
            setUser(StorageUtils.getCurrentUser());
        }, [currentPage]);

        const navItems = [
            { id: 'home', label: 'Inicio', icon: 'fas fa-home' },
            { id: 'catalog', label: 'Catálogo', icon: 'fas fa-book-open' },
            { id: 'marvel', label: 'Marvel', icon: 'fas fa-mask' },
            { id: 'dc', label: 'DC', icon: 'fas fa-bolt' },
            { id: 'cart', label: 'Carrito', icon: 'fas fa-shopping-cart', requireAuth: true },
            { id: 'profile', label: 'Perfil', icon: 'fas fa-user', requireAuth: true }
        ];

        const handleNavClick = (item) => {
            if (item.requireAuth && !user) {
                setCurrentPage('login');
                return;
            }
            setCurrentPage(item.id);
        };

        const handleLogout = () => {
            StorageUtils.logout();
            setUser(null);
            setCurrentPage('home');
        };

        return (
            <nav data-name="navbar" data-file="components/Navbar.js" className="bg-white shadow-lg sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        <div 
                            className="flex items-center cursor-pointer"
                            onClick={() => setCurrentPage('home')}
                        >
                            <i className="fas fa-city text-2xl text-blue-600 mr-2"></i>
                            <span className="text-xl font-bold text-gray-800">Comics City</span>
                        </div>
                        
                        <div className="hidden md:flex items-center space-x-6">
                            {navItems.map(item => (
                                <button
                                    key={item.id}
                                    onClick={() => handleNavClick(item)}
                                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                        currentPage === item.id 
                                            ? 'text-blue-600 bg-blue-50' 
                                            : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                                    }`}
                                >
                                    <i className={item.icon}></i>
                                    <span>{item.label}</span>
                                    {item.id === 'cart' && cartCount > 0 && (
                                        <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center ml-1">
                                            {cartCount}
                                        </span>
                                    )}
                                </button>
                            ))}
                            
                            {user ? (
                                <div className="flex items-center space-x-2">
                                    <span className="text-sm text-gray-600">Hola, {user.name}</span>
                                    <button
                                        onClick={handleLogout}
                                        className="text-red-600 hover:text-red-800 text-sm"
                                    >
                                        Salir
                                    </button>
                                </div>
                            ) : (
                                <button
                                    onClick={() => setCurrentPage('login')}
                                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                                >
                                    Iniciar Sesión
                                </button>
                            )}
                        </div>

                        <div className="md:hidden">
                            <button className="text-gray-700">
                                <i className="fas fa-bars text-xl"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        );
    } catch (error) {
        console.error('Navbar component error:', error);
        reportError(error);
        return <div>Error loading navigation</div>;
    }
}

window.Navbar = Navbar;
