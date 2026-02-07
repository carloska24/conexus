import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { QuemSomos } from "@/components/QuemSomos";
import { Atuacao } from "@/components/Atuacao";
import { GestoresTecnicos } from "@/components/GestoresTecnicos";
import { ModeloConsultoria } from "@/components/ModeloConsultoria";
import { RedeParceiros } from "@/components/RedeParceiros";
import { FAQ } from "@/components/FAQ";
import { Contato } from "@/components/Contato";
import { Footer } from "@/components/Footer";
import { getPartnerMedia } from "@/lib/get-media";

export default function Home() {
  // Carrega mídia dinâmica das pastas públicas
  const customMedia = {
    'ICAPE Group': getPartnerMedia('icape'),
    'CADService': getPartnerMedia('cadservice'), 
    'FITec': getPartnerMedia('fitec'),
  };

  return (
    <>
      <Header />
      <main>
        <Hero />
        <QuemSomos />
        <Atuacao />
        <GestoresTecnicos />
        <ModeloConsultoria />
        <RedeParceiros dynamicMedia={customMedia} />
        <FAQ />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
