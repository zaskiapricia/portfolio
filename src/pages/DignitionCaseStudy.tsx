import CaseStudyNavbar from '@/components/case-study/CaseStudyNavbar';
import DignitionHero from '@/components/case-study/DignitionHero';
import ProjectOverview from '@/components/case-study/ProjectOverview';
import ProblemStatement from '@/components/case-study/ProblemStatement';
import UserPersonas from '@/components/case-study/UserPersonas';
import InformationArchitecture from '@/components/case-study/InformationArchitecture';
import DesignProcess from '@/components/case-study/DesignProcess';
import SolutionFeatures from '@/components/case-study/SolutionFeatures';
import FinalUIShowcase from '@/components/case-study/FinalUIShowcase';
import Reflection from '@/components/case-study/Reflection';
import Footer from '@/components/Footer';

export default function DignitionCaseStudy() {
  return (
    <>
      <CaseStudyNavbar />
      <main>
        <DignitionHero />
        <ProjectOverview />
        <ProblemStatement />
        <UserPersonas />
        <InformationArchitecture />
        <DesignProcess />
        <SolutionFeatures />
        <FinalUIShowcase />
        <Reflection />
      </main>
      <Footer />
    </>
  );
}
