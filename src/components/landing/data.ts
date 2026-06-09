export type WhyCard = {
  title: string;
  body: string;
  icon: string;
};

export type DocsCard = {
  title: string;
  tag: string;
  href: string;
  description: string;
  icon: string;
};
type Step = {
  title: string;
  description: string;
  number: string;
};

export const whyCards: WhyCard[] = [
  {
    title: "تعليم عملي",
    body: "مسارات واضحة ومشاريع تطبيقية تأخذك من الصفر حتى الاحتراف في مجالات تقنية متنوعة.",
    icon: "img/icon1.png",
  },
  {
    title: "مفتوح و مجتمعي",
    body: "كل المحتوى متاح على GitHub يمكنك المساهمة في تحسين الدروس أو إضافة محتوى جديد بسهولة.",
    icon: "img/icon2.png",
  },
  {
    title: "محتوى عربي واضح",
    body: "شروحات مبسطة ومترجمة للمصطلحات التقنية مع الحفاظ على دقة المعنى العلمي والعملي.",
    icon: "img/icon3.png",
  },
];

export const docsCards: DocsCard[] = [
  {
    title: "البرمجة و مجالاتها",
    tag: "مستحسن",
    href: "/docs/basics-doc/",
    description:
      "مدخل شامل لعالم البرمجة، الفرق بين المجالات المختلفة، وكيف تختار تخصصك الأول.",
    icon: "img/icon4.png",
  },
  {
    title: "مقدمة في بايثون",
    tag: "",
    href: "/docs/python-doc/مقدمة",
    description:
      "تعلم لغة بايثون من الصفر؛ المتغيرات،\
الدوال، وكيفية بناء أول مشروع لك.",
    icon: "img/icon5.png",
  },
  {
    title: "أساسيات الويب",
    tag: "",
    href: "/docs/basics-doc/مجالات البرمجة/تطوير المواقع الإلكترونية/الواجهات الأمامية",
    description:
      "تعلم كيفية بناء صفحات ويب تفاعلية باستخدام HTML و CSS و JavaScript.",
    icon: "img/Icon6.png",
  },
];
export const contributionSteps: string[] = [
  "اقرأ المستودع وافهم هيكل الملفات الأساسي.",
  "أنشئ فرعا جديدا وابدأ تحسيناتك أو إضافاتك.",
  "ارفع التغييرات مع وصف واضح ثم افتح Pull Request.",
  "ناقش المراجعات وحدث التغييرات حتى الاعتماد النهائي.",
];
export const steps: Step[] = [
  {
    number: "01",
    title: "افتح المستودع",
    description: "قم بعمل Fork لمستودع عُلِم على حسابك الشخصي.",
  },
  {
    number: "02",
    title: "أنشئ فرعًا جديدًا",
    description: "ابدأ العمل على تعديلاتك في Branch خاص بالميزة أو الإصلاح.",
  },
  {
    number: "03",
    title: "أرسل Pull Request",
    description: "قدم تعديلاتك للمراجعة من قبل فريق إدارة المحتوى.",
  },
  {
    number: "04",
    title: "التعليقات تُقبل عبر GitHub Copilot",
    description: "استخدم ذكاء الآلة لتحسين جودة الكود والمحتوى المقترح.",
  },
];
