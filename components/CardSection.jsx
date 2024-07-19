import { Avatar } from "@radix-ui/react-avatar";
import Image from "next/image";
import { MdOutlineDesignServices } from "react-icons/md";
import { RiCodeBlock } from "react-icons/ri";
import { MdBrandingWatermark } from "react-icons/md";
export default function CardSection() {
  return (
    <div className="container mx-auto p-4 flex flex-wrap justify-center gap-6">
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden w-80 m-4">
        <Image
          src="/image3.jpg"
          alt="profile"
          width={320}
          height={160}
          className="w-full h-40 object-cover rounded-3xl"
        />
        <div className="p-6">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-bold text-blue-400 flex items-center">
              <RiCodeBlock className="h-8 w-8 mr-2 text-blue-400" />
              FRONT-END
            </h2>
          </div>
          <p className="mb-4 text-xl font-semibold">
            Beginner's Guide to becoming a professional Front-End Developer.
          </p>
          <hr className="border-t-4 border-violet-500 my-4" />
          <div className="flex items-center">
            <Avatar>
              <Image
                src="/image1.jpg"
                alt="Avatar"
                width={48}
                height={48}
                className="w-12 h-12 rounded-full mr-4"
              />
            </Avatar>
            <div>
              <h3 className="text-lg font-semibold">Leonardo Samsul</h3>
              <h4 className="text-lg text-gray-600">Mentor</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-lg overflow-hidden w-80 m-4">
        <Image
          src="/image5.jpg"
          alt="profile"
          width={320}
          height={160}
          className="w-full h-40 object-cover rounded-3xl"
        />
        <div className="p-6">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-bold text-violet-500 flex items-center">
              <MdOutlineDesignServices className="h-8 w-8 mr-2 text-violet-500" />
              UI/UX DESIGN
            </h2>
          </div>
          <p className="mb-4 text-xl  font-semibold ">
            Optimizing User Experience with the Best UI/UX Design.
          </p>
          <hr className="border-t-4 border-violet-500 my-4" />
          <div className="flex items-center">
            <Avatar>
              <Image
                src="/image1.jpg"
                alt="Avatar"
                width={48}
                height={48}
                className="w-12 h-12 rounded-full mr-4"
              />
            </Avatar>
            <div>
              <h3 className="text-lg font-semibold">Bayu Salto</h3>
              <h4 className="text-lg text-gray-600">Mentor</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-lg overflow-hidden w-80 m-4">
        <Image
          src="/image2.jpg"
          alt="profile"
          width={320}
          height={160}
          className="w-full h-40 object-cover rounded-3xl"
        />
        <div className="p-6">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-bold text-pink-400 flex items-center">
              <MdBrandingWatermark className="h-8 w-8 mr-2 text-pink-400" />
              BRANDING
            </h2>
          </div>
          <p className="mb-4 text-xl font-semibold">
            Reviving and Refreshing company Image.
          </p>
          <hr className="border-t-4 border-violet-500 my-4" />
          <div className="flex items-center">
            <Avatar>
              <Image
                src="/image1.jpg"
                alt="Avatar"
                width={48}
                height={48}
                className="w-12 h-12 rounded-full mr-4"
              />
            </Avatar>
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
