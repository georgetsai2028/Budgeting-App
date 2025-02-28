
import "./UserDashboard.css";


export function UserDashboard() {


    return (
        <>
            <div className="userdashboardRoot">
            <div className="sidebar">
                <h1>Hey! user</h1>
            </div>
            <div className="userdashboardContainer">
            <header>
                Hey User!
            </header>
            <div className="gridContainer">
                <div className = "item" id="purchaseTracker">1</div>
                <div className = "item" id="piggybank">2</div>
                <div className = "item" id="investments">3</div>
                <div className = "item" id="barChart">4</div>
                <div className = "item" id="score">5</div>
            </div>
            </div>
            </div>
        </>
        
    );
    
};

