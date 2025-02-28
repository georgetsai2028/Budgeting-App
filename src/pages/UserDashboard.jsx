
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './UserDashboard.css'


export function UserDashboard() {


    return (
        <>
            <div className="mainContainer">
            <header>
                Hey User!
            </header>
            <div className="gridContainer">
                <div id="purchaseTracker">1</div>
                <div id="piggybank">2</div>
                <div id="investments">3</div>
                <div id="barChart">4</div>
                <div id="score">5</div>
            </div>
            </div>
        </>
        
    );
    
};

createRoot(document.getElementById('root')).render(
<StrictMode>
    <UserDashboard />
</StrictMode>
)

