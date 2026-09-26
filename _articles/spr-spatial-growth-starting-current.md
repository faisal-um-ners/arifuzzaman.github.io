---
title: "From Hot-Tube Dispersion to Starting Current in THz Smith–Purcell Radiation"
date: 2026-09-24
category: "Vacuum Electronics"
type: "Publication-based Research Article"
summary: "A step-by-step view of how field matching and beam dynamics build the hot-tube dispersion relation, how complex wavenumber gives spatial growth, and why that growth predicts the starting current seen in PIC simulation."
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

A coherent Smith–Purcell oscillator does not begin at full strength as soon as electrons pass over a grating. The electron beam first interacts with the evanescent slow wave supported by the periodic metal structure. That interaction creates a small velocity modulation. After some distance, the velocity modulation becomes density modulation, or **electron bunching**. When the bunching becomes strong enough, the beam can transfer coherent energy to the electromagnetic mode and the oscillation grows [1,3,4].

The minimum dc beam current required for this process to build into coherent radiation is the **starting current**.

A direct way to find it is to repeat particle-in-cell (PIC) simulations at many beam currents and identify the threshold at which a sustained coherent field appears. That method is powerful, but it is expensive when many grating geometries must be tested.

Our published work showed that the same threshold trend can be predicted from the **spatial growth rate** calculated from the hot-tube dispersion relation [1].

This article develops that connection from the beginning: fields, boundary matching, beam perturbation, hot-tube dispersion, complex roots, spatial growth, and finally the comparison with PIC.

> **Researcher roadmap:** first solve the electromagnetic fields in each region, then match those fields at the grating boundary, then add the electron-beam response, and finally solve the resulting dispersion equation for a complex wavenumber.

<details markdown="1">
<summary><strong>What you will get from this article?</strong></summary>

By the end, you should be able to identify what is being solved at each stage:

1. **Field problem:** write Maxwell-consistent fields in the groove and above the grating.
2. **Boundary problem:** match tangential fields to obtain the passive, or cold-tube, dispersion.
3. **Beam problem:** linearize the electron continuity and momentum equations.
4. **Coupled problem:** insert the beam response into the field matching to obtain the hot-tube dispersion.
5. **Root problem:** solve the hot-tube equation for $k=k_r+jk_i$ at a real operating frequency.
6. **Design problem:** use $-k_i$ to estimate which geometry should have the lowest starting current.

</details>

## Step 1: begin with Maxwell's equations

For the two-dimensional $x$-$y$ model, the relevant TM-like field set can be written using $H_z$, $E_x$, and $E_y$. With harmonic time dependence $e^{-i\omega t}$, Maxwell's equations are

$$
\nabla\times\mathbf{E}
=
i\omega\mu_0\mathbf{H},
$$

and

$$
\nabla\times\mathbf{H}
=
\mathbf{J}
-
i\omega\epsilon_0\mathbf{E}.
$$

Before the electron beam is introduced, $\mathbf{J}=0$ in the vacuum regions. Once the beam is added, its ac current becomes part of the second equation.

The main task is now to write field solutions that satisfy Maxwell's equations **and** the geometry.

## Step 2: write the fields in each region

To derive the dispersion relation, we divide the structure into separate regions and solve Maxwell’s equations in each one. The key idea is simple: once the field expressions are known in each region, the dispersion relation is obtained by **matching these regional solutions at the interfaces and grating boundaries**. The same field-matching method is also used in our later two-layer Smith–Purcell analysis, where more regions are added but the overall procedure remains the same [5].

<figure class="article-figure">
  <img src="/assets/img/articles/spr_grating_geometry.png" alt="Geometry of a Smith–Purcell grating with groove height h, groove width w, period L, beam height a, and radiation angle theta." loading="lazy">
  <figcaption>
    <strong>Figure 1.</strong>
    Schematic of the Smith–Purcell grating geometry used in the derivation. The groove depth is $h$, the groove width is $w$, the grating period is $L$, and the electron beam travels a height $a$ above the grating. The emitted Smith–Purcell radiation leaves at angle $\theta$.
  </figcaption>
