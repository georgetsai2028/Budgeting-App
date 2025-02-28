import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './UserDashboard.css'


export function UserDashboard() {

    return (
        <>
        <h1>HELLO </h1>
        <h2> Here is the main page: </h2>
        </>
        
    );
    
};

createRoot(document.getElementById('root')).render(
<StrictMode>
    <UserDashboard />
</StrictMode>
)



