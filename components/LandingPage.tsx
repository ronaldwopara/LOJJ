"use client";

import { useEffect } from "react";
import LandingMarkup from "./LandingMarkup";
import ShaderBackground from "./ShaderBackground";

export default function LandingPage() {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    if (window.location.hash) {
      history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search,
      );
    }
    const scrollTop = () => window.scrollTo(0, 0);
    scrollTop();
    window.addEventListener("load", scrollTop);

    const heroBox = document.getElementById("dynamic-hero-box");
    const heroTimer = window.setTimeout(() => {
      heroBox?.classList.add("visible");
    }, 200);

    const scrollIndicator = document.querySelector(".scroll-indicator");
    let scrollIndTimer: number | undefined;
    let vizObserver: IntersectionObserver | undefined;
    if (scrollIndicator) {
      scrollIndTimer = window.setTimeout(() => {
        scrollIndicator.classList.add("visible");
      }, 1200);
      const vizSection = document.querySelector(".visualization-section");
      if (vizSection && "IntersectionObserver" in window) {
        vizObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting && window.innerWidth < 768) {
                scrollIndicator.classList.remove("visible");
                vizObserver?.disconnect();
              }
            });
          },
          { threshold: 0.1 },
        );
        vizObserver.observe(vizSection);
      }
    }

    const signupCta = document.querySelector("[data-scroll-signup]");
    const signupSection = document.getElementById("signup");
    const onSignupClick = (e: Event) => {
      e.preventDefault();
      signupSection?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    signupCta?.addEventListener("click", onSignupClick);

    const mobileMenu = document.getElementById("mobile-menu");
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const closeMenu = document.getElementById("close-menu");

    const openMenu = () => {
      mobileMenu?.classList.remove("invisible", "opacity-0");
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    };
    const closeMenuFn = () => {
      mobileMenu?.classList.add("invisible", "opacity-0");
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };

    hamburgerBtn?.addEventListener("click", openMenu);
    closeMenu?.addEventListener("click", closeMenuFn);
    const menuLinks = mobileMenu?.querySelectorAll("a") ?? [];
    menuLinks.forEach((link) => link.addEventListener("click", closeMenuFn));

    const footerForm = document.getElementById("footer-signup") as HTMLFormElement | null;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const tooltipTimeouts: number[] = [];

    const clearAllTooltips = () => {
      tooltipTimeouts.forEach((t) => clearTimeout(t));
      tooltipTimeouts.length = 0;
      footerForm?.querySelectorAll(".form-tooltip").forEach((tip) => {
        tip.classList.remove("visible");
      });
    };

    const onSubmit = (e: Event) => {
      if (!footerForm) return;
      clearAllTooltips();
      const inputs = footerForm.querySelectorAll(".newsletter-input");
      let hasError = false;
      let firstError: HTMLInputElement | undefined;

      inputs.forEach((input) => {
        const el = input as HTMLInputElement;
        const wrapper = el.closest(".newsletter-form");
        const tooltip = wrapper?.querySelector(".form-tooltip");
        if (!tooltip) return;

        let invalid = false;
        if (!el.value.trim()) {
          invalid = true;
        } else if (el.type === "email" && !emailRegex.test(el.value.trim())) {
          invalid = true;
          tooltip.textContent = "Please enter a valid email";
        }

        if (invalid) {
          hasError = true;
          firstError ??= el;
          tooltip.classList.add("visible");
          const t = window.setTimeout(() => tooltip.classList.remove("visible"), 3000);
          tooltipTimeouts.push(t);
        }
      });

      if (hasError) {
        e.preventDefault();
        if (firstError) firstError.focus();
      } else {
        const btn = footerForm.querySelector(".newsletter-btn");
        if (btn) btn.textContent = "Submitted successfully";
        const t = window.setTimeout(() => {
          footerForm.reset();
          if (btn) btn.textContent = "OK";
        }, 3000);
        tooltipTimeouts.push(t);
      }
    };

    footerForm?.addEventListener("submit", onSubmit);

    const formInputs = footerForm
      ? (Array.from(footerForm.querySelectorAll(".newsletter-input")) as HTMLInputElement[])
      : [];

    const onInput = (ev: Event) => {
      const input = ev.target as HTMLInputElement;
      const wrapper = input.closest(".newsletter-form");
      const tooltip = wrapper?.querySelector(".form-tooltip");
      tooltip?.classList.remove("visible");
    };

    const onKeydown = (e: KeyboardEvent) => {
      const input = e.target as HTMLInputElement;
      const idx = formInputs.indexOf(input);
      if (e.key === "ArrowDown" || (e.key === "Tab" && !e.shiftKey)) {
        if (idx < formInputs.length - 1) {
          e.preventDefault();
          formInputs[idx + 1]?.focus();
        }
      } else if (e.key === "ArrowUp" || (e.key === "Tab" && e.shiftKey)) {
        if (idx > 0) {
          e.preventDefault();
          formInputs[idx - 1]?.focus();
        }
      }
    };

    formInputs.forEach((input) => {
      input.addEventListener("input", onInput);
      input.addEventListener("keydown", onKeydown);
    });

    return () => {
      window.removeEventListener("load", scrollTop);
      window.clearTimeout(heroTimer);
      if (scrollIndTimer) window.clearTimeout(scrollIndTimer);
      vizObserver?.disconnect();
      signupCta?.removeEventListener("click", onSignupClick);
      hamburgerBtn?.removeEventListener("click", openMenu);
      closeMenu?.removeEventListener("click", closeMenuFn);
      menuLinks.forEach((link) => link.removeEventListener("click", closeMenuFn));
      footerForm?.removeEventListener("submit", onSubmit);
      formInputs.forEach((input) => {
        input.removeEventListener("input", onInput);
        input.removeEventListener("keydown", onKeydown);
      });
      clearAllTooltips();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center relative">
      <ShaderBackground />
      <LandingMarkup />
    </div>
  );
}
