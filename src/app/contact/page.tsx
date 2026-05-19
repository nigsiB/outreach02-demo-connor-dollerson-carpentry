import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-lg px-6 py-14">
      <Image
        src="/logo-black.png"
        alt="Think Outside The Box Carpentry"
        width={216}
        height={53}
        className="mb-8 h-[2.7rem] w-auto"
      />
      <h1 className="font-serif text-3xl text-[var(--wood)]">Contact</h1>
      <p className="mt-2 text-sm opacity-70">Demo enquiry form.</p>
      <div className="mt-8"><ContactForm /></div>
    </main>
  );
}
