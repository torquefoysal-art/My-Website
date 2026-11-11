"use client";

import { Contact } from "@/components/site/Contact";
import { Cursor } from "@/components/site/Cursor";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { Loader } from "@/components/site/Loader";
import { Nav } from "@/components/site/Nav";
import { Practice } from "@/components/site/Practice";
import { Studies } from "@/components/site/Studies";
import { SceneGate } from "@/components/scene/SceneGate";

export function Site() {
  return (
    <>
      <a className="skip" href="#content">
        Skip to content
      </a>
      <SceneGate />
      <div className="vignette" aria-hidden="true" />
      <Cursor />
      <Loader />
      <div className="page">
        <Nav />
        <main id="content">
          <Hero />
          <Studies />
          <Practice />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
