---
layout: page
title: Digital-Ready Tax Law (Digitaltaugliches Steuerrecht)
description: Research supporting digital-ready (tax) law
img: assets/img/robotinparliament.png
importance: 1
category: work
related_publications: schultz2025KI
keywords: "Rules as Code, digital-ready legislation, LegisLLM, AI-supported legislative drafting, compliance cost automation, tax law NLP"
funding: "German Federal Ministry of Finance (BMF)"
partners:
  - "LMUDigiTax (Ludwig Maximilian University of Munich)"
status: "Active"
---
Working together with the [Center for Digitalization of Tax Law at Ludwig Maximilian University of Munich (LMUDigiTax)](https://www.lmudigitax.uni-muenchen.de/index.html) and funded by the German Federal Ministry of Finance, we are conducting the study "Digital-Ready Tax Law" (Digitaltaugliches Steuerrecht). The study builds upon an existing partnership in which hackathons have already been organized, focusing on the formalization of tax law provisions using low/no-code tools and legislative drafting that conforms to principles of digital execution. 

The project pursues the goal of identifying and systematically analyzing national and international initiatives on human- and machine-readable law ("Rules as Code"/"Law as Code"). This includes developing both statutory and constitutional requirements for a legal format that can be processed equally by humans and machines. Particular attention is given to administrative regulations with discretionary scope and provisions that use indeterminate legal concepts.

Our research systematically examines how modern technologies, such as Natural Language Processing and Large Language Models, can support and improve legislative processes. Through different work packages, viable future scenarios are being developed and evaluated regarding their practical feasibility. Currently, proof-of-concept applications are being developed to demonstrate how AI capabilities could be integrated into legislative workflows while evaluating the reliability, accuracy, and completeness of model-generated results.

## 1) AI-supported legislative drafting 

Interviews conducted with legislative drafters as part of the study revealed several structural problems in everyday work. Particularly burdensome was the significant time pressure, which led to shortened coordination processes and increased risk of errors. Moreover, draft legislation is predominantly created through the exchange of individual documents via email, while digital tools are rarely used. The digital feasibility of new regulations is often considered too late, resulting in the loss of important perspectives.

In response to these challenges, we developed the prototype "LegisLLM". The application assists drafters using generative AI from the initial political task through to the first legislative draft. The system operates with a sequence of specialized LLM queries, where each step uses the outputs of the previous one as input and is enriched with structured legal data. Norm identification occurs either directly via the language model or through a multi-stage process that extracts relevant provisions from legal databases and filters hierarchically from statutes through sections to specific paragraphs. This processed regulatory context is then used in subsequent generation steps to create various regulatory alternatives, evaluate them from a legal perspective, and finally transform them into the formal structures of amendment commands and drafting documents. Each phase is optimized through domain-specific prompting and the integration of legal terminology.

<div id="legisllm-carousel" class="carousel slide mb-4" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#legisllm-carousel" data-slide-to="0" class="active"></li>
    <li data-target="#legisllm-carousel" data-slide-to="1"></li>
    <li data-target="#legisllm-carousel" data-slide-to="2"></li>
    <li data-target="#legisllm-carousel" data-slide-to="3"></li>
    <li data-target="#legisllm-carousel" data-slide-to="4"></li>
    <li data-target="#legisllm-carousel" data-slide-to="5"></li>
    <li data-target="#legisllm-carousel" data-slide-to="6"></li>
    <li data-target="#legisllm-carousel" data-slide-to="7"></li>
    <li data-target="#legisllm-carousel" data-slide-to="8"></li>
    <li data-target="#legisllm-carousel" data-slide-to="9"></li>
    <li data-target="#legisllm-carousel" data-slide-to="10"></li>
    <li data-target="#legisllm-carousel" data-slide-to="11"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="/assets/img/legisllm/1.png" alt="LegisLLM screen 1">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="/assets/img/legisllm/2.png" alt="LegisLLM screen 2">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="/assets/img/legisllm/3.png" alt="LegisLLM screen 3">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="/assets/img/legisllm/4.png" alt="LegisLLM screen 4">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="/assets/img/legisllm/5.png" alt="LegisLLM screen 5">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="/assets/img/legisllm/6.png" alt="LegisLLM screen 6">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="/assets/img/legisllm/7.png" alt="LegisLLM screen 7">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="/assets/img/legisllm/8.png" alt="LegisLLM screen 8">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="/assets/img/legisllm/9.png" alt="LegisLLM screen 9">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="/assets/img/legisllm/10.png" alt="LegisLLM screen 10">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="/assets/img/legisllm/11.png" alt="LegisLLM screen 11">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="/assets/img/legisllm/12.png" alt="LegisLLM screen 12">
    </div>
  </div>
  <a class="carousel-control-prev" href="#legisllm-carousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#legisllm-carousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

For more details, see our journal article in [KIR 2025, 294](/assets/pdf/legisllm.pdf) (published with the kind permission of C.H.Beck and the editorial team at KIR).

## 2) Automated Calculation of Compliance Costs

The assessment of compliance costs is a mandatory component of the legislative process in Germany. It quantifies the administrative burden that new regulations impose on citizens, businesses, and public administration. We are looking into NLP-based methods to automate and improve the calculation of compliance costs.

## 3) Contextualization of Law through Recognition of References

Legal texts are characterized by complex reference structures that connect provisions within and across different statutes. Analyzing explicit and implicit references between legal provisions, our research applies NLP-methods in combination with graph theory to map and visualize the network of legal relationships. 
