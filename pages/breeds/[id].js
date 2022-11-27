import { useDropDown } from "../../stores/dropDown";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BreedPhoto from "../../components/BreedPhoto";
import BreedDetail from "../../components/BreedDetail";

import { useRouter } from "next/router";

// useSWR
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api");
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

  const res = await fetch("http://localhost:3000/api/breed/" + id);
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

  console.log(breed);
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

  // use SWR to fetch the breed photo
  const { data, error } = useSWR(`https://api.thecatapi.com/v1/images/search?breed_ids=${breed.id}`, fetcher);

  console.log(data);
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
          {/* Get better images for error and loading states */}
          <BreedPhoto src={error ? "/abys.jpg" : !data ? "/abob.jpg" : data[0]?.url} name={breed?.name} />
        </div>
        <BreedDetail breedInfo={breedInfo} />
      </div>
      <Footer />
    </div>
  );
};

export default BreedInfo;
