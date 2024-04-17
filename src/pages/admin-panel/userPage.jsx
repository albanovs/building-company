import React, { useEffect, useState } from 'react';
import { api } from '../../Api';

export default function UserPage() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await api.get('/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Ошибка при получении пользователей:', error);
            }
        }
        fetchUsers();
    }, []);

    const handleDeleteUser = async () => {
        try {
            await api.delete(`/users/${selectedUser._id}`);
            setUsers(users.filter(user => user._id !== selectedUser._id));
            setShowModal(false);
        } catch (error) {
            console.error('Ошибка при удалении пользователя:', error);
        }
    };

    return (
        <div className='user'>
            <h1>Пользователи</h1>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => {
                        if (user.name !== 'admin') {
                            return (
                                <tr key={user._id}>
                                    <td>{user.username}</td>
                                    <td>{user.name}</td>
                                    <td>
                                        <button
                                            className="delete-button"
                                            onClick={() => {
                                                setSelectedUser(user);
                                                setShowModal(true);
                                            }}
                                        >
                                            Удалить
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                    })}
                </tbody>
            </table>
            {showModal && (
                <div className="modal2">
                    <p>Вы уверены, что хотите удалить пользователя {selectedUser.username}?</p>
                    <div>
                        <button onClick={handleDeleteUser}>Да</button>
                        <button onClick={() => setShowModal(false)}>Отмена</button>
                    </div>
                </div>
            )}
            <style jsx>{`
                .user {
                    padding: 30px 30px;

                    @media screen and (max-width: 500px) {
                        padding: 20px 20px;
                    }
                }
                h1 {
                    text-align: center;
                    margin-bottom: 20px;

                    @media screen and (max-width: 500px) {
                        font-size: 24px;
                    }
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-bottom: 20px;
                }

                th, td {
                    padding: 12px 15px;
                    border-bottom: 1px solid #ddd;
                    text-align: left;
                }

                th {
                    background-color: #f2f2f2;
                }

                .delete-button {
                    background-color: #f44336;
                    color: white;
                    border: none;
                    padding: 8px 16px;
                    cursor: pointer;
                    transition: background-color 0.3s;

                    @media screen and (max-width: 500px) {
                        padding: 5px 10px;
                        font-size: 10px;
                    }
                }

                .delete-button:hover {
                    background-color: #d32f2f;
                }

                @media screen and (max-width: 600px) {
                    th, td {
                        padding: 8px;
                        font-size: 12px;
                    }
                }

                .modal2 {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.5);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .modal2 p {
                    background-color: white;
                    padding: 20px;
                    border-radius: 5px;
                    text-align: center;
                }

                .modal2 div {
                    margin-top: 20px;
                }

                .modal2 button {
                    background-color: #f44336;
                    color: white;
                    border: none;
                    padding: 8px 16px;
                    cursor: pointer;
                    margin-right: 10px;
                    border-radius: 5px;
                    transition: background-color 0.3s;
                }

                .modal2 button:hover {
                    background-color: #d32f2f;
                }
            `}</style>
        </div>
    );
}