</figure>

In the present formulation, the domain is treated in three field regions.

### Region I: inside a groove

Let the groove region be

$$
-h < y < 0.
$$

Following the field form used in the two-layer SPR derivation [5], the groove fields can be written as

$$
H_{1,z}(x,y,t)
=
\bar{H}_{1z,0}
\frac{\cosh\!\left[k_0(y+h)\right]}{\sinh(k_0 h)}
e^{-i\omega t},
$$

and

$$
E_{1,x}(x,y,t)
=
\bar{E}_{1x,0}
\frac{\sinh\!\left[k_0(y+h)\right]}{\cosh(k_0 h)}
e^{-i\omega t}.
$$

Here,

$$
k_0=\frac{\omega}{c}.
$$

At the perfectly conducting groove bottom, the tangential electric field must vanish. The hyperbolic form above is chosen so that the conductor boundary condition is satisfied while keeping the groove-depth dependence explicit.

This is the first reason the groove height enters the dispersion relation: the field profile inside the groove changes when $h$ changes.

### Region II: vacuum region between the grating and the beam

In the space above the grating and below the beam, the field is expanded in Floquet spatial harmonics. For this region, the magnetic field is written as

$$
H_{2,z}(x,y,t)
=
\sum_{p=-\infty}^{\infty}
\left(
H_{2z-,p}e^{-\alpha_p y}
+
H_{2z+,p}e^{\alpha_p y}
\right)
e^{i\beta_p x}e^{-i\omega t},
$$

with the corresponding electric fields

$$
E_{2,x}(x,y,t)
=
\sum_{p=-\infty}^{\infty}
\left(
-i\frac{\alpha_p}{\omega\epsilon_0}
\right)
\left(
H_{2z-,p}e^{-\alpha_p y}
-
H_{2z+,p}e^{\alpha_p y}
\right)
e^{i\beta_p x}e^{-i\omega t},
$$

and

$$
E_{2,y}(x,y,t)
=
\sum_{p=-\infty}^{\infty}
\frac{\beta_p}{\epsilon_0\omega}
\left(
H_{2z-,p}e^{-\alpha_p y}
+
H_{2z+,p}e^{\alpha_p y}
\right)
e^{i\beta_p x}e^{-i\omega t}.
$$

This region is important because it connects the groove field to the beam-coupling region above.

### Region III: vacuum region above the beam

Above the beam, the field must decay away from the interaction region. The field expansion is therefore written as

$$
H_{3,z}(x,y,t)
=
\sum_{p=-\infty}^{\infty}
H_{3,p}
e^{-\alpha_p (y-a)}
e^{i\beta_p x}e^{-i\omega t},
$$

$$
E_{3,x}(x,y,t)
=
\sum_{p=-\infty}^{\infty}
\left(
-i\frac{\alpha_p}{\omega\epsilon_0}
\right)
H_{3,p}
e^{-\alpha_p (y-a)}
e^{i\beta_p x}e^{-i\omega t},
$$

and

$$
E_{3,y}(x,y,t)
=
\sum_{p=-\infty}^{\infty}
\frac{\beta_p}{\epsilon_0\omega}
H_{3,p}
e^{-\alpha_p (y-a)}
e^{i\beta_p x}e^{-i\omega t}.
$$

Here, the quantities $\alpha_p$ and $\beta_p$ are the vertical attenuation constant and longitudinal Floquet wavenumber of the $p$th spatial harmonic, respectively.

Once the field expressions in Regions I–III are written down, the next step is to apply the boundary and continuity conditions at the interfaces. That field matching produces the dispersion relation of the grating structure. After the beam is included, the same procedure leads to the hot-tube dispersion relation.

## Step 3: match the fields at the grating surface

Now the two regional solutions are connected at $y=0$.

Over the groove opening, the tangential fields are continuous:

$$
H_{1,z}=H_{2,z},
$$

and

$$
E_{1,x}=E_{2,x}.
$$

