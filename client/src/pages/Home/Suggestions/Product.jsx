import { Link } from "react-router-dom";

const Product = ({ image, name, offer, tag }) => {
    return (
        <Link
            to="/products"
            className="flex flex-col items-center gap-1.5 p-6 cursor-pointer"
        >
            <div className="transition-transform duration-150 ease-out transform w-36 h-36 hover:scale-110">
                <img
                    draggable="false"
                    className="object-contain w-full h-full"
                    src={image}
                    alt={name}
                />
            </div>
            <h2 className="mt-2 text-sm font-medium">{name}</h2>
            <span className="text-sm text-primary-green">{offer}</span>
            <span className="text-sm text-gray-500">{tag}</span>
        </Link>
    );
};

export default Product;
