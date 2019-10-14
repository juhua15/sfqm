import React from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import { Menu, Icon } from "antd";
import Home from "../views/home";
import About from "../views/about";
import User from "../views/user";
require("../css/justcss.css") ;
const { SubMenu } = Menu;
class App extends React.Component {
  handleClick = e => {
    console.log("click ", e);
  };
  render() {
    return (
      <div>
        <div className="page-header col-md-2 col-md-offset-5" ><h1>重庆三丰旗舰店</h1></div>
        <div>
          {/* 选择 */}
          <div>
            <Menu
            
              onClick={this.handleClick}
              style={{ width: 256 }}
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
            >
              <SubMenu
                theme="dark"
                key="sub1"
                title={<Link to="/home">Home</Link>}
              ></SubMenu>
              <SubMenu
                theme="dark"
                key="sub2"
                title={<Link to="/about">About</Link>}
              ></SubMenu>
              <SubMenu
                theme="dark"
                key="sub3"
                title={<Link to="/user">User</Link>}
              ></SubMenu>
            </Menu>
          </div>
          <div>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/user" component={User} />
              <Redirect to="/about" />
            </Switch>
          </div>
        </div>
        
      <footer className="footer navbar-fixed-bottom ">
    <div className="container ">
          <button type="button" className="btn btn-primary telus">联系我们: 023-85287555</button>
        </div>
      </footer>
        
      </div>
    );
  }
}
export default App;
