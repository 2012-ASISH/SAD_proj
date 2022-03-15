import React,{Component} from 'react';
import { Switch,Link, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './Home.css';
import About from './About';
class Home extends React.Component
{
    render(){
        return(<div>
            <div className="a">
            <div className="container">
            <div className="jumbotron text-center">
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                      <div className="navbar-header">
                        <a className="navbar-brand" href="#"><font face="Comic Sans MS" color="goldenrod">CHEEZA.com</font></a>
                      </div>
                      <ul className="nav navbar-nav">
                        
                        <li className='nav-item'>
                            <Link to={"/"} className="nav-link">Home</Link>
                            </li>
                        <li className="nav-item">
                        <Link to={"/about"} className="nav-link"> About Us</Link>
                        </li>
                        <li className='nav-item'>
                        <Link to={"/pizza"} className="nav-link">Pizzzzaaas</Link>
                            </li>
                        
                        <li><a href="#">Feed-back</a></li>
                        
                      </ul>
                    </div>
                  </nav>
                 <h1><font face="Comic Sans MS">CHEEZA</font></h1>
                <p><font face="Comic Sans MS">We specilize in world famous Italian pizza</font></p>
                <form className="form-inline">
                    <div className="input-group">
                        <input type="email" className="form-control" size="20" placeholder="Email Address" required/>
                        <div className="input-group-btn">
                            <button type="button" className="btn btn-danger">Add</button>
                        </div>
                    </div>
                    <div className="input-group">
                        <input type="text" className="form-control" size="20" placeholder="Enter your name" required/>
                        <div className="input-group-btn">
                            <button type="button" className="btn btn-danger">Add</button>
                        </div>
                    </div>
                </form>
               
            </div>

        </div>
           
        

                </div>
 </div>       )
    }
}
export default Home;