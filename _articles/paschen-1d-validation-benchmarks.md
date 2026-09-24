---
title: "Benchmarking PASCHEN-1D Across Pulsed Discharges, Glow, and Paschen Curves"
date: 2026-09-09
category: "Computational Physics"
type: "Publication-based Research Article"
summary: "The validation suite spans pulsed discharge, DC breakdown and glow, Paschen curves, and photoemission-driven plasmas."
tags: ["validation", "Paschen curve", "glow discharge", "pulsed plasma"]
image: "/assets/img/articles/paschen-1d-validation-benchmarks.svg"
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

The published validation suite includes nanosecond pulsed dielectric-barrier discharge, DC breakdown and glow transitions, Paschen-curve construction for argon and nitrogen, and picosecond photoemission-induced plasma cases.

The paper also reports optional Numba acceleration; for a representative 160 V argon glow case on the stated hardware, median runtime fell from 43.60 min to 15.83 min after JIT warm-up.

## Source publication

**PASCHEN-1D: A one-dimensional fluid plasma solver with multi-mechanism surface emission and flexible external circuit coupling**  
Asif Iqbal, Yves Heri, Bingqing Wang, Lan Jin, Md Arifuzzaman Faisal, and Peng Zhang  
*Computer Physics Communications* (2026)  
DOI: [10.1016/j.cpc.2026.110404](https://doi.org/10.1016/j.cpc.2026.110404)
