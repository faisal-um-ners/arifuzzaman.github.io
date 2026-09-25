---
title: "Multi-Mechanism Surface Emission in PASCHEN-1D"
date: 2026-09-10
category: "Plasma Physics"
type: "Publication-based Research Article"
summary: "A look at secondary emission, field emission, thermionic emission, and pulsed photoemission in the solver."
tags: ["surface emission", "field emission", "thermionic emission", "photoemission"]
image: "/assets/img/articles/paschen-1d-surface-emission.svg"
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

## A discharge can begin at the surface

A gas discharge is usually described in terms of ionization inside the gas, but the electrode surface can determine whether that ionization becomes self-sustaining.

Electrons emitted from the cathode are accelerated by the local electric field. They collide with neutral gas molecules and create additional electrons and ions. The ions can then return to the cathode and trigger more emission.

In other devices, the dominant seed electrons may come from strong-field tunneling, a hot cathode, or an ultrafast laser pulse.

PASCHEN-1D treats these mechanisms as boundary electron fluxes rather than artificial volumetric sources.

## Multiple mechanisms can act at the same time

The total externally driven emission current density is assembled as

$$
J_{\mathrm{emit}}
=
\sum_k J_{\mathrm{emit}}^{(k)}.
$$

Each active model contributes its own physically defined current density.

This is useful because real electrodes do not always operate in a regime where one mechanism can be isolated perfectly. A surface may experience background thermionic emission while field enhancement produces tunneling and ion bombardment produces secondary electrons.

## Secondary electron emission closes the discharge loop

In gas breakdown, ion-induced secondary emission is often central to sustaining the avalanche.

Positive ions accelerated toward the cathode can release electrons when they strike the surface. Electron-induced secondary emission can also contribute under suitable conditions.

PASCHEN-1D includes secondary-emission boundary closures, including a Vaughan-type model for electron-induced emission. The effective electron temperature used by that model can be specified by the user or obtained from local-field interpolation of swarm-table mean electron energy.

That coupling lets the emission respond to the evolving plasma rather than remain a fixed injection rate.

## Field emission responds directly to the local electric field

For high surface fields, electrons can tunnel through the surface barrier.

PASCHEN-1D provides both Fowler-Nordheim and Murphy-Good descriptions. The Fowler-Nordheim model gives a computationally efficient tunneling law, while Murphy-Good includes the Schottky-Nordheim image-charge correction and a more accurate barrier shape.

Schematically, field-emission current has the strongly nonlinear form

$$
J_{\mathrm{FE}}
\sim
E_s^2
\exp\!\left(
-\frac{B\phi^{3/2}}{E_s}
\right),
$$

where $E_s$ is the local surface field, $\phi$ is the work function, and $B$ represents the usual Fowler-Nordheim constant grouping.

The exponential dependence means that a modest change in surface field can produce a very large change in emitted current.

## Thermionic emission adds temperature dependence

For a heated electrode, PASCHEN-1D includes the Richardson-Dushman model,

$$
J_{\mathrm{RD}}
=
A_R T^2
\exp\!\left(
-\frac{\phi}{k_B T}
\right).
$$

Here, $A_R$ is the Richardson constant, $T$ is the prescribed electrode temperature, $\phi$ is the work function, and $k_B$ is Boltzmann's constant.

The current implementation treats electrode temperature as a prescribed parameter rather than solving a separate thermal model.

## Photoemission introduces an ultrafast timescale

For laser-driven studies, the solver supports a pulsed photoemission model based on a quantum-mechanical emission calculation.

Because the laser pulse can be much shorter than the characteristic plasma evolution time, the emission waveform is first evaluated on a fine picosecond-scale time grid. During the plasma simulation, that precomputed current pulse is sampled or time-averaged over the plasma time step.

This preserves the short injection physics without forcing the expensive emission calculation to be repeated inside every plasma update.

## Why emission belongs inside the self-consistent loop

The emitted electrons change the plasma density. The new charge changes the electric field. That field changes field emission, particle impact energies, and subsequent secondary emission.

Emission is therefore not simply an external input. In many regimes it is part of the nonlinear feedback that determines whether breakdown starts, how quickly it develops, and which steady state is reached.

By treating surface emission as a configurable boundary process coupled to the same evolving field and circuit as the plasma, PASCHEN-1D can examine that feedback directly.

That is especially useful for comparing regimes in which the same gas discharge is triggered by very different microscopic sources of electrons.
