import * as React from "react"
import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

 function ChallengesCarousel() {
  return (
    <Link href='/courses'>
      <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-[44rem]"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold pb-6">Continue Watching</h2>
        <div>
        <CarouselPrevious />
        <CarouselNext />
        </div>
      </div>
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="">
              <Card className="">
                <CardContent className="flex justify-center w-full">
                <Image 
                  src="/profile-sample.jpeg"
                  alt="image"
                  width={100}
                  height={50}
                  className="rounded-xl w-full h-28"
                />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
    </Link>
  )
}
export default ChallengesCarousel