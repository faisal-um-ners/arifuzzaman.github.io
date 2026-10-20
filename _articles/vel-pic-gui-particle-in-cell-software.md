---
title: "VEL-PIC: A GUI-Based Particle-in-Cell Code for Vacuum Electronics, Electron Beams, and Plasma Simulation"
date: 2026-10-20
category: "Computational Physics"
type: "Research Software Article"
summary: "A practical introduction to VEL-PIC, an open-source Python particle-in-cell code with a graphical model builder, electrostatic and electromagnetic solvers, refined electrostatic meshes, built-in diagnostics, and validation against theory and WarpX."
tags: ["VEL-PIC", "particle-in-cell", "PIC simulation", "vacuum electronics", "plasma simulation", "GUI"]
image: "/assets/img/articles/vel-pic-gui-model-builder.png"
image_alt: "VEL-PIC graphical model builder for particle-in-cell simulation."
featured: true
featured_order: 1
software_name: "VEL-PIC"
software_version: "1.3.0"
software_doi: "10.5281/zenodo.23512470"
software_url: "https://github.com/faisal-um-ners/VEL-PIC"
publication_based: false
---

## What is VEL-PIC?

**VEL-PIC** — *Vacuum Electrodynamics and Laser Particle-in-Cell* — is an open-source particle-in-cell code that I developed for problems in **vacuum electronics, space-charge-limited emission, electron beams, plasmas, and laser–plasma interaction**.

The main goal is simple: make PIC simulation easier to build, inspect, and run without giving up the physics needed for serious research.

Many PIC codes are powerful but require users to work mainly through input files, scripts, or compiled workflows. VEL-PIC adds a **graphical model builder**, a live monitor, post-processing tools, command-line execution, parametric sweeps, and a Python API in one package.

<a href="https://github.com/faisal-um-ners/VEL-PIC" target="_blank" rel="noopener"><strong>Open VEL-PIC on GitHub ↗</strong></a>

The software is also archived on Zenodo:

<a href="https://doi.org/10.5281/zenodo.23512470" target="_blank" rel="noopener"><strong>DOI: 10.5281/zenodo.23512470 ↗</strong></a>

<figure class="article-figure">
  <img src="/assets/img/articles/vel-pic-gui-model-builder.png" alt="VEL-PIC graphical model builder." loading="lazy">
  <figcaption><strong>Figure 1.</strong> VEL-PIC model builder. Geometry, materials, boundaries, emission models, fields, diagnostics, and solver settings can be assembled from a graphical interface instead of editing a large input file by hand.</figcaption>
</figure>

## Why I built it

A recurring problem in vacuum-electronics and plasma simulations is that the physics may be conceptually simple while the numerical setup is not.

For example, a researcher may want to study:

- a Child–Langmuir diode,
- a small emitting strip or disk,
- a virtual cathode,
- a thermionic or field-emission diode,
- a Pierce diode instability,
- a beam–plasma instability,
- a crossed-field diode,
- a magnetron,
- a plasma wakefield,
- or a laser–plasma interaction.

The difficulty is often not writing down the governing equations. It is building the geometry, mesh, emission law, boundaries, diagnostics, particle pusher, and field solver correctly and then checking whether the result is numerically trustworthy.

VEL-PIC is intended to make that workflow more direct.

## What geometries and solvers are available?

VEL-PIC currently supports three geometries:

- **1D-Z** for planar one-dimensional problems,
- **2D-ZY** for Cartesian two-dimensional problems,
- **2D-RZ** for axisymmetric problems.

For electrostatic simulations, the code uses a finite-element Poisson solver based on **scikit-fem**.

For electromagnetic simulations, it uses a **Yee FDTD** solver with charge-conserving current deposition.

This allows the same software to cover both purely electrostatic space-charge problems and fully electromagnetic beam–wave problems.

## The GUI is the main workflow

The graphical interface is designed around a model-builder approach.

You can define geometry objects such as rectangles, circles, ellipses, annuli, polygons, and implicit shapes. These objects can then be assigned as conductors, dielectrics, absorbers, resistive loads, or vacuum regions.

The same interface is used to specify:

- electrode voltages,
- time-dependent potentials,
- emission regions,
- applied electric and magnetic fields,
- laser or wave sources,
- particle species,
- diagnostics,
- solver settings,
- and parameter sweeps.

Every major form is intended to explain what each input means, so the user does not need to memorize the internal model-file format before starting.

## One feature I use often: refined meshes for small emitters

Small emitting areas are a difficult case for uniform-grid PIC.

Suppose the emitting region is much smaller than the rest of the diode. A uniform grid must use the fine emitter-scale resolution everywhere, even in regions where that resolution is unnecessary.

