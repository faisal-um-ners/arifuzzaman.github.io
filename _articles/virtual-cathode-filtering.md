---
title: "Virtual-Cathode Filtering of Arbitrary Electron Velocity Distributions"
date: 2026-09-24
category: "Plasma Physics"
type: "Research Note"
summary: "A compact kinetic view of space-charge-limited transport when an injected velocity distribution is filtered by a virtual cathode."
featured: true
featured_order: 1
tags: [space charge, virtual cathode, kinetic theory]
---

## Physical picture

Consider a one-dimensional collisionless diode with an injected electron distribution. When the injected current exceeds the transport capacity of the gap, a potential minimum can form inside the diode. Electrons with insufficient kinetic energy are reflected, while the higher-energy tail is transmitted.

For an injected kinetic energy (U_0) and a barrier energy (b),

$$
U_0 ge b
$$

is the transmission condition.

The transmitted fraction for a normalized injected distribution (P(U_0)) is

$$
T(b)=\int_b^\infty P(U_0)\,dU_0.
$$

If the injected current density is (J_0), then

$$
J_{\mathrm{tr}} = J_0 T(b),
$$

and

$$
J_{\mathrm{ref}} = J_0\left[1-T(b)\right].
$$

## Why the spectrum matters

A monoenergetic beam has a sharp reflection threshold. A broad distribution behaves differently because the barrier selectively removes the low-energy part of the spectrum. The space-charge-limited state is therefore not controlled only by a single injection velocity.

For a Maxwellian-like energy distribution, the transmitted current decreases continuously as the virtual-cathode barrier rises.

## Computational workflow

A useful numerical workflow is:

1. Choose (P(U_0)).
2. Guess the virtual-cathode barrier (b).
3. Compute the transmitted and reflected populations.
4. Solve Poisson's equation for the corresponding charge density.
5. Enforce the diode boundary conditions.
6. Iterate until the barrier and charge distribution are self-consistent.

This sample article can later be replaced with a complete derivation, simulation figures, and links to code or notebooks.
