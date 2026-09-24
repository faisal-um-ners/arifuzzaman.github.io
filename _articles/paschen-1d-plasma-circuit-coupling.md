---
title: "How PASCHEN-1D Couples Plasma Transport to External Circuits"
date: 2026-09-11
category: "Computational Physics"
type: "Publication-based Research Article"
summary: "How plasma current and gap voltage are exchanged with configurable lumped RLC networks."
tags: ["plasma circuit", "RLC", "drift-diffusion", "Poisson equation"]
image: "/assets/img/articles/paschen-1d-plasma-circuit-coupling.svg"
featured: false
journal: "Computer Physics Communications"
source_year: 2026
doi: "10.1016/j.cpc.2026.110404"
source_url: "https://doi.org/10.1016/j.cpc.2026.110404"
source_paper: "PASCHEN-1D: A one-dimensional fluid plasma solver with multi-mechanism surface emission and flexible external circuit coupling"
source_authors: "Asif Iqbal, Yves Heri, Bingqing Wang, Lan Jin, Md Arifuzzaman Faisal, and Peng Zhang"
publication_based: true
---

> **Project credit.** This article is based on the published PASCHEN-1D work led by **Asif Iqbal**, with **Prof. Peng Zhang** as corresponding author. I am happy to have contributed to this project as a coauthor.

## Research perspective

The plasma solver supplies transport current from the resolved charged-particle fluxes, and the circuit solver returns the instantaneous gap voltage used as the electrostatic boundary condition.

The plasma branch also includes geometric gap capacitance,

$$
C_{\rm gap}=\frac{\epsilon_0A}{L}.
$$

Configurable RLC topologies allow multiple experimentally relevant drive conditions without changing the plasma core.

## Source publication

**PASCHEN-1D: A one-dimensional fluid plasma solver with multi-mechanism surface emission and flexible external circuit coupling**  
Asif Iqbal, Yves Heri, Bingqing Wang, Lan Jin, Md Arifuzzaman Faisal, and Peng Zhang  
*Computer Physics Communications* (2026)  
DOI: [10.1016/j.cpc.2026.110404](https://doi.org/10.1016/j.cpc.2026.110404)