Over the metallic part of the grating surface, the tangential electric field must vanish:

$$
E_{2,x}=0.
$$

Because Region II is written as a Floquet series, these conditions are projected over one grating period. This converts the boundary-matching problem into algebraic relations among the groove amplitude and the harmonic amplitudes $H_{2,p}$ [1,5,6].

After eliminating the amplitudes, the passive or **cold-tube dispersion relation** is obtained.

Using the normalized quantities

$$
\bar{\omega}=\frac{\omega L}{c},
\qquad
\bar{k}=kL,
\qquad
\bar{W}=\frac{w}{L},
\qquad
\bar{H}=\frac{h}{L},
$$

define

$$
P_n=\bar{k}+2n\pi,
$$

$$
\theta_n=\frac{P_n\bar{W}}{2},
$$

and

$$
\gamma_n=
\sqrt{P_n^2-\bar{\omega}^2}.
$$

The cold-tube relation can then be written [1]

$$
\frac{\cot(\bar{\omega}\bar{H})}
{\bar{\omega}\bar{H}}
-
\sum_{n=-\infty}^{\infty}
\left(
\frac{\sin\theta_n}{\theta_n}
\right)^2
\frac{\bar{W}}
{\gamma_n\bar{H}}
=
0.
$$

This equation answers the first design question:

> **What electromagnetic surface mode does the grating support before beam loading is included?**

Our later two-layer analysis follows the same procedure: write the fields in each region, apply the interface conditions, eliminate the regional amplitudes, and obtain the cold- and hot-tube dispersion relations for the more complicated geometry [5].

## Step 4: use the beam line to select the operating frequency

The electron beam has axial velocity $v_0$. Its synchronism line is

$$
\omega=kv_0.
$$

In normalized form,

$$
\bar{\omega}
=
\beta_0\bar{k},
$$

where

$$
\beta_0=\frac{v_0}{c}.
$$

The intersection of this beam line with the cold-tube dispersion curve gives the evanescent-wave operating frequency used for the hot-tube calculation [1].

For the 50-keV beam used in the published study,

$$
\beta_0=0.4126.
$$

At this stage, the beam is only selecting the operating point. It has not yet modified the dispersion.

## Step 5: perturb the electron beam

Now include the beam dynamically.

Let the equilibrium electron density and velocity be $n_0$ and $v_0$. Write the beam variables as

$$
n=n_0+n_1,
$$

and

$$
v=v_0+v_1,
$$

with the small-signal conditions

$$
\lvert n_1\rvert\ll n_0,
\qquad
\lvert v_1\rvert\ll v_0.
$$

Using $\lvert\cdot\rvert$ instead of vertical-bar characters also avoids Markdown interpreting the equation as a table.

The unperturbed beam current density is

$$
J_0=-e n_0v_0.
$$

The purpose of the hot-tube model is to find how the small ac quantities $n_1$ and $v_1$ respond to the electromagnetic field and then feed back into Maxwell's equations. This is the standard small-signal AC space-charge framework used in electron–circuit theory [2,8].

## Step 6: linearize the beam continuity equation

Charge conservation gives

$$
\frac{\partial n}{\partial t}
+
\frac{\partial(nv)}{\partial x}
=
0.
$$

Substitute

$$
n=n_0+n_1,
\qquad
v=v_0+v_1,
$$

and neglect second-order terms such as $n_1v_1$. The result is

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

Assume the perturbations vary as

$$
e^{-i\omega t+ikx}.
$$

Then

$$
\frac{\partial}{\partial t}\rightarrow-i\omega,
\qquad
\frac{\partial}{\partial x}\rightarrow ik.
$$

Therefore,

$$
-i(\omega-kv_0)n_1
+
ikn_0v_1
=
0,
$$

which gives

$$
n_1
=
\frac{k n_0}
{\omega-kv_0}
v_1.
$$

This already reveals the importance of synchronism. The beam response becomes strong when

$$
\omega\approx kv_0.
$$

## Step 7: linearize the electron equation of motion

For the axial ac velocity, the linearized momentum equation is

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

