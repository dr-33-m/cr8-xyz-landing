"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Play, ArrowRight } from "lucide-react";

const demoVideoUrl =
  "https://storage.streetcrisis.online/cr8-xyz-demo-visuals/cr8-xyz-demo.mp4";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(#000000,transparent_1px)] [background-size:16px_16px] z-0 "></div>
      <div className="container mx-auto px-4 z-10">
        <div className="text-center">
          <h1 className="text-3xl md:text-6xl font-bold mb-6">
            Cinematic visuals for every Brand.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Art direct your next video or campaign effortlessly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="text-white px-8 py-6 text-lg bg-[#0077B6]/20 hover:bg-[#0077B6]/30 hover:text-white transition-all duration-300 border border-transparent hover:-translate-y-[2px] [box-shadow:0_1px_4px_#0077B6]"
                >
                  How Cr8-xyz works
                  <Play className="h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[800px] bg-gradient-to-br from-[#2C2C2C] to-[#1C1C1C] border-white/10 backdrop-blur-md">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold mb-2 text-[#0077B6]">
                    How Cr8-xyz Works
                  </DialogTitle>
                  <DialogDescription className="text-[#0077B6]">
                    Watch this demo to see what Cr8-xyz can currently do
                  </DialogDescription>
                </DialogHeader>

                <div className="mt-4">
                  <div className="rounded-lg overflow-hidden">
                    <video
                      controls
                      className="w-full h-[400px] object-cover"
                      src={demoVideoUrl}
                      controlsList="nodownload"
                      onContextMenu={(e) => e.preventDefault()}
                    />
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            <a href="/docs">
              <Button className="bg-[#0077B6]/20 text-white hover:bg-[#0077B6]/30 px-6 py-6 text-lg border border-transparent transition-all duration-300 hover:-translate-y-[2px] [box-shadow:0_1px_4px_#0077B6]">
                Set It Up
                <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
