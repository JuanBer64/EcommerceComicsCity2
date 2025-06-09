const MOCK_COMICS = [
    {
        id: 1,
        title: "Spider-Man #1",
        publisher: "Marvel",
        price: 4.99,
        releaseDate: "2024-02-15",
        cover: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=300&h=400&fit=crop",
        description: "Nueva serie de Spider-Man con increíbles aventuras",
        status: "preorder"
    },
    {
        id: 2,
        title: "Batman #750",
        publisher: "DC",
        price: 5.99,
        releaseDate: "2024-02-20",
        cover: "https://images.unsplash.com/photo-1531259683007-016a943ccd04?w=300&h=400&fit=crop",
        description: "Edición especial del Caballero de la Noche",
        status: "preorder"
    },
    {
        id: 3,
        title: "X-Men #25",
        publisher: "Marvel",
        price: 4.99,
        releaseDate: "2024-03-01",
        cover: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop",
        description: "Los mutantes enfrentan su mayor desafío",
        status: "preorder"
    },
    {
        id: 4,
        title: "Wonder Woman #800",
        publisher: "DC",
        price: 6.99,
        releaseDate: "2024-03-10",
        cover: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&h=400&fit=crop",
        description: "Celebración épica de la Amazona",
        status: "preorder"
    },
    {
        id: 5,
        title: "Avengers #60",
        publisher: "Marvel",
        price: 4.99,
        releaseDate: "2024-03-15",
        cover: "https://images.unsplash.com/photo-1608889476561-6242cfdbf622?w=300&h=400&fit=crop",
        description: "Los héroes más poderosos de la Tierra se unen",
        status: "preorder"
    },
    {
        id: 6,
        title: "Justice League #75",
        publisher: "DC",
        price: 5.99,
        releaseDate: "2024-03-20",
        cover: "https://images.unsplash.com/photo-1531259683007-016a943ccd04?w=300&h=400&fit=crop",
        description: "La Liga de la Justicia enfrenta una amenaza cósmica",
        status: "preorder"
    }
];

const MOCK_CATALOGS = {
    '2024-02': {
        marvel: {
            title: 'Marvel Comics - Febrero 2024',
            pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
            cover: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&h=500&fit=crop'
        },
        dc: {
            title: 'DC Comics - Febrero 2024',
            pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
            cover: 'https://images.unsplash.com/photo-1531259683007-016a943ccd04?w=400&h=500&fit=crop'
        }
    },
    '2024-03': {
        marvel: {
            title: 'Marvel Comics - Marzo 2024',
            pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
            cover: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop'
        },
        dc: {
            title: 'DC Comics - Marzo 2024',
            pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
            cover: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=500&fit=crop'
        }
    }
};

const MOCK_USER = {
    id: 1,
    name: "Juan Pérez",
    email: "juan@email.com",
    address: "Calle Principal 123, Ciudad de México",
    phone: "+52 55 1234 5678"
};

window.MOCK_COMICS = MOCK_COMICS;
window.MOCK_CATALOGS = MOCK_CATALOGS;
window.MOCK_USER = MOCK_USER;
