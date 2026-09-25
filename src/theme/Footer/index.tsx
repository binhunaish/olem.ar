import ThemeImage from "../../components/ThemeImage";
import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import { GITHUB_URL } from "@site/src/config/constants";
export default function Footer(): ReactNode {
  return (
    <footer className="w-full bg-[var(--olem-footer)]  10 px-6 lg:px-12 pt-20 pb-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
          <div className="w-full">
            <h3 className="text-[var(--ifm-color-primary)] font-bold text-[30px] leading-9 mb-6">
              عُلم
            </h3>
            <p className="text-[var(--ifm-text-color-secondary)] text-[16px] leading-6.5 mb-6">
              مبادرة عربية تهدف لإثراء المحتوى التقني البرمجي باللغة العربية
              بأسلوب حديث ومفتوح المصدر.
            </p>

            <div className="flex gap-4  justify-start">
              <button className="w-10 h-10 rounded-full bg-[var(--olem-secondary-button)] flex items-center justify-center">
                <ThemeImage dark="/img/icon8.png" light="/img/light/github.svg" alt="Social Icon 2" className="w-5 h-5 object-contain" />
              </button>
              <button className="w-10 h-10 rounded-full bg-[var(--olem-secondary-button)] flex items-center justify-center">
                <ThemeImage dark="/img/icon7.png" light="/img/light/social.svg" alt="Social Icon 1" className="w-5 h-5 object-contain" />
              </button>
            </div>
          </div>
          <div className="w-full"></div>
          <div className="w-full">
            <h4 className="text-[var(--ifm-text-color)] font-semibold mb-4">روابط سريعة</h4>

            <ul className="space-y-2 text-[var(--olem-footer-links)] text-sm">
              <li>
                <Link to="/privacy" className="hover:text-[var(--olem-nav-hover)] transition">
                  الخصوصية
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-[var(--olem-nav-hover)] transition">
                  الشروط
                </Link>
              </li>
              <li>
                <a 
                href={GITHUB_URL + "/discussions"} 
                className="hover:text-[var(--olem-nav-hover)] transition">
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full">
            <h4 className="text-[var(--ifm-text-color)] font-semibold mb-4">المجتمع</h4>

            <ul className="space-y-2 text-[var(--olem-footer-links)] text-sm">
              <li>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  className="hover:text-[var(--olem-nav-hover)] transition"
                >
                  مستودع GitHub
                </a>
              </li>
              <li>
                <Link 
                href={GITHUB_URL + "/blob/main/CONTRIBUTING.md"}
                className="hover:text-[var(--olem-nav-hover)] transition">
                  نظام المساهمة
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t  mt-10 pt-4 text-[14px] leading-5 text-[var(--olem-footer-fine)] flex flex-col md:flex-row justify-between items-center gap-3">
          <span className="font-regular text-[14px] leading-5 ">
            © {new Date().getFullYear()} عُلم. جميع الحقوق محفوظة.
          </span>
          <div className="flex gap-8">
            <div className="flex items-center gap-2 font-light">
              <ThemeImage dark="/img/icon9.png" light="/img/light/source.svg" alt="Star" className="w-4 h-4 opacity-70" />
              <span>محتوى علم مفتوح المصدر</span>
            </div>

            <div className="flex items-center gap-2 font-light">
              <ThemeImage
                dark="/img/icon10.png" light="/img/light/accessibility.svg"
                alt="accessibility"
                className="w-4 h-4 opacity-70"
              />
              <span>سهولة الوصول مضمونة</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
