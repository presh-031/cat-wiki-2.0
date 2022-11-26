import BreedPhoto from "./BreedPhoto";

import NumberedDetail from "./NumberedDetail";

const BreedDetail = ({ breedInfo, name }) => {
  return (
    <div className="mt-[2rem]  p-[2rem] font-montserrat text-[#291507]">
      <p className="mb-[2.5rem] text-[3.6rem] font-semibold leading-[4.388rem]">{breedInfo.name}</p>
      <p className="mb-[3.275rem] text-[1.6rem] font-medium leading-[2.194rem]">{breedInfo.description}</p>
      <p className="mb-[3.2rem] text-[1.6rem] font-bold leading-[1.95rem]">
        Temperament: <span className="font-medium">{breedInfo.temperament}.</span>
      </p>
      <p className="mb-[3.2rem] text-[1.6rem] font-bold leading-[1.95rem]">
        Origin: <span className="font-medium">{breedInfo.origin}</span>
      </p>
      <p className="mb-[3.2rem] text-[1.6rem] font-bold leading-[1.95rem]">
        Life Span: <span className="font-medium"> {breedInfo.lifeSpan} years </span>
      </p>
      {breedInfo.map((breed) => {
        const detail = breedInfo.NumberedDetails;
        return <NumberedDetail key={breed.id} title={detail[0]} value={detail[1]} />;
      })}

      {/* Other Photos */}
      <p className="mb-[4.1rem] mt-[4.8rem] font-montserrat text-[3.6rem] font-semibold leading-[4.388rem]">
        Other Photos
      </p>
      <div className="grid grid-cols-1 gap-y-[5.2rem] ">
        {data?.map((breed) => {
          return (
            <div key={breed.id} className="mx-auto h-[27.5rem] w-[27.5rem] overflow-hidden rounded-[2.4rem] ">
              <BreedPhoto src={breed[0]?.url} name={name} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BreedDetail;
