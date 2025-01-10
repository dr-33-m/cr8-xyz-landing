"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChevronRight, Play, ChevronLeft, ArrowRight } from "lucide-react";

const examples = [
  {
    category: "musicians",
    title: "Immersive Music Video",
    description:
      "A stunning 3D environment for a music video, created in minutes.",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    category: "brands",
    title: "Product Showcase",
    description:
      "An interactive 3D product demonstration for a new tech gadget.",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    category: "designers",
    title: "Virtual Fashion Show",
    description: "A virtual runway showcasing the latest fashion designs.",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    category: "influencers",
    title: "Engaging Social Media Post",
    description:
      "An eye-catching 3D scene for an influencer's product promotion.",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
];

export default function Hero() {
  const [currentExampleIndex, setCurrentExampleIndex] = useState(0);
  const [filter, setFilter] = useState("all");

  const filteredExamples =
    filter === "all"
      ? examples
      : examples.filter((example) => example.category === filter);

  const nextExample = () => {
    setCurrentExampleIndex(
      (prevIndex) => (prevIndex + 1) % filteredExamples.length
    );
  };

  const prevExample = () => {
    setCurrentExampleIndex(
      (prevIndex) =>
        (prevIndex - 1 + filteredExamples.length) % filteredExamples.length
    );
  };

  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(#000000,transparent_1px)] [background-size:16px_16px] z-0 "></div>
      <div className="container mx-auto px-4 z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Cut Content Creation Costs By 70%.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Create content with unlimited possibilities using cr8-xyz.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="https://cr8-studio.streetcrisis.online/" target="_blank">
              <Button className="bg-[#FFD100] text-black hover:bg-[#FFD100]/90 px-6 py-6 text-lg">
                Start Creating
                <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
            <Dialog>
              {false && (
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="text-[#FFD100] border-[#FFD100] hover:bg-white/10 px-8 py-6 text-lg"
                  >
                    Made In Cr8-xyz
                    <Play className="h-5 w-5" />
                  </Button>
                </DialogTrigger>
              )}
              <DialogContent className="sm:max-w-[800px] bg-gradient-to-br from-[#2C2C2C] to-[#1C1C1C] border-white/10 backdrop-blur-md">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold mb-2">
                    Cr8-xyz Examples
                  </DialogTitle>
                  <DialogDescription>
                    See how creators are using Cr8-xyz to elevate their content
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-4">
                  <div className="flex justify-between items-center mb-4 gap-2">
                    <Button
                      variant="ghost"
                      className={`text-white hover:bg-white/10 transition-colors ${
                        filter === "all" ? "bg-white/10" : ""
                      }`}
                      onClick={() => setFilter("all")}
                    >
                      All Examples
                    </Button>
                    <Button
                      variant="ghost"
                      className={`text-white hover:text-[#0077B6] hover:bg-white/10 transition-colors ${
                        filter === "musicians"
                          ? "bg-white/10 text-[#0077B6]"
                          : ""
                      }`}
                      onClick={() => setFilter("musicians")}
                    >
                      Musicians
                    </Button>
                    <Button
                      variant="ghost"
                      className={`text-white hover:text-[#5C0A98] hover:bg-white/10 transition-colors ${
                        filter === "brands" ? "bg-white/10 text-[#5C0A98]" : ""
                      }`}
                      onClick={() => setFilter("brands")}
                    >
                      Brands
                    </Button>
                    <Button
                      variant="ghost"
                      className={`text-white hover:text-[#FF006E] hover:bg-white/10 transition-colors ${
                        filter === "designers"
                          ? "bg-white/10 text-[#FF006E]"
                          : ""
                      }`}
                      onClick={() => setFilter("designers")}
                    >
                      Designers
                    </Button>
                    <Button
                      variant="ghost"
                      className={`text-white hover:text-[#FFD100] hover:bg-white/10 transition-colors ${
                        filter === "influencers"
                          ? "bg-white/10 text-[#FFD100]"
                          : ""
                      }`}
                      onClick={() => setFilter("influencers")}
                    >
                      Influencers
                    </Button>
                  </div>
                  {filteredExamples.length > 0 ? (
                    <div className="relative rounded-lg overflow-hidden transition-all duration-300">
                      <img
                        src={filteredExamples[currentExampleIndex].imageUrl}
                        alt={filteredExamples[currentExampleIndex].title}
                        className="w-full h-[400px] object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent backdrop-blur-sm p-4">
                        <h3 className="text-xl font-bold">
                          {filteredExamples[currentExampleIndex].title}
                        </h3>
                        <p className="text-sm text-gray-300">
                          {filteredExamples[currentExampleIndex].description}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white hover:bg-white/10 transition-colors"
                        onClick={prevExample}
                      >
                        <ChevronLeft className="h-6 w-6" />
                      </Button>
                      <Button
                        variant="ghost"
                        className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white hover:bg-white/10 transition-colors"
                        onClick={nextExample}
                      >
                        <ChevronRight className="h-6 w-6" />
                      </Button>
                    </div>
                  ) : (
                    <p className="text-center text-gray-300">
                      No examples available for this category.
                    </p>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
}
