function Home({ onNavigate, onAddToCart }) {
    try {
        const featuredComics = window.MOCK_COMICS.slice(0, 3);

        return (
            <div data-name="home-page" data-file="pages/Home.js" className="fade-in">
                <section className="hero-gradient text-white py-20">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <h1 className="text-5xl font-bold mb-6">Bienvenido a Comics City</h1>
                        <p className="text-xl mb-8 max-w-2xl mx-auto">
                            Reserva tus cómics favoritos de Marvel y DC antes de su lanzamiento oficial. 
                            ¡No te quedes sin los títulos más esperados!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button 
                                onClick={() => onNavigate('catalog')}
                                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                            >
                                <i className="fas fa-book-open mr-2"></i>
                                Ver Catálogos
                            </button>
                            <button 
                                onClick={() => onNavigate('marvel')}
                                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                            >
                                <i className="fas fa-mask mr-2"></i>
                                Explorar Marvel
                            </button>
                            <button 
                                onClick={() => onNavigate('dc')}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                            >
                                <i className="fas fa-bolt mr-2"></i>
                                Explorar DC
                            </button>
                        </div>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Catálogos Mensuales</h2>
                            <p className="text-gray-600 mb-6">Consulta todos los lanzamientos organizados por mes</p>
                            <button 
                                onClick={() => onNavigate('catalog')}
                                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                            >
                                <i className="fas fa-file-pdf mr-2"></i>
                                Ver Catálogos PDF
                            </button>
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Cómics Destacados</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {featuredComics.map(comic => (
                                <ComicCard 
                                    key={comic.id} 
                                    comic={comic} 
                                    onAddToCart={onAddToCart}
                                    onNavigate={onNavigate}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        );
    } catch (error) {
        console.error('Home component error:', error);
        reportError(error);
        return <div>Error loading home page</div>;
    }
}

window.Home = Home;
