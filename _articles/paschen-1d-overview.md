---
title: "PASCHEN-1D: A Flexible 1D Solver for Breakdown and Gas Discharges"
date: 2026-09-12
category: "Plasma & Discharge Physics"
type: "Publication-based Research Article"
summary: "An introduction to the PASCHEN-1D framework for fluid plasma transport, electrode emission, and external-circuit coupling."
tags: ["PASCHEN-1D", "gas discharge", "plasma breakdown", "fluid model"]
image: "/assets/img/articles/paschen-1d-overview.svg"
featured: true
featured_order: 5
journal: "Computer Physics Communications"
source_year: 2026
doi: "10.1016/j.cpc.2026.110404"
source_url: "https://doi.org/10.1016/j.cpc.2026.110404"
source_paper: "PASCHEN-1D: A one-dimensional fluid plasma solver with multi-mechanism surface emission and flexible external circuit coupling"
source_authors: "Asif Iqbal, Yves Heri, Bingqing Wang, Lan Jin, Md Arifuzzaman Faisal, and Peng Zhang"
publication_based: true
---

> **Project credit.** This article is based on the published PASCHEN-1D work led by **Asif Iqbal**, with **Prof. Peng Zhang** as corresponding author. I am happy to have contributed to this project as a coauthor.

## Why build another discharge solver?

Gas breakdown looks simple in a textbook sketch: apply a voltage across a gap, accelerate a few electrons, create ionization, and wait for the plasma to grow. In a real discharge, several pieces of physics evolve together. Charged particles drift and diffuse, the space charge reshapes the electric field, electrodes emit new electrons, dielectrics can charge, and the external circuit changes the voltage seen by the plasma.

PASCHEN-1D was developed to place those ingredients inside one transparent, configurable framework.

The solver is intentionally one-dimensional. That restriction keeps the model efficient enough for parameter scans and long transient calculations while preserving the self-consistent axial coupling that controls many planar breakdown and glow-discharge problems.

## The fluid core

The code advances electron and positive-ion densities using continuity equations,

$$
\frac{\partial n_s}{\partial t}
+
\frac{\partial \Gamma_s}{\partial x}
=
S_s,
\qquad s\in\{e,i\}.
$$

Here, $n_s$ is the species density, $\Gamma_s$ is its particle flux, and $S_s$ represents local production or loss such as ionization and effective electron-ion recombination.

The fluxes are written in drift-diffusion form. Physically, the electric field drives directed motion while collisions produce diffusion.

The densities feed Poisson's equation,

$$
\frac{\partial^2 \phi}{\partial x^2}
=
-\frac{\rho}{\epsilon_0},
$$

and the electric field follows from

$$
E=-\frac{\partial \phi}{\partial x}.
$$

This closes the feedback loop: densities create charge, charge modifies the field, and the field changes the next transport step.

## Numerical method matters during breakdown

Breakdown can move quickly across space and time, so the numerical scheme must remain stable while steep gradients develop.

PASCHEN-1D uses a finite-volume formulation with Kurganov-Tadmor numerical fluxes and slope limiting for convective transport. Diffusion and source terms are included in the update, and the electrostatic potential is obtained from a tridiagonal Poisson solve.

The reported implementation uses fourth-order Runge-Kutta time advancement for plasma transport. When the requested time step is too large for explicit drift or diffusion stability, adaptive substepping divides it into smaller transport updates.

The code monitors both a drift-CFL measure and a diffusion-stability measure. This is important because the limiting process can change during a discharge as density and electric field evolve.

## The boundaries are part of the plasma physics

Electrode boundaries are not treated as passive endpoints.

PASCHEN-1D allows zero-density, drift-closure, and emission-aware boundary conditions. The emission framework can inject electrons through several physical mechanisms, including secondary emission, field emission, thermionic emission, and pulsed photoemission.

That matters because in many breakdown problems the source of the next generation of electrons is the electrode itself.

The field used by those boundary conditions is coupled to the Poisson solution. When necessary, Picard iterations repeat the boundary-field update until the electrostatic solution converges.

## A plasma can also be a circuit element

The voltage across a discharge is rarely independent of the current flowing through it. PASCHEN-1D therefore couples the plasma to external lumped-element networks.

The plasma contributes transport current and geometric displacement current. The external circuit updates the electrode voltage, which is then imposed as the Poisson boundary condition for the next plasma step.

This makes it possible to represent resistive, capacitive, inductive, dielectric, and resonant drive conditions without rewriting the plasma solver.

## What the code is designed for

The published validation suite spans nanosecond pulsed dielectric-barrier discharges, DC Townsend-to-glow transitions, Paschen curves in argon and nitrogen, and strongly transient photoemission-driven plasmas.

The solver is written in Python, with notebook-based diagnostics for temporal traces, spatial snapshots, and averaged profiles. Optional Numba acceleration compiles the transport hot loops and reduces runtime for stiff cases.

The current release is deliberately focused. It uses one spatial dimension, a minimal chemistry with one positive-ion species, and local-field or user-defined electron kinetics. Those choices make the model interpretable and efficient, while also defining the regimes in which higher-dimensional, multispecies, nonlocal, or kinetic models would be more appropriate.

The value of PASCHEN-1D is therefore not that it replaces every plasma model. It is that transport, fields, surfaces, and circuits are evolved together inside one reproducible tool.
