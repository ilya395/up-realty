import React from "react";
import { Logout } from "../../components";

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
            <Logout />
          </div>
        </div>
      </div>
    </header>
  );
}