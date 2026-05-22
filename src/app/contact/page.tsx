import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";

const contactHeroImg =
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80";

export default function ContactPage() {
  return (
    <main className="flex-1">
      <div className="grid min-h-[calc(100svh-5.5rem)] lg:min-h-[calc(100svh-5.9rem)] lg:grid-cols-2">
        <div className="relative min-h-[min(50vw,28rem)] lg:min-h-0 lg:h-full">
          <Image
            src={contactHeroImg}
            alt="Modern living room with bespoke wooden joinery, built-in cabinetry, and custom wood feature wall"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="flex flex-col justify-center bg-[var(--paper)] px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
          <div className="mx-auto flex w-full max-w-md flex-col">
            <div className="mb-8 flex justify-center">
              <Image
                src="/logo-black.png"
                alt="Think Outside The Box Carpentry"
                width={686}
                height={164}
                className="h-[9.36rem] w-auto sm:h-[10.3rem]"
              />
            </div>
            <h1 className="font-serif text-center text-3xl text-[var(--wood)]">Contact</h1>
            <p className="mt-2 text-center text-sm opacity-70">Demo enquiry form.</p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
