import { useRef } from "react";
import "./CreateProduct.scss";
import axios from "axios";

const CreateProduct = () => {
    const title = useRef(null);
    const price = useRef(null);
    const description = useRef(null);
    const url = useRef(null);
    const price2 = useRef(null);
    const stock = useRef(null);

    const handleCreateProduct = (e) => {
        e.preventDefault();
        const newProduct = {
            title: title.current.value,
            price: price.current.value,
            description: description.current.value,
            url: url.current.value,
            price2: price2.current.value,
            stock: stock.current.value,
        };

        console.log("Sending product data:", newProduct);

        axios
            .post("https://672f3e4f229a881691f24b98.mockapi.io/products", newProduct)
            .then((res) => {
                console.log("Response:", res.data);
                title.current.value = "";
                price.current.value = "";
                description.current.value = "";
                url.current.value = "";
                price2.current.value = "";
                stock.current.value = "";
            })
            .catch((err) => console.error("Error:", err));
    };

    return (
        <div className="create_p">
            <form onSubmit={handleCreateProduct} className="create_form">
                <input ref={title} type="text" placeholder="title" />
                <input ref={price} type="number" placeholder="price" />
                <input ref={description} type="text" placeholder="description" />
                <input ref={url} type="text" placeholder="url" />
                <input ref={price2} type="number" placeholder="price2" />
                <input ref={stock} type="number" placeholder="stock" />
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default CreateProduct;
