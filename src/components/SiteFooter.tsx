import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black text-[var(--paper)]">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="block">
            <Image
              src="/logo-white.png"
              alt="Think Outside The Box Carpentry"
              width={343}
              height={82}
              className="h-[3.9rem] w-auto sm:h-[4.29rem]"
            />
          </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed opacity-80">Bespoke carpentry & joinery across Cranleigh and Surrey villages.</p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--paper)]/70">Quick links</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/" className="text-[var(--paper)]/80 transition-opacity hover:opacity-100">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[var(--paper)]/80 transition-opacity hover:opacity-100">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[var(--paper)]/80 transition-opacity hover:opacity-100">
                  Get a quote
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--paper)]/70">Contact</p>
            <div className="mt-4 space-y-2 text-sm opacity-85">
              <p>Cranleigh & surrounding villages</p>
              <p>Enquiries by appointment</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-current/15 pt-8 text-xs opacity-60 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} Connor Dollerson · Think Outside The Box Carpentry</p>
          <p>Demo concept site for outreach — not affiliated with the live business.</p>
        </div>
      </div>
    </footer>
  );
}
