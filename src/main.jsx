import { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";

import Cursor from "./portfolio/components/Cursor.jsx";
import Navbar from "./portfolio/components/Navbar.jsx";
import Hero from "./portfolio/components/Hero.jsx";
import About from "./portfolio/components/About.jsx";
import Projects from "./portfolio/components/Projects.jsx";
import Experience from "./portfolio/components/Experience.jsx";
import Skills from "./portfolio/components/Skills.jsx";
import Contact from "./portfolio/components/Contact.jsx";
import Footer from "./portfolio/components/Footer.jsx";

const style = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

  :root {
    --pink: #f9c6d0;
    --pink-deep: #f0a0b4;
    --pink-light: #fde8ed;
    --mint: #b8f0d0;
    --mint-deep: #7ed9a8;
    --mint-light: #e0faf0;
    --dark: #1a1a2e;
    --dark2: #2d2d44;
    --text: #3a3a5c;
    --text-light: #7a7a9a;
    --white: #fefefe;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  html { scroll-behavior: smooth; }

  body {
    font-family: 'DM Sans', sans-serif;
    background: var(--white);
    color: var(--text);
    overflow-x: hidden;
  }

  /* ── CURSOR ─────────────────────────────── */
  .cursor {
    width: 12px; height: 12px;
    background: var(--pink-deep);
    border-radius: 50%;
    position: fixed;
    left: 0;
    top: 0;
    pointer-events: none;
    z-index: 9999;
    transition: none;
    mix-blend-mode: multiply;
    will-change: transform;
    transform: translate3d(-100px, -100px, 0);
  }
  .cursor-ring {
    width: 36px; height: 36px;
    border: 1.5px solid var(--mint-deep);
    border-radius: 50%;
    position: fixed;
    left: 0;
    top: 0;
    pointer-events: none;
    z-index: 9998;
    transition: none;
    mix-blend-mode: multiply;
    will-change: transform;
    transform: translate3d(-100px, -100px, 0);
  }

  /* ── NAVBAR ──────────────────────────────── */
  nav {
    position: fixed; top: 0; left: 0; right: 0;
    z-index: 100;
    padding: 18px 40px;
    display: flex; align-items: center; justify-content: space-between;
    background: rgba(254,254,254,0.85);
    backdrop-filter: blur(14px);
    border-bottom: 1px solid rgba(249,198,208,0.3);
    transition: all 0.3s ease;
  }
  nav.scrolled {
    padding: 12px 40px;
    box-shadow: 0 4px 30px rgba(249,198,208,0.25);
  }
  .nav-logo {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--dark);
    letter-spacing: -0.02em;
    text-decoration: none;
  }
  .nav-logo span { color: var(--pink-deep); }
  .nav-links {
    display: flex; gap: 32px; list-style: none;
  }
  .nav-links a {
    text-decoration: none;
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--text-light);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    transition: color 0.2s;
    position: relative;
  }
  .nav-links a::after {
    content: '';
    position: absolute;
    bottom: -3px; left: 0; right: 0;
    height: 1.5px;
    background: var(--mint-deep);
    transform: scaleX(0);
    transition: transform 0.3s ease;
    transform-origin: left;
  }
  .nav-links a:hover { color: var(--dark); }
  .nav-links a:hover::after { transform: scaleX(1); }

  /* ── HERO ────────────────────────────────── */
  #hero {
    min-height: 100vh;
    display: flex; align-items: center; justify-content: center;
    position: relative;
    overflow: hidden;
    background: linear-gradient(135deg, #fde8ed 0%, #e0faf0 100%);
  }
  .hero-blob1 {
    position: absolute; top: -100px; right: -100px;
    width: 500px; height: 500px;
    background: radial-gradient(circle, rgba(249,198,208,0.5) 0%, transparent 70%);
    border-radius: 50%;
    animation: float1 8s ease-in-out infinite;
  }
  .hero-blob2 {
    position: absolute; bottom: -80px; left: -80px;
    width: 400px; height: 400px;
    background: radial-gradient(circle, rgba(184,240,208,0.5) 0%, transparent 70%);
    border-radius: 50%;
    animation: float2 10s ease-in-out infinite;
  }
  @keyframes float1 {
    0%,100% { transform: translate(0,0) scale(1); }
    50% { transform: translate(-30px, 30px) scale(1.05); }
  }
  @keyframes float2 {
    0%,100% { transform: translate(0,0) scale(1); }
    50% { transform: translate(30px, -20px) scale(1.08); }
  }
  .hero-content {
    text-align: center;
    z-index: 2;
    position: relative;
  }
  .hero-tag {
    display: inline-block;
    background: var(--mint);
    color: var(--dark2);
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    padding: 6px 18px;
    border-radius: 20px;
    margin-bottom: 24px;
    animation: fadeSlideUp 0.8s ease forwards;
  }
  .hero-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(3.5rem, 9vw, 7rem);
    font-weight: 600;
    line-height: 1.05;
    color: var(--dark);
    letter-spacing: -0.03em;
    animation: fadeSlideUp 0.9s ease forwards;
  }
  .hero-name span {
    color: var(--pink-deep);
    font-style: italic;
  }
  .hero-role {
    font-size: 1.1rem;
    color: var(--text-light);
    margin-top: 16px;
    font-weight: 400;
    letter-spacing: 0.05em;
    animation: fadeSlideUp 1s ease forwards;
  }
  .hero-btns {
    margin-top: 40px;
    display: flex; gap: 16px; justify-content: center;
    animation: fadeSlideUp 1.1s ease forwards;
  }
  .btn-primary {
    background: var(--dark);
    color: var(--white);
    padding: 14px 32px;
    border-radius: 50px;
    text-decoration: none;
    font-size: 0.85rem;
    font-weight: 500;
    letter-spacing: 0.06em;
    transition: all 0.3s ease;
    border: 2px solid var(--dark);
  }
  .btn-primary:hover {
    background: transparent;
    color: var(--dark);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(26,26,46,0.15);
  }
  .btn-outline {
    background: transparent;
    color: var(--dark);
    padding: 14px 32px;
    border-radius: 50px;
    text-decoration: none;
    font-size: 0.85rem;
    font-weight: 500;
    letter-spacing: 0.06em;
    border: 2px solid var(--pink-deep);
    transition: all 0.3s ease;
  }
  .btn-outline:hover {
    background: var(--pink);
    transform: translateY(-2px);
  }
  .hero-scroll {
    position: absolute; bottom: 36px; left: 50%;
    transform: translateX(-50%);
    display: flex; flex-direction: column; align-items: center; gap: 8px;
    color: var(--text-light);
    font-size: 0.7rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    animation: bounce 2s ease infinite;
  }
  .hero-scroll-line {
    width: 1px; height: 40px;
    background: linear-gradient(to bottom, var(--pink-deep), transparent);
  }
  @keyframes bounce {
    0%,100% { transform: translateX(-50%) translateY(0); }
    50% { transform: translateX(-50%) translateY(8px); }
  }
  @keyframes fadeSlideUp {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* ── SECTIONS ────────────────────────────── */
  section { padding: 100px 0; }
  .container { max-width: 1100px; margin: 0 auto; padding: 0 40px; }
  .section-label {
    display: flex; align-items: center; gap: 12px;
    margin-bottom: 16px;
  }
  .section-label span {
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--mint-deep);
  }
  .section-label::before, .section-label::after {
    content: '';
    height: 1px;
    background: var(--mint);
    flex: 1;
  }
  .section-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 600;
    color: var(--dark);
    line-height: 1.15;
    letter-spacing: -0.02em;
  }
  .section-title em {
    color: var(--pink-deep);
    font-style: italic;
  }

  /* ── ABOUT ───────────────────────────────── */
  #about { background: var(--white); }
  .about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
    margin-top: 56px;
  }
  .about-visual {
    position: relative;
  }
  .about-img-wrap {
    width: 100%;
    aspect-ratio: 3/4;
    border-radius: 24px;
    overflow: hidden;
    background: linear-gradient(135deg, var(--pink-light), var(--mint-light));
    display: flex; align-items: center; justify-content: center;
    position: relative;
  }
  .about-img-placeholder {
    font-family: 'Cormorant Garamond', serif;
    font-size: 5rem;
    font-weight: 300;
    color: var(--pink-deep);
    opacity: 0.4;
  }
  .about-badge {
    position: absolute;
    bottom: -20px; right: -20px;
    background: var(--dark);
    color: var(--white);
    padding: 20px 24px;
    border-radius: 16px;
    text-align: center;
  }
  .about-badge strong {
    display: block;
    font-family: 'Cormorant Garamond', serif;
    font-size: 2.2rem;
    font-weight: 600;
    color: var(--mint);
  }
  .about-badge span { font-size: 0.75rem; color: rgba(255,255,255,0.6); }
  .about-text p {
    font-size: 0.95rem;
    line-height: 1.85;
    color: var(--text-light);
    margin-bottom: 20px;
  }
  .skills-wrap {
    margin-top: 32px;
    display: flex; flex-direction: column; gap: 14px;
  }
  .skill-row {
    display: flex; align-items: center; gap: 14px;
  }
  .skill-name {
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    color: var(--text);
    width: 80px;
    flex-shrink: 0;
  }
  .skill-track {
    flex: 1;
    height: 6px;
    background: rgba(184,240,208,0.3);
    border-radius: 10px;
    overflow: hidden;
  }
  .skill-fill {
    height: 100%;
    border-radius: 10px;
    background: linear-gradient(90deg, var(--pink-deep), var(--mint-deep));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .skill-fill.animated { transform: scaleX(1); }
  .skill-pct {
    font-size: 0.75rem;
    color: var(--text-light);
    width: 36px;
    text-align: right;
  }
  .about-links {
    display: flex; gap: 12px; margin-top: 32px;
  }

  /* ── PROJECTS ────────────────────────────── */
  #projects { background: linear-gradient(180deg, #fde8ed 0%, #ffffff 100%); }
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 24px;
    margin-top: 56px;
  }
  .project-card {
    display: block;
    text-decoration: none;
    color: inherit;
    background: var(--white);
    border-radius: 20px;
    overflow: hidden;
    border: 1px solid rgba(249,198,208,0.4);
    transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
    cursor: pointer;
  }
  .project-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 24px 48px rgba(249,198,208,0.35);
    border-color: var(--pink-deep);
  }
  .project-thumb {
    height: 160px;
    display: flex; align-items: center; justify-content: center;
    position: relative;
    overflow: hidden;
  }
  .project-thumb-icon {
    font-size: 2.5rem;
    z-index: 1;
  }
  .project-thumb-bg {
    position: absolute; inset: 0;
    opacity: 0.15;
  }
  .project-body { padding: 22px; }
  .project-tags {
    display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 10px;
  }
  .project-tag {
    font-size: 0.65rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 3px 10px;
    border-radius: 20px;
    background: var(--mint-light);
    color: var(--dark2);
  }
  .project-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--dark);
    margin-bottom: 8px;
  }
  .project-desc {
    font-size: 0.82rem;
    line-height: 1.7;
    color: var(--text-light);
  }
  /* ── EXPERIENCE ──────────────────────────── */
  #experience { background: var(--white); }
  .timeline {
    margin-top: 56px;
    position: relative;
  }
  .timeline::before {
    content: '';
    position: absolute;
    left: 18px; top: 0; bottom: 0;
    width: 1px;
    background: linear-gradient(to bottom, var(--pink), var(--mint));
  }
  .timeline-item {
    display: flex; gap: 40px;
    margin-bottom: 48px;
    opacity: 0;
    transform: translateX(-20px);
    transition: all 0.6s ease;
  }
  .timeline-item.visible {
    opacity: 1;
    transform: translateX(0);
  }
  .timeline-dot {
    width: 38px; height: 38px;
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    font-size: 1rem;
    z-index: 1;
  }
  .dot-pink { background: var(--pink); }
  .dot-mint { background: var(--mint); }
  .timeline-body {
    flex: 1;
    background: linear-gradient(135deg, rgba(253,232,237,0.4), rgba(224,250,240,0.4));
    border: 1px solid rgba(249,198,208,0.3);
    border-radius: 16px;
    padding: 24px 28px;
    transition: box-shadow 0.3s ease;
  }
  .timeline-body:hover { box-shadow: 0 8px 24px rgba(249,198,208,0.2); }
  .timeline-period {
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--mint-deep);
    margin-bottom: 6px;
  }
  .timeline-role {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--dark);
    margin-bottom: 4px;
  }
  .timeline-company {
    font-size: 0.85rem;
    color: var(--pink-deep);
    font-weight: 500;
    margin-bottom: 10px;
  }
  .timeline-desc {
    font-size: 0.83rem;
    line-height: 1.75;
    color: var(--text-light);
  }

  /* ── SKILLS SECTION ──────────────────────── */
  #skills { background: linear-gradient(180deg, #e0faf0 0%, #ffffff 100%); }
  .skills-cloud {
    margin-top: 56px;
    display: flex; flex-wrap: wrap; gap: 12px;
  }
  .skill-pill {
    padding: 10px 20px;
    border-radius: 50px;
    font-size: 0.85rem;
    font-weight: 500;
    transition: all 0.25s ease;
    cursor: default;
  }
  .skill-pill:nth-child(odd) {
    background: var(--pink-light);
    color: var(--dark2);
    border: 1px solid var(--pink);
  }
  .skill-pill:nth-child(even) {
    background: var(--mint-light);
    color: var(--dark2);
    border: 1px solid var(--mint);
  }
  .skill-pill:hover {
    transform: scale(1.06);
    box-shadow: 0 4px 12px rgba(249,198,208,0.3);
  }
  .certs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 16px;
    margin-top: 48px;
  }
  .cert-card {
    background: var(--white);
    border: 1px solid rgba(249,198,208,0.4);
    border-radius: 14px;
    padding: 20px 22px;
    display: flex; gap: 14px; align-items: flex-start;
    transition: all 0.3s ease;
  }
  .cert-card:hover { transform: translateY(-3px); box-shadow: 0 8px 20px rgba(249,198,208,0.2); }
  .cert-icon {
    width: 36px; height: 36px;
    background: var(--pink-light);
    border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    font-size: 1rem;
    flex-shrink: 0;
  }
  .cert-name {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--dark);
    line-height: 1.4;
  }
  .cert-issuer {
    font-size: 0.75rem;
    color: var(--text-light);
    margin-top: 3px;
  }

  /* ── CONTACT ─────────────────────────────── */
  #contact { background: var(--dark); }
  #contact .section-label span { color: var(--mint-deep); }
  #contact .section-label::before,
  #contact .section-label::after { background: var(--dark2); }
  #contact .section-title { color: var(--white); }
  #contact .section-title em { color: var(--pink); }
  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    margin-top: 56px;
  }
  .contact-info-item {
    display: flex; gap: 16px; align-items: flex-start;
    margin-bottom: 28px;
  }
  .contact-icon {
    width: 44px; height: 44px;
    background: rgba(249,198,208,0.1);
    border: 1px solid rgba(249,198,208,0.2);
    border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
    font-size: 1rem;
    flex-shrink: 0;
  }
  .contact-info-label {
    font-size: 0.7rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.4);
    margin-bottom: 4px;
  }
  .contact-info-value {
    font-size: 0.9rem;
    color: var(--white);
    text-decoration: none;
    transition: color 0.2s;
  }
  .contact-info-value:hover { color: var(--pink); }
  .contact-socials {
    display: flex; gap: 12px; margin-top: 40px;
  }
  .social-btn {
    width: 44px; height: 44px;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
    text-decoration: none;
    font-size: 1rem;
    color: rgba(255,255,255,0.6);
    transition: all 0.25s ease;
  }
  .social-btn:hover {
    background: var(--pink-deep);
    border-color: var(--pink-deep);
    color: var(--white);
    transform: translateY(-3px);
  }
  .contact-form { display: flex; flex-direction: column; gap: 16px; }
  .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .form-group { display: flex; flex-direction: column; gap: 8px; }
  .form-label {
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.5);
  }
  .form-input, .form-textarea {
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 10px;
    padding: 13px 16px;
    color: var(--white);
    font-family: 'DM Sans', sans-serif;
    font-size: 0.9rem;
    outline: none;
    transition: border-color 0.2s;
  }
  .form-input:focus, .form-textarea:focus {
    border-color: var(--pink-deep);
    background: rgba(249,198,208,0.06);
  }
  .form-textarea { resize: none; height: 110px; }
  .btn-send {
    background: linear-gradient(135deg, var(--pink-deep), var(--mint-deep));
    color: var(--dark);
    border: none;
    padding: 14px 28px;
    border-radius: 50px;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.88rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    cursor: pointer;
    transition: all 0.3s ease;
    align-self: flex-start;
  }
  .btn-send:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(249,198,208,0.4);
  }

  /* ── FOOTER ──────────────────────────────── */
  footer {
    background: var(--dark);
    border-top: 1px solid rgba(255,255,255,0.06);
    padding: 28px 40px;
    text-align: center;
    font-size: 0.8rem;
    color: rgba(255,255,255,0.3);
  }
  footer span { color: var(--pink-deep); }

  /* ── FADE IN ─────────────────────────────── */
  .fade-up {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.7s cubic-bezier(0.16,1,0.3,1);
  }
  .fade-up.visible { opacity: 1; transform: translateY(0); }

  /* ── NAV MOBILE ───────────────────────────── */
  .nav-burger {
    display: none;
    width: 44px;
    height: 44px;
    border-radius: 14px;
    border: 1px solid rgba(249,198,208,0.35);
    background: rgba(254,254,254,0.8);
    backdrop-filter: blur(10px);
    cursor: pointer;
    position: relative;
    padding: 0;
    transition: all 0.2s ease;
  }
  .nav-burger:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(126,217,168,0.25);
  }
  .nav-burger-line {
    width: 18px;
    height: 2px;
    background: var(--dark2);
    border-radius: 2px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    transition: transform 0.22s ease, opacity 0.18s ease, top 0.22s ease;
  }
  .nav-burger-line:nth-child(1) { top: 16px; }
  .nav-burger-line:nth-child(2) { top: 21px; }
  .nav-burger-line:nth-child(3) { top: 26px; }

  .nav-burger.open {
    border-color: rgba(126,217,168,0.45);
    background: rgba(254,254,254,0.95);
  }
  .nav-burger.open .nav-burger-line:nth-child(1) {
    top: 21px;
    transform: translateX(-50%) rotate(45deg);
  }
  .nav-burger.open .nav-burger-line:nth-child(2) {
    opacity: 0;
  }
  .nav-burger.open .nav-burger-line:nth-child(3) {
    top: 21px;
    transform: translateX(-50%) rotate(-45deg);
  }

  .nav-mobile-panel {
    position: fixed;
    inset: 0;
    z-index: 120;
    opacity: 0;
    pointer-events: none;
    transform: translateY(-6px);
    transition: opacity 0.2s ease, transform 0.25s ease;
  }
  .nav-mobile-panel.open {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  }
  .nav-mobile-overlay {
    position: fixed;
    inset: 0;
    background: rgba(26,26,46,0.22);
    backdrop-filter: blur(10px);
    opacity: 0;
    transition: opacity 0.2s ease;
  }
  .nav-mobile-panel.open .nav-mobile-overlay { opacity: 1; }
  .nav-mobile-links {
    position: relative;
    margin: 82px auto 0;
    width: min(420px, calc(100% - 40px));
    padding: 18px 16px 12px;
    border-radius: 22px;
    background: rgba(254,254,254,0.97);
    border: 1px solid rgba(249,198,208,0.52);
    display: flex;
    flex-direction: column;
    gap: 8px;
    box-shadow: 0 24px 60px rgba(249,198,208,0.22);

    opacity: 0;
    transform: translateY(-10px) scale(0.985);
    transition: opacity 0.22s ease, transform 0.28s ease;
  }
  .nav-mobile-panel.open .nav-mobile-links {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  .nav-mobile-links a {
    text-decoration: none;
    color: var(--text-light);
    font-size: 0.95rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 12px 14px;
    border-radius: 14px;
    transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
  }
  .nav-mobile-links a:hover {
    background: rgba(249,198,208,0.25);
    color: var(--dark);
    transform: translateY(-1px);
  }

  /* ── RESPONSIVE ──────────────────────────── */
  @media (max-width: 768px) {
    nav { padding: 14px 20px; }
    .nav-links { display: none; }
    .nav-burger { display: flex; }
    .container { padding: 0 20px; }
    .about-grid { grid-template-columns: 1fr; gap: 40px; }
    .contact-grid { grid-template-columns: 1fr; gap: 40px; }
    .form-row { grid-template-columns: 1fr; }
    .timeline::before { left: 14px; }
    section { padding: 70px 0; }
  }
`;

const projects = [
  {
    name: "News Project",
    desc: "Python backend app for aggregating and displaying news articles.",
    tags: ["Python", "Django", "SQL"],
    color: ["#fde8ed", "#f9c6d0"],
    icon: "📰",
    link: "https://github.com/Leman006/news_project",
  },
  {
    name: "Books Project",
    desc: "Book library management system with CRUD operations.",
    tags: ["Python", "Django", "PostgreSQL"],
    color: ["#e0faf0", "#b8f0d0"],
    icon: "📚",
    link: "https://github.com/Leman006/books_project",
  },
  {
    name: "Phones Project",
    desc: "Phone catalog app built with Python and Django framework.",
    tags: ["Python", "Django", "REST API"],
    color: ["#fde8ed", "#f9c6d0"],
    icon: "📱",
    link: "https://github.com/Leman006/phones_project",
  },
  {
    name: "Country App",
    desc: "Interactive country explorer built with React.",
    tags: ["React", "CSS", "API"],
    color: ["#e0faf0", "#b8f0d0"],
    icon: "🌍",
    link: "https://country-app-eight-eta.vercel.app/countries",
  },
  {
    name: "Turbo Website Clone",
    desc: "Pixel-perfect clone of Turbo's website using vanilla JS.",
    tags: ["HTML", "CSS", "JS"],
    color: ["#fde8ed", "#f9c6d0"],
    icon: "⚡",
    link: "https://turbo-ruby-three.vercel.app/",
  },
  {
    name: "Guess Website Clone",
    desc: "React-based clone of Guess fashion brand's website.",
    tags: ["React", "CSS"],
    color: ["#e0faf0", "#b8f0d0"],
    icon: "👗",
    link: "https://guess-red.vercel.app",
  },
  {
    name: "Papa John's Clone",
    desc: "Full clone of Papa John's restaurant website with menu page.",
    tags: ["HTML", "CSS", "JS"],
    color: ["#fde8ed", "#f9c6d0"],
    icon: "🍕",
    link: "https://papa-johns-alpha.vercel.app/menu.html",
  },
  {
    name: "Park Cinema Clone",
    desc: "Clone of Azerbaijan's Park Cinema website.",
    tags: ["HTML", "CSS", "JS"],
    color: ["#e0faf0", "#b8f0d0"],
    icon: "🎬",
    link: "https://cinema-3qiden82j-lemans-projects8bf08a3f.vercel.app",
  },
];

const skills = [
  "Python", "Django", "HTML", "CSS", "JavaScript", "React",
  "Bootstrap", "Tailwind", "SQL", "PostgreSQL", "REST API",
  "jQuery", "Git", "GitHub", "Postman", "MS Office",
];

const certs = [
  { name: "Back-end (Python)", issuer: "IT Brains Academy, 2025", icon: "🐍" },
  { name: "Front-end Development", issuer: "Div Academy, 2025", icon: "💻" },
  { name: "IT Automation with Python", issuer: "Google", icon: "🤖" },
  { name: "Python for Everybody", issuer: "University of Michigan", icon: "🎓" },
];

const experience = [
  {
    period: "2026 — Present",
    role: "Full-stack developer",
    company: "FeedSync",
    desc: "Developed server-side applications using Django. Designed and implemented RESTful APIs for mobile integration. Participated in mobile app development and backend integration.",
    dot: "dot-mint",
    icon: "🚀",
  },
  {
    period: "2025",
    role: "Back-end Developer Intern",
    company: "VR Media Marketinq",
    desc: "Server-side applications development with the Django framework. Construction of REST APIs and data working with the database.",
    dot: "dot-pink",
    icon: "💼",
  },
];

export default function PortfolioPage() {
  const [scrolled, setScrolled] = useState(false);
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Store target positions without triggering React re-renders.
    let targetX = -100;
    let targetY = -100;
    let targetRingX = -100;
    let targetRingY = -100;

    let ringX = -100;
    let ringY = -100;

    let rafId = 0;

    const update = () => {
      // Smooth ring movement (small easing).
      ringX += (targetRingX - ringX) * 0.12;
      ringY += (targetRingY - ringY) * 0.12;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      rafId = window.requestAnimationFrame(update);
    };

    const onMove = (e) => {
      // Dot follows the pointer directly.
      targetX = e.clientX - 6;
      targetY = e.clientY - 6;

      // Ring follows with smoothing inside rAF loop.
      targetRingX = e.clientX - 18;
      targetRingY = e.clientY - 18;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    rafId = window.requestAnimationFrame(update);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{style}</style>

      <Cursor cursorRef={cursorRef} ringRef={ringRef} />
      <Navbar scrolled={scrolled} onNavigate={scrollTo} />

      <Hero onNavigate={scrollTo} />
      <About />
      <Projects projects={projects} />
      <Experience experience={experience} />
      <Skills skills={skills} certs={certs} />
      <Contact />
      <Footer />
    </>
  );
}

createRoot(document.getElementById("root")).render(<PortfolioPage />);