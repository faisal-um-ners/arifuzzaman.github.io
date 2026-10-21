---
title: "VEXPACE: An Open-Source GUI Particle-in-Cell Framework for Plasma and Vacuum Electronics"
date: 2026-10-21
category: "Computational Physics"
type: "Research Software Article"
summary: "A practical introduction to VEXPACE, an open-source Python particle-in-cell framework with a graphical model builder, electrostatic and electromagnetic solvers, refined electrostatic meshes, built-in diagnostics, and validation against theory and WarpX."
tags: ["VEXPACE", "particle-in-cell", "PIC simulation", "plasma simulation", "vacuum electronics", "GUI"]
image: "/assets/img/articles/vexpace-gui-model-builder.png"
image_alt: "VEXPACE graphical model builder for particle-in-cell simulation."
featured: true
featured_order: 1
software_name: "VEXPACE"
software_version: "1.3.0"
software_doi: "10.5281/zenodo.23512470"
software_url: "https://github.com/faisal-um-ners/VEXPACE"
publication_based: false
---

## What is VEXPACE?

**VEXPACE** stands for **Virtual Experiments in Plasma and Computational Electrodynamics**. It is an open-source particle-in-cell (PIC) simulation framework that I developed for research in **plasma physics, vacuum electronics, electron beams, space-charge-limited emission, and electromagnetic beam–wave systems**.

The goal is to make PIC modeling easier to build, inspect, and modify while keeping the numerical methods transparent enough for research use.

VEXPACE is written in Python with Numba-compiled kernels and provides three ways to work:

- a **graphical model builder**,
- a **command-line runner**,
- and a **Python API**.

The current project continues the code that was first released as **VEL-PIC v1.3.0**, but the software is now maintained under the VEXPACE name.

<a href="https://github.com/faisal-um-ners/VEXPACE" target="_blank" rel="noopener"><strong>Open VEXPACE on GitHub ↗</strong></a>

The software is also archived on Zenodo:

<a href="https://doi.org/10.5281/zenodo.23512470" target="_blank" rel="noopener"><strong>DOI: 10.5281/zenodo.23512470 ↗</strong></a>

<figure class="article-figure">
  <img src="/assets/img/articles/vexpace-gui-model-builder.png" alt="VEXPACE graphical model builder." loading="lazy">
  <figcaption><strong>Figure 1.</strong> VEXPACE model builder. Geometry, materials, emission models, applied fields, diagnostics, solver settings, and study controls can be configured from the graphical interface.</figcaption>
</figure>

## Why build another PIC code?

PIC codes are already widely used in plasma physics and vacuum electronics. The difficulty is often not the basic physics, but the complete workflow around it.

A typical research problem may require the user to define:

- geometry,
- conductors and dielectrics,
- a mesh,
- particle species,
- emission boundaries,
- external electric or magnetic fields,
- field solvers,
- particle pushers,
- absorbing boundaries,
- probes,
- phase-space diagnostics,
- and parameter scans.

For a relatively small 1D or 2D research problem, setting up all of this can become more work than the physics question itself.

VEXPACE is intended for that regime: **small-to-medium research problems where direct control, visualization, reproducibility, and fast model iteration are valuable**.

## Three geometries in one framework

VEXPACE currently supports:

- **1D-Z** for planar one-dimensional problems,
- **2D-ZY** for Cartesian two-dimensional problems,
- **2D-RZ** for axisymmetric problems.

The electrostatic and electromagnetic solvers are available across these geometries with the appropriate numerical formulation.

For electrostatic problems, VEXPACE uses finite elements based on **scikit-fem**.

For electromagnetic problems, it uses a **Yee FDTD** solver with charge-conserving current deposition.

This makes it possible to move from a simple Child–Langmuir diode to an axisymmetric beam problem or an electromagnetic magnetron model without changing software.

## The GUI is a model builder, not just a viewer

The graphical interface is one of the main reasons VEXPACE exists.

Instead of only editing a long input file, a user can build the simulation by adding geometry objects and assigning physical roles to them.

Supported objects include rectangles, circles, ellipses, annuli, polygons, and implicit shapes. These can represent:

- conductors,
- dielectrics,
- absorbers,
- resistive loads,
- or vacuum.

Conductors can use prescribed or time-dependent potentials, and emission can be attached to segments or conductor surfaces.

The interface also exposes solver settings, applied fields, diagnostics, and study controls in the same workflow.

For new users, this makes it much easier to understand what is actually being simulated.

## A useful feature for small emitters: graded electrostatic meshes

One problem that motivated the code is the simulation of **small emission areas**.

