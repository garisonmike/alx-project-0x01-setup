// components/common/UserCard.tsx
import { UserProps } from '@/interfaces';
import React from 'react';

const UserCard: React.FC<UserProps> = ({ id, name, username, email, phone, website, company, address }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
            <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-1">{name}</h2>
                <p className="text-blue-600 font-medium mb-3">@{username}</p>

                <div className="space-y-2 text-sm text-gray-600">
                    <p>
                        <span className="font-semibold text-gray-700">Email:</span> {email}
                    </p>
                    <p>
                        <span className="font-semibold text-gray-700">Phone:</span> {phone}
                    </p>
                    <p>
                        <span className="font-semibold text-gray-700">Website:</span> <a href={`http://${website}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{website}</a>
                    </p>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                    <h3 className="font-semibold text-gray-700">Company</h3>
                    <p className="text-xs text-gray-500">{company.name}</p>
                    <p className="text-xs italic text-gray-500 mt-1">&quot;{company.catchPhrase}&quot;</p>
                </div>
            </div>
            <div className="bg-gray-50 p-4 text-xs text-gray-500 flex justify-between">
                <span>ID: {id}</span>
                <span>{address.city}, {address.zipcode}</span>
            </div>
        </div>
    );
};

export default UserCard;