/**
 * Privacy Policy content, Russian + English.
 *
 * Single source of truth for /privacy/ (ru) and /privacy/en/ (en) — the two
 * pages render the same structure so the translations cannot drift. Both
 * versions are kept section-for-section identical.
 *
 * `p` blocks may contain inline HTML (links only); `list` blocks render as a
 * <ul>. Nothing here is legal advice.
 */
import { PRIVACY_EMAIL, PLAY_URL } from "../consts";

export type PrivacyBlock = { p: string } | { list: string[] };

export interface PrivacySection {
  heading: string;
  blocks: PrivacyBlock[];
}

export interface PrivacyDoc {
  lang: "ru" | "en";
  /** og:locale */
  locale: string;
  /** <h1> and <title> */
  title: string;
  /** kicker line, already prefixed and upper-cased */
  updated: string;
  /** <meta name="description"> */
  description: string;
  /** intro paragraph under the title */
  lead: string;
  /** aria-label for the RU/EN switch */
  langSwitchLabel: string;
  sections: PrivacySection[];
}

const mail = `<a href="mailto:${PRIVACY_EMAIL}">${PRIVACY_EMAIL}</a>`;
const googlePolicyRu =
  '<a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Политикой конфиденциальности Google</a>';
const googlePolicyEn =
  '<a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google Privacy Policy</a>';
const playLink = `<a href="${PLAY_URL}" target="_blank" rel="noopener">Google Play</a>`;

