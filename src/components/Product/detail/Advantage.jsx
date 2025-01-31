import PropTypes from 'prop-types';

export default function Advantage({ image, title, desc, path, idx }) {
  return (
    <div className="flex py-14 w-full h-full gap-x-8">
      <div className={`w-1/2 ${idx % 2 === 0 ? "" : "order-last"}`}>
        <img
          src={`${path}${image}`}
          alt=""
          className="w-full h-full rounded-xl"
        />
      </div>
      <div className="w-1/2 flex flex-col justify-center px-12">
        <h1 className="text-2xl">{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
}

Advantage.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  idx: PropTypes.number.isRequired,
};