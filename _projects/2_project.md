---
layout: page
title: Generative Language Model for the Judiciary (GSJ)
description: A locally deployable language model and agentic prototype for work with electronic court files
# img: assets/img/llmjudge.png
importance: 2
category: work
related_publications: elganayni2026judgedisposition, nagl2026bengerbenchmark, nagl2026bengerplatform, prior2026chunking, elganayni2026reranking, prior2026oldfriend, nagl2025courtpressger, vonwedel2026casearc, wais2026appeallm, wais2025lossfunctions
keywords: "generative AI, judicial decision support, large language models, German judiciary, electronic court files, pseudonymization, agentic systems, on-policy distillation"
funding: "German Federal and State Ministries of Justice"
partners:
  - "University of Cologne (annotation)"
status: "Active"
---

The project "Generatives Sprachmodell der Justiz" (GSJ) aims to develop a generative language model. It was initiated in early 2023 with the goal of training a language model on judicial data that has not previously been publicly available.

We aim to develop a model that can be operated locally, on the computing infrastructure of the German state justice administrations. Court files contain highly sensitive personal data that cannot be handed to external inference providers, which rules out the commercial API models that dominate current legal AI practice. The choice of open-weights models, the pseudonymization pipeline, the training setup etc. follows from that constraint.

The work divides into three pillars: making judicial data usable for model development in the first place, building an agentic-driven application that lets a model work with electronic case files (eAkte) the way a judge does, and training a model for the legal tasks that this work involves. Annotation of the released case files is carried out under the direction of our project partners at the University of Cologne.
