import Reveal from "../components/reveal";
import Block from "../components/block";
import HeaderSection from "../components/header-section";
import { Project } from "@/lib/constants";
import Feature from "@/public/project.png";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <div>
      <HeaderSection className="flex-row" title="Projects" />
      <div className="grid gap-4 md:grid-cols-2">
        {Project.map((project) => (
          <Block key={project.title}>
            <Reveal>
              <div className="aspect-square">
                <Image src={Feature} alt="feature" />
              </div>
            </Reveal>
            <Reveal>
              <h1 className="text-2xl font-bold">{project.title}</h1>
            </Reveal>
            <Reveal>
              <p className="text-[18px]">{project.body}</p>
            </Reveal>
          </Block>
        ))}
      </div>
    </div>
  );
}
