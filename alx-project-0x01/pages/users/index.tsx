// pages/users/index.tsx
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import Header from "@/components/layout/Header";
import { UserData, UserProps } from "@/interfaces";
import { GetStaticProps } from "next";
import React, { useState } from "react";

// Define the shape of the component props
interface UsersPageProps {
    users: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ users: initialUsers }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    // State to hold the list of users (including any newly added ones)
    const [users, setUsers] = useState<UserProps[]>(initialUsers);

    const handleAddUser = (newUserData: UserData) => {
        // In a real app, this would send a POST request.
        // Here, we simulate adding the user to the list.
        const newUser: UserProps = {
            ...newUserData,
            id: users.length + 1,
            // Provide default/mock values for nested data not captured in the simplified form
            address: { city: 'New City', street: '123 Main St', suite: 'N/A', zipcode: '00000', geo: { lat: '0', lng: '0' } },
            company: { name: newUserData.companyName, catchPhrase: 'New Catchphrase', bs: 'new business' },
        };
        setUsers((prevUsers) => [newUser, ...prevUsers]); // Add new user to the top
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="p-8 flex-grow bg-gray-50">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-3xl font-bold text-gray-800">User Directory ({users.length})</h1>
                        <button
                            onClick={() => setModalOpen(true)}
                            className="bg-green-600 px-6 py-2 rounded-full text-white font-semibold hover:bg-green-700 transition shadow-md"
                        >
                            Add User
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {users.map((user) => (
                            <UserCard
                                key={user.id}
                                {...user}
                            />
                        ))}
                    </div>
                </div>
            </main>

            {/* Conditional rendering of the modal */}
            {isModalOpen && (
                <UserModal
                    onClose={() => setModalOpen(false)}
                    onSubmit={handleAddUser}
                />
            )}
        </div>
    )
}

// Next.js data fetching function for Static Site Generation (SSG)
export const getStaticProps: GetStaticProps<UsersPageProps> = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users: UserProps[] = await response.json()

    return {
        props: {
            users,
        }
    }
}

export default Users;