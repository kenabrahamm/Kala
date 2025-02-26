import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Icon } from "@/components/ui/icon";
import { ArrowRight, BadgeCheck, icons } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}



export const PricingSection = () => {
  return (
    <div id="features" className="w-full flex justify-center items-center px-8 mb-20 bg-transparent">
      <div className="w-[90vw] border border-gray-200 bg-transparent rounded-sm p-6">
        <Accordion type="single" collapsible className="bg-transparent">
          <AccordionItem value="item-1">
            <AccordionTrigger className="bg-transparent hover:bg-transparent">
              <h1 className="text-2xl font-semibold">
                Explore our Work
              </h1>
            </AccordionTrigger>
            <AccordionContent className="text-lg bg-transparent">
              <Carousel className="bg-transparent w-full">
                <CarouselContent className="bg-transparent w-full">
                  <CarouselItem className="bg-transparent w-full">
                    <div className="h-full bg-transparent space-y-4">
                      <Image
                        width={250}
                        height={250}
                        src={'/prep_practice.jpg'}
                        alt="prep+practice image"
                        className="rounded-sm border border-gray-200 border-stroke-2"
                      />
                      <h1 className="text-2xl font-semibold">
                        Prep + Practice
                      </h1>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="bg-transparent w-full">
                    <div className="h-full bg-transparent space-y-4">
                      <Image
                        width={250}
                        height={250}
                        src={'/prep_practice.jpg'}
                        alt="prep+practice image"
                        className="rounded-sm border border-gray-200 border-stroke-2"
                      />
                      <h1 className="text-2xl font-semibold">
                        Prep + Practice
                      </h1>
                    </div>
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
