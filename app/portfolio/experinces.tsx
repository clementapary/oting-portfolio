import Reveal from "../components/reveal";
import Block from "../components/block";
import HeaderSection from "../components/header-section";
import { Experinces } from "@/lib/constants";
import { CheckCircle } from "lucide-react";

export default function ExperincesPage() {
  return (
    <div className="grid gap-4">
      <HeaderSection className="flex-row-reverse" title="Experinces" />
      {Experinces.map((experince) => (
        <Block key={experince.title}>
          <Reveal>
            <h3 className="line-clamp-3 text-2xl font-bold">
              {experince.title}
            </h3>
          </Reveal>
          <Reveal>
            <p className="line-clamp-3 text-lg font-thin">{experince.body}</p>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            {experince.work.map((experince) => (
              <Reveal key={experince.title}>
                <p className="line-clamp-3 flex items-center gap-2 text-lg font-semibold">
                  <CheckCircle /> {experince.title}
                </p>
              </Reveal>
            ))}
          </div>
        </Block>
      ))}
    </div>
  );
}
