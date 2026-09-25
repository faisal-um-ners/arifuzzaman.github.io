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

## Why the voltage across a plasma is not simply the source voltage

A discharge is often drawn as a voltage source connected directly across two electrodes. That picture hides an important feedback mechanism.

As plasma forms, it carries conduction current. Space charge changes the gap field. Dielectric layers can store charge. External resistors, capacitors, and inductors respond to the changing current. The voltage that actually appears across the gas therefore evolves dynamically.

PASCHEN-1D treats the plasma and external network as one coupled system rather than solving them independently.

## The plasma branch has two current contributions

The resolved charged-particle transport produces a conduction current, which can be written schematically as

$$
I_{\mathrm{transport}}
=
qA\left(\Gamma_i-\Gamma_e\right),
$$

where $A$ is the electrode area and $\Gamma_i$ and $\Gamma_e$ are the ion and electron number fluxes at the boundary with the appropriate sign convention.

The gap also behaves capacitively. For a planar gap of length $L$,

$$
C_{\mathrm{gap}}
=
\frac{\epsilon_0 A}{L}.
$$

The total branch current therefore includes a displacement contribution,

$$
I_{\mathrm{pl}}
=
I_{\mathrm{transport}}
+
C_{\mathrm{gap}}
\frac{dV_{\mathrm{gap}}}{dt}.
$$

This term is essential during fast transients, when the voltage can change substantially before the plasma reaches a quasi-steady conductive state.

## The external circuit responds to the plasma

The published framework supports selectable reduced lumped-element topologies and a more general modified-nodal-analysis backend.

For the full RLC example, the source drives a series branch containing $R_0$, $L_s$, and $C_s$. The series-current dynamics include

$$
\frac{dI_s}{dt}
=
\frac{
V_s(t)-R_0 I_s-V_{C_s}-V_n
}{
L_s
},
$$

while the series capacitor follows

$$
\frac{dV_{C_s}}{dt}
=
\frac{I_s}{C_s}.
$$

At the circuit node, Kirchhoff's current law distributes current among shunt elements and the plasma branch.

This means that a sudden increase in plasma conductivity can pull the node voltage down, which then weakens the gap field and changes the next plasma transport step.

## The coupling is bidirectional

The numerical loop is conceptually simple:

1. the plasma solver advances charged-particle transport;
2. the resulting plasma current is supplied to the circuit;
3. the circuit advances its state variables;
4. the updated gap voltage becomes the next Poisson boundary condition;
5. the new electric field changes the next plasma update.

That is a genuine two-way coupling. The circuit drives the plasma, but the plasma simultaneously drives the circuit.

For dielectric-covered electrodes, the model also maps between the external terminal voltage and the internal gas-gap voltage, allowing dielectric charging to participate in the feedback.

## Why this matters near breakdown

Before breakdown, the plasma current may be extremely small and most of the applied voltage can appear across the gap. Once ionization accelerates, the conductivity rises rapidly.

If a series resistor is present, the growing current increases the resistor drop and reduces $V_{\mathrm{gap}}$. That can arrest avalanche growth and guide the system toward a glow state.

With capacitors or inductors, the response can be delayed or oscillatory. The external network can therefore change the time at which breakdown occurs, the peak current, the voltage collapse, and the final discharge regime.

A simulation that prescribes the gap voltage independently of current cannot reproduce that feedback.

## Flexible time integration

PASCHEN-1D allows circuit variables to advance with explicit Euler, implicit Euler, or modified nodal analysis, depending on the selected network.

The circuit can be updated once per user time step or at the adaptive plasma substep level. That option matters when the transport solver automatically reduces its step because the drift-CFL or diffusion constraint becomes restrictive.

The coupling is therefore designed to remain synchronized even during strongly transient breakdown.

## A useful viewpoint: the plasma is a nonlinear dynamic load

Thinking of the discharge as a nonlinear load helps connect plasma physics to pulsed-power and RF-system design.

Its current-voltage response is not fixed. It changes as density, space charge, emission, and ionization evolve. Conversely, the external impedance controls how much of the source voltage the plasma actually receives.

PASCHEN-1D makes that feedback explicit, which is one reason the same framework can be used for DC breakdown, pulsed discharge, dielectric-barrier configurations, and more general externally driven plasma systems.
