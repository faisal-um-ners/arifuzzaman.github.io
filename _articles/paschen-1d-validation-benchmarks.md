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

## A solver is only useful if its physics survives comparison

A plasma code can contain elegant equations and still produce misleading results if the discretization, boundary conditions, or coupled models are implemented incorrectly.

PASCHEN-1D was therefore tested against several benchmark problems spanning very different discharge regimes.

The goal was not to tune one case until it looked right. The published validation uses parameters reported in the reference studies and compares whether the solver reproduces the expected breakdown thresholds, transient behavior, dielectric screening, glow transitions, and Paschen trends.

## Nanosecond pulsed discharges test fast transport and dielectric response

A nanosecond dielectric-barrier discharge forces the solver to handle rapid field evolution, plasma formation, and dielectric charging within the same transient.

During the pulse, electron and ion densities change rapidly. Charge deposited on dielectric surfaces alters the effective gas voltage, so the electric field can be screened even while the external source remains active.

This type of problem tests more than the drift-diffusion equations. It also probes the surface-charge and circuit coupling used to convert the externally applied voltage into the field actually seen by the gas.

## DC breakdown tests the transition from avalanche to sustained plasma

In a DC discharge, the pre-breakdown state is initially weakly conducting. As ionization increases, the current grows and the external circuit begins to matter.

The transition toward a glow discharge requires the code to capture the nonlinear relation among ionization, space charge, surface emission, and voltage redistribution.

PASCHEN-1D reproduces the reported Townsend-to-glow behavior and identifies breakdown through the evolving current-voltage characteristics, including the negative-differential-resistance behavior associated with the transition.

## Paschen curves test pressure-gap scaling

A particularly recognizable benchmark is the Paschen curve, which relates breakdown voltage to the product of gas pressure $p$ and electrode spacing $d$.

The classical form can be written schematically as

$$
V_b
=
\frac{
Bpd
}{
\ln(Apd)
-
\ln\!\left[
\ln\!\left(1+\frac{1}{\gamma}\right)
\right]
},
$$

where $A$ and $B$ characterize ionization behavior and $\gamma$ represents an effective secondary-emission coefficient.

PASCHEN-1D reconstructs Paschen behavior for argon and nitrogen by directly evolving the fluid discharge rather than inserting the closed-form law as the solution.

This is important because the simulation can show how the relative importance of ionization and secondary emission changes across the $pd$ range.

## Picosecond photoemission tests the opposite timescale

The validation suite also includes strongly transient photoemission-driven plasmas initiated by ultrafast optical emission.

Here, the injection physics begins on a picosecond time scale, while the plasma can continue evolving long afterward.

The photoemission pulse is precomputed on a fine temporal grid and embedded as a boundary source, allowing the discharge solver to follow the transition from ultrafast electron injection to collective plasma evolution.

This benchmark tests whether the framework can connect microscopic emission timing with macroscopic discharge dynamics.

## Numerical stability is monitored explicitly

The transport update monitors both drift and diffusion limits. The drift constraint is represented by a CFL-type number,

$$
\mathrm{CFL}_{\mathrm{drift}}
=
\max_x
\left(
\frac{|\mu_eE|\Delta t}{\Delta x},
\frac{|\mu_iE|\Delta t}{\Delta x}
\right),
$$

while explicit diffusion is tracked by

$$
\mathrm{CFL}_{\mathrm{diffusion}}
=
\max_x
\left(
\frac{D_e\Delta t}{\Delta x^2},
\frac{D_i\Delta t}{\Delta x^2}
\right).
$$

Adaptive substepping chooses enough internal steps to keep both measures below user-selected targets.

The paper also reports a convergence study under spatial and temporal refinement, helping separate physical results from discretization artifacts.

## Performance matters for parameter studies

Python makes the code accessible, but pure Python transport loops can become expensive in stiff discharge simulations.

PASCHEN-1D therefore includes an optional Numba backend for the computationally intensive transport operations.

For a representative 160 V argon glow-discharge simulation on the reported Apple M3 Pro setup, the median runtime decreased from 43.60 minutes with the NumPy backend to 15.83 minutes after JIT warm-up.

That corresponds to a reported speedup of approximately

$$
\frac{43.60}{15.83}\approx2.75.
$$

The Poisson solver, circuit update, diagnostics, and file I/O remain outside those compiled hot loops.

## What validation does — and does not — prove

Agreement across pulsed discharge, DC glow, Paschen scaling, and photoemission-driven cases gives confidence that the implemented transport-field-surface-circuit framework behaves consistently across a wide temporal range.

It does not mean that a one-dimensional fluid model is universally appropriate.

The published code currently uses one positive-ion species and local-field or user-defined electron kinetics. Problems dominated by nonlocal velocity distributions, complex chemistry, magnetic effects, or multidimensional structure may require more advanced models.

The validation therefore establishes a reliable operating envelope for the present solver while also making its limits explicit.
