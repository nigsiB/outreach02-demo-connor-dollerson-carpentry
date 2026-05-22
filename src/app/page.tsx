import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { ServiceCard } from "@/components/ServiceCard";

const heroImg = "https://images.unsplash.com/photo-1497219055242-93359eeed651?auto=format&fit=crop&w=1600&q=80";
const aboutImg = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80";
const galleryImg = "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=1600&q=80";

const services = [
  { image: "https://images.unsplash.com/photo-1497219055242-93359eeed651?auto=format&fit=crop&w=600&q=80", alt: "Hand-crafted woodwork detail", title: "Bespoke furniture", desc: "Tables, shelving, and one-off pieces built to your space." },
  { image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80", alt: "Interior doors and joinery", title: "Doors & joinery", desc: "Internal doors, frames, and precision fitting." },
  { image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=600&q=80", alt: "Kitchen woodwork details", title: "Kitchen details", desc: "Solid wood worktops, pantry units, and custom storage." },
  { image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80", alt: "Garden timber structure", title: "Garden structures", desc: "Pergolas, gates, and outdoor timber features." },
];

const reviews = [
  { quote: "Connor understood our brief perfectly — the oak table is stunning.", name: "Helen & Tom", detail: "Commission" },
  { quote: "Think Outside The Box lives up to the name. True craftsman.", name: "James R.", detail: "Joinery" },
  { quote: "Neat install, fair price, and great communication throughout.", name: "Sarah W.", detail: "5★ concept" },
];

export default function Page() {
  return (
    <main>
      <section className="relative min-h-[85vh]">
        <Image src={heroImg} alt="Woodworker carving timber with a chisel" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--wood)] via-[var(--wood)]/55 to-[var(--wood)]/15" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 lg:p-16">
          <div className="max-w-2xl rounded-sm border border-[var(--paper)]/10 bg-[var(--wood)]/92 p-8 shadow-xl backdrop-blur-sm md:p-10">
            <p className="text-[var(--warm)] text-xs font-medium uppercase tracking-[0.3em]">Connor Dollerson</p>
            <h1 className="font-serif mt-3 text-4xl leading-tight text-[var(--paper)] sm:text-5xl md:text-6xl lg:text-7xl">
              Bespoke woodwork,
              <br />
              editorially shown.
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-[var(--paper)]/85">
              Think Outside The Box Carpentry — custom furniture, joinery, and timber structures across Cranleigh.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block border border-[var(--warm)] bg-[var(--warm)]/10 px-8 py-3 text-sm font-medium uppercase tracking-widest text-[var(--paper)] transition-colors hover:bg-[var(--warm)]/25"
            >
              Commission inquiry
            </Link>
          </div>
        </div>
      </section>

      <section className="section-trust border-b border-[var(--wood)]/20">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-8 px-6 py-6 text-center text-sm text-[var(--wood)]">
          <p><span className="font-semibold">Connor Dollerson</span></p>
          <p>Hand-built · Surrey</p>
          <p>By appointment</p>
        </div>
      </section>

      <section className="section-services mx-auto max-w-6xl px-6 py-14">
        <h2 className="font-serif text-3xl text-[var(--wood)]">Craft services</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {services.map((s) => (
            <ServiceCard key={s.title} image={s.image} alt={s.alt} title={s.title} desc={s.desc} />
          ))}
        </ul>
      </section>

      <section className="section-about grid md:grid-cols-2">
        <div className="relative aspect-[4/5] min-h-[320px]">
          <Image src={aboutImg} alt="Joinery detail" fill className="object-cover" sizes="50vw" />
        </div>
        <div className="flex flex-col justify-center bg-[var(--wood)] p-10 text-[var(--paper)] md:p-16">
          <h2 className="font-serif text-3xl">Why commission bespoke</h2>
          <p className="mt-4 text-sm leading-relaxed opacity-85">
            Off-the-shelf rarely fits period homes or awkward alcoves. Connor Dollerson builds pieces that belong in
            the room — with timber selection, joinery detail, and finishes shown clearly in this demo portfolio.
          </p>
        </div>
      </section>

      <CtaBand
        image={galleryImg}
        imageAlt="Workshop craftsmanship"
        title="Start your commission"
        body="Share dimensions, timber preferences, and inspiration — demo inquiry form for bespoke projects."
        primaryHref="/contact"
        primaryLabel="Commission inquiry"
        secondaryHref="/contact"
        secondaryLabel="View portfolio"
      />

      <section className="section-reviews mx-auto max-w-6xl px-6 py-14">
        <h2 className="font-serif text-3xl text-[var(--wood)]">Client words</h2>
        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <li key={r.name} className="bg-white p-6 shadow-sm">
              <p className="text-sm italic text-[var(--muted)]">&ldquo;{r.quote}&rdquo;</p>
              <p className="mt-4 font-semibold">{r.name}</p>
              <p className="text-xs text-[var(--muted)]">{r.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="section-gallery mx-auto max-w-6xl px-6 pb-14">
        <h2 className="font-serif text-3xl text-[var(--wood)]">Selected work</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image src={galleryImg} alt="Custom furniture" fill className="object-cover" sizes="50vw" />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image src={heroImg} alt="Timber structure" fill className="object-cover" sizes="50vw" />
          </div>
        </div>
      </section>

      <CtaBand
        reverse
        image={aboutImg}
        imageAlt="Connor Dollerson carpentry"
        title="Built for your home"
        body="Think Outside The Box Carpentry — bespoke woodwork with a portfolio-first demo site."
        primaryHref="/contact"
        primaryLabel="Get in touch"
      />
    </main>
  );
}
