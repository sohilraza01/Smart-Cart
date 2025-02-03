import Hero from '../Components/Hero/Hero';
import NewCollections from '../Components/NewCollection/NewCollections';
import NewsLetter from '../Components/NewsLetter/NewsLetter';
import Offers from '../Components/Offers/Offers';
import Popular from '../Components/Popular/Popular';
import './Shop.css';
const Shop = () => {
    return ( 
        <div className="shop">
            <Hero/>
            <Popular/>
            <Offers/>
            <NewCollections/>
            <NewsLetter/>
        </div>
     );
}


export default Shop;