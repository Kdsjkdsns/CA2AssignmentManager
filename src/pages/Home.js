import { Link } from "react-router-dom";
import '../App.css';

export default function Home() {
  return (
    <main className="home-page">
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-title">Card App</h1>
          <p className="home-description">
            A simple app to create, view, and manage your cards.
          </p>
          
          <div className="home-instructions">
            <h2>How to use:</h2>
            <ol className="instructions-list">
              <li>Click "Cards" in the navigation to view all cards</li>
              <li>Click "Add Card" to create a new card</li>
              <li>Click on any card to edit it</li>
              <li>Use the form to add or update card details</li>
            </ol>
          </div>
          
          <div className="home-actions">
            <Link to="/allCard" className="home-button primary">
              View Cards
            </Link>
            {/* CHANGE THIS LINE FROM /addCard to /add */}
            <Link to="/addcard" className="home-button secondary">
              Add New Card
            </Link>
          </div>
          
          <div className="home-features">
            <h3>Features:</h3>
            <ul className="features-list">
              <li>Create unlimited cards</li>
              <li>Edit existing cards</li>
              <li>Simple and clean interface</li>
              <li>Easy to use</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
