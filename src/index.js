import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"

function App() {// App is the parent component and MyComponent is the child component
  // Pizza variables
  
  const pizzas = [
    {
      name: "Margherita",
      description: "Classic tomato sauce with mozzarella and basil.",
      price: 12,
      image: '/marghetti.png'
    },
    {
      name: "Tomato",
      description: "Topped with spicy pepperoni slices and extra cheese.",
      price: 15,
      image: "/tomatopizza.png"
    },
    {
      name: "Hawaiian",
      description: "Sweet pineapple chunks with smoked ham and mozzarella.",
      price: 14,
      image: "/hawalian.png"
    },
    {
      name: "Mozarella",
      description: "Mozarella cheese pizza with sweet teriyaki sauce",
      price: 23,
      image: "/mozarella.png"
    },
    {
      name: "Bagel Pizza",
      description: "Mozarella cheese pizza with sweet teriyaki sauce",
      price: 23,
      image: "/bagelpizza.jpg"
    }
  ];

  const aboutus = [
    {
      name: "@JiayiPizzaa",
     description: "Yo yo! 🍕 Welcome to Jiayi’s Pizza Shop — where the crust is always crisp, the cheese stretches like a dream, and every slice tells a story of passion and flavour.\n\nStep into our world of oven-fresh goodness and mouth-watering aromas — handcrafted pizzas made with love, laughter, and a dash of Jiayi magic.\n\nWhether you are a fan of the classics or crave bold, adventurous flavours, there is something here that’ll make your heart happy.\n\nPull up a chair, explore the menu, and get ready to experience pizza the way it’s meant to be — golden, gooey, and unforgettable.\n\nWho knows… you might just fall in love with pizza all over again 😏",
      image: "/girl.png"
    }
  ]
  const feature =[
    {
      name:"Free Delivery Service",
      description:"Get your pizza delivered for free when you spend $20 or more.",
      image:"/delivery.png"
    },
    {
      name:"10 percent off",
      description:"Spend $50, and we’ll take 10% off your total!",
      image:"/10percent.png"
    },
    {
      name:"First-time order? Get a $5 voucher!",
      description:"First-time customer? Enjoy a $5 supermarket voucher as a welcome gift .",
      image:"/5dollarvouncher.png"
    },
    {
      name:"Free pizza for our loyal customers!",
      description:"We appreciate your love for pizza — that’s why our loyal customers get a free pizza as a tasty thank-you treat!",
      image:"/pizzafree.png"
    }
  ]
  const about = aboutus.map(aboutuss => <Aboutuspage name={aboutuss.name} description={aboutuss.description} image={aboutuss.image} />)
  const listfood = pizzas.map(pizza => <Pizza  description={pizza.description} price={pizza.price} image={pizza.image} />)
  const featureonhomepage = feature.map(feature1 => <Features name={feature1.name} description={feature1.description } image={feature1.image}/>)

  return (
    <div id="container">
      <div className="fullscreen-bg">
      <Header />
      <Loginbutton />
      <Menu />
      <p className="pizzas">{listfood}</p>
      <Aboutus />
      <p>{about}</p>
      <Feature />
      <p className="pizzas">{featureonhomepage}</p>
      {/* <Menu />
      <p className="pizzas">{listfood}</p> */}
      {/* style must be an object */}
      <Footer style={{ fontWeight: "bold", textAlign: "center" }}/>
      
      </div>
  
    </div>
  )
}
function Header() {
  return <h1 className="header" style={{ color: "#FF66B2", fontSize: "48px", textTransform: "uppercase", textAlign: "center" }} >
    Jiayi's Pizza co</h1>
}
function Loginbutton(){
  return<>
  <button className="btn1">Sign Up</button>
  </>
  
}

// function Login() {
//   return (
//     <div>
//       <h2>Login Page</h2>
//       <input type="text" placeholder="Username" />
//       <input type="password" placeholder="Password" />
//       <button>Submit</button>
//     </div>
//   );
// }
function Aboutus() {
  return (
    <div className="aboutus">
      <h2>About Us</h2>

      {/* <about /> */}
    </div>
  )
}
 
function Feature(){
  return(
    <div className ="feature">
      <h2>Feature</h2>
      {/* <features /> */}
      
    </div>
  )

}

function Menu() {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <p> Authentic Italian culsine. all from our stone oven</p><br></br>
      {/* <Pizza  name ="Spinach Pizza" description="Spinach pizza with leafy spinach and juicy tomato" image="spinach.png" price={14}/>
    <MozarellaPizza1 name ="Mozarella Pizza" description="A classic pizza topped with rich tomato sauce and 
    melted mozzarella cheese" image="mozarella.png" price={14}/>
    <Pizza2 name="Tomato Pizza" description ="Tomato pizza with mozarella cheese and juicy tomato" image="tomatopizza.png" price={14}/>
    <Pizza3 name="Margherita Pizza" description="A timeless classic made with tomato sauce, fresh mozzarella, and basil leaves for a simple yet flavourful taste." image="marghetti.png" price={14}/>
    <Footer /> */}

    </div>
  )

}
function Pizza(props) { //follow naming convention
  return (
    <div className="pizza">
      <header />
      <img src={props.image} alt="Spinach Pizza" width="100" />
      
      <p className="pizza">{props.description}</p>
      <p>${props.price}</p>
    </div>
  )
}
function Aboutuspage(props) {
  return (
    <div className="about-card">
      <img src={props.image} alt="Jiayi Pizza" className="about-img" />
      <div className="about-content">
        <h1 className="jiayiname">{props.name}</h1>
        <p className="Jiayidescription" >{props.description}</p>
      </div>
    </div>
  );
}

function Features(props){
  return(
    <div className="feature-card">
      <img src={props.image} alt="Jiayi Pizza" className="about1-img" />
      <div className="feature-content">
        <h1 className="featurename">{props.name}</h1>
        <p className="featuredescription">{props.description}</p>
      </div>
    </div>

  )

}


// function MozarellaPizza1(props){ //follow naming convention
//   return (
//     <div className ="pizza">
//     <header />
//      <img src={props.image} alt="Spinach Pizza" width="300"  className ="pizza" />
//       <h1 style ={{textTransform:"uppercase"}}> {props.name}</h1>
//       <p  className="pizza"> {props.description}</p>
//   </div>
//   )
// }

// function Pizza2(props){ //follow naming convention
//   return (
//     <div className ="pizza" >
//     <header />
//     <img src={props.image} alt="tomatopizza" width="300"  className ="pizza" />
//       <h1 style ={{textTransform:"uppercase"}}> {props.name}</h1>
//       <p  className ="pizza"> {props.description}</p>

//   </div>
//   )
// }

// function Pizza3(props){ //follow naming convention
//   return (
//     <div className ="pizza" >
//     <header />
//     <img src={props.image} alt="Spinach Pizza" width="300"  className ="pizza" />
//       <h1 style ={{textTransform:"uppercase"}}> {props.name}</h1>
//       <p  className ="pizza"> {props.description}</p>
//       <p>{props.price}</p>
//   </div>
//   )
// }

function Footer(props) {  // accept props so style works
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;

  const isOpen = hour > openHour && hour < closeHour;

  return (
    <footer className="footer" style={props.style}>
      {isOpen ? (
        <div>
          <Open />
        </div>
      ) : (
        <Closed />
      )}
    </footer>

  )
}
function Open() {
  return (
    <div>
      <p>We are currently open</p>
      <button className="btn">Order</button>
    </div>
  )

}
function Closed() {
  return (
    <div>
      <p>We are currently closed</p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root")); //html file in public ,root is in the div code
root.render(<App />)
