---
title: "Tuning Smith–Purcell Operating Frequency with Groove Height and Width"
date: 2026-09-21
category: "Vacuum Electronics"
type: "Publication-based Research Article"
summary: "Cold-tube dispersion shows how the SPR operating point shifts even when the grating period and beam energy remain fixed."
tags: ["cold-tube dispersion", "operating frequency", "THz", "grating geometry"]
image: "/assets/img/articles/spr-frequency-tuning-grating-geometry.svg"
featured: false
journal: "IEEE Transactions on Electron Devices"
source_year: 2023
doi: "10.1109/TED.2022.3208846"
source_url: "https://doi.org/10.1109/TED.2022.3208846"
source_paper: "Grating Optimization for Smith–Purcell Radiation: Direct Correlation Between Spatial Growth Rate and Starting Current"
source_authors: "Md Arifuzzaman Faisal and Peng Zhang"
publication_based: true
---
## The Smith–Purcell relation is only the beginning

The familiar Smith–Purcell relation connects radiation wavelength to the grating period, beam velocity and observation angle,

$
\lambda=\frac{L}{n}\left(\frac{1}{\beta}-\cos\theta\right).
$

It is an elegant and useful kinematic result. But a real Smith–Purcell oscillator is also a slow-wave electromagnetic structure, and the geometry of its grooves determines the dispersion of the surface mode that interacts with the electron beam.

That additional structure creates another tuning mechanism: the operating frequency can shift substantially when groove height or groove width changes, even if the period (L) and beam energy are unchanged.

## Finding the operating point from dispersion

The cold-tube dispersion relation describes the grating without the electron beam. For the surface-mode analysis used in our paper, the fields in the grooves are matched to Floquet harmonics outside the grating.

The beam contributes a straight line in the normalized dispersion plane,

$$
\bar\omega=\beta_0\bar k.
$$

For the 50-keV beam used in the study, $\beta_0=0.4126$. Where that beam line intersects the cold-tube surface-mode curve defines the evanescent-wave frequency $f_{ev}$. The radiated Smith–Purcell signal of interest occurs at the corresponding harmonic.

The important point is that the dispersion curve itself changes with groove geometry.

## What happens when the grooves become deeper or wider

Our parameter sweep varied groove height $h$ and width $w$ independently. As either dimension increased over the investigated range, the operating frequency generally decreased and the corresponding evanescent wavelength increased.

This behavior can be understood through the movement of the upper band edge. Increasing the groove dimensions makes the band edge lower and more rounded, so the same beam line intersects the dispersion at a lower frequency.

The result is a tuning capability that is absent from the simplest wavelength formula. Two gratings with the same period can therefore support different beam-synchronous operating frequencies because their groove dimensions reshape the slow-wave mode.

## Geometry can even change the wave character

An especially interesting feature appears in the group velocity,

$$
v_g=\frac{d\omega}{dk}.
$$

For most of the operating points studied, the slope of the cold dispersion curve at the beam intersection is negative, which is characteristic of backward-wave operation. But for some of the deeper-groove cases, approximately $h=120$–$200~\mu\mathrm{m}$ in the reported sweep, the slope becomes positive.

That means a purely geometric change can move the beam–grating interaction from backward-wave-like to forward-wave-like behavior without changing the beam energy or period.

This is a useful reminder that groove dimensions do more than make small frequency corrections. They can alter the qualitative electromagnetic character of the operating point.

## Why frequency tuning cannot be separated from starting current

The same geometry that shifts the cold-tube frequency also changes the hot-tube spatial growth rate. In our calculations, the largest growth occurred when the operating point approached the upper band edge. That creates a design tradeoff: a geometry may tune the radiation toward the desired frequency but provide weak gain, while another may provide excellent gain at a less useful frequency.

A practical optimization therefore uses the two dispersion problems together. First, cold-tube analysis maps (f_{ev}(h,w)). Then hot-tube analysis maps the spatial growth (-k_i(h,w)). The useful design region is the overlap between the desired frequency band and sufficiently strong growth.

## What this adds to THz source design

For compact free-electron THz sources, geometric tuning is attractive because it can be implemented at the structure level. Microfabrication can control groove dimensions with high precision, making geometry a natural parameter for device optimization.

The broader lesson is that the Smith–Purcell wavelength equation should not be treated as a complete device-design formula. It describes the radiation kinematics, while the slow-wave dispersion describes the actual beam-coupled mode. When both are considered, the device has more design freedom than the basic relation suggests.

That distinction becomes increasingly important when the goal is not simply to observe spontaneous radiation, but to build a coherent oscillator with a controlled operating frequency and a low threshold current.

## Source publication

**Grating Optimization for Smith–Purcell Radiation: Direct Correlation Between Spatial Growth Rate and Starting Current**  
Md Arifuzzaman Faisal and Peng Zhang  
*IEEE Transactions on Electron Devices* 70 (2023), 2860–2863  
DOI: [10.1109/TED.2022.3208846](https://doi.org/10.1109/TED.2022.3208846)
