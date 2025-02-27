import React from 'react';
import Link from 'next/link';

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            <header>
                <h1>Admin Dashboard</h1>
                <nav>
                    <ul>
                        <li>
                            <Link href="/admin">Home</Link>
                        </li>
                        <li>
                            <Link href="/admin/add-property">Add Property</Link>
                        </li>
                        {/* Add more admin links as needed */}
                    </ul>
                </nav>
            </header>
            <main>{children}</main>
        </div>
    );
};

export default AdminLayout;