If an emitter is much smaller than the full diode, a uniform mesh must use the emitter-scale resolution everywhere. That can make a simple two-dimensional problem unnecessarily expensive.

For electrostatic VEXPACE simulations, the finite-element solver supports **graded mesh refinement** near the emitter and electrode surfaces.

<figure class="article-figure">
  <img src="/assets/img/articles/vexpace-mesh-refinement.png" alt="VEXPACE graded mesh refinement for a small emitter compared with a uniform mesh." loading="lazy">
  <figcaption><strong>Figure 2.</strong> Example of graded electrostatic mesh refinement for a small emitter. Resolution is concentrated near the emitter and cathode while the cells grow away from the region where the field varies most strongly.</figcaption>
</figure>

In the strip-emitter example included in the repository, the graded mesh contains **15,972 cells**. Using the same finest resolution uniformly over the whole domain would require about **256,000 cells**, or roughly 16 times more.

For the corresponding disk example, the uniform-grid requirement is about nine times larger.

This local refinement is deliberately limited to **electrostatic simulations**. Electromagnetic VEXPACE runs use uniform Yee meshes because the explicit FDTD update, charge-conserving deposition, and numerical dispersion depend on the regular staggered grid.

## Emission physics is built into the model

VEXPACE includes several emission models commonly needed in vacuum-electronic simulations:

- **space-charge-limited emission** based on Gauss's law,
- **Fowler–Nordheim field emission**,
- **thermionic emission** using Richardson–Dushman with Schottky lowering,
- **photoemission**,
- **prescribed beam injection**.

This is useful because emission is often the central physics of the problem rather than a secondary boundary condition.

A user can therefore study transitions between source-limited and space-charge-limited behavior, field emission, photo-driven injection, and over-injected virtual-cathode regimes in the same framework.

## Particle pushers and field models

The available relativistic particle pushers are:

- **Boris**,
- **Vay**,
- **Higuera–Cary**.

The code also provides energy-conserving and momentum-conserving field gathering options.

Applied-field models include uniform fields, analytic fields, coils, and solenoids.

For electromagnetic studies, VEXPACE also supports:

- laser antennas,
- plane waves,
- TEM ports,
- absorbing layers,
- and electrodes held at specified potentials.

This lets the same code span electrostatic beam transport and fully electromagnetic beam–wave problems.

## Example: formation of a virtual cathode

One of the included examples studies the limiting current from a small disk emitter.

Below the limiting current, the injected current is transmitted to the anode.

Above the limiting current, the potential minimum reaches the injected electron energy and a **virtual cathode** forms. Part of the beam then reflects back toward the emitter.

<figure class="article-figure">
  <img src="/assets/img/articles/vexpace-virtual-cathode-rz.png" alt="VEXPACE axisymmetric simulation showing virtual-cathode formation above the limiting current." loading="lazy">
  <figcaption><strong>Figure 3.</strong> Axisymmetric small-emitter simulation above the limiting current. The VEXPACE live monitor displays the potential minimum, particle phase space, particle distribution, and time evolution of the virtual-cathode behavior.</figcaption>
</figure>

For the small-emitter benchmark cases included in the repository, the steady limiting-current solver agrees with the corresponding published POISSON values to within about **0.25%**.

This example is useful because it combines several features at once: refined electrostatic meshing, surface emission, particle dynamics, phase-space diagnostics, and threshold behavior.

## Example: an electromagnetic planar magnetron

VEXPACE also includes a fully electromagnetic planar vane magnetron model.

The example uses a six-cavity planar geometry at 170 kV and 0.16 T. Space-charge-limited emission creates electron spokes in the crossed electric and magnetic fields, and the cavity field grows into the $pi$ mode.

The reported simulation saturates at about **35 MV/m** and oscillates near **5.70 GHz**, approximately 2.4% below the cold-test frequency.

<figure class="article-figure">
  <img src="/assets/img/articles/vexpace-magnetron-live-monitor.png" alt="VEXPACE live monitor for a planar electromagnetic magnetron simulation." loading="lazy">
  <figcaption><strong>Figure 4.</strong> Electromagnetic planar-magnetron simulation in the VEXPACE live monitor. The interface shows the cavity field, phase space, electron spokes, and a time-dependent cavity probe.</figcaption>
</figure>

This type of problem is where the GUI becomes especially useful: the geometry, emitting cathode, field evolution, particles, phase space, and probe history can be inspected together.

## Diagnostics are part of the workflow

VEXPACE includes built-in diagnostics for:

- electrode currents,
- point probes,
- line probes,
- minimum, maximum, and average values along a line,
- Poynting power,
- field snapshots,
- particle snapshots,
- phase space,
- spectra,
- beam envelope,
- emittance,
- and animations.

