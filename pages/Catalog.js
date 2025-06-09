function Catalog() {
    try {
        const [selectedMonth, setSelectedMonth] = React.useState('all');
        const [selectedPublisher, setSelectedPublisher] = React.useState('all');
        
        const months = [
            { value: 'all', label: 'Todos los meses' },
            { value: '2024-02', label: 'Febrero 2024' },
            { value: '2024-03', label: 'Marzo 2024' }
        ];

        const publishers = [
            { value: 'all', label: 'Todas las editoriales' },
            { value: 'marvel', label: 'Marvel' },
            { value: 'dc', label: 'DC' }
        ];

        const getFilteredCatalogs = () => {
            const catalogs = window.MOCK_CATALOGS;
            let filtered = {};

            Object.keys(catalogs).forEach(month => {
                if (selectedMonth === 'all' || selectedMonth === month) {
                    filtered[month] = {};
                    
                    if (selectedPublisher === 'all' || selectedPublisher === 'marvel') {
                        filtered[month].marvel = catalogs[month].marvel;
                    }
                    if (selectedPublisher === 'all' || selectedPublisher === 'dc') {
                        filtered[month].dc = catalogs[month].dc;
                    }
                }
            });

            return filtered;
        };

        const getMonthName = (monthKey) => {
            const monthNames = {
                '2024-02': 'Febrero 2024',
                '2024-03': 'Marzo 2024'
            };
            return monthNames[monthKey] || monthKey;
        };

        const handleViewPDF = (pdfUrl, title) => {
            window.open(pdfUrl, '_blank');
        };

        const filteredCatalogs = getFilteredCatalogs();

        return (
            <div data-name="catalog-page" data-file="pages/Catalog.js" className="fade-in">
                <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <h1 className="text-4xl font-bold mb-4">
                            <i className="fas fa-book-open mr-3"></i>
                            Catálogo Mensual
                        </h1>
                        <p className="text-xl">Consulta y descarga los catálogos PDF de cada mes</p>
                    </div>
                </section>

                <section className="py-8">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="flex flex-col md:flex-row gap-4 mb-8">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Filtrar por mes:
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

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Filtrar por editorial:
                                </label>
                                <select 
                                    value={selectedPublisher}
                                    onChange={(e) => setSelectedPublisher(e.target.value)}
                                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    {publishers.map(publisher => (
                                        <option key={publisher.value} value={publisher.value}>
                                            {publisher.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {Object.keys(filteredCatalogs).length === 0 ? (
                            <div className="text-center py-12">
                                <p className="text-gray-600">No hay catálogos disponibles con los filtros seleccionados.</p>
                            </div>
                        ) : (
                            Object.keys(filteredCatalogs).sort().map(monthKey => (
                                <div key={monthKey} className="mb-12">
                                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center border-b-2 border-blue-200 pb-4">
                                        {getMonthName(monthKey)}
                                    </h2>
                                    
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                        {filteredCatalogs[monthKey].dc && (
                                            <div className="bg-white rounded-lg shadow-lg p-6">
                                                <div className="text-center mb-4">
                                                    <h3 className="text-xl font-bold text-blue-600 mb-2">DC Comics</h3>
                                                    <img 
                                                        src={filteredCatalogs[monthKey].dc.cover}
                                                        alt={filteredCatalogs[monthKey].dc.title}
                                                        className="w-48 h-64 object-cover mx-auto rounded-lg shadow-md mb-4"
                                                    />
                                                    <p className="text-gray-600 mb-4">{filteredCatalogs[monthKey].dc.title}</p>
                                                    <button
                                                        onClick={() => handleViewPDF(filteredCatalogs[monthKey].dc.pdfUrl, filteredCatalogs[monthKey].dc.title)}
                                                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                                                    >
                                                        <i className="fas fa-file-pdf mr-2"></i>
                                                        Ver Catálogo PDF
                                                    </button>
                                                </div>
                                            </div>
                                        )}

                                        {filteredCatalogs[monthKey].marvel && (
                                            <div className="bg-white rounded-lg shadow-lg p-6">
                                                <div className="text-center mb-4">
                                                    <h3 className="text-xl font-bold text-red-600 mb-2">Marvel Comics</h3>
                                                    <img 
                                                        src={filteredCatalogs[monthKey].marvel.cover}
                                                        alt={filteredCatalogs[monthKey].marvel.title}
                                                        className="w-48 h-64 object-cover mx-auto rounded-lg shadow-md mb-4"
                                                    />
                                                    <p className="text-gray-600 mb-4">{filteredCatalogs[monthKey].marvel.title}</p>
                                                    <button
                                                        onClick={() => handleViewPDF(filteredCatalogs[monthKey].marvel.pdfUrl, filteredCatalogs[monthKey].marvel.title)}
                                                        className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
                                                    >
                                                        <i className="fas fa-file-pdf mr-2"></i>
                                                        Ver Catálogo PDF
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </section>
            </div>
        );
    } catch (error) {
        console.error('Catalog component error:', error);
        reportError(error);
        return <div>Error loading catalog page</div>;
    }
}

window.Catalog = Catalog;
