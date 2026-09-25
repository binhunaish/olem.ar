import NavbarColorModeToggle from "@theme/Navbar/ColorModeToggle";
import { useState } from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { GITHUB_URL } from "@site/src/config/constants";
import Links from './coponents/links'

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const logoSrc = useBaseUrl("/img/logo.svg");
  const landingUrl = useBaseUrl("/");
  const githubLogo = useBaseUrl("/img/Container.png");

  return (
    <>
      <nav
        dir="rtl"
        className="navbar navbar--fixed-top w-full h-17.5 flex items-center justify-between
        px-4 sm:px-6 lg:px-12
        bg-[var(--olem-navbar)] border-b border-[var(--olem-nav-border)] backdrop-blur-md z-1"
      >
        <div className="flex flex-row items-center gap-4 lg:gap-8">
          <Link className="flex flex-row items-center gap-4" to={landingUrl}>
            <img src={logoSrc} alt="Logo" className="h-8 w-auto" />
            <div className="flex text-2xl">عُلِم</div>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Links />
          </div>
        </div>

        <div className="hidden md:flex justify-center gap-4">
          <div className="relative ">
            <input
              type="text"
              placeholder="ابحث..."
              className="w-fit h-full rounded-full bg-[var(--olem-input)] border border-[var(--olem-nav-border)]
              text-[var(--ifm-text-color)] placeholder-[var(--olem-placeholder)] px-4 outline-none
              focus:border-[var(--ifm-color-primary)] transition"
            />
          </div>

          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 rounded-full bg-[var(--ifm-color-primary)] flex items-center gap-2 font-bold text-white"
          >
            <img src={githubLogo} alt="GitHub" className="" />
            ساهم
          </a>
        </div>

        <div className="flex items-center gap-3">
          <NavbarColorModeToggle />
          <button
            aria-label="فتح القائمة"
            aria-expanded={open}
            className="md:hidden text-[var(--ifm-text-color)] text-2xl"
            onClick={() => setOpen(true)}
          >
            ☰
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-50 transition ${
          open ? "visible" : "invisible"
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/50 transition ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />

        {/* Sidebar from LEFT */}
        <div
          className={`absolute top-0 right-0 h-full w-65
          bg-[var(--olem-menu)] border-r border-[var(--olem-nav-border)]
          p-6 flex flex-col gap-6
          transition-transform duration-300 ease-out
          ${open ? "translate-x-0" : "-translate-x-full"} z-100`}
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <span className="text-[var(--ifm-text-color)] font-semibold">القائمة</span>

            <button
              onClick={() => setOpen(false)}
              className="text-sm text-[var(--olem-placeholder)] hover:text-[var(--olem-nav-hover)] transition"
            >
              إلغاء
            </button>
          </div>

          {/* Links */}
          <Links />

          {/* Search */}
          <input
            type="text"
            placeholder="ابحث..."
            className="w-full h-10 rounded-full bg-[var(--olem-input)] border border-[var(--olem-nav-border)]
            text-[var(--ifm-text-color)] placeholder-[var(--olem-placeholder)] px-4 outline-none"
          />

          {/* Button */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 rounded-full bg-[var(--ifm-color-primary)]
            flex items-center justify-center gap-2 text-white font-bold"
          >
            <img src={githubLogo} alt="GitHub" />
            ساهم
          </a>
        </div>
      </div>
    </>
  );
}
