// interfaces/index.ts

export interface PostProps {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface PostData {
    userId: number;
    id?: number;
    title: string;
    body: string;
}

export interface PostModalProps {
    onClose: () => void;
    onSubmit: (post: PostData) => void;
}

// --- Task 3 & 5 Interfaces ---

interface Geo {
    lat: string;
    lng: string;
}

interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

// Used for fetching and displaying static user data
export interface UserProps {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

// Used for the user input form (optional ID)
export interface UserData {
    id?: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    companyName: string; // Simplified company structure for input
}

export interface UserModalProps {
    onClose: () => void;
    onSubmit: (user: UserData) => void;
}