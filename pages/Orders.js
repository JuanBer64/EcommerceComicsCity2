function Orders() {
    try {
        const [orders, setOrders] = React.useState([]);

        React.useEffect(() => {
            setOrders(StorageUtils.getOrders());
        }, []);

        const formatDate = (dateString) => {
            return new Date(dateString).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        };

        const getStatusBadge = (status) => {
            const statusConfig = {
                confirmed: { color: 'bg-blue-100 text-blue-800', text: 'Confirmado' },
                shipped: { color: 'bg-yellow-100 text-yellow-800', text: 'En Camino' },
                delivered: { color: 'bg-green-100 text-green-800', text: 'Entregado' }
            };
            
            const config = statusConfig[status] || statusConfig.confirmed;
            return (
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${config.color}`}>
                    {config.text}
                </span>
            );
        };

        if (orders.length === 0) {
            return (
                <div data-name="orders-page" data-file="pages/Orders.js" className="fade-in">
                    <div className="max-w-4xl mx-auto px-4 py-16">
                        <div className="text-center">
                            <i className="fas fa-box text-6xl text-gray-300 mb-4"></i>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">No tienes pedidos aún</h2>
                            <p className="text-gray-600">Tus pedidos aparecerán aquí una vez que hagas tu primera compra</p>
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div data-name="orders-page" data-file="pages/Orders.js" className="fade-in">
                <div className="max-w-6xl mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-8">
                        <i className="fas fa-box mr-3"></i>
                        Mis Pedidos ({orders.length})
                    </h1>

                    <div className="space-y-6">
                        {orders.map(order => (
                            <div key={order.id} className="bg-white rounded-lg shadow-md p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800">
                                            Pedido #{order.id}
                                        </h3>
                                        <p className="text-gray-600">
                                            Realizado el {formatDate(order.orderDate)}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        {getStatusBadge(order.status)}
                                        <p className="text-xl font-bold text-green-600 mt-2">
                                            ${order.total}
                                        </p>
                                    </div>
                                </div>

                                <div className="border-t pt-4">
                                    <h4 className="font-medium text-gray-800 mb-3">Artículos:</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {order.items.map(item => (
                                            <div key={item.id} className="flex items-center space-x-3">
                                                <img 
                                                    src={item.cover} 
                                                    alt={item.title}
                                                    className="w-12 h-16 object-cover rounded"
                                                />
                                                <div>
                                                    <p className="font-medium text-sm">{item.title}</p>
                                                    <p className="text-gray-600 text-sm">{item.publisher}</p>
                                                    <p className="text-green-600 font-semibold">${item.price}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Orders component error:', error);
        reportError(error);
        return <div>Error loading orders page</div>;
    }
}

window.Orders = Orders;
