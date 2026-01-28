import { Link } from "react-router-dom";
import '../App.css';

export default function Home() {
    return (
        <main className="home-page">
            <div className="home-container">
                <div className="home-content">
                    <h1 className="home-title">Assignment Management App</h1>
                    <p className="home-description">
                        A simple app to create, view, and manage your assignments.
                    </p>

                    <div className="home-instructions">
                        <h2>How to use:</h2>
                        <ol className="instructions-list">
                            <li>Click "Assignments" in the navigation to view all assignments</li>
                            <li>Click "Add Assignment" to create a new assignment</li>
                            <li>Click on any assignment to edit it</li>
                            <li>Use the form to add or update assignment details</li>
                        </ol>
                    </div>

                    <div className="home-actions">
                        <Link to="/AssignmentList" className="home-button primary">
                            View Assignments
                        </Link>
                        <Link to="/AddAssignment" className="home-button secondary">
                            Add New Assignment
                        </Link>
                    </div>

                    <div className="home-features">
                        <h3>Features:</h3>
                        <ul className="features-list">
                            <li>Create unlimited assignments</li>
                            <li>Edit existing assignments</li>
                            <li>Simple and clean interface</li>
                            <li>Easy to use</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}