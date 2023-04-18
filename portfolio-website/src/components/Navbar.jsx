import React from 'react';
import  '../App.css'


const Navbar = () => {
  return (
    <nav className="navcontainer void-background">
                <div classclassName="nav-left">
                    <a href="https://github.com/MarkCarbajal" class="nav-item">
                        <span classclassName="icon">
                            <i classclassName="fa fa-github"></i>
                        </span>
                    </a>
                    <a href="" classclassName="nav-item">
                        <span classclassName="icon">
                            <i classclassName="fa fa-twitter"></i>
                        </span>
                    </a>				
                </div>

                <div classclassName="nav-right nav-menu">
                    <a classclassName="nav-item" href="#about">About</a>
                    <a classclassName="nav-item" href="#projects">Projects</a>
                    <a classclassName="nav-item" href="#social">Social</a>
                </div>

                <span classclassName="nav-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </nav>
    )
}

export default Navbar