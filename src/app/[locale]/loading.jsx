export default function Loading() {
  return (
    <>
      <div
        className={`fixed  inset-0 flex items-center justify-center bg-[#f4f7fc]  duration-1000 transition z-50 `}
      >
        <span
          className={`font-extrabold text-center items-center gap-1 md:text-5xl text-4xl animate-bounce flex justify-center  `}
        >
          Welcome to
          <span className=" flex items-center text-[#0149a6] ">Explorem</span>
        </span>
      </div>
    </>
  );
}
