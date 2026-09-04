/**
 * Terms and Conditions content, Russian + English.
 *
 * Single source of truth for /terms/ (ru) and /terms/en/ (en) — the two pages
 * render the same structure so the translations cannot drift. Both versions are
 * kept section-for-section identical. Nothing here is legal advice.
 */
import type { LegalDoc } from "./types";
import { CONTACT_EMAIL } from "../consts";

const mail = `<a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>`;
const privacyLinkRu = '<a href="/privacy/">Политике конфиденциальности</a>';
const privacyLinkEn = '<a href="/privacy/en/">Privacy Policy</a>';

const ru: LegalDoc = {
  lang: "ru",
  locale: "ru_RU",
  title: "Пользовательское соглашение",
  updated: "ОБНОВЛЕНО 4 СЕНТЯБРЯ 2026",
  description:
    "Условия использования приложения BrainDrop: бесплатно для личного некоммерческого использования, прогресс хранится только на устройстве, приложение предоставляется «как есть».",
  lead: "Устанавливая и используя приложение BrainDrop, вы соглашаетесь с настоящим Соглашением. Если вы не согласны с каким-либо из условий, не устанавливайте и не используйте приложение.",
  langSwitchLabel: "Язык документа",
  sections: [
    {
      heading: "Принятие условий",
      blocks: [
        {
          p: "Настоящее Пользовательское соглашение (далее — «Соглашение») регулирует использование мобильного приложения BrainDrop (далее — «Приложение»), которое разрабатывается и распространяется частным разработчиком (далее — «Разработчик», «мы»).",
        },
        {
          p: "Устанавливая, запуская или используя Приложение, вы подтверждаете, что ознакомились с Соглашением и принимаете его. Если Соглашение вам не подходит, не используйте Приложение.",
        },
      ],
    },
    {
      heading: "Право на использование",
      blocks: [
        {
          p: "Разработчик предоставляет вам ограниченное, неисключительное, непередаваемое и отзывное право использовать Приложение на принадлежащих вам устройствах для личных некоммерческих целей — изучения английского языка.",
        },
        {
          p: "Приложение распространяется через магазин Google Play, поэтому к его загрузке и использованию также применяются условия Google Play и соглашение с конечным пользователем.",
        },
      ],
    },
    {
      heading: "Что входит в приложение",
      blocks: [
        {
          p: "Приложение предоставляется бесплатно и включает полный доступ к учебному контенту (неправильные глаголы, времена, фразовые глаголы) и тренажёрам-квизам. Подписок, встроенных покупок и платных функций нет.",
        },
        {
          p: "Приложение работает офлайн; для его использования не требуются учётная запись и подключение к интернету.",
        },
      ],
    },
    {
      heading: "Ограничения",
      blocks: [
        { p: "Используя Приложение, вы обязуетесь не совершать следующие действия:" },
        {
          list: [
            "копировать, извлекать и распространять учебные базы данных, тексты, подборки и интерфейс Приложения за пределами обычного личного использования;",
            "использовать Приложение или его содержимое в коммерческих целях, в том числе для платного обучения или создания конкурирующего продукта;",
            "декомпилировать, дизассемблировать и иным образом пытаться получить исходный код Приложения, кроме случаев, прямо разрешённых законодательством;",
            "изменять Приложение, создавать производные сборки и публиковать их, в том числе под своим именем;",
            "применять автоматизированные средства для массового извлечения содержимого.",
          ],
        },
      ],
    },
    {
      heading: "Интеллектуальная собственность",
      blocks: [
        {
          p: "Приложение, его исходный код, дизайн, графика, название и логотип, а также подбор, структура и оформление учебных материалов (переводы, формы глаголов, правила, примеры) принадлежат Разработчику и охраняются законодательством об интеллектуальной собственности.",
        },
        {
          p: "Сами по себе факты о языке не являются объектом исключительных прав, однако конкретная подборка и подача материалов в Приложении защищены. Настоящее Соглашение не передаёт вам никаких прав на Приложение, кроме права использования, описанного выше.",
        },
      ],
    },
    {
      heading: "Учебный контент",
      blocks: [
        {
          p: "Учебные материалы предназначены для самостоятельного изучения языка. Мы готовим и проверяем их с разумной тщательностью, но не гарантируем полное отсутствие ошибок, неточностей или пропусков и можем изменять содержание.",
        },
        {
          p: "Приложение не заменяет преподавателя, учебный курс или экзаменационную подготовку. Разработчик не отвечает за результаты тестов, экзаменов и иные решения, принятые на основе материалов Приложения.",
        },
      ],
    },
    {
      heading: "Ваши данные и прогресс",
      blocks: [
        {
          p: "Прогресс обучения хранится только на вашем устройстве. Синхронизации и резервного копирования на стороне Разработчика нет, поэтому при удалении Приложения, очистке его данных или сбросе устройства прогресс теряется безвозвратно.",
        },
        {
          p: `Как Приложение обращается с данными, описано в ${privacyLinkRu}.`,
        },
      ],
    },
    {
      heading: "Приложение предоставляется «как есть»",
      blocks: [
        {
          p: "Приложение предоставляется на условиях «как есть» и «как доступно», без каких-либо гарантий, явных или подразумеваемых, в максимально допустимой законом степени. Мы не гарантируем, что Приложение будет работать бесперебойно, без ошибок, на любом устройстве и версии операционной системы, и что обнаруженные ошибки будут исправлены.",
        },
      ],
    },
    {
      heading: "Ограничение ответственности",
      blocks: [
        {
          p: "В максимально допустимой применимым законодательством степени Разработчик не несёт ответственности за косвенные, случайные или последующие убытки, упущенную выгоду, а также за потерю данных или прогресса, возникшие в результате использования или невозможности использования Приложения.",
        },
        {
          p: "Приложение предоставляется бесплатно. В юрисдикциях, где ограничение или исключение ответственности не допускается, приведённые положения применяются в той мере, в какой это разрешено законом, и не затрагивают ваши обязательные права потребителя.",
        },
      ],
    },
    {
      heading: "Изменения, обновления и прекращение поддержки",
      blocks: [
        {
          p: "Мы можем изменять функциональность Приложения, состав учебных категорий и условия настоящего Соглашения, выпускать обновления, а также прекратить распространение или поддержку Приложения либо отдельных его версий.",
        },
        {
          p: "Существенные изменения Соглашения публикуются на этой странице с новой датой в начале документа. Продолжая пользоваться Приложением после вступления изменений в силу, вы принимаете обновлённое Соглашение.",
        },
      ],
    },
    {
      heading: "Распространение через Google Play",
      blocks: [
        {
          p: "Приложение распространяется через Google Play. Google не является стороной настоящего Соглашения, не выступает спонсором Приложения и не поддерживает его. К отношениям, связанным с загрузкой и обновлением Приложения, применяются условия Google.",
        },
      ],
    },
    {
      heading: "Применимое право и разрешение споров",
      blocks: [
        {
          p: "К настоящему Соглашению применяется законодательство Республики Беларусь. Споры, которые не удалось урегулировать путём переговоров, подлежат рассмотрению в компетентных судах Республики Беларусь.",
        },
        {
          p: "Если вы используете Приложение как потребитель, за вами сохраняются обязательные права, предоставляемые законодательством страны вашего постоянного проживания.",
        },
      ],
    },
    {
      heading: "Контакты",
      blocks: [
        {
          p: `Вопросы по настоящему Соглашению: ${mail}.`,
        },
      ],
    },
  ],
};

