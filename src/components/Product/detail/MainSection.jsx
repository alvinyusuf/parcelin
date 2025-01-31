import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import PropTypes from "prop-types";

export default function MainSection({ name, minOrder, price, desc, tags, images, path }) {
  return (
    <div className="w-full h-full py-14 flex items-center justify-center">
      <div className="flex w-full h-full gap-8">
        <div className="w-1/2">
          <Carousel images={images} path={path} />
        </div>
        <div className="w-full space-y-4">
          <p className="text-xl">Min. {minOrder}</p>
          <h1 className="font-bold text-4xl">{name}</h1>
          <p className="font-bold text-2xl text-[#AB6029]">{price}</p>
          <p>{desc}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
              <span key={idx} className="px-4 py-2 bg-gray-200 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <div>
            <Link>
              <button className="bg-orange-500 text-white py-2 px-4 rounded-full">
                Hubungi untuk pemesanan
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

MainSection.propTypes = {
  name: PropTypes.string.isRequired,
  minOrder: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  path: PropTypes.string.isRequired,
};
