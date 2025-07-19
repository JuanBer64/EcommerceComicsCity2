function Marvel({ onAddToCart, onNavigate }) {
    try {
        const [selectedMonth, setSelectedMonth] = React.useState('all');
        const marvelComics = window.MOCK_COMICS.filter(comic => comic.publisher === 'Marvel');

        const months = [
            { value: 'all', label: 'Todos los meses' },
            { value: '2024-02', label: 'Febrero 2024' },
            { value: '2024-03', label: 'Marzo 2024' }
        ];

        const filteredComics = selectedMonth === 'all' 
            ? marvelComics 
            : marvelComics.filter(comic => comic.releaseDate.startsWith(selectedMonth));

        return (
            <div data-name="marvel-page" data-file="pages/Marvel.js" className="fade-in">
                <section className="marvel-gradient text-white py-16">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <h1 className="text-4xl font-bold mb-4">
                            <i className="fas fa-mask mr-3"></i>
                            Marvel Comics
                        </h1>
                        <p className="text-xl">Descubre las próximas aventuras del Universo Marvel</p>
                    </div>
                </section>

                <section className="py-12">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="mb-8">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Filtrar por mes de publicación:
                            </label>
                            <select 
                                value={selectedMonth}
                                onChange={(e) => setSelectedMonth(e.target.value)}
                                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                            >
                                {months.map(month => (
                                    <option key={month.value} value={month.value}>
                                        {month.label}
                                    </option>
                                ))}
                            </select>
                        </div>

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

                        {filteredComics.length === 0 && (
                            <div className="text-center py-12">
                                <p className="text-gray-600">No hay cómics disponibles para el mes seleccionado.</p>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        );
    } catch (error) {
        console.error('Marvel component error:', error);
        reportError(error);
        return <div>Error loading Marvel page</div>;
    }
}

window.Marvel = Marvel;
