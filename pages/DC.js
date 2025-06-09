function DC({ onAddToCart }) {
    try {
        const [selectedMonth, setSelectedMonth] = React.useState('all');
        const dcComics = window.MOCK_COMICS.filter(comic => comic.publisher === 'DC');

        const months = [
            { value: 'all', label: 'Todos los meses' },
            { value: '2024-02', label: 'Febrero 2024' },
            { value: '2024-03', label: 'Marzo 2024' }
        ];

        const filteredComics = selectedMonth === 'all' 
            ? dcComics 
            : dcComics.filter(comic => comic.releaseDate.startsWith(selectedMonth));

        return (
            <div data-name="dc-page" data-file="pages/DC.js" className="fade-in">
                <section className="dc-gradient text-white py-16">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <h1 className="text-4xl font-bold mb-4">
                            <i className="fas fa-bolt mr-3"></i>
                            DC Comics
                        </h1>
                        <p className="text-xl">Explora el universo de los héroes y villanos más icónicos</p>
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
                                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                                />
                            ))}
                        </div>

                        {filteredComics.length === 0 && (
                            <div className="text-center py-12">
                                <p className="text-gray-600">No hay cómics de DC disponibles para el mes seleccionado.</p>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        );
    } catch (error) {
        console.error('DC component error:', error);
        reportError(error);
        return <div>Error loading DC page</div>;
    }
}

window.DC = DC;
