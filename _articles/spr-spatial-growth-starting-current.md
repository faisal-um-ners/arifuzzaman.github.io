---
title: "From Hot-Tube Dispersion to Starting Current in THz Smith–Purcell Radiation"
date: 2026-09-24
category: "Vacuum Electronics"
type: "Publication-based Research Article"
summary: "A step-by-step view of how beam dynamics enter the hot-tube dispersion relation, how complex wavenumber gives spatial growth, and why that growth predicts the starting current seen in PIC simulation."
tags: ["hot-tube dispersion", "spatial growth rate", "starting current", "PIC"]
image: "/assets/img/articles/spr-spatial-growth-starting-current.png"
featured: true
featured_order: 1
journal: "IEEE Transactions on Electron Devices"
source_year: 2023
doi: "10.1109/TED.2022.3208846"
source_url: "https://doi.org/10.1109/TED.2022.3208846"
source_paper: "Grating Optimization for Smith–Purcell Radiation: Direct Correlation Between Spatial Growth Rate and Starting Current"
source_authors: "Md Arifuzzaman Faisal and Peng Zhang"
publication_based: true
---

## Why starting current is really a growth problem

A coherent Smith–Purcell oscillator does not begin at full strength as soon as electrons pass over the grating.

First, the beam experiences a small electromagnetic modulation. That modulation changes the electron velocity. After some distance, the velocity modulation becomes density modulation, or **electron bunching**. Once the bunching is strong enough, the beam gives coherent energy to the electromagnetic mode and a large oscillation can build [1,3,4].

The minimum dc beam current required to reach this condition is called the **starting current**.

A direct way to find it is to run particle-in-cell (PIC) simulations at many beam currents and identify the threshold at which coherent radiation grows. That works, but it is computationally expensive.

Our published work showed that the same threshold trend can be predicted from the **spatial growth rate** obtained from the hot-tube dispersion relation [1].

To see why, it helps to derive the beam contribution step by step.

## Step 1: begin with Maxwell's equations

For a beam interacting with an electromagnetic slow-wave structure, the fields satisfy Maxwell's equations,

$$
\nabla\times\mathbf{E}
=
-\mu_0
\frac{\partial\mathbf{H}}{\partial t},
$$

and

$$
\nabla\times\mathbf{H}
=
\mathbf{J}
+
\epsilon_0
\frac{\partial\mathbf{E}}{\partial t}.
$$

The current density $\mathbf{J}$ now includes the electron-beam current.

The periodic metallic grating imposes spatial harmonics. Outside the grooves, the electromagnetic field can therefore be written as a Floquet expansion. For the $n$th harmonic,

$$
P_n
=
\bar{k}+2n\pi,
$$

where

$$
\bar{k}=kL.
$$

The corresponding transverse decay factor for the evanescent field is

$$
\gamma_n
=
\sqrt{P_n^2-\bar{\omega}^2},
$$

with

$$
\bar{\omega}
=
\frac{\omega L}{c}.
$$

These are the same basic normalized quantities used in the cold-tube relation [1,5].

## Step 2: describe the unperturbed electron beam

Consider a continuous electron beam with equilibrium density $n_0$ and axial velocity $v_0$.

The unperturbed current density is

$$
J_0
=
-e n_0 v_0.
$$

Now write the beam variables as a steady part plus a small ac perturbation,

$$
n
=
n_0+n_1,
$$

and

$$
v
=
v_0+v_1,
$$

where $|n_1|\ll n_0$ and $|v_1|\ll v_0$.

The purpose of the linear hot-tube model is to determine how these small perturbations couple back to the electromagnetic field. This small-signal beam response is the same general AC space-charge physics used throughout electron–circuit interaction theory [2].

## Step 3: use the beam continuity equation

Charge conservation gives the one-dimensional continuity equation,

$$
\frac{\partial n}{\partial t}
+
\frac{\partial(nv)}{\partial x}
=
0.
$$

Keeping only first-order perturbations gives

$$
\frac{\partial n_1}{\partial t}
+
v_0
\frac{\partial n_1}{\partial x}
+
n_0
\frac{\partial v_1}{\partial x}
=
0.
$$

Assume harmonic dependence

$$
e^{-j\omega t+jkx}.
$$

Then

$$
\frac{\partial}{\partial t}
\rightarrow
-j\omega,
\qquad
\frac{\partial}{\partial x}
\rightarrow
jk.
$$

The linearized continuity equation becomes

$$
-j(\omega-kv_0)n_1
+
jkn_0v_1
=
0.
$$

Therefore,

$$
n_1
=
\frac{k n_0}{\omega-kv_0}
v_1.
$$

This equation shows the synchronism directly. When $\omega\approx kv_0$, the density response becomes strong.

## Step 4: use the electron equation of motion

For the axial perturbation, the linearized electron equation of motion is

$$
m
\left(
\frac{\partial}{\partial t}
+
v_0
\frac{\partial}{\partial x}
\right)
v_1
=
-eE_1.
$$

Using the same harmonic dependence,

$$
-jm(\omega-kv_0)v_1
=
-eE_1.
$$

Thus,

