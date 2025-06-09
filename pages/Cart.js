function Cart({ onNavigate }) {
    try {
        const [cartItems, setCartItems] = React.useState([]);
        const [isCheckingOut, setIsCheckingOut] = React.useState(false);

        React.useEffect(() => {
            setCartItems(StorageUtils.getCart());
        }, []);

        const handleRemoveItem = (comicId) => {
            StorageUtils.removeFromCart(comicId);
            setCartItems(StorageUtils.getCart());
        };

        const calculateTotal = () => {
            return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
        };

        const handleCheckout = async () => {
            if (cartItems.length === 0) return;
            
            setIsCheckingOut(true);
            
            const orderData = {
                items: cartItems,
                total: calculateTotal(),
                customerInfo: window.MOCK_USER
            };

            const order = StorageUtils.addOrder(orderData);
            
            if (order) {
                alert('¡Pedido confirmado! Revisa la sección "Mis Pedidos" para más detalles.');
                setCartItems([]);
                onNavigate('orders');
            }
            
            setIsCheckingOut(false);
        };

        if (cartItems.length === 0) {
            return (
                <div data-name="cart-page" data-file="pages/Cart.js" className="fade-in">
                    <div className="max-w-4xl mx-auto px-4 py-16">
                        <div className="text-center">
                            <i className="fas fa-shopping-cart text-6xl text-gray-300 mb-4"></i>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Tu carrito está vacío</h2>
                            <p className="text-gray-600 mb-8">Explora nuestro catálogo y agrega algunos cómics</p>
                            <button 
                                onClick={() => onNavigate('home')}
                                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Explorar Catálogo
                            </button>
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div data-name="cart-page" data-file="pages/Cart.js" className="fade-in">
                <div className="max-w-4xl mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-8">
                        <i className="fas fa-shopping-cart mr-3"></i>
                        Mi Carrito ({cartItems.length} artículos)
                    </h1>

                    <div className="space-y-4 mb-8">
                        {cartItems.map(item => (
                            <CartItem 
                                key={item.id} 
                                item={item} 
                                onRemove={handleRemoveItem}
                            />
                        ))}
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-xl font-semibold">Total:</span>
                            <span className="text-2xl font-bold text-green-600">${calculateTotal()}</span>
                        </div>
                        
                        <button
                            onClick={handleCheckout}
                            disabled={isCheckingOut}
                            className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
                        >
                            {isCheckingOut ? (
                                <span>
                                    <i className="fas fa-spinner loading-spinner mr-2"></i>
                                    Procesando...
                                </span>
                            ) : (
                                <span>
                                    <i className="fas fa-credit-card mr-2"></i>
                                    Confirmar Pedido
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Cart component error:', error);
        reportError(error);
        return <div>Error loading cart page</div>;
    }
}

window.Cart = Cart;
