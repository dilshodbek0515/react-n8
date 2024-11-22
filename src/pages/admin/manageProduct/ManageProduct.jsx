import "./ManageProduct.scss";
import { useFetch } from "../../../hook/useFetch";
import Wishlist from "../../wishlist/Wishlist";

const ManageProduct = () => {
    const { data: products } = useFetch("products");

    return (
        <div>
            <h2 className="text-5xl">Manage Products</h2>
            <div className="mt-[-200px]">
                {products ? (
                    <Wishlist admin={true} products={products} />
                ) : (
                    <p>Loading products...</p>
                )}
            </div>
        </div>
    );
};

export default ManageProduct;
