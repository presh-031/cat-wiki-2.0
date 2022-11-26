import Image from "next/image";

const BreedPhoto = ({ src, name }) => {
  console.log(name);
  return (
    <div className="h-[100%] cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
      <Image src={src} alt={name} width="700" height="465" />
    </div>
  );
};

export default BreedPhoto;
