import React from 'react';
import { useState, useEffect } from 'react';

const ServersPage = () => {
    const [servers, setServers] = useState([]);

    useEffect(() => {
        // Fetch servers from an API or a predefined list
        const fetchServers = async () => {
            // Example API call
            const response = await fetch('/api/servers');
            const data = await response.json();
            setServers(data);
        };

        fetchServers();
    }, []);

    const handleAddServer = async (newServer) => {
        // Logic to add a new server
        const response = await fetch('/api/servers', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newServer),
        });
        const addedServer = await response.json();
        setServers([...servers, addedServer]);
    };

    const handleDeleteServer = async (serverId) => {
        // Logic to delete a server
        await fetch(`/api/servers/${serverId}`, {
            method: 'DELETE',
        });
        setServers(servers.filter(server => server.id !== serverId));
    };

    return (
        <div>
            <h1>Servers Management</h1>
            <ul>
                {servers.map(server => (
                    <li key={server.id}> 
                        {server.name}
                        <button onClick={() => handleDeleteServer(server.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <button onClick={() => handleAddServer({ name: 'New Server' })}>Add Server</button>
        </div>
    );
};

export default ServersPage;