Using the same harmonic dependence gives

$$
-im(\omega-kv_0)v_1
=
-eE_1.
$$

Hence,

$$
v_1
=
-\frac{i e}
{m(\omega-kv_0)}
E_1.
$$

Substitute this into the continuity result:

$$
n_1
=
-\frac{i ekn_0}
{m(\omega-kv_0)^2}
E_1.
$$

The ac current is

$$
J_1
=
-e(n_0v_1+v_0n_1).
$$

The important part is the resonant factor

$$
\frac{1}
{(\omega-kv_0)^2}.
$$

It is the mathematical signature of strong beam response near synchronism [2,8].

## Step 8: convert the beam response into the hot-tube coupling factor

The beam plasma frequency is

$$
\omega_p
=
\sqrt{
\frac{e^2n_0}
{m\epsilon_0}
}.
$$

For the sheet-beam model used in the paper, beam thickness $\tau$ enters through

$$
\omega_a^2
=
\omega_p^2\tau.
$$

Define

$$
\bar{\omega}_a
=
\frac{\omega_a L^{1/2}}{c}.
$$

The normalized beam–grating distance is

$$
\bar{A}
=
\frac{a}{L}.
$$

For the $n$th spatial harmonic, the beam response enters through [1]

$$
\Psi
=
\frac{
\bar{\omega}_a^2\gamma_n
}{
(\bar{\omega}-P_n\beta_0)^2
}.
$$

The beam modifies the corresponding harmonic through

$$
U_n
=
\frac{
1-
\Psi\cosh(\gamma_n\bar{A})/e^{\gamma_n\bar{A}}
}{
1-
\Psi\sinh(\gamma_n\bar{A})/e^{\gamma_n\bar{A}}
}.
$$

This form makes two pieces of physics visible.

First, the denominator

$$
(\bar{\omega}-P_n\beta_0)^2
$$

contains beam synchronism.

Second, the factors involving $\gamma_n\bar{A}$ show why the beam must remain close to the grating: the surface field is evanescent, so coupling weakens with separation [1].

The same region-by-region field construction and beam-loading idea is developed more generally for a two-layer grating in our 2025 *IEEE Transactions on Plasma Science* paper [5].

## Step 9: obtain the final hot-tube dispersion relation

After the beam response is inserted into the boundary-matching system, the final hot-tube relation becomes [1]

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
0.
$$

Compare this with the cold-tube equation. The electromagnetic structure is similar, but now each spatial harmonic carries the beam-loading factor $U_n$.

That is the central mathematical step:

> **Cold tube:** geometry determines the passive mode.  
> **Hot tube:** geometry and beam dynamics determine the coupled mode.

<details markdown="1">
<summary><strong>How do I solve the hot-tube equation numerically?</strong></summary>

A practical workflow is:

1. Solve the cold-tube dispersion first.
2. Use the beam-line intersection to choose a **real** operating frequency $\bar{\omega}$.
3. Select a harmonic truncation, for example $-N\le n\le N$.
4. For a trial complex $\bar{k}$, evaluate $P_n$, $\gamma_n$, $\theta_n$, $\Psi$, $U_n$, and then $f(\bar{k},\bar{\omega})$.
5. Solve the two real equations

$$
\operatorname{Re}f=0,
\qquad
\operatorname{Im}f=0
$$

for

$$
\bar{k}
=
\bar{k}_r+i\bar{k}_i.
$$

6. Use several initial guesses because multiple roots can exist.
7. Retain the physically relevant root and repeat with larger $N$ to verify convergence.
8. Sweep $h$, $w$, beam current, or beam height only after the root solver is stable.

A useful numerical check is to plot

$$
\log_{10}\lvert f(\bar{k},\bar{\omega})\rvert
$$

over the complex-$k$ plane. Local minima provide good initial guesses for a Newton, secant, or two-dimensional root solver.

</details>

<details markdown="1">
<summary><strong>Three common mistakes in a first implementation</strong></summary>

