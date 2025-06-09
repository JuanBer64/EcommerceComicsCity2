function Footer() {
    try {
        return (
            <footer data-name="footer" data-file="components/Footer.js" className="bg-gray-800 text-white mt-16">
                <div className="max-w-7xl mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center mb-4">
                                <i className="fas fa-city text-2xl text-blue-400 mr-2"></i>
                                <span className="text-xl font-bold">Comics City</span>
                            </div>
                            <p className="text-gray-400">
                                Tu tienda de confianza para preventas de cómics Marvel y DC.
                            </p>
                        </div>
                        
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white">Políticas de Cancelación</a></li>
                                <li><a href="#" className="hover:text-white">Términos de Uso</a></li>
                                <li><a href="#" className="hover:text-white">Preguntas Frecuentes</a></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li><i className="fas fa-envelope mr-2"></i>info@comicscity.com</li>
                                <li><i className="fas fa-phone mr-2"></i>+52 55 1234 5678</li>
                                <li><i className="fas fa-map-marker-alt mr-2"></i>Ciudad de México</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-white text-xl">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white text-xl">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white text-xl">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; 2024 Comics City. Todos los derechos reservados.</p>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        reportError(error);
        return <div>Error loading footer</div>;
    }
}

window.Footer = Footer;
