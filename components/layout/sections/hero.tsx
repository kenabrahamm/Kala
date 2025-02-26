"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <>
      <div className="w-full flex justify-center items-center">
          <div className="w-[90vw] items-center max-h-[900px] overflow-hidden mt-0 rounded-sm">
            <div className="p-1 rounded-sm">
              <Image
                width={2400}
                height={1600}
                className="w-full h-[75vh] relative leading-none flex items-center object-cover object-center"
                src={theme === "light" ? "/hero1.jpg" : "/hero1.jpg"}
                alt="Kala Dance Collective Hero Image"
                priority
                quality={100}
                unoptimized
              />
            </div>
          </div>


        
      </div>
      <div className="w-full flex justify-center items-left">
        <div className=" w-[90vw] justify-center items-center space-y-6 mt-4">
          <Badge variant="outline" className="text-sm py-2 rounded-none border-muted-foreground">
            <span className="mr-2 text-black flex items-center">
              Connect with us <ArrowRight className="size-5 ml-2" />
            </span>
          </Badge>

          <div className="mx-auto text-left text-4xl md:text-6xl">
            <h1 className="font-['Rosario'] font-normal text-[#0F1B4D]">
              Kala Dance Collective
              {/* <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                Dance
              </span> */}
            </h1>
          </div>
          <p className="max-w-4xl w-full text-left text-xl text-muted-foreground font-['Helvetica Neue'] font-light">
            <strong className="font-bold">Our mission is to preserve and promote the rich tradition of Bharatanatyam</strong>
            {`, ensuring its vitality and relevance in contemporary diasporic contexts. We strive to support and celebrate the cultural torchbearers who keep this art form alive, while fostering innovation, inclusivity, and dialogue within the broader artistic and cultural landscapes.
            `}
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button className="w-5/6 md:w-1/4 font-bold group/arrow rounded-none bg-[#E2A436] text-white hover:bg-[#0E6980] font-['Rosario']">
              Our Programs
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button>

            <Button
              asChild
              variant="secondary"
              className="w-5/6 md:w-1/4 font-bold rounded-none bg-[#0E6980] text-white hover:bg-[#E2A436] font-['Rosario']"
            >
              <Link
                href="https://github.com/nobruf/shadcn-landing-page.git"
                target="_blank"
              >
                Our Work
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
    
    

  );
};
