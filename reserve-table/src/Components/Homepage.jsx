import React from 'react'


function Homepage() {
  return (
    <div>
        <div 
                className="homepage" 
                style={{
                    height: "520px", 
                    width:"1440px", 
                    margin: "auto",
                }}
            >
                <div className="homepage-cards">
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
                </div>
            </div>
    </div>
  )
}

export default Homepage
