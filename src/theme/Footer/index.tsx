import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
export default function Footer(): ReactNode {
  const icon1 = useBaseUrl("/img/icon7.png");
  const icon2 = useBaseUrl("/img/icon8.png");
  const starIcon = useBaseUrl("/img/icon9.png");
  const accessIcon = useBaseUrl("/img/icon10.png");
  return (
    <footer className="w-full bg-[#141414]  10 px-6 lg:px-12 pt-20 pb-10">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
          <div className="w-full">
            <h3 className="text-[#8C5AF6] font-bold text-[30px] leading-9 mb-6">
              عُلم
            </h3>
            <p className="text-[#B3B3B3] text-[16px] leading-[26px] mb-6">
              مبادرة عربية تهدف لإثراء المحتوى التقني البرمجي باللغة العربية
              بأسلوب حديث ومفتوح المصدر.
            </p>

            <div className="flex gap-4  justify-start">
              <button className="w-10 h-10 rounded-full bg-[#2B2B2B] flex items-center justify-center">
                <img src={icon2} alt="Social Icon 2" />
              </button>
              <button className="w-10 h-10 rounded-full bg-[#2B2B2B] flex items-center justify-center">
                <img src={icon1} alt="Social Icon 1" />
              </button>
            </div>
          </div>
          <div className="w-full"></div>
          <div className="w-full">
            <h4 className="text-white font-semibold mb-4">روابط سريعة</h4>

            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition">
                  الخصوصية
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition">
                  الشروط
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition">
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full">
            <h4 className="text-white font-semibold mb-4">المجتمع</h4>

            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  className="hover:text-white transition"
                >
                  GitHub Repository
                </a>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition">
                  نظام المساهمة
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t  mt-10 pt-4 text-[14px] leading-5 text-[#4D4D4D] flex flex-col md:flex-row justify-between items-center gap-3">
          <span className="font-regular text-[14px] leading-5 ">
            © {new Date().getFullYear()} عُلم. جميع الحقوق محفوظة.
          </span>
          <div className="flex gap-8">
            <div className="flex items-center gap-2 font-light">
              <img src={starIcon} alt="Star" className="w-4 h-4 opacity-70" />
              <span>محتوى علم مفتوح المصدر</span>
            </div>

            <div className="flex items-center gap-2 font-light">
              <img
                src={accessIcon}
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
