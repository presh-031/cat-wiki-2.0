import { IoIosClose } from "react-icons/io";
import { CgSearch } from "react-icons/cg";
import { IconContext } from "react-icons";
import { useState } from "react";

// import fetchBreeds from "../api/fetchBreeds";
// import { useQuery } from "react-query";

import { useNavigate } from "react-router-dom";

import { useDropDown } from "../stores/dropDown";
import { useCurrentBreed } from "../stores/breed";

const MobileDropDown = ({ breeds }) => {
  const [dropDown, actions] = useDropDown();
  const [currentBreed, currentBreedActions] = useCurrentBreed();

  const navigate = useNavigate();
  // Controlling search input
  const [search, setSearch] = useState({
    query: "",
    list: breeds,
  });

  const handleInput = (e) => {
    const results = breeds.filter((breed) => {
      if (e.target.value === "") return breeds;
      return breed.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setSearch({
      query: e.target.value,
      list: results,
    });

    if (e.target.value === "") {
      actions.setDropDown();
    }
  };

  //Function to handle any breed click
  const handleClick = (breed) => {
    currentBreedActions.setCurrentBreed(breed);

    // Navigate to breed-info page.
    navigate("/breed-info");
  };

  const showSuggestions = search?.list?.map((breed) => {
    return (
      <div
        onClick={() => {
          handleClick(breed);
        }}
        key={breed.id}
        className="flex cursor-pointer items-center rounded-[1.2rem] p-[1.91rem] hover:bg-[#979797]  hover:bg-opacity-10"
      >
        <p className="font-montserrat text-[1.80rem]  font-medium leading-[2.194rem]">{breed.name}</p>
      </div>
    );
  });
  // console.log(search.query, search.list);

  return (
    <div className="absolute top-0 right-0 left-0 h-[41.2rem] overflow-y-auto bg-white px-[1.80rem] pb-[3.2rem]  pt-[.7rem]">
      <div className="flex justify-end">
        <div
          onClick={actions.setDropDown}
          className=" flex h-[4rem] w-[4rem] cursor-pointer items-center justify-center rounded-[.8rem] bg-[#979797]  bg-opacity-10  "
        >
          <IconContext.Provider value={{ style: { width: "2.318rem", height: "2.24rem" } }}>
            <IoIosClose className="cursor-pointer" />
          </IconContext.Provider>
        </div>
      </div>
      <div className="mt-[3rem] mb-[1.83rem] flex  items-center rounded-[5.9rem] border-[1px] border-black py-[1.175rem] px-[2rem] font-montserrat text-[1.80rem]  font-medium leading-[2.194rem]  ">
        <input type="text" value={search.query} onInput={handleInput} className=" w-[100%] outline-none " />
        <CgSearch className="" />
      </div>
      <div className="h-[100%] ">
        {search?.list?.length ? (
          showSuggestions
        ) : (
          <p className="mt-[10rem] text-center font-montserrat text-[1.8rem] font-semibold  leading-[2.194rem] ">
            No result found
          </p>
        )}
      </div>
    </div>
  );
};

export default MobileDropDown;
