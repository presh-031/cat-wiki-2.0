import { useRouter } from "next/router";
import BreedPhoto from "../components/BreedPhoto";
import Header from "../components/Header";

const AllBreeds = () => {
  const router = useRouter();

  return (
    <div>
      <Header />

      <p className="mb-[2rem] font-montserrat text-[2rem] font-bold">66+ Breeds For you to discover.</p>
      <div className="flex justify-end p-[2rem]">
        <button
          onClick={() => {
            router.push(-1);
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
                router.push("/breedinfo");
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
