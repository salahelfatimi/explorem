import Image from "next/image";
export default async function FetchLogoScroll() {
  const images = [
    { image: "Barmer.png", title: "Barmer" },
    { image: "Brera.png", title: "Brera serviced apartments " },
    { image: "Little.png", title: "Little giants care" },
    { image: "MarburgConsulting.png", title: "Marburg Consulting " },
    { image: "mfpd.png", title: "MitarbeiterfuerdiePflege de" },
    { image: "Barmer.png", title: "Barmer " },
    { image: "Brera.png", title: "Brera serviced apartments" },
    { image: "Little.png", title: "Little giants care" },
    { image: "MarburgConsulting.png", title: "Marburg Consulting" },
    { image: "mfpd.png", title: "MitarbeiterfuerdiePflege de" },
  ];
  return (
    <>
      {images?.map((src, index) => (
        <div className=" space-x-4  p-2" key={index}>
          <Image
            title={src.title}
            quality={40}
            width={800}
            height={550}
            src={`/image/partnersLogo/${src.image}`}
            className="max-w-none   h-24 w-auto   "
            alt={src.title}
          />
        </div>
      ))}
    </>
  );
}
