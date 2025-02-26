import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Icon } from "@/components/ui/icon";
import { ArrowRight, BadgeCheck, icons } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}



export const FeaturesSection = () => {
  return (
    <div id="features" className="w-full flex justify-center items-center mt-20 px-8">
      <div className="w-[90vw] bg-gradient-to-b from-white to-[#FFF7E8]/20 border border-gray-200 shadow-sm ring-1 ring-[#FDBA74]/10 rounded-sm p-6">
        <div className="">
          <div className="flex flex-col md:flex-row gap-4 rounded-xl">
            <div className="p-4">
              <Carousel>
                <CarouselContent>
                    <CarouselItem>
                      <div className="">
                      <Image
                        width={1000}
                        height={1000}
                        src={'/prep_practice.jpg'}
                        alt="prep+practice image"
                        className="rounded-sm border border-gray-200 border-stroke-2"
                        />
                        </div>


                  
                    </CarouselItem>
                    <CarouselItem>

              
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>

            <div className=" md:w-1/2 space-y-6 p-4">
              <h1 className="text-4xl font-semibold">
              Prep + Practice
              </h1>

              <p className="text-lg text-[#475569] font-['Helvetica Neue'] font-regular">
              {`Prep + Practice program, offering free classes for intermediate and advanced Bharatanatyam dancers from all banis. These sessions focus on building a strong foundation through warm-ups, form-focused exercises, and exploratory adavu practice, fostering growth in a community-driven environment.`}
              </p>
              <Badge className="text-sm py-2 bg-black text-white rounded-none border-muted-foreground">
                <span className="mr-2 text-white flex items-center font-['Rosario'] font-thin">
                  Connect with us <ArrowRight className="size-5 ml-2" />
                </span>
              </Badge>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
