import Reveal from "../components/reveal";
import Block from "../components/block";
import HeaderSection from "../components/header-section";

export default function Projects() {
  return (
    <div>
      <HeaderSection className="flex-row" title="Projects" />
      <Block>
        <Reveal>
          <p className="line-clamp-3 text-[18px]">
            I am Clement Apary, a passionate Web Developer, Graphic Designer,
            and Freelancer based in Juba, South Sudan. I specialize in building
            modern, responsive, and user-friendly digital solutions that help
            individuals, businesses, and organizations improve their online
            presence. With a Bachelor Degree in Information Technology, I
            combine technical skills, creativity, and problem-solving abilities
            to create effective websites, applications, and visual designs. I
            enjoy transforming ideas into real digital products through clean
            code, attractive designs, and innovative technology solutions.
          </p>
        </Reveal>
      </Block>
    </div>
  );
}
