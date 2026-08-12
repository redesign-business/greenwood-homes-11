const contactUrl = "https://greenwood-homes.com/contact/";

const Arrow = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
    <path d="M5 12h13M13 6l6 6-6 6" />
  </svg>
);

const projects = [
  {
    name: "Cutting Edge Modern",
    place: "Lake Tahoe",
    image: "/images/incline-village-cutting-edge-modern-greenwood-homes-featured-86c5cfc249.jpg",
    url: "https://greenwood-homes.com/portfolio/cutting-edge-modern/",
    className: "md:col-span-7",
  },
  {
    name: "Hale Pakika",
    place: "Hawaii",
    image: "/images/006_hale_pakika-web-4f380e5cda.jpg",
    url: "https://greenwood-homes.com/portfolio/hale_pakika/",
    className: "md:col-span-5 md:mt-24",
  },
  {
    name: "Cabin in the Woods",
    place: "Idaho",
    image: "/images/godfrey-002-592f2af2c9.jpg",
    url: "https://greenwood-homes.com/portfolio/cabin-in-the-woods/",
    className: "md:col-span-5 md:col-start-2 md:-mt-10",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      <nav className="absolute inset-x-0 top-0 z-20 text-white" aria-label="Main navigation">
        <div className="mx-auto flex max-w-[1480px] items-center justify-between px-5 py-6 sm:px-8 lg:px-12">
          <a href="/" aria-label="Greenwood Homes home" className="flex items-center gap-3">
            <img src="/images/gwhweblogo1020-4faa02ba82.png" alt="Greenwood Homes" className="h-auto w-44 brightness-0 invert sm:w-52" />
          </a>
          <div className="hidden items-center gap-9 text-[11px] font-semibold uppercase tracking-[0.2em] md:flex">
            <a href="#work" className="relative py-2 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:origin-right after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100">Selected work</a>
            <a href="#approach" className="relative py-2 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:origin-right after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100">Approach</a>
            <a href="#about" className="relative py-2 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:origin-right after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100">About</a>
          </div>
          <a href={contactUrl} className="hidden min-h-12 items-center justify-center gap-[0.8rem] rounded-full border border-white/65 px-[1.2rem] py-3 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:bg-white hover:text-[var(--ink)] sm:inline-flex">
            Start a conversation <Arrow />
          </a>
          <a href={contactUrl} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 sm:hidden" aria-label="Contact Greenwood Homes">
            <Arrow />
          </a>
        </div>
      </nav>

      <section className="relative flex min-h-[760px] items-end text-white lg:min-h-[900px] max-sm:min-h-[740px]">
        <img
          src="/images/006-475lakeshore_phjoystrotz-e74d7e7ed6.jpg"
          alt="Lakeview Serenity custom home interior overlooking Lake Tahoe"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,16,11,.58)_0%,rgba(10,16,11,.08)_38%,rgba(10,16,11,.68)_100%)]" />
        <div className="relative mx-auto grid w-full max-w-[1480px] gap-10 px-5 pb-14 sm:px-8 sm:pb-20 lg:grid-cols-12 lg:px-12 lg:pb-24">
          <div className="lg:col-span-9">
            <p className="mb-6 font-[var(--sans)] text-[0.68rem] font-bold uppercase leading-[1.2] tracking-[0.22em] text-white/75">Custom homes since 1998</p>
            <h1 className="max-w-5xl text-[clamp(3.8rem,8vw,8.5rem)] leading-[0.84] tracking-[-0.055em]">
              Built for the life <span className="italic">around it.</span>
            </h1>
          </div>
          <div className="flex flex-col justify-end lg:col-span-3 lg:pb-1">
            <p className="max-w-sm text-base leading-7 text-white/80">
              Exceptional custom homes, shaped in close collaboration with owners, architects, and designers.
            </p>
            <a href={contactUrl} className="mt-7 inline-flex min-h-12 items-center justify-center gap-[0.8rem] self-start rounded-full border border-white/65 px-[1.2rem] py-3 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:bg-white hover:text-[var(--ink)]">
              Start a conversation <Arrow />
            </a>
          </div>
        </div>
        <p className="absolute bottom-6 right-8 hidden rotate-90 origin-bottom-right text-[9px] font-bold uppercase tracking-[0.28em] text-white/60 lg:block">
          Lake Tahoe / Hawaii / Idaho / Utah
        </p>
      </section>

      <section id="about" className="bg-[#e9e3d8] px-5 py-24 text-[#192219] sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1380px]">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="font-[var(--sans)] text-[0.68rem] font-bold uppercase leading-[1.2] tracking-[0.22em]">The Greenwood standard</p>
            </div>
            <div className="lg:col-span-8 lg:col-start-5">
              <h2 className="text-[clamp(2.5rem,5vw,5.7rem)] leading-[0.98] tracking-[-0.045em]">
                A home is a work of art. It should serve and inspire for generations.
              </h2>
              <div className="mt-14 grid gap-8 border-t border-[#192219]/25 pt-8 sm:grid-cols-2">
                <p className="text-lg leading-8 text-[#475047]">
                  Greenwood Homes brings owners, architects, and designers together through every phase, with a clear commitment to quality construction, professionally delivered.
                </p>
                <p className="text-lg leading-8 text-[#475047]">
                  Licensed in California, Nevada, Hawaii, Idaho, and Utah, the team builds from offices in Incline Village, Coeur d&apos;Alene, and Kauai.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-20 grid border-y border-[#192219]/25 sm:grid-cols-3 lg:mt-28">
            <div className="flex min-h-[170px] flex-col justify-center gap-[0.4rem] py-7 sm:px-10 sm:first:pl-0 max-sm:border-t max-sm:border-[#192219]/25 max-sm:first:border-t-0"><strong className="font-[var(--serif)] text-[clamp(3.5rem,6vw,6.5rem)] font-normal leading-none tracking-[-0.045em]">1998</strong><span className="text-[0.68rem] font-bold uppercase tracking-[0.16em]">Established</span></div>
            <div className="flex min-h-[170px] flex-col justify-center gap-[0.4rem] py-7 sm:border-x sm:border-[#192219]/25 sm:px-10 sm:first:pl-0 max-sm:border-t max-sm:border-[#192219]/25 max-sm:first:border-t-0"><strong className="font-[var(--serif)] text-[clamp(3.5rem,6vw,6.5rem)] font-normal leading-none tracking-[-0.045em]">50+</strong><span className="text-[0.68rem] font-bold uppercase tracking-[0.16em]">Custom homes completed</span></div>
            <div className="flex min-h-[170px] flex-col justify-center gap-[0.4rem] py-7 sm:px-10 sm:first:pl-0 max-sm:border-t max-sm:border-[#192219]/25 max-sm:first:border-t-0"><strong className="font-[var(--serif)] text-[clamp(3.5rem,6vw,6.5rem)] font-normal leading-none tracking-[-0.045em]">5</strong><span className="text-[0.68rem] font-bold uppercase tracking-[0.16em]">Licensed states</span></div>
          </div>
        </div>
      </section>

      <section id="work" className="bg-[#f7f4ee] px-5 py-24 text-[#192219] sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1380px]">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mb-5 font-[var(--sans)] text-[0.68rem] font-bold uppercase leading-[1.2] tracking-[0.22em]">Selected residences</p>
              <h2 className="text-[clamp(3rem,6vw,6rem)] leading-none tracking-[-0.05em]">Built across landscapes.</h2>
            </div>
            <a href="https://greenwood-homes.com/portfolio/" className="inline-flex items-center gap-[0.7rem] border-b border-current pb-[0.4rem] text-[0.68rem] font-bold uppercase tracking-[0.14em]">Explore the full portfolio <Arrow /></a>
          </div>

          <div className="mt-16 grid gap-x-7 gap-y-14 md:grid-cols-12 lg:mt-24">
            {projects.map((project, index) => (
              <a key={project.name} href={project.url} className={`project group ${project.className}`}>
                <div className={`overflow-hidden bg-[#d9d3c8] ${index === 0 ? "aspect-[4/3]" : "aspect-[5/4]"}`}>
                  <img src={project.image} alt={`${project.name} custom home in ${project.place}`} className="h-full w-full object-cover saturate-[0.82] transition duration-700 group-hover:scale-[1.03]" />
                </div>
                <div className="flex items-start justify-between border-t border-[#192219] pt-4">
                  <div>
                    <h3 className="text-2xl tracking-[-0.025em]">{project.name}</h3>
                    <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-[#6f756c]">{project.place}</p>
                  </div>
                  <span className="mt-1 flex h-9 w-9 items-center justify-center rounded-full border border-[#192219]/40 transition group-hover:bg-[#192219] group-hover:text-white"><Arrow /></span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="bg-[#1d2a20] text-[#f7f4ee]">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[500px] lg:min-h-[860px]">
            <img src="/images/19-observation-260-high-res-13-ig-post-crop-819x1024-6d27faff8d.jpg" alt="Warm timber and stone craftsmanship inside a Tahoe home" className="absolute inset-0 h-full w-full object-cover" />
          </div>
          <div className="flex items-center px-5 py-24 sm:px-12 lg:px-[9vw] lg:py-32">
            <div className="max-w-xl">
              <p className="mb-6 font-[var(--sans)] text-[0.68rem] font-bold uppercase leading-[1.2] tracking-[0.22em] text-[#bdc89c]">A considered process</p>
              <h2 className="text-[clamp(3rem,5vw,5.2rem)] leading-[0.94] tracking-[-0.05em]">From first line to final detail.</h2>
              <div className="mt-14 divide-y divide-white/20 border-y border-white/20">
                <div className="process-row"><span>01</span><div><h3>Plan with rigor</h3><p>Estimating, feasibility, constructability review, cost control, risk assessment, and scheduling establish the path forward.</p></div></div>
                <div className="process-row"><span>02</span><div><h3>Build in collaboration</h3><p>Project managers coordinate owners, architects, designers, and trades through each phase of construction.</p></div></div>
                <div className="process-row"><span>03</span><div><h3>Stand behind the work</h3><p>An ironclad warranty and open communication carry the relationship beyond project completion.</p></div></div>
              </div>
              <a href={contactUrl} className="button button-light mt-10">Start a conversation <Arrow /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#c7b274] px-5 py-24 text-[#192219] sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-[1380px] gap-12 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="eyebrow">In their words</p>
          </div>
          <figure className="lg:col-span-8 lg:col-start-5">
            <blockquote className="text-[clamp(2rem,4.2vw,4.7rem)] leading-[1.06] tracking-[-0.04em]">
              &ldquo;We have built 5 homes over our lives, in Texas, Lake Tahoe and Hawaii, and our experience with Kevin was the best.&rdquo;
            </blockquote>
            <figcaption className="mt-10 flex items-center gap-5 border-t border-[#192219]/30 pt-6">
              <span className="h-px w-12 bg-[#192219]" />
              <span className="text-xs font-bold uppercase tracking-[0.18em]">Greenwood Homes client</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-[#f7f4ee] px-5 py-24 text-[#192219] sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-[1380px] items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden bg-[#d9d3c8]">
              <img src="/images/kevin-hanna_4x4_2025-04_2-47053f6700.jpg" alt="Kevin Hanna, president and CEO of Greenwood Homes" className="h-full w-full object-cover grayscale-[20%]" />
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="eyebrow mb-6">Built on clear principles</p>
            <h2 className="text-[clamp(3rem,5vw,5.5rem)] leading-[0.95] tracking-[-0.05em]">Craftsmanship. Service. Honest relationships.</h2>
            <p className="mt-8 max-w-xl text-lg leading-8 text-[#596158]">
              President and CEO Kevin Hanna built Greenwood Homes around the values he lived by as a community service provider in the fire department. Today, those values guide a multi-state team of project managers, superintendents, coordinators, and craftspeople.
            </p>
            <a href="https://greenwood-homes.com/team/" className="text-link mt-8">Meet the team <Arrow /></a>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-[#e9e3d8] px-5 py-24 text-[#192219] sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1380px] gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-5">Frequently asked</p>
            <h2 className="text-5xl tracking-[-0.04em] sm:text-6xl">Before we begin.</h2>
          </div>
          <div className="divide-y divide-[#192219]/25 border-y border-[#192219]/25 lg:col-span-7 lg:col-start-6">
            <details open><summary>Where does Greenwood Homes build?<span>+</span></summary><p>Greenwood Homes is licensed in California, Nevada, Hawaii, Idaho, and Utah, with offices in Incline Village, Coeur d&apos;Alene, and Kauai.</p></details>
            <details><summary>Can you join after plans are complete?<span>+</span></summary><p>Yes. Greenwood Homes can work from a project&apos;s inception or come onboard after plans have been completed.</p></details>
            <details><summary>What does pre-construction include?<span>+</span></summary><p>Services include estimating, feasibility and constructability review, value engineering, MEP review, risk assessment, and scheduling.</p></details>
            <details><summary>Do you take on renovations?<span>+</span></summary><p>Yes. The team accommodates renovations, tenant improvements, additions, and energy-efficient upgrades.</p></details>
            <details><summary>What happens after completion?<span>+</span></summary><p>Greenwood Homes supports completed projects with an ironclad warranty and ongoing open communication.</p></details>
          </div>
        </div>
      </section>

      <section className="final-cta relative flex min-h-[680px] items-center justify-center px-5 py-24 text-center text-white">
        <img src="/images/clear-creek-mountain-modern-home-greenwood-homes-tahoe-truckee-017-4b0479315f.jpg" alt="Clear Creek Fairway custom home among the pines" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[#101810]/65" />
        <div className="relative max-w-4xl">
          <p className="eyebrow mb-6 text-white/70">Your home, thoughtfully realized</p>
          <h2 className="text-[clamp(3.6rem,7.5vw,8rem)] leading-[0.88] tracking-[-0.055em]">Let&apos;s build what endures.</h2>
          <a href={contactUrl} className="button button-light mt-10">Start a conversation <Arrow /></a>
        </div>
      </section>

      <footer className="bg-[#131b14] px-5 py-14 text-[#e9e3d8] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1380px]">
          <div className="grid gap-12 border-b border-white/15 pb-14 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <p className="font-[var(--serif)] text-3xl tracking-[-0.04em]">Greenwood Homes</p>
              <p className="mt-6 max-w-sm text-sm leading-6 text-white/55">Quality construction, professionally delivered since 1998.</p>
            </div>
            <div><p className="footer-title">Explore</p><div className="footer-links"><a href="#work">Selected work</a><a href="#approach">Approach</a><a href="https://greenwood-homes.com/testimonials/">Testimonials</a><a href="https://greenwood-homes.com/about/">About</a></div></div>
            <div><p className="footer-title">Contact</p><div className="footer-links"><a href="tel:+17758310188">775.831.0188</a><a href={contactUrl}>Start a conversation</a><span>Incline Village, Nevada</span></div></div>
          </div>
          <div className="flex flex-col gap-4 pt-7 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/40 md:flex-row md:items-center md:justify-between">
            <p>&copy; 2026 Greenwood Homes, Inc.</p>
            <p>CA 844360 / NV 75871 / HI 30129 / ID 59886 / UT 14013486-5501</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
