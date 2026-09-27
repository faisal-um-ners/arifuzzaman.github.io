---
title: "PASCHEN-1D: An Open 1D Plasma Discharge Solver for Research"
date: 2026-09-27
category: "Plasma Physics"
type: "Publication-based Research Article"
summary: "A simple guide to PASCHEN-1D, a one-dimensional plasma discharge solver for gas breakdown, surface emission, plasma–circuit coupling, and time-dependent discharge simulations."
tags: ["PASCHEN-1D", "plasma simulation", "gas breakdown", "plasma software"]
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

> **Project credit.** PASCHEN-1D was led by **Dr. Asif Iqbal**, with **Prof. Peng Zhang** as corresponding author. The other coauthors are **Yves Heri, Bingqing Wang, Lan Jin, and Md Arifuzzaman Faisal**. I am happy to have been part of this project and to have contributed as a coauthor.

## What is PASCHEN-1D?

**PASCHEN-1D** is a one-dimensional plasma-discharge simulation code for researchers studying gas breakdown, discharge evolution, electrode emission, and plasma–circuit interaction.

The code combines four important pieces of physics:

$$
\text{charged-particle transport}
+
\text{electric field}
+
\text{surface emission}
+
\text{external circuit}.
$$

Instead of building these models separately, PASCHEN-1D solves them together in one framework.

This makes the software useful for researchers who need a physics-based 1D discharge model but do not want to build a complete solver from the beginning.

## Official PASCHEN-1D resources

The official project information is provided by the **Plasma, Beams, and Interface Science Group at the University of Michigan**:

<a href="https://pbi.engin.umich.edu/tools-and-resources/" target="_blank" rel="noopener"><strong>Official PASCHEN-1D page — University of Michigan PBI Group ↗</strong></a>

The source code, example configurations, notebooks, documentation, and releases are available on GitHub:

<a href="https://github.com/pbis-umich/PASCHEN-1D" target="_blank" rel="noopener"><strong>PASCHEN-1D source code on GitHub ↗</strong></a>

If you are planning to use PASCHEN-1D in research, I recommend starting with these two links.

## What can PASCHEN-1D simulate?

PASCHEN-1D is designed for plasma problems where the dominant variation can be represented along one spatial direction, for example between two planar electrodes.

It can be used to study:

- **gas breakdown**;
- **DC plasma discharges**;
- **pulsed discharges**;
- **Townsend and glow-discharge behavior**;
- **photoemission-driven discharges**;
- **secondary-electron-emission effects**;
- **field-emission and thermionic-emission effects**;
- **plasma–surface interaction**;
- **plasma connected to external electrical circuits**;
- effects of **dielectric layers** near electrodes;
- parameter scans over voltage, pressure, gap length, emission parameters, transport models, or circuit components.

The code is especially useful when many cases must be simulated and a full 2D or 3D model would be unnecessarily expensive.

## What physics does the solver use?

The main plasma model is a **one-dimensional drift–diffusion–Poisson system**.

The charged-particle densities evolve through continuity equations of the form

$$
\frac{\partial n_s}{\partial t}
+
\frac{\partial \Gamma_s}{\partial x}
=
S_s,
$$

where $n_s$ is the density of species $s$, $\Gamma_s$ is its flux, and $S_s$ represents sources or losses.

The electric potential is obtained self-consistently from Poisson's equation,

$$
\frac{d^2\phi}{dx^2}
=
-\frac{\rho}{\epsilon_0},
$$

and the electric field follows from

$$
E=-\frac{d\phi}{dx}.
$$

So the plasma changes the electric field, and the electric field changes the motion and production of charged particles.

That feedback is essential in breakdown and discharge simulations.

## Surface emission is included

Electrode emission can strongly influence whether a discharge starts and how it evolves.

PASCHEN-1D includes several surface-emission options, including:

- secondary electron emission;
- field emission;
- thermionic / Richardson–Dushman emission;
- prescribed current-density emission;
- pulsed photoemission models.

This is useful for researchers studying systems where the electrode is an active part of the plasma physics.

For example, a laser-driven discharge can require photoemission, while a high-field microgap may require field emission.

## Plasma and external circuits can interact

In a real experiment, the voltage across a plasma is not always identical to the voltage produced by the source.

The plasma current interacts with resistors, capacitors, inductors, dielectric layers, and other circuit elements.

PASCHEN-1D includes configurable circuit coupling so that

$$
\text{plasma dynamics}
\longleftrightarrow
\text{circuit dynamics}.
$$

The GitHub version includes explicit, implicit, and modified-nodal-analysis-based circuit options, together with configurable lumped-circuit topologies.

This makes PASCHEN-1D useful for problems where the electrical network is part of the discharge physics rather than just an imposed boundary condition.

## What results can you obtain?

A PASCHEN-1D simulation can provide quantities such as:

- electron density $n_e(x,t)$;
- ion density $n_i(x,t)$;
- electric potential $\phi(x,t)$;
- electric field $E(x,t)$;
- discharge current;
- applied and gap voltages;
- electron and ion fluxes;
- ionization quantities;
- electron and ion transport coefficients;
- time histories of plasma and circuit quantities;
- spatial profiles at selected times;
- time- or cycle-averaged profiles;
- derived sheath diagnostics.

The repository provides separate Jupyter notebooks for temporal plots, spatial snapshots, and averaged quantities.

## Transport data and local-field models

PASCHEN-1D can use user-defined transport and ionization models or table-based local-field data.

The current code supports local-field electron kinetics using transport and ionization tables, including BOLSIG+-style swarm-output data.

Ion transport can also be configured using tabulated mobility and diffusion data.

This allows researchers to replace simple analytic transport expressions with data appropriate to the gas and discharge conditions being studied.

## Example cases are already included

The GitHub repository includes ready-to-run configuration examples for several discharge problems, including cases based on:

- argon;
- nitrogen;
- deuterium;
- helium.

This is useful for a new user because you do not need to begin from an empty input file.

Start with a supplied case, run it successfully, and then modify the geometry, gas properties, voltage waveform, emission model, transport data, or circuit for your own research problem.

## How to start using PASCHEN-1D

A simple workflow is:

1. Visit the <a href="https://pbi.engin.umich.edu/tools-and-resources/" target="_blank" rel="noopener">official University of Michigan PBI tools page ↗</a>.
2. Download or clone the <a href="https://github.com/pbis-umich/PASCHEN-1D" target="_blank" rel="noopener">PASCHEN-1D GitHub repository ↗</a>.
3. Install the Python dependencies described in the repository.
4. Open `run_paschen_1d.ipynb`.
5. Select one of the supplied configuration modules.
6. Run the simulation.
7. Use the diagnostics notebooks to inspect the results.
8. Modify the configuration for your own research case.

The repository also provides a command-line runner for users who prefer to run cases without Jupyter.

## Who may find PASCHEN-1D useful?

PASCHEN-1D can be useful for students and researchers working in:

- low-temperature plasma physics;
- gas discharge physics;
- electrical breakdown;
- plasma–surface interaction;
- electron emission;
- laser-driven photoemission and plasma formation;
- pulsed-power systems;
- microgap discharges;
- plasma electronics;
- plasma–circuit coupling;
- computational plasma physics.

It is particularly attractive when the important physics is approximately one-dimensional and when researchers want to perform many parameter scans efficiently.

## When should you use a different model?

PASCHEN-1D is a fluid, one-dimensional model.

A different simulation approach may be more appropriate when your problem requires:

- strongly two- or three-dimensional geometry;
- kinetic electron distribution functions that cannot be represented adequately through the available closures;
- detailed particle kinetics requiring PIC or Monte Carlo methods;
- multidimensional magnetic-field effects.

The advantage of PASCHEN-1D is not that it replaces every plasma code. Its advantage is that it provides a relatively lightweight, configurable framework for a broad class of **1D discharge problems**.

## Code availability and license

PASCHEN-1D is publicly available for research use through GitHub:

<a href="https://github.com/pbis-umich/PASCHEN-1D" target="_blank" rel="noopener">https://github.com/pbis-umich/PASCHEN-1D ↗</a>

The repository currently identifies the software license as **CC BY-NC 4.0**. This permits reuse under the license conditions but restricts commercial use. Always check the current repository license before using, modifying, or redistributing the software.

The repository also includes a `CITATION.cff` file so the software citation can be imported directly from GitHub.

## Please cite the PASCHEN-1D publication

If you use PASCHEN-1D in research, please cite the associated paper:

**A. Iqbal, Y. Heri, B. Wang, L. Jin, M. A. Faisal, and P. Zhang**,  
“PASCHEN-1D: A one-dimensional fluid plasma solver with multi-mechanism surface emission and flexible external circuit coupling,”  
*Computer Physics Communications*, 2026.  
<a href="https://doi.org/10.1016/j.cpc.2026.110404" target="_blank" rel="noopener">DOI: 10.1016/j.cpc.2026.110404 ↗</a>

## One software package, many discharge problems

For someone beginning a related research project, the main value of PASCHEN-1D is simple:

> **You can start from an existing, documented plasma solver and concentrate on your physical problem instead of first writing an entire discharge code.**

If your system can be represented reasonably well in one dimension and involves gas breakdown, transport, electrode emission, or external-circuit coupling, PASCHEN-1D is worth exploring.

Start from the <a href="https://pbi.engin.umich.edu/tools-and-resources/" target="_blank" rel="noopener"><strong>official PBI project page ↗</strong></a> and the <a href="https://github.com/pbis-umich/PASCHEN-1D" target="_blank" rel="noopener"><strong>GitHub repository ↗</strong></a>.
