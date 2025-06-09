function Login({ onNavigate }) {
    try {
        const [isLogin, setIsLogin] = React.useState(true);
        const [formData, setFormData] = React.useState({
            email: '',
            password: '',
            name: '',
            phone: '',
            address: ''
        });

        const handleInputChange = (field, value) => {
            setFormData(prev => ({ ...prev, [field]: value }));
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            
            if (isLogin) {
                // Mock login
                const user = {
                    id: 1,
                    name: formData.email.split('@')[0],
                    email: formData.email,
                    phone: '+52 55 1234 5678',
                    address: 'Ciudad de México',
                    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
                };
                StorageUtils.setCurrentUser(user);
                alert('¡Bienvenido de vuelta!');
                onNavigate('profile');
            } else {
                // Mock register
                const user = {
                    id: Date.now(),
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    address: formData.address,
                    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
                };
                StorageUtils.setCurrentUser(user);
                alert('¡Cuenta creada exitosamente!');
                onNavigate('profile');
            }
        };

        return (
            <div data-name="login-page" data-file="pages/Login.js" className="fade-in min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div className="text-center">
                        <i className="fas fa-city text-4xl text-blue-600 mb-4"></i>
                        <h2 className="text-3xl font-bold text-gray-900">Comics City</h2>
                        <p className="mt-2 text-gray-600">
                            {isLogin ? 'Inicia sesión en tu cuenta' : 'Crea tu nueva cuenta'}
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-8">
                        <div className="flex mb-6">
                            <button
                                onClick={() => setIsLogin(true)}
                                className={`flex-1 py-2 text-center rounded-l-md ${
                                    isLogin ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                                }`}
                            >
                                Iniciar Sesión
                            </button>
                            <button
                                onClick={() => setIsLogin(false)}
                                className={`flex-1 py-2 text-center rounded-r-md ${
                                    !isLogin ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                                }`}
                            >
                                Registrarse
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {!isLogin && (
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Nombre completo</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => handleInputChange('name', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            )}

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => handleInputChange('email', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
                                <input
                                    type="password"
                                    required
                                    value={formData.password}
                                    onChange={(e) => handleInputChange('password', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {!isLogin && (
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                                        <input
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => handleInputChange('phone', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Dirección</label>
                                        <textarea
                                            value={formData.address}
                                            onChange={(e) => handleInputChange('address', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            rows="2"
                                        />
                                    </div>
                                </div>
                            )}

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                            >
                                {isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Login component error:', error);
        reportError(error);
        return <div>Error loading login page</div>;
    }
}

window.Login = Login;
