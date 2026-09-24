---
title: "Why Transfer Length Can Differ from the Actual Current-Injection Length"
date: 2026-09-14
category: "Electronic Materials"
type: "Research Note"
summary: "A compact explanation of how terminal-resistance transfer length and the spatial current-injection profile can separate in anisotropic thin-film contacts."
featured: true
featured_order: 3
tags: [contact resistance, transfer length, anisotropy]
---

## Conventional transfer length

In the transmission-line model, a characteristic transfer length is often written as

$$
L_T=\sqrt{\frac{\rho_c}{R_{\mathrm{sh}}}},
$$

where (ho_c) is the specific contact resistivity and (R_{\mathrm{sh}}) is the sheet resistance.

This definition follows from a one-dimensional current-transfer model.

## A spatial definition

A more direct current-injection length can instead be defined from the interface current density (J_z(x)).

Let the total injected current be

$$
I=\int_0^{L_c} J_z(x)\,dx.
$$

Define (L_T^{\mathrm{exact}}) by requiring the region from the channel-facing edge to (L_T^{\mathrm{exact}}) to carry a fraction (1-e^{-1}) of the total current:

$$
\int_0^{L_T^{\mathrm{exact}}}J_z(x)\,dx
=
\left(1-e^{-1}\right)I.
$$

This definition does not require an exponential profile.

## Why anisotropy matters

When conductivity differs strongly between in-plane and out-of-plane directions, current spreading inside the contacting layers changes. Two contacts can therefore have similar terminal resistance while exhibiting noticeably different spatial current localization.

That distinction becomes important when contact dimensions approach the characteristic current-crowding length scale.
