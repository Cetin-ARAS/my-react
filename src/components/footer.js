

import React from 'react'
import './footer.css';


const Footer=()=> {
  return (
    <div className='container'>
        <div class="btn"><a href="#">Start App</a></div>
		<div class="btn"><a href="#">Connect</a></div>
		<div class="btn"><a href="#">Team</a></div>
		<div class="btn"><a href="#">Buy Now</a></div>

  <footer class="footer">
  	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>Verlith</h4>
  	 			<ul>
					<li><a href="#">NFT</a></li>   
  	 				<li><a href="#">privacy policy</a></li>
  	 				<li><a href="#">Terms of use</a></li>
  	 			</ul>
  	 		</div>
			
  	 		<div class="footer-col">
  	 			<h4>HX13 Company</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">Governance</a></li>
  	 				<li><a href="#">HC Token</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Socials</h4>
  	 			<div class="social-links">
  	 				<a href="#"><i class="fab fa-telegram"></i></a>
  	 				<a href="#"><i class="fab fa-twitter"></i></a>
  	 				<a href="#"><i class="fab fa-discord"></i></a>
  	 				<a href="#"><i class="fab fa-linkedin-in"></i></a>
				</div>
				</div>
  	 		</div>
  	 	</div>
 </footer>
      
    </div>
  )
}




export default Footer;