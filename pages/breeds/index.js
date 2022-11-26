import { useRouter } from "next/router";
import BreedPhoto from "../../components/BreedPhoto";
import Header from "../../components/Header";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api");
  const data = await res.json(); //parse res as json

  return {
    props: {
      breeds: data,
    },
  };
};

const AllBreeds = ({ breeds }) => {
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
        {breeds.map((breed) => {
          return (
            <div
              className="mx-auto w-fit"
              onClick={() => {
                router.push(`/breeds/${breed.id}`);
              }}
              key={breed.id}
            >
              <div className="h-[27.5rem] w-[27.5rem] overflow-hidden rounded-[2.4rem]">
                <BreedPhoto src={breed?.image?.url} name={breed?.name} />
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
