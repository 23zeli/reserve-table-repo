function Main () {

    return(
        <div 
            className="conatiner"
        >
            <div className="main-container" style={{height: "520px", width:"1440px", margin: "auto"}}>
                <main>
                    <div 
                        className="card" 
                        style={{marginTop: "40px"}}
                    >
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                       <p>
                            <span
                                style={{display: "block"}}
                            >
                                We are a family-owned
                            </span>
                            Mediterranean restaurant,
                            <span
                                style={{display: "block"}}
                            >
                             focused on traditional   
                            </span>
                            recipes served with a modern
                            <span
                                style={{display: "block"}}
                            >
                             twist.   
                            </span>
                        </p>
                        <button>Reserve a table</button>
                    </div>
                    <div className="restaurant-image">
                        <img 
                            src="./images/restauranfood.jpg" 
                            style={{width: "375px", height: "464px", borderRadius: "20px", marginTop: "50px"}}
                        />
                    </div>
                </main>
            </div>
            
            <div
                style={{width: "860px", height: "824px", margin: "auto"}}
                
            >
                <div className="flex-container">
                    <div className="hero-header">
                        <h1>This weeks Specials!</h1>
                        <button>Online Menu</button>
                    </div>
                    <div className="hero-section-container">
                        <div className="greek-salad">
                            <img 
                                src="./images/greek salad.jpg" 
                                alt="greek_salad"
                            />
                            <h3>Greek salad</h3>
                            <p>
                                The famous Greek salad of crispy lettuce, peppers, olives and our              Chicago style  feta cheese garnished with crunchy garlic and rosemary croutons.
                            </p>
                            <p>Order a delivery</p>
                        </div>
                        <div>
                            <img 
                                src="./images/bruchetta.png" 
                                alt="bruchetta"
                            />
                            <h3>Bruchetta</h3>
                            <p>
                                Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                            </p>
                            <p>Order a delivery</p>
                        </div>
                        <div>
                            <img 
                                src="./images/lemon dessert.jpg" 
                                alt="lemon_dessert"
                            />
                            <h3>Lemon Desert</h3>
                            <p>
                                This comes straight from grandma’s recipe book, every last ingredient has been sourced and is authentic as can be imagined.
                            </p>
                            <p>Order a delivery</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        
    )
}

export default Main

