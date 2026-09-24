---
title: "Identifying the π-Mode in a Ten-Vane Magnetron"
date: 2026-09-18
category: "Vacuum Electronics"
type: "Simulation Note"
summary: "A practical mode-identification note for a ten-vane magnetron using phase progression, field patterns, and FFT diagnostics."
featured: false
tags: [magnetron, PIC, eigenmode]
---

## Mode number

For a magnetron with (N) identical resonant cavities, the phase shift between adjacent cavities for azimuthal mode (m) is

$$
\Delta\phi = \frac{2\pi m}{N}.
$$

For the (pi)-mode,

$$
\Delta\phi = \pi.
$$

Therefore,

$$
m = \frac{N}{2}.
$$

For a ten-vane magnetron,

$$
m=5.
$$

Adjacent cavities should therefore oscillate approximately (180^\circ) out of phase.

## What an FFT alone cannot tell you

A strong spectral peak does not automatically prove that the (pi)-mode is present. Mode identification should combine:

1. resonant frequency,
2. azimuthal phase pattern,
3. electric- or magnetic-field eigenpattern,
4. time-domain growth,
5. cavity-to-cavity phase comparison.

## PIC diagnostic

If the electric field is sampled at equivalent points in adjacent cavities, a (pi)-mode should approximately satisfy

$$
E_{j+1}(t) \approx -E_j(t).
$$

For a self-consistent PIC simulation, this spatial phase test is often more reliable than selecting the highest FFT peak alone.