const ru: PrivacyDoc = {
  lang: "ru",
  locale: "ru_RU",
  title: "Политика конфиденциальности",
  updated: "ОБНОВЛЕНО 4 СЕНТЯБРЯ 2026",
  description:
    "Как приложение BrainDrop обращается с данными: всё хранится на устройстве, регистрация не нужна, учебные данные на сервер не отправляются, рекламы и трекинга нет.",
  lead: "BrainDrop — офлайн-приложение для изучения английского языка. Для работы ему не нужны учётная запись, интернет-соединение и разрешения устройства: все данные об обучении остаются в памяти вашего устройства и никуда не передаются. Эта Политика объясняет, что приложение хранит локально и почему разработчик не собирает о вас никакой информации.",
  langSwitchLabel: "Язык политики",
  sections: [
    {
      heading: "Кратко",
      blocks: [
        {
          list: [
            "Приложение не собирает и не передаёт персональные данные.",
            "Нет регистрации, аккаунтов, рекламы, внешней аналитики и трекинга.",
            "У приложения нет доступа в интернет — технически оно не может отправить данные на сервер.",
            "Единственные сохраняемые данные — ваш учебный прогресс — хранятся только на устройстве.",
          ],
        },
      ],
    },
    {
      heading: "Кто отвечает за приложение",
      blocks: [
        {
          p: `Приложение BrainDrop разрабатывается и распространяется частным разработчиком (далее — «Разработчик», «мы»). По любым вопросам, связанным с конфиденциальностью, пишите на ${mail}.`,
        },
        {
          p: "Приложение и настоящая Политика подчиняются законодательству Республики Беларусь, включая Закон Республики Беларусь от 7 мая 2021 г. № 99-З «О защите персональных данных». Если вы пользуетесь приложением из другой юрисдикции, к вам также могут применяться местные нормы (например, GDPR в Европейской экономической зоне или CCPA/CPRA в Калифорнии); их требования соблюдаются за счёт того, что персональные данные не обрабатываются.",
        },
      ],
    },
    {
      heading: "Какие данные хранит приложение",
      blocks: [
        { p: "Приложение сохраняет только сведения о вашем обучении:" },
        {
          list: [
            "какие элементы (неправильные глаголы, времена, фразовые глаголы) вы отметили изученными;",
            "результаты квизов — число правильных и неправильных ответов по каждому элементу;",
            "даты занятий и число изученных элементов за день — чтобы показывать серию дней и дневную цель;",
            "время последнего повторения элемента.",
          ],
        },
        {
          p: "Эти данные хранятся в локальной базе данных в приватном хранилище приложения на вашем устройстве. Они не привязаны к вашей личности, не содержат имени, адреса электронной почты или идентификаторов и не покидают устройство через приложение.",
        },
        {
          p: "Приложение не запрашивает и не использует: имя, адрес электронной почты, номер телефона, список контактов, геолокацию, камеру, микрофон, доступ к фотографиям и файлам, рекламный идентификатор и другие идентификаторы устройства.",
        },
      ],
    },
    {
      heading: "Разработчик не собирает данные",
      blocks: [
        {
          p: "У приложения нет сетевого кода и разрешения на доступ в интернет, поэтому оно не отправляет и не может отправлять данные Разработчику или третьим лицам.",
        },
        {
          p: "Мы не создаём профилей пользователей и не используем сторонние SDK аналитики, рекламные сети, файлы cookie и иные технологии отслеживания. Мы не продаём, не сдаём в аренду и не передаём данные третьим лицам, поскольку у нас их нет.",
        },
      ],
    },
    {
      heading: "Резервное копирование устройства",
      blocks: [
        {
          p: "Если в настройках вашего устройства включено автоматическое резервное копирование, операционная система может включить локальные файлы приложения (в том числе базу с учебным прогрессом) в резервную копию, которую она сохраняет в вашем личном облачном хранилище — например, на Google Диске, привязанном к вашей учётной записи Google.",
        },
        {
          p: "Такое резервное копирование выполняется между вами и поставщиком операционной системы по его правилам; Разработчик не имеет к этим копиям доступа. Отключить его можно в системных настройках резервного копирования вашего устройства.",
        },
      ],
    },
    {
      heading: "Магазин приложений",
      blocks: [
        {
          p: `BrainDrop распространяется через ${playLink}. Загрузка, установка, обновления, а также — если вы это разрешили в настройках устройства — диагностика сбоев и производительности обрабатываются Google в соответствии с ${googlePolicyRu}.`,
        },
        {
          p: "В консоли разработчика Google Play нам доступна только обобщённая обезличенная статистика (например, число установок и агрегированные отчёты о сбоях). Она не позволяет идентифицировать отдельных пользователей.",
        },
      ],
    },
    {
      heading: "Дети",
      blocks: [
        {
          p: "Приложение не собирает персональные данные, не показывает рекламу, не содержит покупок внутри приложения, внешних ссылок, пользовательского контента и материалов для взрослых. Им можно безопасно пользоваться в любом возрасте, в том числе детям.",
        },
        {
          p: "Поскольку никакие данные не собираются, приложение по своей конструкции соответствует требованиям к защите данных детей (включая COPPA и соответствующие положения GDPR).",
        },
      ],
    },
    {
      heading: "Ваши права",
      blocks: [
        {
          p: "Законодательство о персональных данных (в том числе Закон Республики Беларусь № 99-З, GDPR и CCPA/CPRA) даёт вам права на доступ к своим данным, их исправление, удаление и перенос. Разработчик не обрабатывает ваши персональные данные, поэтому с нашей стороны нет данных, которые можно было бы предоставить, изменить или удалить.",
        },
        {
          p: "Все данные, которые сохранило приложение, вы контролируете сами: их можно удалить, очистив данные приложения или удалив приложение с устройства (см. следующий раздел).",
        },
      ],
    },
    {
      heading: "Хранение и удаление данных",
      blocks: [
        {
          p: "Учебный прогресс хранится на вашем устройстве до тех пор, пока вы его не удалите. Чтобы удалить все данные приложения:",
        },
        {
          list: [
            "удалите приложение BrainDrop с устройства, либо",
            "очистите данные приложения в системных настройках («Приложения» → BrainDrop → «Хранилище» → «Очистить данные»).",
          ],
        },
        {
          p: "Копии на сервере не существует, поэтому отдельный запрос на удаление не требуется. Если вы пользовались резервным копированием устройства, удалите также резервную копию в настройках вашей учётной записи.",
        },
      ],
    },
    {
      heading: "Безопасность",
      blocks: [
        {
          p: "Через приложение данные не покидают устройство, поэтому основной риск — это физический доступ к разблокированному устройству. Рекомендуем использовать блокировку экрана и своевременно устанавливать обновления операционной системы.",
        },
      ],
    },
    {
      heading: "Изменения в Политике",
      blocks: [
        {
          p: "Если Политика изменится, обновлённая версия будет опубликована на этой странице с новой датой в начале документа. Существенные изменения мы дополнительно отметим в описании обновления приложения. Продолжая пользоваться приложением после вступления изменений в силу, вы принимаете обновлённую Политику.",
        },
      ],
    },
    {
      heading: "Контакты",
      blocks: [
        {
          p: `Вопросы и запросы, связанные с конфиденциальностью: ${mail}.`,
        },
      ],
    },
  ],
};

