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

    const waitlistCta = document.querySelector("[data-scroll-waitlist]");
    const waitlistSection = document.getElementById("waitlist");
    const onWaitlistClick = (e: Event) => {
      e.preventDefault();
      waitlistSection?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    waitlistCta?.addEventListener("click", onWaitlistClick);

    const mobileMenu = document.getElementById("mobile-menu");
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const closeMenu = document.getElementById("close-menu");
    const mainNav = document.getElementById("main-nav");

    const updateNavScrollState = () => {
      const hasScrolled = window.scrollY > 2;
      if (mainNav) {
        mainNav.setAttribute("data-scrolled", hasScrolled ? "true" : "false");
      }
    };
    updateNavScrollState();
    window.requestAnimationFrame(updateNavScrollState);
    window.addEventListener("scroll", updateNavScrollState, { passive: true });

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
    const waitlistForm = document.getElementById("waitlist-form") as HTMLFormElement | null;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const tooltipTimeouts: number[] = [];

    const clearAllTooltips = () => {
      tooltipTimeouts.forEach((t) => clearTimeout(t));
      tooltipTimeouts.length = 0;
      footerForm?.querySelectorAll(".form-tooltip").forEach((tip) => {
        tip.classList.remove("visible");
      });
    };

    async function submitToWaitlist(form: HTMLFormElement) {
      const fd = new FormData(form);
      const payload = {
        fullName: String(fd.get("fullName") ?? "").trim(),
        email: String(fd.get("email") ?? "").trim(),
        hotel: String(fd.get("hotel") ?? "").trim(),
        role: String(fd.get("role") ?? "").trim(),
        location: String(fd.get("location") ?? "").trim(),
        source: form.id,
      };

      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = (await res.json().catch(() => null)) as
        | { ok: true; message?: string }
        | { ok: false; error?: string }
        | null;

      if (!res.ok || !json || !json.ok) {
        const msg = json && "error" in json && json.error ? json.error : "Something went wrong.";
        throw new Error(msg);
      }
      return json.message ?? "Thanks — you're on the waitlist.";
    }

    const onSubmit = async (e: Event) => {
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
        e.preventDefault();
        const btn = footerForm.querySelector(".newsletter-btn") as HTMLButtonElement | null;
        if (btn) {
          btn.disabled = true;
          btn.textContent = "Sending...";
        }
        try {
          await submitToWaitlist(footerForm);
          if (btn) btn.textContent = "Submitted";
          const t = window.setTimeout(() => {
            footerForm.reset();
            if (btn) {
              btn.textContent = "OK";
              btn.disabled = false;
            }
          }, 2400);
          tooltipTimeouts.push(t);
        } catch {
          if (btn) {
            btn.textContent = "Try again";
            btn.disabled = false;
          }
        }
      }
    };

    footerForm?.addEventListener("submit", onSubmit);

    const waitlistStatus = waitlistForm?.querySelector(".waitlist-status") as HTMLDivElement | null;
    const waitlistSubmitBtn = waitlistForm?.querySelector("button[type='submit']") as
      | HTMLButtonElement
      | null;

    const onWaitlistSubmit = async (e: Event) => {
      if (!waitlistForm) return;
      e.preventDefault();
      waitlistStatus && (waitlistStatus.textContent = "");
      if (waitlistSubmitBtn) {
        waitlistSubmitBtn.disabled = true;
        waitlistSubmitBtn.textContent = "Joining...";
      }
      try {
        const message = await submitToWaitlist(waitlistForm);
        if (waitlistStatus) waitlistStatus.textContent = message;
        waitlistForm.reset();
      } catch (err) {
        if (waitlistStatus) {
          waitlistStatus.textContent =
            err instanceof Error ? err.message : "Couldn’t submit. Please try again.";
        }
      } finally {
        if (waitlistSubmitBtn) {
          waitlistSubmitBtn.disabled = false;
          waitlistSubmitBtn.textContent = "Join waitlist";
        }
      }
    };

    waitlistForm?.addEventListener("submit", onWaitlistSubmit);

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
      window.removeEventListener("scroll", updateNavScrollState);
      window.clearTimeout(heroTimer);
      if (scrollIndTimer) window.clearTimeout(scrollIndTimer);
      vizObserver?.disconnect();
      waitlistCta?.removeEventListener("click", onWaitlistClick);
      hamburgerBtn?.removeEventListener("click", openMenu);
      closeMenu?.removeEventListener("click", closeMenuFn);
      menuLinks.forEach((link) => link.removeEventListener("click", closeMenuFn));
      footerForm?.removeEventListener("submit", onSubmit);
      waitlistForm?.removeEventListener("submit", onWaitlistSubmit);
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
