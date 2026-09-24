---
title: "What Two-Color QE Maps Can Reveal About a Photocathode Surface"
date: 2026-09-10
category: "Electron Emission"
type: "Data Note"
summary: "Using spatially resolved quantum-efficiency measurements at two photon energies to separate intensity variation from threshold-sensitive surface changes."
featured: false
tags: [photocathode, quantum efficiency, photoemission]
---

## Quantum efficiency

For incident optical power (P), wavelength (lambda), and emitted photocurrent (I), the quantum efficiency is

$$
\mathrm{QE}
=
\frac{I/e}{P/(hc/\lambda)}
=
\frac{Ihc}{eP\lambda}.
$$

A spatial QE map therefore provides a direct picture of how efficiently different surface regions emit electrons.

## Why use two photon energies?

A single-wavelength map can mix several effects, including local optical intensity, transport, composition, and threshold changes.

With two wavelengths, one can form a ratio

$$
R(x,y)
=
\frac{\mathrm{QE}_{\lambda_1}(x,y)}
{\mathrm{QE}_{\lambda_2}(x,y)}.
$$

If the two photon energies sit at different distances above the local emission threshold, this ratio can become strongly sensitive to changes in the effective threshold energy.

## A useful analysis sequence

A compact workflow is:

1. register the two spatial maps,
2. mask low-signal pixels,
3. calculate the two-color ratio,
4. compare ratio with local QE,
5. infer whether the dominant variation is intensity-like or threshold-like,
6. compare spatial regions separately.

This sample note can later include measured maps, uncertainty propagation, and the full forward model.
