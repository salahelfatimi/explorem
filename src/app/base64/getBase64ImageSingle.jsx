
import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";


const getImage = async (src) => {
  const buffer = await fetch(src).then(async (res) =>
    Buffer?.from(await res?.arrayBuffer())
  );

  const {
    metadata: { height, width },
    ...plaiceholder
  } = await getPlaiceholder(buffer, { size: 10 });

  return {
    ...plaiceholder,
    img: { src, height, width },
  };
};

export default async function GetBase64Image({imageUrl,className,alt}) {
 
  const { base64, img } = await getImage(imageUrl);
  return (
    <div>
      <Image
        {...img}
        alt={alt}
        title={alt}
        className={className}
        blurDataURL={base64}
        placeholder="blur"
      />
    </div>
  );
}
