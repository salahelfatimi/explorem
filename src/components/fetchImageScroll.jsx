import { fetchImageScroll } from "@/app/api/data/ImageScroll/actions";
import Image from "next/image";
export default async function FetchImageScroll() {
  const images = await fetchImageScroll();
  return (
    <>
      {images?.map((src, index) => (
        <div className=" space-x-4 bg-white p-2" key={index}>
          <Image
            blurDataURL={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAHCAIAAAC+zks0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA5ElEQVR4nAHZACb/AMzN3dnS4N3d8tvV7dnj+9igosc+KbdENdatsf/w+wCqmJzh4PLf1eLl3e/G0ejKoqXXfUq8YUfes7X/+f8Aqo2UjniHuaO9l4WWmZCaxJqctGNJlFRHn3p60ainAGVdbSEjPpCY1xEbQRAKCIw4OWM3QRoGEkssKy8XFAB5aHdMSGJydaI1M1MMAgBIDRxiOD9UP0pMNkUeBwcAlYqeGRIcFRIbR0NTX152FhgvRTpGe2yKrpWzelA6AIaJqDMwOUdJVl5bcJebtE5QaTkyQ76hstK0zsuSfGgmZX5k3blAAAAAAElFTkSuQmCC`}
            placeholder="blur"
            quality={100}
            width={800}
            height={550}
            src={src.imageUrl}
            className="max-w-none   rounded-sm h-52 w-auto"
            alt="explorem"
          />
        </div>
      ))}
    </>
  );
}
