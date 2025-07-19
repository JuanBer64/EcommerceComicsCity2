function SearchBar({ onSearch, onToggleFilters, showFilters }) {
    try {
        const [searchTerm, setSearchTerm] = React.useState('');

        const handleSearch = (e) => {
            e.preventDefault();
            if (searchTerm.trim()) {
                onSearch(searchTerm.trim());
            }
        };

        return (
            <div data-name="search-bar" data-file="components/SearchBar.js" className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <form onSubmit={handleSearch} className="flex items-center space-x-4">
                        <div className="flex-1 relative">
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Buscar cómics por título..."
                                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                        </div>
                        
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            <i className="fas fa-search mr-2"></i>
                            Buscar
                        </button>
                        
                        <button
                            type="button"
                            onClick={onToggleFilters}
                            className={`px-4 py-3 rounded-lg border transition-colors ${
                                showFilters 
                                    ? 'bg-blue-50 text-blue-600 border-blue-300' 
                                    : 'bg-gray-50 text-gray-600 border-gray-300 hover:bg-gray-100'
                            }`}
                        >
                            <i className="fas fa-filter mr-2"></i>
                            Filtros
                        </button>
                    </form>
                </div>
            </div>
        );
    } catch (error) {
        console.error('SearchBar component error:', error);
        return <div>Error loading search bar</div>;
    }
}

window.SearchBar = SearchBar;