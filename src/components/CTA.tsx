import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { useState, type FormEvent } from "react";

// Define a functional component
const EarlyAccessForm = () => {
  const [email, setEmail] = useState("");
  const [serverResponse, setServerResponse] = useState<number>();

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setServerResponse(response.status);
      } else {
        console.error("Error:", response.statusText);
        setServerResponse(response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="py-20 bg-[#2C2C2C] bg-[radial-gradient(#1C1C1C,transparent_1px)] [background-size:16px_16px]">
      <div className="container mx-auto px-4">
        <div className="backdrop-blur-md bg-white/5 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Ready to Transform Your Content?
          </h2>
          <p className="text-xl mb-8 text-center text-gray-300">
            Join our circle of creators and be one of the select few to
            experience our platform ahead of everyone else.
          </p>
          <form
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
            onSubmit={submitForm}
          >
            <Input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              required
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder-white/50 max-w-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              type="submit"
              className="bg-[#FFD100] text-black hover:bg-[#FFD100]/90 px-8 py-6 text-lg"
              disabled={serverResponse === 200}
            >
              {serverResponse === 200 ? (
                <span>Your access link will be sent soon!</span>
              ) : serverResponse === 400 ? (
                <span>Please enter a valid email</span>
              ) : (
                <>
                  <span>Get Early Access</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccessForm;
