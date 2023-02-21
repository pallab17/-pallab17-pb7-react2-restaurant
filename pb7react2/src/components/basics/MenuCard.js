import React from 'react'

const MenuCard = ({menuData}) => {
  return (
    <>
    <section className="main-card--cointainer">
        {/* .map fn use kore amra basically for loop use korchi 
        ekta key variable o use korte hoye to use map fn */}
        {menuData.map((curElem) => {
            return(
                <>
                <div className="card-container " key={curElem.id}>
                <div className="card">
                    <div className="card-body">
                        <span className="card-number card-circle">{curElem.id}</span>
                        <span className="card-author"> {curElem.name} </span>
                        <h2 className="card-title">{curElem.name}</h2>
                        <span className="card-description">
                            {curElem.description}
                        </span>
                        <div className="card-read">Read</div>
        
                    </div>
                    <img src={curElem.image} alt="images" className="card-media" />
                    <span className="card-tag">Order Now</span>
        
                </div>
              
              </div>
              </>

            )

        })}
    
    </section>
    </>
  )
}

export default MenuCard
