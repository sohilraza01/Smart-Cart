import './DescriptionBox.css';
const DescriptionBox = () => {
    return ( 
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>An e-commerce website is an online platform that facilitate buying and selling of products or services over the internet. it serves as a virtual marketplace where buisness and individuals can  showcase their products, interact with customers, and conduct transactios without the need for a physical presence. E-commerce website have gained immense popularity due to their convenience accessibility, and the global reach they offer.</p>
                <p>
                    E-commerce website typically display products or services along with  detailed descriptions, images, price, and any available variations (e.g.,sizes, colors). Each products has its own dedicate with relevant information.
                </p>
            </div>
        </div>  
     );
}
 
export default DescriptionBox;