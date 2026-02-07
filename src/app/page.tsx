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
import { getPartnerMedia, getMediaFromFolder } from "@/lib/get-media";

export default function Home() {
  // Carrega mídia dinâmica das pastas públicas
  const customMedia = {
    'ICAPE Group': getPartnerMedia('icape'),
    'CADService': getPartnerMedia('cadservice'), 
    'FITec': getPartnerMedia('fitec'),
  };

  // Helper para buscar logo
  const getLogo = (name: string) => {
    const files = getMediaFromFolder('parceiros');
    // Busca arquivo que comece com o nome do parceiro (ex: cadservice.png, icape.svg)
    const logo = files.find(f => f.url.toLowerCase().split('/').pop()?.startsWith(name.toLowerCase()));
    return logo ? logo.url : undefined;
  };

  const partnerLogos = {
    'ICAPE Group': getLogo('icape'),
    'CADService': getLogo('cadservice'),
    'FITec': getLogo('fitec'),
  };

  // Carrega background do Modelo de Consultoria (pega o primeiro arquivo encontrado na pasta)
  const modeloBackgrounds = getMediaFromFolder('backgrounds/modelo');
  const modeloBgImage = modeloBackgrounds.length > 0 ? modeloBackgrounds[0].url : undefined;

  return (
    <>
      <Header />
      <main>
        <Hero />
        <QuemSomos />
        <Atuacao />
        <GestoresTecnicos />
        <ModeloConsultoria backgroundImage={modeloBgImage} />
        {/* Carrega background de Parceiros */}
        <RedeParceiros 
          dynamicMedia={customMedia} 
          partnerLogos={partnerLogos}
          backgroundImage={getMediaFromFolder('backgrounds/parceiros')[0]?.url} 
        />
        <FAQ />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
