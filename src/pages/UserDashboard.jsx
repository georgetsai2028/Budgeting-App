
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
                <div className = "item" id="purchaseTracker">Track your purchases!</div>
                <div className = "item" id="piggybank">Piggybank</div>
                <div className = "item" id="investments">Investments</div>
                <div className = "item" id="barChart">Bar Chart</div>
                <div className = "item" id="score">Monthly Score</div>
            </div>
            </div>
            </div>
        </>
        
    );
    
};

