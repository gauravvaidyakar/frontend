import "./App.css" 
import { HiOutlineShoppingBag } from "react-icons/hi2";

const App = () => {
  return (
    <>
    <div id='navbar'>
       <h1><HiOutlineShoppingBag/>Product Manegment Dashboard</h1>
    </div>

    <div id="product-section">
        <div>
          <h2>Product Name</h2>
          <input type="text" placeholder="Enter Product Name"/>
        </div>
        <div>
          <h2>price(₹)</h2>
          <input type="text" placeholder="Enter Price"/>
        </div>
        <div>
          <h2>Categary</h2>
          <select id="select">
            <option value="">select categary</option>
            <option value="">Male</option>
            <option value="">Female</option>
          </select>
        </div>
        <div>
          <button>+ Add Product</button>
        </div>
        
    </div>

    <div id="main">
      <div id="in_bar">
        <input type="text" placeholder="search product by name" />
      </div>
    </div>
    </>
  )
}

export default App;