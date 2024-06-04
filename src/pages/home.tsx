import { Link } from "react-router-dom"
import ProductCard from "../components/product-card"


const Home = () => {


  const addToCartHandler=()=>{

    
  }

  return (
    <div className="home">
      <section></section>
      <h1>
        Latest Products
        <Link to="/search" className="findmore">More</Link>
      </h1>

      <main>

<ProductCard 
productId="jfjfjfj"
name="Lenovo"
price={3458945}
stock={784}
handler={addToCartHandler}
photo="https://m.media-amazon.com/images/I/61dmgZWyTgL._SX450_.jpg"
/>


      </main>
    </div>
  )
}

export default Home