A live monitor is available during the run, while post-processing tools can be used after completion.

For research, this matters because a simulation should be inspected continuously rather than treated as a black box that produces only a final number.

## Validation is a core part of the project

The current repository includes **107 validation checks** against analytical theory, published results, and direct comparisons with WarpX.

The validation suite covers problems such as:

- Poisson convergence in 1D, ZY, and RZ,
- Child–Langmuir flow,
- two-dimensional strip and disk emitters,
- Langmuir–Blodgett coaxial flow,
- plasma oscillation,
- two-stream instability,
- beam–plasma instability,
- thermionic and Fowler–Nordheim emission,
- crossed-field cutoff,
- cavity eigenmodes,
- electromagnetic charge conservation,
- laser propagation in plasma,
- plasma wakefields,
- space-charge beam transport,
- Landau damping,
- Pierce-diode instability,
- magnetron operation,
- and small-emitter limiting current.

The code-to-code tests with WarpX include both electrostatic and electromagnetic problems.

For example, the repository reports approximately:

- **0.04%** difference in the 1D two-stream growth rate,
- **0.05% of the applied voltage** in the Pierce-diode potential comparison,
- **1.4%** maximum beam-edge difference in an RZ beam-expansion case,
- **0.06% of the linear wakefield scale** in the electromagnetic beam-driven wakefield comparison.

The particle pushers are also compared directly with WarpX, with trajectory differences reported in the range of roughly $10^{-8}$ to $10^{-15}$ of the path size for the tested cases.

The goal is not to claim that VEXPACE replaces WarpX. WarpX is a much larger high-performance code with capabilities such as adaptive mesh refinement and GPU-scale simulations.

Instead, the comparisons provide confidence that the numerical kernels agree where both codes solve the same problem.

## What can researchers use VEXPACE for?

The ready-to-run examples cover a broad range of problems, including:

- Child–Langmuir diodes,
- virtual cathodes,
- finite strip and disk emitters,
- coaxial diodes,
- thermionic emission,
- field emission,
- plasma oscillations,
- Landau damping,
- two-stream instability,
- beam–plasma instability,
- Pierce-diode instability,
- beam expansion,
- Brillouin focusing,
- dielectric charging,
- electrostatic lenses,
- crossed-field diodes,
- planar and relativistic magnetrons,
- laser–plasma interaction,
- and plasma wakefields.

The current release contains **33 ready-to-run examples**.

For a new user, starting from one of these examples is usually much easier than building a model from a blank project.

## Installation

Python 3.9 or newer is required.

```bash
git clone https://github.com/faisal-um-ners/VEXPACE.git
cd VEXPACE
pip install -e ".[gui]"
```

Then launch the graphical interface with

```bash
python -m picstudio gui
```

Installer scripts are also included for macOS, Linux, and Windows.

## Command-line and Python workflows

The GUI is optional.

A model can be run directly from the command line:

```bash
python -m picstudio run examples/child_langmuir_1d.pic.json
```

Parameter sweeps can be launched with

```bash
python -m picstudio sweep examples/thermionic_diode_1d.pic.json
```

MPI execution is also available:

```bash
mpiexec -n 4 python -m picstudio run model.pic.json --mode mpi
```

The underlying Python package remains `picstudio`, so models can also be loaded, modified, and run programmatically.

## Open source and citable

VEXPACE is released under the **BSD 3-Clause License**.

The permanent Zenodo concept DOI is

<a href="https://doi.org/10.5281/zenodo.23512470" target="_blank" rel="noopener"><strong>10.5281/zenodo.23512470 ↗</strong></a>.

The project citation is:

> **M. A. Faisal**, *VEXPACE: An Open-Source Particle-in-Cell Simulation Framework for Plasma and Vacuum Electronics*, Zenodo, 2026. DOI: 10.5281/zenodo.23512470.

The repository also contains a `CITATION.cff` file so citation metadata can be imported directly from GitHub.

## Where to start

The complete source code, examples, theory notes, validation report, and installation instructions are available here:

<a href="https://github.com/faisal-um-ners/VEXPACE" target="_blank" rel="noopener"><strong>VEXPACE GitHub repository ↗</strong></a>

For someone evaluating VEXPACE for a research problem, I recommend a simple path:

1. install the package,
2. launch the GUI,
3. open **File → Examples**,
4. run a validated case close to your problem,
5. then modify the geometry, emission model, fields, or diagnostics for your own study.

For 1D and 2D plasma or vacuum-electronics problems where transparent setup and rapid iteration are important, this is the workflow VEXPACE is designed to support.
