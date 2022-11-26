import { useDropDown } from "../stores/dropDown";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BreedPhoto from "../../components/BreedPhoto";
import BreedDetail from "../../components/BreedDetail";

import { useRouter } from "next/router";

export const getStaticPaths = async () => {
  const res = await fetch("https://api.thecatapi.com/v1/breeds");
  const data = await res.json();

  const paths = data.map((breed) => {
    return {
      params: { id: breed.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.id;

  const res = await fetch("https://api.thecatapi.com/v1/breeds/" + id);
  const data = await res.json();

  return {
    props: {
      breed: data,
    },
  };
};

const BreedInfo = ({ breed }) => {
  const [dropDown, dropDownActions] = useDropDown();
  const router = useRouter();

  const breedInfo = {
    name: breed.name,
    description: breed.description,
    temperament: breed.temperament,
    origin: breed.origin,
    lifeSpan: breed.life_span,
    numberedDetails: [
      ["Adaptability", breed.adaptability],
      ["Affection level", breed.affection_level],
      ["Child Friendly", breed.child_friendly],
      ["Grooming", breed.grooming],
      ["Intelligence", breed.intelligence],
      ["Health issues", breed.health_issues],

      ["Social needs", breed.social_needs],
      ["Stranger friendly", breed.stranger_friendly],
    ],
    id: breed.id,
  };

  return (
    <div>
      <Header />
      <div className="flex justify-end p-[2rem] ">
        <button
          className="font-montserrat text-[1.2rem] font-bold"
          onClick={() => {
            dropDownActions.setDropDown(false);
            router.push(-1);
          }}
        >
          Go back
        </button>
      </div>
      <div>
        <div className="mx-auto h-[30.5rem] w-[30.5rem] overflow-hidden rounded-[2.4rem]">
          <BreedPhoto src={breed?.image?.url} name={breed?.name} />
        </div>
        <BreedDetail breedInfo={breedInfo} name={breed?.name} />
      </div>
      <Footer />
    </div>
  );
};

export default BreedInfo;
