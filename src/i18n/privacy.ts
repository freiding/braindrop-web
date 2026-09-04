/**
 * Privacy Policy content, Russian + English.
 *
 * Single source of truth for /privacy/ (ru) and /privacy/en/ (en) — the two
 * pages render the same structure so the translations cannot drift. Both
 * versions are kept section-for-section identical. Nothing here is legal advice.
 *
 * Reflects the app as of the Firebase change: learning progress stays local;
 * the Android build additionally sends de-identified usage stats (Firebase
 * Analytics) and crash diagnostics (Firebase Crashlytics) to Google. iOS ships
 * the no-op backend and collects nothing.
 */
import type { LegalDoc } from "./types";
import { CONTACT_EMAIL, PLAY_URL } from "../consts";

const mail = `<a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>`;
const googlePolicyRu =
  '<a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Политикой конфиденциальности Google</a>';
const googlePolicyEn =
  '<a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google Privacy Policy</a>';
const firebaseInfoRu =
  '<a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener">условиями обработки данных в Firebase</a>';
const firebaseInfoEn =
  '<a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener">Firebase Privacy and Security terms</a>';
const playLink = `<a href="${PLAY_URL}" target="_blank" rel="noopener">Google Play</a>`;

const ru: LegalDoc = {
  lang: "ru",
  locale: "ru_RU",
  title: "Политика конфиденциальности",
  updated: "ОБНОВЛЕНО 4 СЕНТЯБРЯ 2026",
  description:
    "Как приложение BrainDrop обращается с данными: учебный прогресс хранится на устройстве; версия для Android использует Firebase Analytics и Crashlytics (Google) для обезличенной статистики и отчётов о сбоях. Без аккаунта, без рекламы, без продажи данных.",
  lead: "Учебные функции BrainDrop работают офлайн и без учётной записи, а прогресс обучения хранится на вашем устройстве. Чтобы понимать, как используется приложение, и быстро находить ошибки, версия для Android дополнительно собирает обезличенную статистику использования и отчёты о сбоях через сервисы Firebase от Google. Эта Политика объясняет, какие данные обрабатываются, кем и как это ограничить.",
  langSwitchLabel: "Язык политики",
  sections: [
    {
      heading: "Кратко",
      blocks: [
        {
          list: [
            "Учебный прогресс хранится только на вашем устройстве.",
            "Версия для Android использует Firebase Analytics и Crashlytics (сервисы Google) для обезличенной статистики использования и диагностики сбоев.",
            "Аккаунта в приложении нет; эти данные не связаны с вашим именем, e-mail или телефоном и не используются для рекламы.",
            "Мы не продаём данные. Единственный внешний получатель — Google как поставщик Firebase.",
            "На iOS статистика и отчёты о сбоях не собираются.",
            "Сбор можно ограничить в настройках устройства или полностью прекратить, удалив приложение.",
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
          p: "Приложение и настоящая Политика подчиняются законодательству Республики Беларусь, включая Закон Республики Беларусь от 7 мая 2021 г. № 99-З «О защите персональных данных». Если вы пользуетесь приложением из другой юрисдикции, к вам также могут применяться местные нормы — например, GDPR в Европейской экономической зоне и Великобритании или CCPA/CPRA в Калифорнии.",
        },
        {
          p: "В отношении статистики и отчётов о сбоях (раздел «Аналитика и отчёты о сбоях») Разработчик выступает контролёром данных, а компания Google — обработчиком, действующим по нашему поручению.",
        },
      ],
    },
    {
      heading: "Какие данные приложение хранит на устройстве",
      blocks: [
        { p: "На устройстве приложение сохраняет только сведения о вашем обучении:" },
        {
          list: [
            "какие элементы (неправильные глаголы, времена, фразовые глаголы) вы отметили изученными;",
            "результаты квизов — число правильных и неправильных ответов по каждому элементу;",
            "даты занятий и число изученных элементов за день — чтобы показывать серию дней и дневную цель;",
            "время последнего повторения элемента.",
          ],
        },
        {
          p: "Эти данные хранятся в локальной базе данных в приватном хранилище приложения и не передаются Разработчику. Они не содержат вашего имени, адреса электронной почты или номера телефона.",
        },
        {
          p: "Приложение не запрашивает доступ к списку контактов, точной геолокации, камере, микрофону, фотографиям и файлам.",
        },
      ],
    },
    {
      heading: "Аналитика и отчёты о сбоях",
      blocks: [
        {
          p: "В версии для Android приложение подключает два сервиса Google — Firebase Analytics и Firebase Crashlytics. В версии для iOS они не используются.",
        },
        { p: "Firebase Analytics собирает обезличенную статистику использования:" },
        {
          list: [
            "события запуска приложения, начала и окончания сессий, просмотры экранов внутри приложения;",
            "технические сведения: модель устройства, версию операционной системы, версию приложения, язык интерфейса, страну или регион, определяемые по IP-адресу (сам IP-адрес Google использует для геолокации и не хранит его в отчётах в привязке к событиям);",
            "сгенерированный Firebase псевдонимный идентификатор экземпляра приложения; на Android для части измерений может использоваться рекламный идентификатор устройства.",
          ],
        },
        { p: "Firebase Crashlytics собирает диагностику сбоев и обработанных ошибок:" },
        {
          list: [
            "трассировку стека и тип ошибки;",
            "состояние устройства в момент сбоя: модель, версию ОС, доступную память и накопитель, ориентацию экрана, признак наличия root-доступа;",
            "версию приложения, время сбоя и предшествующие технические журналы приложения;",
            "псевдонимный идентификатор установки, создаваемый Crashlytics.",
          ],
        },
        {
          p: "Мы не задаём в этих сервисах идентификатор пользователя и не передаём в них ваше имя, e-mail, телефон или содержимое вашего обучения. Данные используются только в обобщённом виде — чтобы понимать, какими разделами пользуются, и находить и устранять ошибки. Они не применяются для рекламы, таргетинга или профилирования и не продаются.",
        },
        {
          p: `Обработку выполняет Google (Google Ireland Limited и Google LLC) в соответствии с ${googlePolicyRu} и ${firebaseInfoRu}. По умолчанию сбор включён; как его ограничить, описано в разделе «Ваши права и выбор».`,
        },
      ],
    },
    {
      heading: "Международная передача данных",
      blocks: [
        {
          p: "Google обрабатывает данные Firebase на своих серверах, которые могут находиться за пределами вашей страны, в том числе в США. Для законности такой передачи Google применяет стандартные договорные условия Европейской комиссии и другие предусмотренные законом механизмы. Подробности — в политике конфиденциальности Google.",
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
          p: "Приложение не показывает рекламу и не содержит покупок, внешних ссылок, пользовательского контента и материалов для взрослых.",
        },
        {
          p: "Приложение не адресовано специально детям младше 13 лет и не запрашивает возраст. Мы сознательно не собираем персональные данные детей. Статистика и отчёты о сбоях (см. выше) собираются в обезличенном виде и не используются для профилирования или рекламы.",
        },
        {
          p: `Если вы родитель или опекун и полагаете, что нам стали известны данные вашего ребёнка, напишите на ${mail} — мы удалим их и примем меры, чтобы прекратить дальнейший сбор.`,
        },
      ],
    },
    {
      heading: "Ваши права и выбор",
      blocks: [
        {
          p: "Законодательство о персональных данных (Закон Республики Беларусь № 99-З, GDPR, CCPA/CPRA и другие применимые нормы) даёт вам права на доступ, исправление, удаление, ограничение и перенос данных, а также право возражать против обработки.",
        },
        {
          p: "Данные аналитики и отчётов о сбоях псевдонимны и не связаны с вашей личностью, поэтому по отдельному запросу мы, как правило, не можем найти в них именно ваши записи. При этом вы можете:",
        },
        {
          list: [
            "ограничить аналитику на Android: в настройках устройства сбросить или удалить рекламный идентификатор и отключить персонализацию рекламы;",
            "отключить передачу диагностики использования в системных настройках устройства («Конфиденциальность» → «Диагностические данные» / «Использование и диагностика»);",
            "полностью прекратить сбор, удалив приложение, — после удаления новые данные не собираются;",
            `направить запрос на доступ или удаление на ${mail}; мы передадим его Google в применимой части и ответим вам.`,
          ],
        },
        {
          p: "Пользователи из ЕЭЗ и Великобритании вправе возражать против обработки, основанной на законном интересе, и подать жалобу в надзорный орган по защите данных. Правовое основание обработки статистики и отчётов о сбоях — наш законный интерес в обеспечении работоспособности и улучшении приложения при минимально необходимом объёме данных.",
        },
      ],
    },
    {
      heading: "Хранение и удаление данных",
      blocks: [
        {
          p: "Учебный прогресс хранится на вашем устройстве до тех пор, пока вы его не удалите. Чтобы удалить локальные данные приложения:",
        },
        {
          list: [
            "удалите приложение BrainDrop с устройства, либо",
            "очистите данные приложения в системных настройках («Приложения» → BrainDrop → «Хранилище» → «Очистить данные»).",
          ],
        },
        {
          p: "Данные Firebase Analytics, связанные с устройством или экземпляром приложения, хранятся Google ограниченный срок (по умолчанию 2 месяца, максимум 14 месяцев), после чего удаляются или агрегируются. Отчёты Firebase Crashlytics хранятся до 90 дней.",
        },
        {
          p: "Удаление приложения прекращает дальнейший сбор, но не удаляет задним числом данные, уже полученные Google. Если вы пользовались резервным копированием устройства, удалите также резервную копию в настройках вашей учётной записи.",
        },
      ],
    },
    {
      heading: "Безопасность",
      blocks: [
        {
          p: "Учебный прогресс не покидает устройство, поэтому для него основной риск — физический доступ к разблокированному устройству. Данные статистики и отчётов о сбоях передаются в Google по зашифрованному соединению (HTTPS/TLS). Рекомендуем использовать блокировку экрана и своевременно устанавливать обновления операционной системы.",
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

const en: LegalDoc = {
  lang: "en",
  locale: "en_US",
  title: "Privacy Policy",
  updated: "LAST UPDATED 4 SEPTEMBER 2026",
  description:
    "How the BrainDrop app handles data: your learning progress stays on your device; the Android version uses Firebase Analytics and Crashlytics (Google) for de-identified statistics and crash reports. No account, no ads, no data sale.",
  lead: "BrainDrop's learning features work offline and without an account, and your learning progress is stored on your device. To understand how the app is used and to find bugs quickly, the Android version additionally collects de-identified usage statistics and crash reports through Google's Firebase services. This Policy explains what data is processed, by whom, and how to limit it.",
  langSwitchLabel: "Policy language",
  sections: [
    {
      heading: "In short",
      blocks: [
        {
          list: [
            "Your learning progress is stored only on your device.",
            "The Android version uses Firebase Analytics and Crashlytics (Google services) for de-identified usage statistics and crash diagnostics.",
            "There is no account; this data is not linked to your name, e-mail, or phone number and is not used for advertising.",
            "We do not sell data. The only external recipient is Google, as the Firebase provider.",
            "On iOS, no statistics or crash reports are collected.",
            "You can limit collection in your device settings, or stop it entirely by uninstalling the app.",
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
          p: 'The app and this Policy are governed by the laws of the Republic of Belarus, including the Law of the Republic of Belarus No. 99-Z of 7 May 2021 "On Personal Data Protection". If you use the app from another jurisdiction, local rules may also apply to you — for example, the GDPR in the European Economic Area and the UK, or the CCPA/CPRA in California.',
        },
        {
          p: 'For the usage statistics and crash reports (see "Analytics and crash reports"), the Developer is the data controller and Google acts as a processor on our behalf.',
        },
      ],
    },
    {
      heading: "What the app stores on your device",
      blocks: [
        { p: "On your device, the app saves only information about your learning:" },
        {
          list: [
            "which items (irregular verbs, tenses, phrasal verbs) you marked as learned;",
            "quiz results — the number of correct and incorrect answers for each item;",
            "study dates and the number of items learned per day — used to show your day streak and daily goal;",
            "the time an item was last reviewed.",
          ],
        },
        {
          p: "This data is kept in a local database in the app's private storage and is not sent to the Developer. It contains no name, e-mail address, or phone number.",
        },
        {
          p: "The app does not request access to your contacts, precise location, camera, microphone, photos, or files.",
        },
      ],
    },
    {
      heading: "Analytics and crash reports",
      blocks: [
        {
          p: "In the Android version, the app includes two Google services — Firebase Analytics and Firebase Crashlytics. They are not used in the iOS version.",
        },
        { p: "Firebase Analytics collects de-identified usage statistics:" },
        {
          list: [
            "app-open events, session start and end, and views of screens within the app;",
            "technical information: device model, operating-system version, app version, interface language, and the country or region derived from your IP address (Google uses the IP address for geolocation and does not retain it alongside events in its reports);",
            "a pseudonymous app-instance identifier generated by Firebase; on Android, the device advertising identifier may be used for some measurements.",
          ],
        },
        { p: "Firebase Crashlytics collects crash and handled-error diagnostics:" },
        {
          list: [
            "the stack trace and error type;",
            "device state at the time of the crash: model, OS version, available memory and storage, screen orientation, and whether the device is rooted;",
            "the app version, the time of the crash, and preceding technical logs from the app;",
            "a pseudonymous installation identifier created by Crashlytics.",
          ],
        },
        {
          p: "We do not set a user identifier in these services and do not send them your name, e-mail, phone number, or the content of your learning. The data is used only in aggregate — to understand which sections are used and to find and fix bugs. It is not used for advertising, targeting, or profiling, and it is not sold.",
        },
        {
          p: `Processing is carried out by Google (Google Ireland Limited and Google LLC) under the ${googlePolicyEn} and the ${firebaseInfoEn}. Collection is on by default; how to limit it is described in "Your rights and choices".`,
        },
      ],
    },
    {
      heading: "International data transfers",
      blocks: [
        {
          p: "Google processes Firebase data on its servers, which may be located outside your country, including in the United States. Google relies on the European Commission's Standard Contractual Clauses and other legally recognised mechanisms to cover these transfers. See Google's privacy policy for details.",
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
          p: "The app shows no advertising and contains no purchases, external links, user-generated content, or adult material.",
        },
        {
          p: "The app is not directed at children under 13 and does not ask for age. We do not knowingly collect children's personal data. The statistics and crash reports described above are collected in de-identified form and are not used for profiling or advertising.",
        },
        {
          p: `If you are a parent or guardian and believe your child's data has reached us, contact ${mail} and we will delete it and act to stop further collection.`,
        },
      ],
    },
    {
      heading: "Your rights and choices",
      blocks: [
        {
          p: "Data-protection laws (Belarus Law No. 99-Z, the GDPR, the CCPA/CPRA, and other applicable rules) give you rights to access, correct, delete, restrict, and port your data, and the right to object to processing.",
        },
        {
          p: "The analytics and crash-report data is pseudonymous and not linked to your identity, so on an individual request we usually cannot locate your specific records. You can, however:",
        },
        {
          list: [
            "limit analytics on Android: reset or delete the advertising identifier in your device settings and turn off ad personalisation;",
            "turn off sharing of usage diagnostics in your device's system settings (Privacy → Diagnostic data / Usage & diagnostics);",
            "stop collection entirely by uninstalling the app — no new data is collected after removal;",
            `send an access or deletion request to ${mail}; we will pass it on to Google where applicable and respond to you.`,
          ],
        },
        {
          p: "Users in the EEA and the UK have the right to object to processing based on legitimate interests and to lodge a complaint with a data-protection supervisory authority. The legal basis for processing the statistics and crash reports is our legitimate interest in keeping the app working and improving it, with the data minimised to what is necessary.",
        },
      ],
    },
    {
      heading: "Data retention and deletion",
      blocks: [
        {
          p: "Your learning progress stays on your device until you delete it. To remove the app's local data:",
        },
        {
          list: [
            "uninstall BrainDrop from your device, or",
            "clear the app's data in system settings (Apps → BrainDrop → Storage → Clear data).",
          ],
        },
        {
          p: "Firebase Analytics data tied to a device or app instance is retained by Google for a limited period (2 months by default, 14 months at most), after which it is deleted or aggregated. Firebase Crashlytics reports are retained for up to 90 days.",
        },
        {
          p: "Uninstalling the app stops further collection but does not retroactively delete data Google has already received. If you used device backup, also delete the backup in your account settings.",
        },
      ],
    },
    {
      heading: "Security",
      blocks: [
        {
          p: "Your learning progress does not leave the device, so for that data the main risk is physical access to an unlocked device. The statistics and crash-report data is sent to Google over an encrypted connection (HTTPS/TLS). We recommend using a screen lock and installing operating-system updates promptly.",
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
