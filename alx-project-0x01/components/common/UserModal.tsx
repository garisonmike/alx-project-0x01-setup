// components/common/UserModal.tsx
import { UserData, UserModalProps } from "@/interfaces";
import React, { useState } from "react";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
    const [user, setUser] = useState<UserData>({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
        companyName: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(user);
        onClose();
    };

    const inputClass = "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500";
    const labelClass = "block text-gray-700 font-medium mb-1";

    return (
        <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-70 flex justify-center items-center p-4">
            <div className="bg-white rounded-xl p-8 shadow-2xl w-full max-w-lg transform transition-all duration-300 scale-100">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Add New User</h2>
                <form onSubmit={handleSubmit} className="space-y-4">

                    <div>
                        <label htmlFor="name" className={labelClass}>Full Name</label>
                        <input type="text" id="name" name="name" value={user.name} onChange={handleChange} className={inputClass} placeholder="Leanne Graham" required />
                    </div>

                    <div>
                        <label htmlFor="username" className={labelClass}>Username</label>
                        <input type="text" id="username" name="username" value={user.username} onChange={handleChange} className={inputClass} placeholder="Bret" required />
                    </div>

                    <div>
                        <label htmlFor="email" className={labelClass}>Email</label>
                        <input type="email" id="email" name="email" value={user.email} onChange={handleChange} className={inputClass} placeholder="sincere@example.biz" required />
                    </div>

                    <div>
                        <label htmlFor="phone" className={labelClass}>Phone</label>
                        <input type="text" id="phone" name="phone" value={user.phone} onChange={handleChange} className={inputClass} placeholder="1-555-555-5555" />
                    </div>

                    <div>
                        <label htmlFor="companyName" className={labelClass}>Company Name</label>
                        <input type="text" id="companyName" name="companyName" value={user.companyName} onChange={handleChange} className={inputClass} placeholder="Romaguera-Crona" />
                    </div>

                    <div className="flex justify-end items-center pt-4 space-x-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-100 transition focus:outline-none"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition shadow-md"
                        >
                            Create User
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserModal;