import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { QuemSomos } from "@/components/QuemSomos";
import { Atuacao } from "@/components/Atuacao";
import { GestoresTecnicos } from "@/components/GestoresTecnicos";
import { ModeloConsultoria } from "@/components/ModeloConsultoria";
import { EmpresasParceiras } from "@/components/EmpresasParceiras";
import { FAQ } from "@/components/FAQ";
import { Contato } from "@/components/Contato";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <QuemSomos />
        <Atuacao />
        <GestoresTecnicos />
        <ModeloConsultoria />
        <EmpresasParceiras />
        <FAQ />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
