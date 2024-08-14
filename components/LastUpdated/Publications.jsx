import Link from "next/link";

export default function Publications() {
  return (
    <div>
      <div class=" ">
        <hr className="my-8" />
        <h2 className="font-mono font-bold my-6 text-xl md:text-2xl lg:text-2xl">
          Publications 📢:
        </h2>
        <p className="text-md md:text-lg lg:text-lg">
          We are committed to keeping our publications up to date. We review our
          publications every 3 months to ensure that the information is accurate
          and relevant. If you have any questions or feedback, please feel free
          to:{" "}
          <Link href="/contact" className="text-green-700">
            Contact us here
          </Link>
        </p>

        <p className="my-6 font-mono">
          <span className="font-bold">Last updated:</span> 21 July, 2024.
        </p>
      </div>
    </div>
  );
}
