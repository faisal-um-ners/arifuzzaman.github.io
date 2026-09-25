---
title: "Spatial Growth Rate and Starting Current in THz Smith–Purcell Radiation"
date: 2026-09-23
category: "Vacuum Electronics"
type: "Publication-based Research Article"
summary: "Why the imaginary part of the hot-tube wavenumber provides a physical guide to the beam current needed to initiate coherent radiation."
tags: ["spatial growth rate", "hot-tube dispersion", "starting current", "SPR"]
image: "/assets/img/articles/spr-spatial-growth-starting-current.svg"
featured: true
featured_order: 2
journal: "IEEE Transactions on Electron Devices"
source_year: 2023
doi: "10.1109/TED.2022.3208846"
source_url: "https://doi.org/10.1109/TED.2022.3208846"
source_paper: "Grating Optimization for Smith–Purcell Radiation: Direct Correlation Between Spatial Growth Rate and Starting Current"
source_authors: "Md Arifuzzaman Faisal and Peng Zhang"
publication_based: true
cover_prompt: "Light high-end scientific editorial cover for Spatial Growth Rate and Starting Current in THz Smith–Purcell Radiation; deep navy, electric blue, warm gold, generous white space, precise technical motifs, no text, no logos."
---
## A threshold problem hidden inside a wave-growth problem

A coherent Smith–Purcell source does not begin radiating strongly the moment an electron beam appears above a grating. The beam must first interact with the slow electromagnetic mode strongly enough to acquire velocity modulation. That modulation evolves into density modulation — electron bunching — and only after the feedback becomes sufficiently strong does coherent oscillation build up.

The beam current at which this happens is the **starting current**. It is a device-level threshold, but our 2023 paper showed that it can be understood through a local wave quantity: the **spatial growth rate** from the hot-tube dispersion relation.

This connection is useful because starting current is normally expensive to determine. A full PIC simulation must be repeated while sweeping the beam current, and the threshold must be identified from the onset of coherent radiation. By contrast, a dispersion calculation can evaluate spatial growth directly for a candidate geometry.

## What the imaginary wavenumber means

When the electron beam is included self-consistently with the electromagnetic fields, the wavenumber becomes complex,

$$
k=k_r+jk_i.
$$

For the convention $e^{-j\omega t+jkx}$, the field contains a factor

$$
e^{-k_i x}.
$$

A negative $k_i$ therefore describes a wave that grows as it moves along the interaction region. We use $-k_i$ as the spatial growth rate.

This is different from a temporal-growth analysis, where frequency is complex and the instability is interpreted as growth in time. The spatial formulation is especially natural for a finite interaction structure: the beam enters, exchanges energy with the mode, and the wave amplitude evolves along the grating.

## The geometric sweep reveals the correlation

In the published calculation, we varied groove height while fixing $w=60~\mu\mathrm{m}$, and separately varied groove width while fixing $h=100~\mu\mathrm{m}$. For each geometry, the cold-tube dispersion relation first identified the evanescent-wave operating frequency. The hot-tube relation was then solved at that frequency.

The spatial growth rate was far from constant. It reached pronounced maxima for groove heights around (100)–$120~\mu\mathrm{m}$, and around a groove width near $80~\mu\mathrm{m}$. These maxima occurred when the beam-wave operating point moved close to the upper band edge of the cold dispersion curve.

The decisive test was comparison with starting-current values from PIC simulations. Those simulations used a 35-period grating, with the other beam and device parameters kept consistent. The starting-current curve and the spatial-growth curve displayed essentially the same geometry dependence, even though one was obtained from nonlinear time-domain simulation and the other from a linear dispersion calculation.

## Why exponential gain maps onto current threshold

The connection can be understood by thinking about how coherent radiation builds. If an electromagnetic field grows over an interaction length $L_G$,

$$
E_{\mathrm{out}} \sim E_{\mathrm{in}} e^{|k_i|L_G}.
$$

For coherent emission, the radiated power is proportional to the square of the number of electrons participating coherently, and therefore approximately to the square of beam current,

$$
P\propto E^2\propto I^2.
$$

At the level of scaling, this implies

$$
e^{|k_i|L_G}\propto I.
$$

A geometry with stronger spatial amplification needs less injected current to reach a comparable field amplitude. This is why the maximum-growth points line up with the minimum-starting-current points.

## Why the result is practically useful

The analysis does not claim that a linear dispersion calculation contains every nonlinear detail of an operating oscillator. Saturation, losses, beam quality, end reflections and three-dimensional effects still matter in a real device. But for **screening geometry**, the spatial growth rate is an unusually efficient predictor.

The paper also checked the growth-rate pattern for multiple beam-current values and found the same qualitative dependence on geometry. That robustness is what makes the method valuable as an optimization tool.

There is also an important conceptual shift here. Instead of treating the starting current as a mysterious output of a complete oscillator simulation, we can interpret it as the macroscopic consequence of a local beam–wave amplification process. Once that link is visible, it becomes easier to reason about how geometry, frequency and beam coupling should be adjusted together.

For free-electron sources beyond Smith–Purcell devices, the same strategy suggests a general workflow: identify the operating mode with the cold structure, calculate spatial amplification with the hot structure, and reserve expensive nonlinear simulations for the most promising candidates.

## Source publication

**Grating Optimization for Smith–Purcell Radiation: Direct Correlation Between Spatial Growth Rate and Starting Current**  
Md Arifuzzaman Faisal and Peng Zhang  
*IEEE Transactions on Electron Devices* 70 (2023), 2860–2863  
DOI: [10.1109/TED.2022.3208846](https://doi.org/10.1109/TED.2022.3208846)
