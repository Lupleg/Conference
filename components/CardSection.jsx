import Image from "next/image";
import { MdOutlineDesignServices } from "react-icons/md";
import { RiCodeBlock } from "react-icons/ri";
import { MdBrandingWatermark } from "react-icons/md";

export default function CardSection() {
  return (
    <div className="container mx-auto p-4 flex flex-wrap justify-start gap-6 pt-16">
      <div className="bg-white rounded-3xl shadow-lg  overflow-hidden w-80">
        <Image
          src="/image3.jpg"
          alt="picture"
          width={320}
          height={160}
          className="w-full h-40 object-cover rounded-3xl"
        />
        <div className="p-6">
          <div className="flex items-center mb-4">
            <RiCodeBlock className="h-8 w-8 mr-2 text-blue-400" />
            <h2 className="text-2xl font-bold text-blue-400">FRONT-END</h2>
          </div>
          <p className="mb-4 text-xl font-semibold">
            Beginner's Guide to becoming a professional Front-End Developer.
          </p>
          <hr className="border-t-4 border-violet-500 my-4" />
          <div className="flex items-center">
            <Image
              src="/image1.jpg"
              alt="profile"
              width={48}
              height={48}
              className="w-12 h-12 rounded-full mr-4"
            />

            <div>
              <h3 className="text-lg font-semibold">Leonardo Samsul</h3>
              <h4 className="text-lg text-gray-600">Mentor</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-lg overflow-hidden w-80">
        <Image
          src="/image5.jpg"
          alt="picture"
          width={320}
          height={160}
          className="w-full h-40 object-cover rounded-3xl"
        />
        <div className="p-6">
          <div className="flex items-center mb-4">
            <MdOutlineDesignServices className="h-8 w-8 mr-2 text-violet-500" />
            <h2 className="text-2xl font-bold text-violet-500">UI/UX DESIGN</h2>
          </div>
          <p className="mb-4 text-xl font-semibold">
            Optimizing User Experience with the Best UI/UX Design.
          </p>
          <hr className="border-t-4 border-violet-500 my-4" />
          <div className="flex items-center">
            <Image
              src="/image1.jpg"
              alt="profile"
              width={48}
              height={48}
              className="w-12 h-12 rounded-full mr-4"
            />

            <div>
              <h3 className="text-lg font-semibold">Bayu Salto</h3>
              <h4 className="text-lg text-gray-600">Mentor</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-lg overflow-hidden w-80">
        <Image
          src="/image2.jpg"
          alt="picture"
          width={320}
          height={160}
          className="w-full h-40 object-cover rounded-3xl"
        />
        <div className="p-6">
          <div className="flex items-center mb-4">
            <MdBrandingWatermark className="h-8 w-8 mr-2 text-pink-400" />
            <h2 className="text-2xl font-bold text-pink-400">BRANDING</h2>
          </div>
          <p className="mb-4 text-xl font-semibold">
            Reviving and Refreshing company Image.
          </p>
          <hr className="border-t-4 border-violet-500 my-4" />
          <div className="flex items-center">
            <Image
              src="/image1.jpg"
              alt="profile"
              width={48}
              height={48}
              className="w-12 h-12 rounded-full mr-4"
            />

            <div>
              <h3 className="text-lg font-semibold">Padhang Satrio</h3>
              <h4 className="text-lg text-gray-600">Mentor</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
