import css from "./NumberedDetail.module.css";

const NumberedDetail = ({ title, value }) => {
  const numberToTiles = (value) => {
    const mockArray = [0, 1, 2, 3, 4];
    return (
      <div className={css.number_to_tiles}>
        {mockArray.map((el, index) => (
          <span key={index} className={el < value ? `${css.shaded_tiles}` : `${css.unshaded_tiles}`}></span>
        ))}
      </div>
    );
  };
  return (
    <div className="mb-[3.2rem] flex">
      <span className="block w-[15rem] text-[1.6rem] font-bold leading-[1.95rem]">{title}:</span>
      <div className="">{numberToTiles(value)}</div>
    </div>
  );
};

export default NumberedDetail;
