import Image from "next/image";

const BreedPhoto = ({ src, name, page }) => {
  // console.log(src, name, page);
  return (
    <div className="h-[100%] cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
      <Image
        src={src ? src : "/loading.png"}
        alt={name}
        className={page ? "border object-cover border-red-800" : ""}
        width={700}
        height={465}
      />
    </div>
  );
};

export default BreedPhoto;