$$
v_1
=
-\frac{j e}{m(\omega-kv_0)}
E_1.
$$

Substituting this into the continuity result gives

$$
n_1
=
-\frac{j e k n_0}
{m(\omega-kv_0)^2}
E_1.
$$

The perturbation current is

$$
J_1
=
-e(n_0v_1+v_0n_1).
$$

The important feature is the resonant denominator

$$
(\omega-kv_0)^2.
$$

This is the mathematical signature of strong beam–wave coupling near synchronism [6,8].

## Step 5: express the coupling through the beam plasma frequency

The beam plasma frequency is

$$
\omega_p
=
\sqrt{
\frac{e^2 n_0}
{m\epsilon_0}
}.
$$

In the thin-sheet beam model used in the published hot-tube relation, the beam thickness $\tau$ is included through an effective beam parameter,

$$
\omega_a^2
=
\omega_p^2\tau.
$$

Using the normalized quantity

$$
\bar{\omega}_a
=
\frac{\omega_a L^{1/2}}{c},
$$

the beam coupling for the $n$th spatial harmonic enters through the factor [1]

$$
\Psi_n
=
\frac{
\bar{\omega}_a^2\gamma_n
}{
\left(
\bar{\omega}-P_n\beta_0
\right)^2
},
$$

where

$$
\beta_0=\frac{v_0}{c}.
$$

Again, the denominator makes the physics clear. The beam response grows when a spatial harmonic approaches the beam synchronism condition

$$
\bar{\omega}
\approx
P_n\beta_0.
$$

## Step 6: include the beam–grating separation

The electron beam does not touch the grating. It travels a distance $a$ above the metallic surface.

Define

$$
\bar{A}
=
\frac{a}{L}.
$$

Because the relevant slow-wave field is evanescent, the coupling decreases as the beam is moved farther from the grating [1].

The beam modifies each Floquet harmonic through the factor

$$
U_n
=
\frac{
1-
\Psi_n
\cosh(\gamma_n\bar{A})
e^{-\gamma_n\bar{A}}
}{
1-
\Psi_n
\sinh(\gamma_n\bar{A})
e^{-\gamma_n\bar{A}}
}.
$$

This factor reduces to the cold-structure behavior when the beam coupling becomes negligible.

## Step 7: the final hot-tube dispersion relation

After the beam response is coupled to the electromagnetic boundary matching, the hot-tube dispersion relation used in the paper is [1]

$$
f(\bar{k},\bar{\omega})
\equiv
\frac{
\cot(\bar{\omega}\bar{H})
}{
\bar{\omega}\bar{H}
}
-
\sum_{n=-\infty}^{\infty}
U_n
\left(
\frac{\sin\theta_n}{\theta_n}
\right)^2
\frac{\bar{W}}
{\gamma_n\bar{H}}
=
0,
$$

where

$$
\bar{W}=\frac{w}{L},
\qquad
\bar{H}=\frac{h}{L},
$$

and

$$
\theta_n
=
\frac{P_n\bar{W}}{2}.
$$

The cold-tube relation has the same electromagnetic structure but does not contain the beam-coupling factor $U_n$ [1].

This is the main mathematical difference between the passive grating and the beam-loaded grating.

## Step 8: solve for a complex wavenumber

For a chosen real operating frequency, the hot-tube equation is solved for a complex wavenumber,

$$
k
=
k_r+jk_i.
$$

With the field dependence

$$
E
\propto
e^{-j\omega t+jkx},
$$

we obtain

$$
E
\propto
e^{-j\omega t}
e^{jk_r x}
e^{-k_i x}.
$$

Therefore,

- $k_i>0$ gives spatial decay;
- $k_i<0$ gives spatial growth.

The spatial growth rate is

$$
g_s=-k_i.
$$

For one example in the paper,

$$
w=60~\mu\mathrm{m},
\qquad
h=40~\mu\mathrm{m},
$$

and the hot-tube root gives a normalized imaginary component of approximately

$$
\bar{k}_i=-0.041.
$$

The negative sign means that this root represents a growing wave [1].

## Why the hot-tube real part is slightly shifted

The real part $k_r$ from the hot-tube calculation is not exactly the same as the cold-tube intersection.

The electron beam loads the structure and slightly detunes the mode [1,8].

That shift is expected in beam–wave devices. More important for starting-current optimization is the behavior of $k_i$, because it tells us how rapidly the wave amplitude grows along the interaction length.

## Where the maximum growth occurs

The paper swept groove geometry while keeping the other parameters fixed.

For the fixed-width sweep,

$$
w=60~\mu\mathrm{m},
$$

the largest spatial growth occurs near

$$
h\approx100\text{–}120~\mu\mathrm{m}.
$$

For the fixed-height sweep,

$$
h=100~\mu\mathrm{m},
$$

the maximum appears near

$$
w\approx80~\mu\mathrm{m}.
$$

These points are close to the upper band edge of the cold-tube dispersion curve [1].

Band-edge operation is known to be sensitive to absolute and convective instabilities, which helps explain why strong growth appears there [7].

## PIC simulation provides the independent threshold test