**1. Using the wrong branch of $\gamma_n$.**  
For an evanescent harmonic above the grating, choose the branch that decays away from the surface.

**2. Finding only one root.**  
The hot-tube equation can have several roots. A single starting guess can miss the growing branch.

**3. Mixing normalized and dimensional variables.**  
Keep $\bar{k}$, $\bar{\omega}$, $\bar{H}$, $\bar{W}$, and $\bar{A}$ consistently normalized until the end.

</details>

## Step 10: interpret the complex wavenumber

At the selected real operating frequency, solve the hot-tube equation for

$$
k=k_r+ik_i.
$$

The field varies as

$$
E(x,t)
\propto
e^{-i\omega t+ikx}.
$$

Substituting the complex wavenumber,

$$
E(x,t)
\propto
e^{-i\omega t}
e^{ik_r x}
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

the normalized growing root is approximately

$$
\bar{k}_r=4.3289,
\qquad
\bar{k}_i=-0.041.
$$

The negative imaginary part identifies the growing branch [1].

## Why the hot-tube real part shifts

The real part of the hot-tube wavenumber is slightly different from the cold-tube beam-line intersection.

This is beam loading. Once the electron beam is allowed to respond dynamically, it perturbs the electromagnetic mode and slightly detunes the real propagation constant [1,8].

The shift in $k_r$ is physically meaningful, but for starting-current optimization the most important quantity is $k_i$, because it controls spatial amplification.

## Where the strongest growth occurs

The 2023 paper swept groove geometry while keeping the other parameters fixed [1].

For

$$
w=60~\mu\mathrm{m},
$$

the strongest growth occurred near

$$
h\approx100\text{–}120~\mu\mathrm{m}.
$$

For

$$
h=100~\mu\mathrm{m},
$$

the strongest growth occurred near

$$
w\approx80~\mu\mathrm{m}.
$$

These operating points lie near the upper band edge of the cold-tube dispersion curve [1].

Band-edge regions can be especially susceptible to beam-driven instability, which provides a useful physical interpretation for the growth maximum [7].

## Step 11: compare the growth rate with PIC starting current

Now comes the device-level test.

The paper compared

$$
-\bar{k}_i
$$

from the hot-tube dispersion with the starting current obtained independently from PIC simulations [1,3,4].

The PIC model used a 35-period grating with the same basic beam and geometric parameters.

The result is the key finding:

> **When the spatial growth rate increases, the starting current decreases.**

This agreement is valuable because the two calculations are fundamentally different.

The hot-tube model is a linear frequency-domain calculation.

PIC follows the nonlinear particle and field evolution in time.

Yet both show nearly the same dependence on groove geometry [1].

## Why the correlation is exponential

For coherent radiation, the power scales approximately as

$$
P
\propto
E^2
\propto
N^2
\propto
I^2,
$$

where $N$ is the number of coherently bunched electrons and $I$ is beam current [1,3].

Therefore, at the scaling level,

$$
E\propto I.
$$

A spatially growing mode is amplified over interaction length $L_G$ as

$$
E
\propto
e^{\lvert k_i\rvert L_G}.
$$

Combining the two relations gives

$$
e^{\lvert k_i\rvert L_G}
\propto
I.
$$

This explains why the spatial-growth curve and the logarithm of the starting-current curve follow one another so closely [1].

The relation is a scaling argument, not a full nonlinear saturation model. Its value is that it explains why a linear hot-tube calculation can predict a nonlinear threshold trend.

## Why this is useful for a new design

Suppose you want to optimize a new Smith–Purcell structure.

A brute-force approach would be:

1. choose a geometry;
2. build the PIC model;
3. sweep beam current;
4. find the starting current;
5. repeat for every geometry.

That quickly becomes expensive.

A dispersion-guided approach is more efficient:

1. derive or compute the cold-tube dispersion;
2. locate the beam-synchronous operating frequency;
3. add the beam equations;
4. solve the hot-tube relation;
5. extract the growing root;
6. map $-\operatorname{Im}(k)$ over geometry;
7. reserve PIC for the best candidates.

