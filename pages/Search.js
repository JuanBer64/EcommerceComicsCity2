function Search({ onNavigate, onAddToCart }) {
    try {
        const [searchTerm, setSearchTerm] = React.useState('');
        const [filteredComics, setFilteredComics] = React.useState([]);
        const [showFilters, setShowFilters] = React.useState(false);
        const [filters, setFilters] = React.useState({
            publisher: 'all',
            priceMin: '',
            priceMax: '',
            month: 'all'
        });

        React.useEffect(() => {
            // Obtener el término de búsqueda desde la variable global
            const currentTerm = window.currentSearchTerm || '';
            setSearchTerm(currentTerm);
        }, []);

        React.useEffect(() => {
            if (searchTerm) {
                applyFilters();
            }
        }, [searchTerm, filters]);

        const applyFilters = () => {
            if (!searchTerm) return;
            
            let results = window.MOCK_COMICS.filter(comic => 
                comic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                comic.description.toLowerCase().includes(searchTerm.toLowerCase())
            );

            if (filters.publisher !== 'all') {
                results = results.filter(comic => 
                    comic.publisher.toLowerCase() === filters.publisher.toLowerCase()
                );
            }

            if (filters.priceMin) {
                results = results.filter(comic => comic.price >= parseFloat(filters.priceMin));
            }

            if (filters.priceMax) {
                results = results.filter(comic => comic.price <= parseFloat(filters.priceMax));
            }

            if (filters.month !== 'all') {
                results = results.filter(comic => comic.releaseDate.startsWith(filters.month));
            }

            setFilteredComics(results);
        };

        const handleFilterChange = (filterType, value) => {
            setFilters(prev => ({
                ...prev,
                [filterType]: value
            }));
        };

        const clearFilters = () => {
            setFilters({
                publisher: 'all',
                priceMin: '',
                priceMax: '',
                month: 'all'
            });
        };

        const handleNewSearch = (newTerm) => {
            setSearchTerm(newTerm);
            window.currentSearchTerm = newTerm;
        };

        return (
            <div data-name="search-page" data-file="pages/Search.js" className="fade-in">
                <SearchBar 
                    onSearch={handleNewSearch} 
                    onToggleFilters={() => setShowFilters(!showFilters)}
                    showFilters={showFilters}
                />

                {showFilters && (
                    <div className="bg-gray-50 border-b">
                        <div className="max-w-7xl mx-auto px-4 py-6">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Editorial</label>
                                    <select 
                                        value={filters.publisher}
                                        onChange={(e) => handleFilterChange('publisher', e.target.value)}
                                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="all">Todas</option>
                                        <option value="marvel">Marvel</option>
                                        <option value="dc">DC</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Precio mínimo</label>
                                    <input
                                        type="number"
                                        step="0.01"
                                        value={filters.priceMin}
                                        onChange={(e) => handleFilterChange('priceMin', e.target.value)}
                                        placeholder="$0.00"
                                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Precio máximo</label>
                                    <input
                                        type="number"
                                        step="0.01"
                                        value={filters.priceMax}
                                        onChange={(e) => handleFilterChange('priceMax', e.target.value)}
                                        placeholder="$99.99"
                                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Mes de lanzamiento</label>
                                    <select 
                                        value={filters.month}
                                        onChange={(e) => handleFilterChange('month', e.target.value)}
                                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="all">Todos</option>
                                        <option value="2024-02">Febrero 2024</option>
                                        <option value="2024-03">Marzo 2024</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mt-4 flex justify-between items-center">
                                <span className="text-sm text-gray-600">
                                    {filteredComics.length} resultado(s) encontrado(s)
                                </span>
                                <button
                                    onClick={clearFilters}
                                    className="text-blue-600 hover:text-blue-800 text-sm"
                                >
                                    Limpiar filtros
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                <section className="py-8">
                    <div className="max-w-7xl mx-auto px-4">
                        {searchTerm && (
                            <div className="mb-6">
                                <h1 className="text-2xl font-bold text-gray-800">
                                    Resultados de búsqueda: "{searchTerm}"
                                </h1>
                                <p className="text-gray-600 mt-1">
                                    {filteredComics.length} cómic(s) encontrado(s)
                                </p>
                            </div>
                        )}

                        {!searchTerm ? (
                            <div className="text-center py-12">
                                <i className="fas fa-search text-6xl text-gray-300 mb-4"></i>
                                <h2 className="text-xl font-semibold text-gray-600 mb-2">
                                    Realiza una búsqueda
                                </h2>
                                <p className="text-gray-500 mb-6">
                                    Usa la barra de búsqueda para encontrar tus cómics favoritos
                                </p>
                            </div>
                        ) : filteredComics.length === 0 ? (
                            <div className="text-center py-12">
                                <i className="fas fa-search text-6xl text-gray-300 mb-4"></i>
                                <h2 className="text-xl font-semibold text-gray-600 mb-2">
                                    No se encontraron resultados
                                </h2>
                                <p className="text-gray-500 mb-6">
                                    Intenta con otros términos de búsqueda o ajusta los filtros
                                </p>
                                <button
                                    onClick={() => onNavigate('home')}
                                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    Volver al inicio
                                </button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {filteredComics.map(comic => (
                                    <ComicCard 
                                        key={comic.id} 
                                        comic={comic} 
                                        onAddToCart={onAddToCart}
                                        onNavigate={onNavigate}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            </div>
        );
    } catch (error) {
        console.error('Search component error:', error);
        return <div>Error loading search page</div>;
    }
}

window.Search = Search;