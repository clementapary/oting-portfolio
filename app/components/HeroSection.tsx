import Block from "./block";
import Reveal from "./reveal";

export default function HeroSection() {
  return (
    <Block className="mt-4 grid gap-4">
      <div className="">
        <Reveal>
          <h1 className="text-6xl font-black capitalize">
            Hey, I&apos;m clement<span className="text-amber-500">.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h3 className="text-4xl font-semibold">
            I&apos;m a{" "}
            <span className="font-semibold text-amber-500">
              Full Stack Developer .
            </span>
          </h3>
        </Reveal>
        <Reveal>
          <p className="text-2xl font-thin whitespace-pre-line">
            I bridge the gap between aesthetics and functionality, handling
            everything from your brand identity to your live, fully responsive
            website.
          </p>
        </Reveal>
        <Reveal>
          <a
            href="#"
            className="rounded-lg bg-amber-500 px-6 py-2 text-lg font-semibold text-zinc-100"
          >
            Contact Me
          </a>
        </Reveal>
      </div>
    </Block>
  );
}
