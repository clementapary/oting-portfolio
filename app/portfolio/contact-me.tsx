import HeaderSection from "../components/header-section";
import Reveal from "../components/reveal";
export default function ContactMe() {
  return (
    <section className="grid gap-4">
      <HeaderSection title="Contact" className="" />
      <div className="grid gap-4">
        <Reveal>
          <p className="text-lg font-thin">
            If you have any questions or would like to work with me, please feel
            free to reach out. I am always open to new opportunities and
            collaborations.
          </p>
        </Reveal>
        <Reveal>
          <p className="text-lg font-thin">
            You can contact me via email at{" "}
            <a
              href="mailto:example@example.com"
              className="text-blue-500 hover:underline"
            >
              clementapary@gmail.com
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
