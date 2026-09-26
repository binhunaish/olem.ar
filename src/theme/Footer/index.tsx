import { useRef, useState, type ReactNode } from "react";
import Link from "@docusaurus/Link";
import { GITHUB_URL } from "@site/src/config/constants";

export default function Footer(): ReactNode {
  const shareInProgress = useRef(false);
  const [isSharing, setIsSharing] = useState(false);

  async function shareSite(): Promise<void> {
    if (shareInProgress.current) return;

    shareInProgress.current = true;
    setIsSharing(true);

    try {
      const url = window.location.href;

      if (navigator.share) {
        await navigator.share({ title: document.title, url });
      } else {
        await navigator.clipboard.writeText(url);
        window.alert("تم نسخ رابط الموقع لمشاركته.");
      }
    } catch (error) {
      if (
        error instanceof DOMException &&
        ["AbortError", "InvalidStateError"].includes(error.name)
      ) {
        return;
      }
      console.error("تعذرت مشاركة رابط الموقع.", error);
    } finally {
      shareInProgress.current = false;
      setIsSharing(false);
    }
  }

  return (
    <footer className="w-full bg-(--olem-footer) px-6 lg:px-12 pt-20 pb-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
          <div className="w-full">
            <h3 className="text-(--olem-text1) font-bold text-[30px] leading-9 mb-6">
              عُلم
            </h3>
            <p className="text-(--ifm-text-color-secondary) text-[16px] leading-6.5 mb-6">
              مشروع عربي يهدف لإثراء المحتوى التقني البرمجي باللغة العربية
              بأسلوب حديث ومفتوح المصدر.
            </p>

            <div className="flex gap-4  justify-start">
              <button
                type="button"
                onClick={shareSite}
                disabled={isSharing}
                aria-label="مشاركة رابط الموقع"
                title="مشاركة رابط الموقع"
                className="w-10 h-10 rounded-full bg-(--olem-secondary-button) text-(--olem-text2) flex items-center justify-center cursor-pointer"
              >
                <span aria-hidden="true" className="material-symbols-rounded">
                  share
                </span>
              </button>
              <button className="w-10 h-10 rounded-full bg-(--olem-secondary-button) flex items-center justify-center cursor-pointer">
                <Link
                  href={GITHUB_URL + "/discussions"}
                  className="material-symbols-rounded text-(--olem-text2)"
                >
                  language
                </Link>
              </button>
            </div>
          </div>
          <div className="w-full"></div>

          <div className="w-full">
            <h4 className="text-(--olem-text1) font-semibold mb-4">
              روابط سريعة
            </h4>

            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-(--olem-nav-hover) text-(--olem-text2) transition"
                >
                  الخصوصية
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-(--olem-nav-hover) text-(--olem-text2) transition"
                >
                  الشروط
                </Link>
              </li>
              <li>
                <a
                  href={GITHUB_URL + "/discussions"}
                  className="hover:text-(--olem-nav-hover) text-(--olem-text2) transition"
                >
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full">
            <h4 className="text-(--olem-text1) font-semibold mb-4">المجتمع</h4>

            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  className="hover:text-(--olem-nav-hover) text-(--olem-text2) transition"
                >
                  مستودع GitHub
                </a>
              </li>
              <li>
                <Link
                  href={GITHUB_URL + "/blob/main/CONTRIBUTING.md"}
                  className="hover:text-(--olem-nav-hover) text-(--olem-text2) transition"
                >
                  نظام المساهمة
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-10 pt-4 text-[14px] leading-5 text-(--olem-footer-fine) flex flex-col md:flex-row justify-between items-center gap-3">
          <span className="font-regular text-[14px] leading-5 ">
            © {new Date().getFullYear()} عُلم. جميع الحقوق محفوظة.
          </span>
          <div className="flex gap-8">
            <div className="flex items-center gap-2 font-light">
              <span className="material-symbols-rounded">license</span>
              <span>محتوى علم مفتوح المصدر</span>
            </div>

            <div className="flex items-center gap-2 font-light">
              <span className="material-symbols-rounded">
                accessibility_new
              </span>
              <span>سهولة الوصول مضمونة</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
