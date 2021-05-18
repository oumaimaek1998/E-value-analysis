import React from "react";
import { Component } from "react";
import logo from "../../assets/icons/logo.png";
import { MenuItems } from "./MenuItems";
import menuLogo from "../../assets/icons/Icon.svg";
import { withRouter } from "react-router-dom";

class Header extends Component {
  state = {
    clicked: false,
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  logout = () => {
    localStorage.clear("authToken");

    this.props.history.push("/");
  };

  pushTo = (path) => {
    if (this.props.location.pathname.includes("/demarche")) {
      this.props.history.replace({
        pathname: "/demarche",
        state: {},
      });
    }
    this.props.history.push(path);
  };

  render() {
    return (
      <div className="header">
        <div className="header-logo">
          <a href="/">
            <img src={logo} width="60" alt="logo" height="50" />
          </a>
        </div>

        {!localStorage.getItem("authToken") ? (
          <div>
            <div className="header-menu">
              <a onClick={() => this.pushTo("")} className="btn-header">
                Login
              </a>
              <a onClick={() => this.pushTo("register")} className="btn-header">
                Register
              </a>
            </div>
            {this.state.clicked && (
              <div className="mobile-menu">
                <div className="mobile-menu-item">
                  <a onClick={() => this.pushTo("")} className="btn-header">
                    Login
                  </a>
                  <a
                    onClick={() => this.pushTo("register")}
                    className="btn-header"
                  >
                    Register
                  </a>
                </div>
              </div>
            )}

            {!this.state.clicked && (
              <div className="header-icon" onClick={this.handleClick}>
                <div className="line1"> </div>
                <div className="line2"> </div>
                <div className="line2"> </div>
              </div>
            )}
            {this.state.clicked && (
              <img
                src={menuLogo}
                className="menu-back-icon"
                onClick={this.handleClick}
              />
            )}
          </div>
        ) : (
          <div>
            {this.state.clicked && (
              <div className="mobile-menu">
                <div className="mobile-menu-item">
                  {MenuItems.map((item, index) => {
                    return (
                      <div key={index}>
                        <a
                          onClick={() => this.pushTo(item.url)}
                          className="btn-header"
                        >
                          {item.title}
                        </a>
                      </div>
                    );
                  })}
                  <a className="btn-header" onClick={this.logout}>
                    Se deconnecter
                  </a>
                </div>
              </div>
            )}
            <div className="header-menu">
              {MenuItems.map((item, index) => {
                return (
                  <div key={index}>
                    <a
                      onClick={() => this.pushTo(item.url)}
                      className={item.className}
                    >
                      {item.title}
                    </a>
                  </div>
                );
              })}
              <a className="btn-header" onClick={this.logout}>
                Se deconnecter
              </a>
            </div>

            {!this.state.clicked && (
              <div className="header-icon" onClick={this.handleClick}>
                <div className="line1"> </div>
                <div className="line2"> </div>
                <div className="line2"> </div>
              </div>
            )}
            {this.state.clicked && (
              <img
                src={menuLogo}
                className="menu-back-icon"
                onClick={this.handleClick}
              />
            )}
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Header);
