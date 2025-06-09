function ComicCard({ comic, onAddToCart }) {
    try {
        const [isAdding, setIsAdding] = React.useState(false);

        const handleAddToCart = async () => {
            setIsAdding(true);
            const success = StorageUtils.addToCart(comic);
            
            if (success) {
                onAddToCart();
                setTimeout(() => setIsAdding(false), 1000);
            } else {
                alert('Este cómic ya está en tu carrito');
                setIsAdding(false);
            }
        };

        const formatDate = (dateString) => {
            return new Date(dateString).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        };

        return (
            <div data-name="comic-card" data-file="components/ComicCard.js" className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
                <div className="relative">
                    <img 
                        src={comic.cover} 
                        alt={comic.title}
                        className="w-full h-64 object-cover"
                    />
                    <div className={`absolute top-2 right-2 px-2 py-1 rounded text-xs font-semibold ${
                        comic.publisher === 'Marvel' ? 'bg-red-600 text-white' : 'bg-blue-600 text-white'
                    }`}>
                        {comic.publisher}
                    </div>
                </div>
                
                <div className="p-4">
                    <h3 className="font-bold text-lg mb-2 text-gray-800">{comic.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{comic.description}</p>
                    <div className="flex justify-between items-center mb-3">
                        <span className="text-2xl font-bold text-green-600">${comic.price}</span>
                        <span className="text-sm text-gray-500">
                            <i className="fas fa-calendar mr-1"></i>
                            {formatDate(comic.releaseDate)}
                        </span>
                    </div>
                    
                    <button
                        onClick={handleAddToCart}
                        disabled={isAdding}
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
                    >
                        {isAdding ? (
                            <span>
                                <i className="fas fa-spinner loading-spinner mr-2"></i>
                                Agregando...
                            </span>
                        ) : (
                            <span>
                                <i className="fas fa-cart-plus mr-2"></i>
                                Agregar al Carrito
                            </span>
                        )}
                    </button>
                </div>
            </div>
        );
    } catch (error) {
        console.error('ComicCard component error:', error);
        reportError(error);
        return <div>Error loading comic card</div>;
    }
}

window.ComicCard = ComicCard;
