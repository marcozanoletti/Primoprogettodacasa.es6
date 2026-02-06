import React from 'react';

const Layout = () => {
    return (
        <div>
            <aside className="server-sidebar">
                {/* Server sidebar content goes here */}
                <h2>Server Sidebar</h2>
            </aside>
            <aside className="channel-sidebar">
                {/* Channel sidebar content goes here */}
                <h2>Channel Sidebar</h2>
            </aside>
            <header className="top-bar">
                {/* Top bar content goes here */}
                <h1>Top Bar</h1>
            </header>
        </div>
    );
};

export default Layout;