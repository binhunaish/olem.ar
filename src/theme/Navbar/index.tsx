import { useState } from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const logoSrc = useBaseUrl("/img/logo.svg");
  const landingUrl = useBaseUrl("/");
  const docsUrl = useBaseUrl("/docs/basics-doc");
  const ContributeUrl = "https://github.com/binhunaish/olem.ar/blob/main/CONTRIBUTING.md";
  const aboutUrl = useBaseUrl("/#why");
  const githubLogo = useBaseUrl("/img/Container.png");

  return (
    <>

      <nav
        dir="rtl"
        className="navbar navbar--fixed-top w-full h-[70px] flex items-center justify-between
        px-4 sm:px-6 lg:px-12
        bg-[rgba(28,28,28,0.6)] border-b border-white/10 backdrop-blur-md z-1"
      >
       
        <div className="flex items-center gap-4 lg:gap-8">
          <Link to={landingUrl}>
            <img src={logoSrc} alt="Logo" className="h-8 w-auto" />
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link className="text-gray-300 hover:text-white" to={docsUrl}>
              الوثائق
            </Link>
            <Link className="text-gray-300 hover:text-white" to={aboutUrl}>
              عن المشروع
            </Link>
          </div>
        </div>

      
        <div className="hidden md:flex justify-center gap-4">
          <div className="relative ">
            <input
              type="text"
              placeholder="ابحث..."
              className="w-fit h-full rounded-full bg-white/5 border border-white/10
              text-white placeholder-gray-400 px-4 outline-none
              focus:border-purple-500 transition"
            />
          </div>

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 rounded-full bg-[rgba(140,90,246,1)] flex items-center gap-2 font-bold text-white"
          >
            <img src={githubLogo} alt="GitHub" className="" />
            ساهم
          </a>
        </div>

     
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(true)}
        >
          ☰
        </button>
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
          className={`absolute top-0 right-0 h-full w-[260px]
          bg-[#0B0F1A] border-r border-white/10
          p-6 flex flex-col gap-6
          transition-transform duration-300 ease-out
          ${open ? "translate-x-0" : "-translate-x-full"} z-100`}
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <span className="text-white font-semibold">القائمة</span>

            <button
              onClick={() => setOpen(false)}
              className="text-sm text-gray-400 hover:text-white transition"
            >
              إلغاء
            </button>
          </div>

          {/* Links */}
          <Link
            to={docsUrl}
            onClick={() => setOpen(false)}
            className="text-gray-300 hover:text-white transition"
          >
            الوثائق
          </Link>

          <Link
            to={ContributeUrl}
            onClick={() => setOpen(false)}
            className="text-gray-300 hover:text-white transition"
          >
            المساهمة
          </Link>

          <Link
            to={aboutUrl}
            onClick={() => setOpen(false)}
            className="text-gray-300 hover:text-white transition"
          >
            عن المشروع
          </Link>

          {/* Search */}
          <input
            type="text"
            placeholder="ابحث..."
            className="w-full h-[40px] rounded-full bg-white/5 border border-white/10
            text-white placeholder-gray-400 px-4 outline-none"
          />

          {/* Button */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 rounded-full bg-[#8C5AF6]
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