import Link from "next/link";

export const Banner = () => {
  return (
    <div className="py-3 text-center bg-[linear-gradient(to_right,rgba(252,214,255,0.7),rgba(41,216,255,0.7),rgba(255,253,128,0.7),rgba(248,154,191,0.7),rgba(252,214,255,0.7))]" >
      <div className="container">
        <p className="font-medium">
          <span className="hidden sm:inline">
            Introducing a completely redesigned interface -
          </span>
          <Link href={"/"} className="underline underline-offset-2"> Explore the demo</Link>
        </p>
      </div>
    </div>
  );
};
