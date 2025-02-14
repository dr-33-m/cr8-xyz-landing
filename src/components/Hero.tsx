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

const videos = [
  {
    videoUrl:
      "https://storage.streetcrisis.online/cr8-xyz-demo-visuals/lebox.mov",
  },
  {
    videoUrl:
      "https://storage.streetcrisis.online/cr8-xyz-demo-visuals/Lelive%20Demo.mov",
  },
];

export default function Hero() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex(
      (prevIndex) => (prevIndex - 1 + videos.length) % videos.length
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
            Create content with unlimited possibilities using 3D.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="text-[#FFD100] border-[#FFD100]  px-8 py-6 text-lg bg-transparent hover:bg-[#FFD100] hover:text-[#000000] transition-all duration-300 "
                >
                  Made In Cr8-xyz
                  <Play className="h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[800px] bg-gradient-to-br from-[#2C2C2C] to-[#1C1C1C] border-white/10 backdrop-blur-md">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold mb-2 text-[#0077B6]">
                    Made with Cr8-xyz
                  </DialogTitle>
                  <DialogDescription className="text-[#FFD100]">
                    See how brands are using Cr8-xyz to create stunning visuals
                  </DialogDescription>
                </DialogHeader>

                <div className="mt-4">
                  {videos.length > 0 ? (
                    <div className="relative rounded-lg overflow-hidden transition-all duration-300">
                      <video
                        controls
                        className="w-full h-[400px] object-cover"
                        src={videos[currentVideoIndex].videoUrl}
                        controlsList="nodownload"
                        onContextMenu={(e) => e.preventDefault()}
                      />
                      {currentVideoIndex > 0 && (
                        <Button
                          variant="ghost"
                          className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white hover:bg-white/10 transition-colors"
                          onClick={prevVideo}
                        >
                          <ChevronLeft className="h-6 w-6 text-[#FFD100]" />
                        </Button>
                      )}
                      {currentVideoIndex < videos.length - 1 && (
                        <Button
                          variant="ghost"
                          className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white hover:bg-white/10 transition-colors"
                          onClick={nextVideo}
                        >
                          <ChevronRight className="h-6 w-6 text-[#FFD100]" />
                        </Button>
                      )}
                    </div>
                  ) : (
                    <p className="text-center text-gray-300">
                      No examples available.
                    </p>
                  )}
                </div>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {videos.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentVideoIndex ? "bg-white" : "bg-white/50"
                      }`}
                      onClick={() => setCurrentVideoIndex(index)}
                    />
                  ))}
                </div>
              </DialogContent>
            </Dialog>
            <a href="https://studio.cr8-xyz.online/" target="_blank">
              <Button className="bg-[#FFD100] text-black hover:bg-[#FFD100]/90 px-6 py-6 text-lg">
                Start Creating
                <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