For electrostatic VEL-PIC runs, the finite-element solver allows **graded mesh refinement** near the emitter and electrode surfaces.

<figure class="article-figure">
  <img src="/assets/img/articles/vel-pic-mesh-refinement.png" alt="Comparison of a graded finite-element mesh and a uniform mesh for a small emitter." loading="lazy">
  <figcaption><strong>Figure 2.</strong> Graded electrostatic mesh for a small emitter compared with the equivalent uniform-grid requirement. The local refinement concentrates resolution where the space-charge and surface-field physics require it.</figcaption>
</figure>

In one strip-emitter example, the graded electrostatic mesh uses **15,972 cells**, while using the same finest resolution everywhere would require about **256,000 cells** — roughly 16 times more.

This refinement is intentionally limited to the **electrostatic solver**. Electromagnetic VEL-PIC runs use a uniform Yee mesh because the explicit FDTD update, charge-conserving deposition, and numerical dispersion are tied to the uniform staggering.

## Emission models

VEL-PIC includes several emission models that are useful for vacuum-electronic devices:

- space-charge-limited emission based on Gauss's law,
- Fowler–Nordheim field emission,
- thermionic Richardson–Dushman emission with Schottky lowering,
- photoemission,
- prescribed beam injection.

Emission can be applied from a segment or from the surface of a conductor object.

That makes the code useful for studying both classical space-charge-limited diodes and more complicated emission-driven devices.

## Particle pushers and fields

The available relativistic particle pushers include:

- **Boris**,
- **Vay**,
- **Higuera–Cary**.

VEL-PIC also supports applied fields such as uniform magnetic fields, analytic fields, coils, and solenoids.

For electromagnetic simulations, the code includes laser antennas, plane waves, TEM ports, absorbing layers, and held electrode potentials.

This gives one framework for moving from an electrostatic diode problem to beam transport or a full beam–wave device.

## Diagnostics are built into the simulation

The GUI includes a live monitor so a user can see what the simulation is doing while it runs.

Available diagnostics include:

- electrode currents,
- point probes,
- line probes,
- potential and field profiles,
- particle and phase-space snapshots,
- spectra,
- Poynting power,
- beam envelope,
- emittance,
- and animations.

For research work, this is useful because numerical problems are often easier to recognize visually than from a final output file.

## Example: a virtual cathode from a small emitter

One benchmark studies the limiting current of a small disk emitter.

Below the limiting current, the complete beam reaches the anode and the potential minimum remains above the reflection threshold.

Above the limiting current, the potential minimum reaches the injected electron energy, a **virtual cathode** forms, and part of the beam is reflected.

<figure class="article-figure">
  <img src="/assets/img/articles/vel-pic-virtual-cathode-rz.png" alt="VEL-PIC live monitor showing a disk emitter above the limiting current and virtual-cathode formation." loading="lazy">
  <figcaption><strong>Figure 3.</strong> Axisymmetric small-emitter simulation above the limiting current. The GUI shows the potential minimum, particle phase space, particles in the diode, and the oscillatory virtual-cathode behavior.</figcaption>
</figure>

The steady limiting-current solver included in VEL-PIC agrees with the reported POISSON values for the corresponding small-emitter problem to within about **0.25%** for the benchmark cases included in the repository.

## Example: a planar magnetron

VEL-PIC is not restricted to electrostatic diodes.

The repository includes a two-dimensional electromagnetic planar vane magnetron example. In this case, space-charge-limited electrons are emitted into a crossed electric and magnetic field, form spokes, and interact with the cavity mode.

<figure class="article-figure">
  <img src="/assets/img/articles/vel-pic-magnetron-live-monitor.png" alt="VEL-PIC live monitor showing a planar vane magnetron simulation." loading="lazy">
  <figcaption><strong>Figure 4.</strong> Electromagnetic planar-magnetron simulation in the VEL-PIC live monitor, showing the cavity field, phase space, electron spokes, and time-dependent field probe.</figcaption>
</figure>

The example demonstrates why I wanted the same environment to support both particles and electromagnetic field evolution: a user can build the device, inspect the mode evolution, watch phase space, and extract the cavity signal without moving between different programs.

## Validation matters more than the GUI

A convenient interface is useful only if the numerical physics is credible.

The current VEL-PIC repository contains a validation suite of **107 checks** against analytical theory, published results, and direct code-to-code comparisons with WarpX.

Examples include:

- second-order Poisson convergence in 1D, ZY, and RZ,
- planar and relativistic Child–Langmuir flow,
- two-dimensional strip and disk emitters,
- Langmuir–Blodgett coaxial flow,
- plasma oscillation,
- two-stream and beam–plasma instability growth,
- Landau damping,
- cavity eigenmodes,
- charge conservation,
- laser propagation in plasma,
- plasma wakefields,
- Pierce-diode instability,
- crossed-field diode thresholds,
- magnetron frequencies,
- small-emitter limiting current,
- and particle-pusher comparisons with WarpX.

Several direct WarpX comparisons are especially useful. The repository reports, for example, about **0.04%** difference in the two-stream growth rate, about **0.05% of the applied voltage** for the Pierce-diode potential profile, and about **0.06% of the linear wakefield scale** for a one-dimensional electromagnetic beam-driven wakefield comparison.

The point of these tests is not that VEL-PIC replaces WarpX. WarpX is a much larger high-performance code with AMR, GPU support, and capabilities beyond VEL-PIC. The purpose is to verify that the numerical kernels agree closely where the two codes solve the same problem.

## Where VEL-PIC is useful

VEL-PIC is particularly convenient for researchers or students who want to study:

- space-charge-limited electron flow,
- finite-emitter effects,
- virtual cathodes,
- vacuum diodes,
- thermionic and field emission,
- beam instabilities,
- plasma oscillations,
- beam transport,
- electrostatic lenses,
- crossed-field devices,
- magnetrons,
- electromagnetic cavities,
- laser–plasma interaction,
- and plasma wakefields.

It can also be useful for teaching because the GUI lets students see the geometry, particles, potential, fields, phase space, and diagnostics together.

## What VEL-PIC is not trying to replace

VEL-PIC is intentionally a smaller research code.

For very large three-dimensional problems, GPU-scale simulations, adaptive electromagnetic mesh refinement, advanced collision physics, or production-scale accelerator modeling, a code such as WarpX is the more appropriate tool.

VEL-PIC is aimed at a different workflow: **1D and 2D problems where a transparent model, fast setup, direct visualization, and easy modification are important**.

That is particularly useful during early-stage modeling, benchmarking, parameter exploration, and research problems with specialized emission or small-emitter geometries.

## Installation

Python 3.9 or newer is required.

```bash
git clone https://github.com/faisal-um-ners/VEL-PIC.git
cd VEL-PIC
pip install -e ".[gui]"
```

Then launch the graphical interface with

```bash
python -m picstudio gui
```

The repository also provides installer scripts for macOS, Linux, and Windows.

## Running without the GUI

The GUI is optional. Models can also be executed from the command line:

```bash
python -m picstudio run examples/child_langmuir_1d.pic.json
```

Parameter sweeps are available with

```bash
python -m picstudio sweep examples/thermionic_diode_1d.pic.json
```

and MPI runs can be launched with

```bash
mpiexec -n 4 python -m picstudio run model.pic.json --mode mpi
```

VEL-PIC can also be controlled directly from Python through the `picstudio` API.

## Ready-to-run examples

The repository includes **33 ready-to-run examples** covering electrostatic and electromagnetic problems.

For a new user, I recommend beginning with one of these instead of creating a model from zero.

A useful progression is:

1. `child_langmuir_1d`,
2. `virtual_cathode_1d`,
3. a 2D strip or disk emitter,
4. `two_stream_1d` or `pierce_diode_1d`,
5. an RZ beam example,
6. then an electromagnetic case such as the planar magnetron or plasma wakefield.

This makes it easier to learn the model-builder workflow while comparing the output against a known case.

## Open source and citable

VEL-PIC is released under the **BSD 3-Clause License**.

The software is permanently archived on Zenodo, and the concept DOI covering all versions is

<a href="https://doi.org/10.5281/zenodo.23512470" target="_blank" rel="noopener"><strong>10.5281/zenodo.23512470 ↗</strong></a>.

If VEL-PIC contributes to published research, please cite:

> **M. A. Faisal**, *VEL-PIC: Vacuum Electrodynamics and Laser Particle-in-Cell code*, Zenodo, 2026. DOI: 10.5281/zenodo.23512470.

The repository also contains a `CITATION.cff` file, so GitHub can generate citation formats automatically.

## Try VEL-PIC

The complete source code, examples, documentation, numerical-method notes, and validation report are available here:

<a href="https://github.com/faisal-um-ners/VEL-PIC" target="_blank" rel="noopener"><strong>VEL-PIC GitHub repository ↗</strong></a>

For researchers working on vacuum-electronic devices or plasma problems that fit a 1D or 2D model, the easiest way to evaluate the software is to install it, open **File → Examples** in the GUI, and run one of the validated cases before modifying it for your own problem.
