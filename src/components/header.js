import React from 'react'
import './header.css';

export default function Header() {
  return (
     <div class="background"> 
         <div class="header">
                <div class="inner header">
                    <div class="logo container"> 
                        <h1>V<span>erlith</span></h1>
                        <a class="hamburger menu">
                            <span class="bar"></span>
                            <span class="bar"></span>
                            <span class="bar"></span>
                        </a>
                    </div>
                        <ul class="navigation">
                            <a><li>NFT</li></a>
                            <a><li>Whitepaper</li></a>
                            <a><li>Socials</li></a>
                            <a><li>HX13 Company</li></a>
                        </ul>
                    </div>
                        <ul class="mobile links">
                        <a><li>NFT</li></a>
                        <a><li>Whitepaper</li></a>
                        <a><li>Socials</li></a>
                        <a><li>HX13 Company</li></a>
                        </ul>
                    </div>
                <div class="secondheader">   
                    <div class="startapp">
                        <div class="btn"><a href="#">Start App</a>
                        </div>
                    <div class="connect">
                        <div class="btn"><a href="#">Connect</a>
                        </div>    
                    </div>
                    </div>      
                </div>
            </div>        
    
  )
}