The key result in the paper is the comparison with PIC starting currents.

The PIC simulations used a 35-period grating and the same basic beam and grating parameters [1,3].

For each geometry, two independent quantities were compared:

- the spatial growth rate $-k_i$ from the hot-tube dispersion;
- the starting current $I_s$ from PIC simulation.

The patterns match closely.

When $-k_i$ becomes larger, the starting current becomes smaller.

This is important because the two quantities come from very different calculations. The hot-tube dispersion is a linear frequency-domain model. PIC follows the nonlinear time evolution of particles and fields.

Their agreement shows that spatial growth captures the essential physics controlling the threshold.

## Why the scaling is exponential

The correlation can be understood from two simple relations.

For coherent radiation,

$$
P
\propto
E^2
\propto
N^2
\propto
I^2,
$$

where $P$ is radiated power, $E$ is field amplitude, $N$ is the number of coherently bunched electrons, and $I$ is beam current [1,6,7].

Therefore,

$$
E\propto I.
$$

At the same time, a spatially growing mode is amplified over the interaction length $L_G$ as

$$
E
\propto
e^{|k_i|L_G}.
$$

Combining the two scalings gives

$$
e^{|k_i|L_G}
\propto
I.
$$

This explains why the paper plots $-k_i$ on a linear scale but the starting current on a logarithmic scale [1].

The relation is not a full nonlinear oscillator model. It is a scaling argument. But it captures the observed geometry dependence very well.

## Why this method is useful

A direct PIC optimization would require many simulations over groove height, groove width, and beam current.

The hot-tube method is much cheaper:

1. calculate the cold-tube operating frequency;
2. solve the hot-tube dispersion at that frequency;
3. extract the root with $k_i<0$;
4. use $-k_i$ as the spatial-growth metric;
5. select geometries with large growth;
6. run PIC only for final confirmation.

The method also avoids the need to impose the end boundary conditions required in traditional backward-wave oscillator starting-current treatments based on zero-drive instability [1,5].

That makes it especially useful as an early-stage design tool.

## The physical picture in one sentence

The complete physics can be summarized simply:

> The grating sets the slow-wave mode, the beam perturbs that mode, the hot-tube dispersion gives the spatial growth, and the spatial growth tells us how much beam current is needed before coherent oscillation can build.

That is why the imaginary part of the complex wavenumber is much more than a mathematical detail. It becomes a practical bridge between beam–wave theory and device-level starting current.

## References

1. M. A. Faisal and P. Zhang, “Grating Optimization for Smith–Purcell Radiation: Direct Correlation Between Spatial Growth Rate and Starting Current,” *IEEE Transactions on Electron Devices*, vol. 70, pp. 2860–2863, 2023. DOI: [10.1109/TED.2022.3208846](https://doi.org/10.1109/TED.2022.3208846).
2. Y. Y. Lau and D. Chernin, “A Review of the AC Space-Charge Effect in Electron–Circuit Interactions,” *Physics of Fluids B: Plasma Physics*, vol. 4, pp. 3473–3497, 1992. DOI: [10.1063/1.860356](https://doi.org/10.1063/1.860356).
3. P. Zhang, L. K. Ang, and A. Gover, “Enhancement of Coherent Smith–Purcell Radiation at Terahertz Frequency by Optimized Grating, Prebunched Beams, and Open Cavity,” *Physical Review Special Topics – Accelerators and Beams*, vol. 18, 020702, 2015. DOI: [10.1103/PhysRevSTAB.18.020702](https://doi.org/10.1103/PhysRevSTAB.18.020702).
4. D. Li *et al*., “Growth Rate and Start Current in Smith–Purcell Free-Electron Lasers,” *Applied Physics Letters*, vol. 100, 191101, 2012. DOI: [10.1063/1.4711803](https://doi.org/10.1063/1.4711803).
5. H. R. Johnson, “Backward-Wave Oscillators,” *Proceedings of the IRE*, vol. 43, pp. 684–697, 1955. DOI: [10.1109/JRPROC.1955.278054](https://doi.org/10.1109/JRPROC.1955.278054).
6. A. Gover, “Superradiant and Stimulated-Superradiant Emission in Prebunched Electron-Beam Radiators. I. Formulation,” *Physical Review Special Topics – Accelerators and Beams*, vol. 8, 030701, 2005. DOI: [10.1103/PhysRevSTAB.8.030701](https://doi.org/10.1103/PhysRevSTAB.8.030701).
7. S. E. Korbly, A. S. Kesar, J. R. Sirigiri, and R. J. Temkin, “Observation of Frequency-Locked Coherent Terahertz Smith–Purcell Radiation,” *Physical Review Letters*, vol. 94, 054803, 2005. DOI: [10.1103/PhysRevLett.94.054803](https://doi.org/10.1103/PhysRevLett.94.054803).
8. P. Wong, P. Zhang, and J. Luginsland, “Recent Theory of Traveling-Wave Tubes: A Tutorial-Review,” *Plasma Research Express*, vol. 2, 023001, 2020. DOI: [10.1088/2516-1067/ab9730](https://doi.org/10.1088/2516-1067/ab9730).
