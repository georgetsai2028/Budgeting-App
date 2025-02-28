
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './UserDashboard.css'


export function UserDashboard() {


    return (
        <div className="mainContainer">
            <div className="gridContainer">
                
            </div>
        </div>
    );
    
};

createRoot(document.getElementById('root')).render(
<StrictMode>
    <UserDashboard />
</StrictMode>
)

