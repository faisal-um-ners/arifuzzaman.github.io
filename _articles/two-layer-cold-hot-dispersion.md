---
title: "Cold-Tube and Hot-Tube Dispersion in Two-Layer Smith–Purcell Structures"
date: 2026-09-20
category: "Vacuum Electronics"
type: "Publication-based Research Article"
summary: "How cold-tube dispersion identifies the operating frequency while hot-tube dispersion quantifies spatial amplification."
tags: ["dispersion relation", "two-layer grating", "spatial growth", "SPR"]
image: "/assets/img/articles/two-layer-cold-hot-dispersion.svg"
featured: false
journal: "IEEE Transactions on Plasma Science"
source_year: 2025
doi: "10.1109/TPS.2025.3567163"
source_url: "https://doi.org/10.1109/TPS.2025.3567163"
source_paper: "Parametric Analysis on Enhancement of THz Smith–Purcell Radiation by Two-Layer Grating Structure"
source_authors: "Md Arifuzzaman Faisal and Peng Zhang"
publication_based: true
---
## Two dispersion problems answer two different questions

For a beam-driven slow-wave device, it is useful to separate the electromagnetic structure from the electron beam. That separation leads to two related but distinct models.

The **cold-tube dispersion** describes the periodic structure without the beam. It answers: *What modes exist, and at what frequency does the beam synchronize with them?*

The **hot-tube dispersion** adds the continuous electron beam self-consistently. It answers: *Once the beam is present, how strongly does the synchronized mode grow?*

Our two-layer Smith–Purcell paper uses both because neither one alone is enough to decide whether adding a second grating layer improves performance.

## Cold-tube dispersion: locating the operating point

For the two-layer geometry, Maxwell's equations are solved in the different spatial regions and the tangential electromagnetic fields are matched across each interface. The result is a dispersion relation

$
f(\omega,k)=0.
$

for the periodic structure.

The electron beam is represented by its beam line,

$$
\omega = k v_0.
$$

The intersection between that line and the cold dispersion identifies the evanescent-wave operating point.

Adding a second layer changes the dispersion curve even when the bottom grating geometry remains unchanged. That shift is the first reason the two-layer device can behave differently from a single-layer one.

## Hot-tube dispersion: converting synchronism into gain

The cold structure does not tell us whether a synchronized wave will grow rapidly. To determine that, the beam dynamics must be included.

The hot-tube formulation couples the electromagnetic fields to the beam continuity and momentum response. The resulting wavenumber becomes complex,

$$
k=k_r+jk_i.
$$

The real part controls the phase evolution; the imaginary part controls spatial amplification. For the convention used in the paper, $k_i<0$ corresponds to growth, so the relevant gain measure is $-k_i$.

That simple quantity becomes the bridge between dispersion theory and the experimentally meaningful starting current.

## Why the band edge keeps appearing

Across the parameter sweeps, the largest growth rates occur when the beam-synchronous operating point lies near the upper band edge of the cold-tube dispersion.

Near this region the mode is particularly susceptible to instability. The exact location changes as groove height, width and the second-layer spacing change, but the physical pattern is consistent: operating closer to the favorable band-edge region generally produces stronger growth.

This helps explain why adding the second layer can sometimes lower the starting current and sometimes raise it. The layer does not “add gain” directly; it moves the dispersion landscape.

## The second layer has a finite reach

The paper also varied the distance between the beam and the upper grating. When that second layer is brought close enough to the beam, it significantly modifies the dispersion and the growth-rate band.

But when the second-layer spacing becomes much larger — for example $a_2=200~\mu\mathrm{m}$ compared with $a_1=10~\mu\mathrm{m}$ in the reported comparison — its influence becomes weak. The two-layer cold dispersion approaches the single-layer result, and the growth-rate curves begin to overlap.

This is exactly what one would expect from an evanescent interaction: fields associated with the beam and grating decay away from the interaction region, so a distant layer eventually becomes electromagnetically irrelevant.

## Why both calculations belong in the design loop

Using only cold dispersion would tell us the operating frequency but not the threshold behavior. Using only hot dispersion without carefully tracking the passive mode would obscure why the gain changes with geometry.

Together, the two calculations provide a compact design language:

- the cold-tube curve shows how geometry moves the synchronized operating point;
- the hot-tube root shows how much spatial amplification exists at that point;
- the growth-rate comparison predicts which geometry should require less current.

This is particularly powerful when comparing single- and two-layer devices because the structures can operate at similar frequencies while still having substantially different growth.

## From explanation to optimization

The broader value of the approach is efficiency. A parameter map of dispersion and spatial gain can be computed far more cheaply than a full PIC starting-current search for every geometry.

That makes the dispersion framework useful not just for interpreting simulations after the fact, but for deciding **which simulations are worth running**.

For a two-layer Smith–Purcell source, this means the designer can first scan groove height, groove width, layer spacing and beam energy using the cold/hot theory, identify high-growth regions, and then reserve nonlinear PIC or experiments for the best candidates.

## Source publication

**Parametric Analysis on Enhancement of THz Smith–Purcell Radiation by Two-Layer Grating Structure**  
Md Arifuzzaman Faisal and Peng Zhang  
*IEEE Transactions on Plasma Science* 53 (2025), 1170–1179  
DOI: [10.1109/TPS.2025.3567163](https://doi.org/10.1109/TPS.2025.3567163)
