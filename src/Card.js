import './Card.css'
let Card=(props)=>{
    let data=props.data

    return(
        <div className="cardcon">

        <div className="Pname">Pname:{data.Pname}</div>
        <div className="Price">Price:{data.Price}</div>
        <div className="img"><img src={data.img} alt='adfd'/></div>

        <div className="btn">
            <button style={{background:'red',color:'white'}}>Add to cart</button>

            <button>know more</button>
        </div>

        </div>
    )
} 
export default Card;