const StorageUtils = {
    // Authentication methods
    getCurrentUser: () => {
        try {
            const user = localStorage.getItem('currentUser');
            return user ? JSON.parse(user) : null;
        } catch (error) {
            console.error('Error getting current user:', error);
            return null;
        }
    },

    setCurrentUser: (user) => {
        try {
            localStorage.setItem('currentUser', JSON.stringify(user));
        } catch (error) {
            console.error('Error setting current user:', error);
        }
    },

    logout: () => {
        try {
            localStorage.removeItem('currentUser');
        } catch (error) {
            console.error('Error logging out:', error);
        }
    },

    // Cart methods
    getCart: () => {
        try {
            const cart = localStorage.getItem('comicCart');
            return cart ? JSON.parse(cart) : [];
        } catch (error) {
            console.error('Error getting cart:', error);
            return [];
        }
    },

    setCart: (cart) => {
        try {
            localStorage.setItem('comicCart', JSON.stringify(cart));
        } catch (error) {
            console.error('Error setting cart:', error);
        }
    },

    addToCart: (comic) => {
        try {
            const cart = StorageUtils.getCart();
            const existingItem = cart.find(item => item.id === comic.id);
            
            if (!existingItem) {
                cart.push({ ...comic, quantity: 1 });
                StorageUtils.setCart(cart);
                return true;
            }
            return false;
        } catch (error) {
            console.error('Error adding to cart:', error);
            return false;
        }
    },

    removeFromCart: (comicId) => {
        try {
            const cart = StorageUtils.getCart();
            const newCart = cart.filter(item => item.id !== comicId);
            StorageUtils.setCart(newCart);
        } catch (error) {
            console.error('Error removing from cart:', error);
        }
    },

    // Orders methods
    getOrders: () => {
        try {
            const orders = localStorage.getItem('comicOrders');
            return orders ? JSON.parse(orders) : [];
        } catch (error) {
            console.error('Error getting orders:', error);
            return [];
        }
    },

    addOrder: (orderData) => {
        try {
            const orders = StorageUtils.getOrders();
            const newOrder = {
                id: Date.now(),
                ...orderData,
                orderDate: new Date().toISOString(),
                status: 'confirmed'
            };
            orders.push(newOrder);
            localStorage.setItem('comicOrders', JSON.stringify(orders));
            StorageUtils.setCart([]);
            return newOrder;
        } catch (error) {
            console.error('Error adding order:', error);
            return null;
        }
    }
};

window.StorageUtils = StorageUtils;
