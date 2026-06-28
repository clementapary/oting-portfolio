import Reveal from "../components/reveal";
import Block from "../components/block";
import HeaderSection from "../components/header-section";
import Image from "next/image";
import Profile from "@/public/key.png";

export default function About() {
  return (
    <div>
      <HeaderSection className="" title="About" />
      <Block className="grid items-center justify-end gap-4 md:grid-cols-2">
        <Reveal>
          <Image
            src={Profile}
            alt="profile"
            className="w-fit self-end rounded-lg object-cover"
          />
        </Reveal>
        <Reveal>
          <p className="text-xl">
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
