import { useNavigate } from "react-router-dom";
import BreedPhoto from "../components/BreedPhoto";
import Header from "../components/Header";
import { useAllBreeds } from "../stores/allBreeds";
import { useCurrentBreed } from "../stores/breed";

const AllBreeds = () => {
  const [allBreeds, allBreedsActions] = useAllBreeds();
  const allBreedsData = allBreeds.allBreeds;

  const [currentBreed, currentBreedActions] = useCurrentBreed();

  const navigate = useNavigate();

  const handleBreedClick = (breed) => {
    currentBreedActions.setCurrentBreed(breed);

    navigate("/breed-info");
  };
  return (
    <div>
      <Header />

      <p className="mb-[2rem] font-montserrat text-[2rem] font-bold">66+ Breeds For you to discover.</p>
      <div className="flex justify-end p-[2rem]">
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="text-[1.2rem] font-semibold"
        >
          Go Back
        </button>
      </div>
      <div className="grid grid-cols-1 gap-y-[5.2rem] font-montserrat">
        {allBreedsData.map((breed) => {
          return (
            <div
              className="mx-auto w-fit"
              onClick={() => {
                handleBreedClick(breed);
              }}
              key={breed.id}
            >
              <div className="h-[27.5rem] w-[27.5rem] overflow-hidden rounded-[2.4rem]">
                <BreedPhoto src={breed?.image?.url} />
              </div>
              <p className="mt-[2rem] text-[1.82rem] font-semibold">{breed?.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllBreeds;