Our 2025 two-layer work uses the same basic philosophy for a more complicated structure: the fields are written in multiple regions, matched at all interfaces, and then used to determine how the additional layer changes the cold operating point and hot spatial growth [5].

This is why learning the derivation is useful beyond one grating geometry. The **field expansion → boundary matching → beam response → complex root** workflow can be reused for many linear free-electron slow-wave devices.

## The physical picture in one sentence

The full derivation can be summarized as

> **geometry defines the fields → boundary matching defines the passive mode → the electron beam loads that mode → the complex hot-tube root gives spatial growth → spatial growth predicts the beam-current threshold.**

That is the practical meaning of the imaginary wavenumber. It connects electromagnetic field theory directly to an experimentally relevant device quantity: the current required to start coherent radiation.

## References

1. M. A. Faisal and P. Zhang, “Grating Optimization for Smith–Purcell Radiation: Direct Correlation Between Spatial Growth Rate and Starting Current,” *IEEE Transactions on Electron Devices*, vol. 70, no. 6, pp. 2860–2863, 2023. <a href="https://doi.org/10.1109/TED.2022.3208846" target="_blank" rel="noopener">DOI: 10.1109/TED.2022.3208846 ↗</a>

2. Y. Y. Lau and D. Chernin, “A Review of the AC Space-Charge Effect in Electron–Circuit Interactions,” *Physics of Fluids B: Plasma Physics*, vol. 4, no. 11, pp. 3473–3497, 1992. <a href="https://doi.org/10.1063/1.860356" target="_blank" rel="noopener">DOI: 10.1063/1.860356 ↗</a>

3. P. Zhang, L. K. Ang, and A. Gover, “Enhancement of Coherent Smith–Purcell Radiation at Terahertz Frequency by Optimized Grating, Prebunched Beams, and Open Cavity,” *Physical Review Special Topics – Accelerators and Beams*, vol. 18, 020702, 2015. <a href="https://doi.org/10.1103/PhysRevSTAB.18.020702" target="_blank" rel="noopener">DOI: 10.1103/PhysRevSTAB.18.020702 ↗</a>

4. D. Li *et al*., “Growth Rate and Start Current in Smith–Purcell Free-Electron Lasers,” *Applied Physics Letters*, vol. 100, 191101, 2012. <a href="https://doi.org/10.1063/1.4711803" target="_blank" rel="noopener">DOI: 10.1063/1.4711803 ↗</a>

5. M. A. Faisal and P. Zhang, “Parametric Analysis on Enhancement of THz Smith–Purcell Radiation by Two-Layer Grating Structure,” *IEEE Transactions on Plasma Science*, vol. 53, no. 6, pp. 1170–1185, 2025. <a href="https://doi.org/10.1109/TPS.2025.3567163" target="_blank" rel="noopener">DOI: 10.1109/TPS.2025.3567163 ↗</a>

6. H. P. Freund and T. M. Abu-Elfadl, “Linearized Field Theory of a Smith–Purcell Traveling Wave Tube,” *IEEE Transactions on Plasma Science*, vol. 32, no. 3, pp. 1015–1027, 2004. <a href="https://doi.org/10.1109/TPS.2004.827612" target="_blank" rel="noopener">DOI: 10.1109/TPS.2004.827612 ↗</a>

7. D. M. H. Hung *et al*., “Absolute Instability Near the Band Edge of Traveling-Wave Amplifiers,” *Physical Review Letters*, vol. 115, 124801, 2015. <a href="https://doi.org/10.1103/PhysRevLett.115.124801" target="_blank" rel="noopener">DOI: 10.1103/PhysRevLett.115.124801 ↗</a>

8. P. Wong, P. Zhang, and J. Luginsland, “Recent Theory of Traveling-Wave Tubes: A Tutorial-Review,” *Plasma Research Express*, vol. 2, 023001, 2020. <a href="https://doi.org/10.1088/2516-1067/ab9730" target="_blank" rel="noopener">DOI: 10.1088/2516-1067/ab9730 ↗</a>
