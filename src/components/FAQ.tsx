"use client";

import { useState } from "react";

const faqs = [
  {
    pergunta: "Qual o tamanho mínimo de projeto que vocês atendem?",
    resposta: "Atendemos desde protótipos únicos até produções em série. O diferencial da Conexus é adaptar a solução ao contexto do cliente, independente do volume. Cada projeto é avaliado individualmente pelos nossos gestores técnicos."
  },
  {
    pergunta: "Quanto tempo leva uma consultoria ou diagnóstico?",
    resposta: "O diagnóstico inicial é feito em até 48 horas após o primeiro contato. A duração total do projeto depende da complexidade, mas nosso compromisso é entregar uma análise preliminar rapidamente para você tomar decisões com clareza."
  },
  {
    pergunta: "Vocês atendem empresas de quais regiões?",
    resposta: "Atendemos empresas em todo o Brasil. Nossa sede está em Campinas/SP, mas trabalhamos com parceiros e clientes em diversas regiões. Boa parte do trabalho pode ser feita remotamente, com visitas técnicas quando necessário."
  },
  {
    pergunta: "Como funciona a cobrança pelos serviços?",
    resposta: "O diagnóstico inicial é gratuito. Para projetos de consultoria, trabalhamos com escopo fechado ou por hora técnica, dependendo da demanda. Apresentamos uma proposta clara antes de iniciar qualquer trabalho."
  },
  {
    pergunta: "Vocês fabricam placas eletrônicas?",
    resposta: "Não fabricamos diretamente, mas conectamos sua empresa aos melhores parceiros para cada tipo de produção. Nossa expertise está em avaliar seu projeto, identificar riscos e garantir que a manufatura seja feita com qualidade e eficiência."
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="section-container">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="heading-2 text-primary mb-3">Dúvidas Frequentes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Respondemos as principais perguntas sobre nossos serviços.
          </p>
        </div>

        {/* Acordeão */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-heading font-semibold text-primary pr-4">
                  {faq.pergunta}
                </span>
                <svg
                  className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-5 pb-5 text-gray-600 leading-relaxed">
                  {faq.resposta}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="text-gray-600 mb-4">Ainda tem dúvidas?</p>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 text-accent font-heading font-semibold hover:underline"
          >
            Fale diretamente com nossos gestores
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