const en: LegalDoc = {
  lang: "en",
  locale: "en_US",
  title: "Terms and Conditions",
  updated: "LAST UPDATED 4 SEPTEMBER 2026",
  description:
    'Terms for using the BrainDrop app: free for personal, non-commercial use, progress stays only on your device, the app is provided "as is".',
  lead: "By installing and using the BrainDrop app, you agree to these Terms. If you do not agree with any of them, do not install or use the app.",
  langSwitchLabel: "Document language",
  sections: [
    {
      heading: "Acceptance of the terms",
      blocks: [
        {
          p: 'These Terms and Conditions (the "Terms") govern your use of the BrainDrop mobile app (the "App"), which is developed and distributed by an independent developer ("the Developer", "we").',
        },
        {
          p: "By installing, launching, or using the App, you confirm that you have read and accept these Terms. If the Terms do not work for you, do not use the App.",
        },
      ],
    },
    {
      heading: "Licence to use",
      blocks: [
        {
          p: "The Developer grants you a limited, non-exclusive, non-transferable, and revocable right to use the App on devices you own, for personal, non-commercial purposes — learning English.",
        },
        {
          p: "The App is distributed through Google Play, so Google Play's terms and end-user licence agreement also apply to downloading and using it.",
        },
      ],
    },
    {
      heading: "What the app includes",
      blocks: [
        {
          p: "The App is provided free of charge and includes full access to the learning content (irregular verbs, tenses, phrasal verbs) and the quiz trainers. There are no subscriptions, in-app purchases, or paid features.",
        },
        {
          p: "The App works offline; using it requires no account and no internet connection.",
        },
      ],
    },
    {
      heading: "Restrictions",
      blocks: [
        { p: "When using the App, you agree not to:" },
        {
          list: [
            "copy, extract, or distribute the App's learning databases, texts, compilations, or interface beyond ordinary personal use;",
            "use the App or its content for commercial purposes, including paid tuition or building a competing product;",
            "decompile, disassemble, or otherwise attempt to derive the App's source code, except where expressly permitted by law;",
            "modify the App, create derivative builds, or publish them, including under your own name;",
            "use automated means to extract content in bulk.",
          ],
        },
      ],
    },
    {
      heading: "Intellectual property",
      blocks: [
        {
          p: "The App, its source code, design, graphics, name and logo, and the selection, structure, and presentation of the learning materials (translations, verb forms, rules, examples) belong to the Developer and are protected by intellectual-property law.",
        },
        {
          p: "Facts about the language are not themselves subject to exclusive rights, but the particular selection and presentation of the materials in the App are protected. These Terms grant you no rights in the App other than the right to use it described above.",
        },
      ],
    },
    {
      heading: "Educational content",
      blocks: [
        {
          p: "The learning materials are intended for self-study. We prepare and review them with reasonable care, but we do not guarantee that they are free of errors, inaccuracies, or omissions, and we may change the content.",
        },
        {
          p: "The App is not a substitute for a teacher, a course, or exam preparation. The Developer is not responsible for the results of tests or exams, or for other decisions you make based on the App's materials.",
        },
      ],
    },
    {
      heading: "Your data and progress",
      blocks: [
        {
          p: "Your learning progress is stored only on your device. There is no sync or backup on the Developer's side, so uninstalling the App, clearing its data, or resetting the device permanently loses your progress.",
        },
        {
          p: `How the App handles data is described in the ${privacyLinkEn}.`,
        },
      ],
    },
    {
      heading: 'The app is provided "as is"',
      blocks: [
        {
          p: 'The App is provided on an "as is" and "as available" basis, without warranties of any kind, express or implied, to the fullest extent permitted by law. We do not warrant that the App will run uninterrupted or error-free, on every device and operating-system version, or that defects will be corrected.',
        },
      ],
    },
    {
      heading: "Limitation of liability",
      blocks: [
        {
          p: "To the fullest extent permitted by applicable law, the Developer is not liable for any indirect, incidental, or consequential damages, lost profits, or loss of data or progress arising from your use of, or inability to use, the App.",
        },
        {
          p: "The App is provided free of charge. In jurisdictions that do not allow limiting or excluding liability, the provisions above apply to the extent permitted by law and do not affect your mandatory consumer rights.",
        },
      ],
    },
    {
      heading: "Changes, updates, and discontinuation",
      blocks: [
        {
          p: "We may change the App's functionality, the set of learning categories, and these Terms; release updates; and discontinue distributing or supporting the App or particular versions of it.",
        },
        {
          p: "Material changes to the Terms are posted on this page with a new date at the top of the document. By continuing to use the App after the changes take effect, you accept the updated Terms.",
        },
      ],
    },
    {
      heading: "Distribution via Google Play",
      blocks: [
        {
          p: "The App is distributed through Google Play. Google is not a party to these Terms and does not sponsor or endorse the App. Google's terms apply to downloading and updating the App.",
        },
      ],
    },
    {
      heading: "Governing law and disputes",
      blocks: [
        {
          p: "These Terms are governed by the laws of the Republic of Belarus. Disputes that cannot be settled through negotiation are subject to the competent courts of the Republic of Belarus.",
        },
        {
          p: "If you use the App as a consumer, you keep the mandatory rights granted by the law of your country of permanent residence.",
        },
      ],
    },
    {
      heading: "Contact",
      blocks: [
        {
          p: `Questions about these Terms: ${mail}.`,
        },
      ],
    },
  ],
};

export const terms = { ru, en } as const;
