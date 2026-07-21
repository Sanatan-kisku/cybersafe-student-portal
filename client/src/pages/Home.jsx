import Hero from "../components/home/Hero";
import CyberAwarenessVideo from "../components/home/CyberAwarenessVideo";
import WhyCyberSafe from "../components/home/WhyCyberSafe";
import Features from "../components/home/Features";
import LearningModules from "../components/home/LearningModules";
import Statistics from "../components/home/Statistics";
import CTA from "../components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <CyberAwarenessVideo />
      <WhyCyberSafe />
      <Features />
      <LearningModules />
      <Statistics />
      <CTA />
    </>
  );
}