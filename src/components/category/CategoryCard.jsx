import Link from "next/link";

const CategoryCard = ({ cat }) => {
    return (
        <div
            className={`text-center p-4 rounded-lg relative min-h-[350px] ${cat.attributes.bg_color}`}
        >
            <div className="mt-3">
                <h3 className="text-2xl capitalize font-extrabold text-white hover:text-heading">
                    <Link href={`/category/${cat.id}`}>
                        {cat.attributes.title}
                    </Link>
                </h3>
                <h6 className="text-white mt-2">
                    {cat.attributes.products.data.length}
                    <span> Products</span>
                </h6>
            </div>
            <div className=" absolute bottom-0 left-0 right-0">
                <Link href={`/category/${cat.id}`}>
                    <img
                        src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${cat.attributes.thumbnail.data.attributes.url}`}
                        alt={cat.attributes.title}
                    />
                </Link>
            </div>
        </div>
    );
};
export default CategoryCard;
