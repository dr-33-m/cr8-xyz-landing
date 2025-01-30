import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Define a functional component
const EarlyAccessForm = () => {
  return (
    <section className="py-20 bg-[#2C2C2C] bg-[radial-gradient(#1C1C1C,transparent_1px)] [background-size:16px_16px]">
      <div className="container mx-auto px-4">
        <div className="backdrop-blur-md bg-white/5 rounded-2xl p-8 md:p-12 flex flex-col items-center justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Ready to Transform Your Content Creation?
          </h2>
          <p className="text-xl mb-8 text-center text-gray-300">
            Join forward-thinking brands already saving thousands in 3D content
            creation.
          </p>
          <a href="https://studio.cr8-xyz.online/" target="_blank">
            <Button
              type="submit"
              className="bg-[#FFD100] text-black hover:bg-[#FFD100]/90 px-6 py-6 text-lg"
            >
              <span>Start Creating</span>
              <ArrowRight className="h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccessForm;
