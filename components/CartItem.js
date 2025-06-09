function CartItem({ item, onRemove }) {
    try {
        const formatDate = (dateString) => {
            return new Date(dateString).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        };

        return (
            <div data-name="cart-item" data-file="components/CartItem.js" className="flex items-center bg-white p-4 rounded-lg shadow-md">
                <img 
                    src={item.cover} 
                    alt={item.title}
                    className="w-16 h-20 object-cover rounded mr-4"
                />
                
                <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.publisher}</p>
                    <p className="text-sm text-gray-500">
                        Fecha estimada: {formatDate(item.releaseDate)}
                    </p>
                </div>
                
                <div className="text-right">
                    <p className="text-lg font-bold text-green-600">${item.price}</p>
                    <button
                        onClick={() => onRemove(item.id)}
                        className="text-red-600 hover:text-red-800 mt-2"
                    >
                        <i className="fas fa-trash"></i> Eliminar
                    </button>
                </div>
            </div>
        );
    } catch (error) {
        console.error('CartItem component error:', error);
        reportError(error);
        return <div>Error loading cart item</div>;
    }
}

window.CartItem = CartItem;
