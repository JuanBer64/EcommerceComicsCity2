function Profile({ onNavigate }) {
    try {
        const [user, setUser] = React.useState(null);
        const [activeSection, setActiveSection] = React.useState('account');

        React.useEffect(() => {
            const currentUser = StorageUtils.getCurrentUser();
            if (!currentUser) {
                onNavigate('login');
                return;
            }
            setUser(currentUser);
        }, []);

        if (!user) return <div>Cargando...</div>;

        const profileSections = [
            { id: 'account', label: 'Datos de tu cuenta', icon: 'fas fa-user-edit' },
            { id: 'addresses', label: 'Direcciones', icon: 'fas fa-map-marker-alt' },
            { id: 'orders', label: 'Pedidos', icon: 'fas fa-box' },
            { id: 'cards', label: 'Tarjetas de pago', icon: 'fas fa-credit-card' }
        ];

        const renderSection = () => {
            switch (activeSection) {
                case 'account':
                    return (
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold mb-4">Información Personal</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                                    <p className="bg-gray-50 px-3 py-2 rounded-md">{user.name}</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <p className="bg-gray-50 px-3 py-2 rounded-md">{user.email}</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                                    <p className="bg-gray-50 px-3 py-2 rounded-md">{user.phone}</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Dirección</label>
                                    <p className="bg-gray-50 px-3 py-2 rounded-md">{user.address}</p>
                                </div>
                            </div>
                        </div>
                    );
                case 'orders':
                    return <Orders />;
                default:
                    return (
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold mb-4">Próximamente</h3>
                            <p className="text-gray-600">Esta sección estará disponible pronto.</p>
                        </div>
                    );
            }
        };

        return (
            <div data-name="profile-page" data-file="pages/Profile.js" className="fade-in">
                <div className="max-w-6xl mx-auto px-4 py-8">
                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                            <img 
                                src={user.avatar} 
                                alt={user.name}
                                className="w-24 h-24 rounded-full object-cover border-4 border-blue-200"
                            />
                            <div className="text-center md:text-left">
                                <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
                                <p className="text-gray-600">{user.email}</p>
                                <p className="text-sm text-gray-500 mt-1">Miembro desde 2024</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-lg shadow-md p-4">
                                <h2 className="text-lg font-semibold mb-4 text-gray-800">Mi Cuenta</h2>
                                <nav className="space-y-2">
                                    {profileSections.map(section => (
                                        <button
                                            key={section.id}
                                            onClick={() => setActiveSection(section.id)}
                                            className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-left transition-colors ${
                                                activeSection === section.id
                                                    ? 'bg-blue-50 text-blue-600'
                                                    : 'text-gray-700 hover:bg-gray-50'
                                            }`}
                                        >
                                            <i className={section.icon}></i>
                                            <span className="text-sm">{section.label}</span>
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        </div>

                        <div className="lg:col-span-3">
                            {renderSection()}
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Profile component error:', error);
        reportError(error);
        return <div>Error loading profile page</div>;
    }
}

window.Profile = Profile;
