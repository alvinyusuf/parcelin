import { useParams } from "react-router-dom";
import MainSection from "../../components/Product/detail/MainSection";
import products from "../../data/products.json";
import Advantage from "../../components/Product/detail/Advantage";
import Card from "../../components/Card";

export default function Detail() {
  const { subSlug, slug } = useParams();
  const subProduct = products.find((product) => product.slug === slug);
  const product = subProduct["sub-products"].find(
    (product) => product.slug === subSlug
  );

  const path = `/images/product/${slug}/${subSlug}/`;

  return (
    <div className="flex flex-col gap-y-10">
      <MainSection
        name={product.name}
        price={product.price}
        desc={product.desc}
        minOrder={product.minOrder}
        tags={product.tags}
        images={product.detailImg}
        path={path}
      />

      {product.advantages.map((advantage, idx) => (
        <Advantage
          key={idx}
          image={product.detailImg[idx]}
          title={advantage.title}
          desc={advantage.desc}
          path={path}
          idx={idx}
        />
      ))}

      <div className="flex flex-col justify-center items-center gap-y-10 bg-gray-200 py-8">
        <h1 className="text-2xl">Temukan inspirasi dari kami</h1>
        <div className="flex gap-x-8">
          {[1, 2, 3, 4].map((i) => (
            <img
              key={i}
              src={`/images/product/inspired/inspired${i}.png`}
              alt={`inspired${i}`}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-y-10 py-4 px-20">
        <h1 className="text-2xl">Packaging lain</h1>
        <div className="flex gap-x-2">
          {products.slice(0, 4).map((p, idx) => (
            <Card
              key={idx}
              img={`/images/product/${p.img}`}
              name={p.name}
              slug={p.slug}
              tags={p.tags}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