const en: PrivacyDoc = {
  lang: "en",
  locale: "en_US",
  title: "Privacy Policy",
  updated: "LAST UPDATED 4 SEPTEMBER 2026",
  description:
    "How the BrainDrop app handles data: everything stays on your device, no sign-up, no learning data sent to any server, no ads and no tracking.",
  lead: "BrainDrop is an offline English-learning app. It needs no account, no internet connection, and no device permissions to work: everything about your learning stays in your device's storage and is never sent anywhere. This Policy explains what the app stores locally and why the developer collects no information about you.",
  langSwitchLabel: "Policy language",
  sections: [
    {
      heading: "In short",
      blocks: [
        {
          list: [
            "The app does not collect or transmit any personal data.",
            "No sign-up, no accounts, no ads, no third-party analytics, no tracking.",
            "The app has no internet access — technically it cannot send data to a server.",
            "The only data it saves — your learning progress — stays on your device.",
          ],
        },
      ],
    },
    {
      heading: "Who is responsible for the app",
      blocks: [
        {
          p: `BrainDrop is developed and distributed by an independent developer ("the Developer", "we"). For any privacy-related question, contact ${mail}.`,
        },
        {
          p: 'The app and this Policy are governed by the laws of the Republic of Belarus, including the Law of the Republic of Belarus No. 99-Z of 7 May 2021 "On Personal Data Protection". If you use the app from another jurisdiction, local rules may also apply to you (for example, the GDPR in the European Economic Area or the CCPA/CPRA in California); their requirements are met because no personal data is processed.',
        },
      ],
    },
    {
      heading: "What the app stores",
      blocks: [
        { p: "The app saves only information about your learning:" },
        {
          list: [
            "which items (irregular verbs, tenses, phrasal verbs) you marked as learned;",
            "quiz results — the number of correct and incorrect answers for each item;",
            "study dates and the number of items learned per day — used to show your day streak and daily goal;",
            "the time an item was last reviewed.",
          ],
        },
        {
          p: "This data is kept in a local database in the app's private storage on your device. It is not linked to your identity, contains no name, e-mail address, or identifiers, and never leaves the device through the app.",
        },
        {
          p: "The app does not request or use your name, e-mail address, phone number, contacts, location, camera, microphone, access to photos or files, advertising identifier, or any other device identifiers.",
        },
      ],
    },
    {
      heading: "The developer collects no data",
      blocks: [
        {
          p: "The app contains no networking code and holds no internet permission, so it does not and cannot send data to the Developer or to any third party.",
        },
        {
          p: "We build no user profiles and use no third-party analytics SDKs, advertising networks, cookies, or other tracking technologies. We do not sell, rent, or share data with third parties, because we hold none.",
        },
      ],
    },
    {
      heading: "Device backup",
      blocks: [
        {
          p: "If automatic backup is enabled in your device settings, the operating system may include the app's local files (including the learning-progress database) in the backup it stores in your personal cloud storage — for example, Google Drive linked to your Google account.",
        },
        {
          p: "That backup takes place between you and your operating-system provider under their terms; the Developer has no access to it. You can turn it off in your device's system backup settings.",
        },
      ],
    },
    {
      heading: "App store",
      blocks: [
        {
          p: `BrainDrop is distributed through ${playLink}. Downloading, installing, updates and — if you allowed it in your device settings — crash and performance diagnostics are handled by Google under the ${googlePolicyEn}.`,
        },
        {
          p: "In the Google Play Console we can see only aggregated, de-identified statistics (such as install counts and aggregated crash reports). They do not identify individual users.",
        },
      ],
    },
    {
      heading: "Children",
      blocks: [
        {
          p: "The app collects no personal data and contains no advertising, no in-app purchases, no external links, no user-generated content, and no adult material. It is safe to use at any age, including by children.",
        },
        {
          p: "Because nothing is collected, the app complies by design with children's data-protection requirements (including COPPA and the relevant GDPR provisions).",
        },
      ],
    },
    {
      heading: "Your rights",
      blocks: [
        {
          p: "Data-protection laws (including Belarus Law No. 99-Z, the GDPR, and the CCPA/CPRA) give you rights to access, correct, delete, and port your data. The Developer does not process your personal data, so there is nothing on our side to provide, change, or delete.",
        },
        {
          p: "You control all data the app has saved: you can remove it by clearing the app's data or uninstalling the app (see the next section).",
        },
      ],
    },
    {
      heading: "Data retention and deletion",
      blocks: [
        {
          p: "Your learning progress stays on your device until you delete it. To remove all app data:",
        },
        {
          list: [
            "uninstall BrainDrop from your device, or",
            "clear the app's data in system settings (Apps → BrainDrop → Storage → Clear data).",
          ],
        },
        {
          p: "There is no server-side copy, so no separate deletion request is needed. If you used device backup, also delete the backup in your account settings.",
        },
      ],
    },
    {
      heading: "Security",
      blocks: [
        {
          p: "Data does not leave your device through the app, so the main risk is physical access to an unlocked device. We recommend using a screen lock and installing operating-system updates promptly.",
        },
      ],
    },
    {
      heading: "Changes to this Policy",
      blocks: [
        {
          p: "If this Policy changes, the updated version will be posted on this page with a new date at the top of the document. We will also note material changes in the app's update description. By continuing to use the app after the changes take effect, you accept the updated Policy.",
        },
      ],
    },
    {
      heading: "Contact",
      blocks: [
        {
          p: `Privacy questions and requests: ${mail}.`,
        },
      ],
    },
  ],
};

export const privacy = { ru, en } as const;
