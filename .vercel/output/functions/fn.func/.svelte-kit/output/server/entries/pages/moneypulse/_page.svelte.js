import "clsx";
import { a as attr } from "../../../chunks/attributes.js";
function CTA($$payload) {
  const appStoreUrl = "https://apps.apple.com/id/app/moneypulse/id6741426099";
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.jeffryhermanto.moneypulse";
  $$payload.out += `<section class="colored-section" id="cta"><div class="container-fluid"><h3 class="big-heading">Take Control of Your Finances!</h3> <a${attr("href", appStoreUrl)} target="_blank"><button class="download-button btn btn-lg btn-dark" type="button"><i class="fab fa-apple"></i>  Download</button></a> <a${attr("href", playStoreUrl)} target="_blank"><button class="download-button btn btn-lg brn-light" type="button"><i class="fab fa-google-play"></i>  Download</button></a></div></section>`;
}
function Features($$payload) {
  $$payload.out += `<section class="white-section" id="features"><div class="container-fluid"><div class="row"><div class="feature-box col-lg-4"><i class="icon fa-solid fa-stethoscope fa-4x"></i> <h3 class="feature-title svelte-vufavn">Financial Analysis</h3> <p>MoneyPulse provides a detailed evaluation of your financial status, offering insights into
					various aspects of your financial well-being.</p></div> <div class="feature-box col-lg-4"><i class="icon fa-solid fa-money-bills fa-4x"></i> <h3 class="feature-title svelte-vufavn">Budgeting Tools</h3> <p>The app allows you to set up budgets by predefined categories, helping you manage your
					spending and savings effectively.</p></div> <div class="feature-box col-lg-4"><i class="icon fa-solid fa-heart fa-4x"></i> <h3 class="feature-title svelte-vufavn">User-Friendly Interface</h3> <p>Designed with ease of use in mind, MoneyPulse features an intuitive interface that
					simplifies navigation and enhances the user experience.</p></div></div></div></section>`;
}
function Footer($$payload) {
  $$payload.out += `<footer class="white-section" id="footer"><div class="container-fluid"><a href="https://www.twitter.com/jeffryhermanto/" target="_blank"><i class="social-icon fa-brands fa-x-twitter"></i></a> <a href="https://www.instagram.com/jeffryhermanto/" target="_blank"><i class="social-icon fa-brands fa-instagram"></i></a> <a href="https://www.tiktok.com/@jeffry.hermanto/" target="_blank"><i class="social-icon fa-brands fa-tiktok"></i></a> <p>© 2025 Jeffry Hermanto. All rights reserved.</p></div></footer>`;
}
const one = "/_app/immutable/assets/screenshot_01.Xjot8fW_.png";
const two = "/_app/immutable/assets/screenshot_02.BS3SRju_.png";
const three = "/_app/immutable/assets/screenshot_03.DNT_xnYm.png";
const four = "/_app/immutable/assets/screenshot_04.CT9EjPTH.png";
const five = "/_app/immutable/assets/screenshot_05.COmqlO49.png";
const six = "/_app/immutable/assets/screenshot_06.BTqkuoe6.png";
function Gallery($$payload) {
  $$payload.out += `<section class="white-section" id="gallery"><h2 class="section-heading">Gallery</h2> <p>Get a sneak peek into the MoneyPulse app.</p> <div class="row"><div class="pricing-column col-lg-4 col-md-12"><div class="card"><div class="card-header"><h3>Your Financial Health at a Glance</h3></div> <div class="card-body"><img${attr("src", one)} alt="Screenshot 1"></div></div></div> <div class="pricing-column col-lg-4 col-md-12"><div class="card"><div class="card-header"><h3>Monitor Your Net Worth Progress</h3></div> <div class="card-body"><img${attr("src", two)} alt="Screenshot 2"></div></div></div> <div class="pricing-column col-lg-4 col-md-12"><div class="card"><div class="card-header"><h3>Easy Navigation</h3></div> <div class="card-body"><img${attr("src", three)} alt="Screenshot 3"></div></div></div> <div class="pricing-column col-lg-4 col-md-12"><div class="card"><div class="card-header"><h3>Easy Budgeting</h3></div> <div class="card-body"><img${attr("src", four)} alt="Screenshot 4"></div></div></div> <div class="pricing-column col-lg-4 col-md-12"><div class="card"><div class="card-header"><h3>Financial Health Score Explained</h3></div> <div class="card-body"><img${attr("src", five)} alt="Screenshot 5"></div></div></div> <div class="pricing-column col-lg-4 col-md-12"><div class="card"><div class="card-header"><h3>Your Data is Safe on Your Device</h3></div> <div class="card-body"><img${attr("src", six)} alt="Screenshot 6"></div></div></div></div></section>`;
}
const logo = "/_app/immutable/assets/logo.C46yNFok.png";
const phone = "/_app/immutable/assets/phone.FIkkUCea.png";
function Header($$payload) {
  const appStoreUrl = "https://apps.apple.com/id/app/moneypulse/id6741426099";
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.jeffryhermanto.moneypulse";
  $$payload.out += `<section class="colored-section" id="title"><div class="container-fluid"><nav class="navbar navbar-expand-lg navbar-dark"><a class="navbar-brand" href="" style="color: #f1f6be"><img${attr("src", logo)} width="60" height="60" class="d-inline-block align-top" alt=""> 
				MoneyPulse</a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"><span class="navbar-toggler-icon"></span></button> <div class="collapse navbar-collapse" id="navbarTogglerDemo02"><ul class="navbar-nav ml-auto"><li class="nav-item"><a class="nav-link" href="#features">Features</a></li> <li class="nav-item"><a class="nav-link" href="#testimonials">Testimonials</a></li> <li class="nav-item"><a class="nav-link" href="#gallery">Gallery</a></li> <li class="nav-item"><a class="nav-link" href="#cta">Download</a></li></ul></div></nav> <div class="header-title"><div class="row"><div class="col-lg-6"><h1 class="big-heading">Financial Checkup App</h1> <a${attr("href", appStoreUrl)} target="_blank"><button type="button" class="btn btn-dark btn-lg download-button"><i class="fab fa-apple"></i>  Download</button></a> <a${attr("href", playStoreUrl)} target="_blank"><button type="button" class="btn btn-outline-light btn-lg download-button"><i class="fab fa-google-play"></i>  Download</button></a></div> <div class="col-lg-6"><img class="title-image"${attr("src", phone)} alt="iphone-mockup"></div></div></div></div></section>`;
}
function RunningText($$payload) {
  $$payload.out += `<section class="colored-section" id="press"><div class="container"><marquee behavior="scroll" direction="left" scrollamount="15"><h5>MoneyPulse is your ultimate financial checkup app designed to help you track, analyze, and
				improve your financial well-being.</h5></marquee></div></section>`;
}
const james = "/_app/immutable/assets/james.DK7TiVBN.png";
const jessica = "/_app/immutable/assets/jessica.DrsJe9EE.png";
const maya = "/_app/immutable/assets/maya.CQQ03R_5.png";
const ryan = "/_app/immutable/assets/ryan.BQz36uIo.png";
const tanya = "/_app/immutable/assets/tanya.Cajx9MMm.png";
function Testimonials($$payload) {
  $$payload.out += `<section class="colored-section" id="testimonials"><div id="testimonial-carousel" class="carousel slide" data-ride="false"><div class="carousel-inner"><div class="carousel-item active container-fluid"><h2 class="testimonial-text">I've always been a bit overwhelmed by my finances, but MoneyPulse's financial checkup
					feature gave me a clear overview of where I stand. It broke down my debts, savings, and
					spending habits in an easy-to-understand way. I now feel empowered to take control and
					make smarter financial decisions!</h2> <img class="testimonial-image"${attr("src", jessica)} alt="person"> <em>Jessica L. <small>- Marketing Executive, 34</small></em></div> <div class="carousel-item container-fluid"><h2 class="testimonial-text">The financial checkup on MoneyPulse is exactly what I needed. It analyzed my cashflow and
					showed me exactly where I could cut back. The personalized insights have helped me create
					a budget I can stick to and start saving more for the future.</h2> <img class="testimonial-image"${attr("src", ryan)} alt="person"> <em>Ryan P. <small>- Software Engineer, 27</small></em></div> <div class="carousel-item container-fluid"><h2 class="testimonial-text">"As someone who just graduated and started working, I didn't know where to begin with
					managing my money. The financial checkup tool in MoneyPulse was a total eye-opener. It
					provided me with actionable steps to pay off student loans, build credit, and start
					saving. I feel more financially literate than ever!"</h2> <img class="testimonial-image"${attr("src", james)} alt="person"> <em>James H. <small>- Recent Graduate, 23</small></em></div> <div class="carousel-item container-fluid"><h2 class="testimonial-text">MoneyPulse's financial checkup helped me assess my personal finances all in one place. I
					love how it shows the health of my cash flow, assets, and liabilities, and I've been able
					to adjust my financial strategy accordingly. It's been a game-changer for my personal
					wealth.</h2> <img class="testimonial-image"${attr("src", maya)} alt="person"> <em>Maya G. <small>- Entrepreneur, 36</small></em></div> <div class="carousel-item container-fluid"><h2 class="testimonial-text">Between family expenses and managing household finances, I was always guessing about our
					financial health. After using the financial checkup feature, I've finally gotten a full
					picture of where we stand. It's helped me prioritize our savings goals and cut back on
					unnecessary spending. Highly recommend it!</h2> <img class="testimonial-image"${attr("src", tanya)} alt="person"> <em>Tanya W. <small>- Full-Time Parent, 38</small></em></div></div> <a class="carousel-control-prev" href="#testimonial-carousel" role="button" data-slide="prev"><span class="carousel-control-prev-icon"></span></a> <a class="carousel-control-next" href="#testimonial-carousel" role="button" data-slide="next"><span class="carousel-control-next-icon"></span></a></div></section>`;
}
function _page($$payload) {
  $$payload.out += `<div class="body">`;
  Header($$payload);
  $$payload.out += `<!----> `;
  Features($$payload);
  $$payload.out += `<!----> `;
  Testimonials($$payload);
  $$payload.out += `<!----> `;
  RunningText($$payload);
  $$payload.out += `<!----> `;
  Gallery($$payload);
  $$payload.out += `<!----> `;
  CTA($$payload);
  $$payload.out += `<!----> `;
  Footer($$payload);
  $$payload.out += `<!----></div>`;
}
export {
  _page as default
};
