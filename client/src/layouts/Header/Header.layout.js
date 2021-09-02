import React from "react";

export const Header = () => {
  return (
    <header className="header-section">
      <div className="container">
        <div className="row">
          <div className="col s12 header-section__col">
            <div className="nav-content">
              <span>
                Hi, manager!
              </span>
            </div>
            <button className="waves-effect waves-light btn right" id="logout">Logout</button>
          </div>
        </div>
      </div>
    </header>
  );
}