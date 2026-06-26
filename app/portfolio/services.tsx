import Reveal from "../components/reveal";
import Block from "../components/block";
import HeaderSection from "../components/header-section";
import { Services } from "@/lib/constants";
import { CheckCircle } from "lucide-react";
export default function ServicesPage() {
  return (
    <div className="grid gap-4">
      <HeaderSection className="flex-row-reverse" title="Services" />
      {Services.map((service) => (
        <Block key={service.title}>
          <Reveal>
            <h3 className="line-clamp-3 text-2xl font-bold">{service.title}</h3>
          </Reveal>
          <Reveal>
            <p className="line-clamp-3 text-lg font-thin">{service.body}</p>
          </Reveal>
          {service.services.map((service) => (
            <Reveal key={service.title}>
              <p className="line-clamp-3 flex items-center gap-2 text-lg font-semibold">
                <CheckCircle /> {service.title}
              </p>
            </Reveal>
          ))}
        </Block>
      ))}
    </div>
  );
}
