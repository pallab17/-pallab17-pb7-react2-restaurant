import React from 'react'

const MenuCard = () => {
  return (
    <>
        <div className="card-container">
        <div className="card">
            <div className="card-body">
                <span className="card-number card-circle">1 </span>
                <span className="card-author"> Breakfast </span>
                <h2 className="card-title">Maggi </h2>
                <span className="card-description">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam perspiciatis fugit quia dolores fuga. Nesciunt?
                </span>
                <div className="card-read">Read</div>

            </div>
            <img src={image} alt="images" className="card-media" />
            <span className="card-tag">Order Now</span>

        </div>
      
      </div>
    </>
  )
}

export default MenuCard
