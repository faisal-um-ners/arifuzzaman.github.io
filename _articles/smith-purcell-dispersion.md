---
title: "Reading Smith-Purcell Dispersion from Beam-Wave Synchronism"
date: 2026-09-21
category: "Vacuum Electronics"
type: "Research Note"
summary: "A short guide to the synchronism condition, spatial harmonics, and why dispersion is central to Smith-Purcell beam-wave interaction."
featured: true
featured_order: 2
tags: [Smith-Purcell, dispersion, THz]
---

## Synchronism

For an electron beam traveling with velocity (v_b), the beam line is

$$
\omega = k_z v_b.
$$

A periodic slow-wave structure of period (p) supports spatial harmonics

$$
k_{z,n}=k_z+\frac{2\pi n}{p},
$$

where (n) is an integer harmonic index.

Strong interaction occurs when a beam harmonic approaches a structure mode,

$$
\omega \approx k_{z,n}v_b.
$$

## Connection to Smith-Purcell radiation

For radiation emitted at angle (	heta), a common form of the Smith-Purcell relation is

$$
\lambda = \frac{p}{|n|}
\left(
\frac{1}{\beta}-\cos\theta
\right),
$$

where

$$
\beta = \frac{v_b}{c}.
$$

The radiation condition is useful, but it does not by itself describe gain. For an oscillator or amplifier, the hot dispersion relation is needed to determine whether the coupled beam-structure mode grows.

## What to inspect in a dispersion diagram

A practical dispersion plot should show:

- cold structure modes,
- the electron beam line,
- relevant spatial harmonics,
- crossing or near-crossing regions,
- complex frequency or wavenumber when gain is included.

This page is intentionally a sample. It can later be expanded into an interactive dispersion generator under the Tools section.
