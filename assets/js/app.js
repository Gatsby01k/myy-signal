const supportedLangs = ['ru', 'uk', 'en', 'pl', 'cs'];

const TRANSLATIONS = {
  ru: {
    meta: {
      title: 'My Signal — персональный разбор паттернов и реакций',
      description: 'My Signal — персональный разбор повторяющихся реакций, мыслей и сценариев. Спокойно, конфиденциально и без лишней воды.'
    },
    brand: { sub: 'Персональный разбор без лишней воды' },
    market: { label: 'Рынок' },
    loader: { line1: 'Подбираем язык и формат разбора…', line2: 'Готовим короткий вход без перегруза…', line3: 'Запускаем интерфейс…' },
    hero: {
      eyebrow: 'Конфиденциально • 5–7 минут • без звонков',
      title: 'Ты не стал холоднее. Ты стал точнее.',
      sub: 'Короткий разбор помогает увидеть, что именно у тебя повторяется: в мыслях, реакциях, выборе людей и внутреннем напряжении. Спокойно, понятно и без тяжёлых формулировок.',
      cta: 'Пройти короткий разбор', cta2: 'Посмотреть пример вывода',
      trust1: '🔒 Конфиденциально', trust2: '🧠 Не диагноз и не терапия', trust3: '✉️ Вопросы и оплата через менеджера',
      cardBadge: 'Что входит', cardTitle: 'Что человек получает после оплаты',
      card1: 'Ясную картину повторяющихся сценариев и реакций', card2: 'Пояснение, где уходит энергия и почему растёт напряжение',
      card3: 'Точки опоры: на что можно опираться уже сейчас', card4: 'Чёткий следующий шаг без перегруза и общих фраз',
      cardNote: 'Это не общий тест «для всех», а персональный разбор, который помогает назвать то, что давно чувствуется, но не складывалось в ясную картину.'
    },
    recognition: {
      label: 'Если это знакомо — ты не один', title: 'Обычно всё начинается с ощущений, которые сложно объяснить',
      item1: 'Ты возвращаешься к одним и тем же мыслям даже спустя время', item2: 'Замечаешь несостыковки в людях, ситуациях и в себе',
      item3: 'Много понимаешь, но это не всегда приносит спокойствие', item4: 'Иногда сложно выключить внутренний анализ',
      item5: 'Чувствуешь, что внутри есть паттерн, но не можешь его точно назвать', item6: 'Хочется не очередного совета, а ясности по себе',
      sideKicker: 'Главная мысль', sideText: 'С тобой не «что-то не так». У тебя просто есть повторяющиеся внутренние реакции и сценарии. Когда они становятся понятны, внутри становится заметно спокойнее.',
      sideStat1: 'минут на короткий разбор', sideStat2: 'формата глубины на выбор', sideStat3: 'скидка обсуждается у менеджера'
    },
    offer: {
      label: 'Что это такое', title: 'Это не тест и не набор общих советов',
      sub: 'My Signal — это персональный разбор того, как у тебя устроены реакции, внимание, повторяющиеся сценарии и внутреннее напряжение. Без ярлыков, без псевдопсихологии и без сухой теории.',
      card1Title: 'Что внутри', card1Text: 'Реакции, сценарии, зоны перегруза, точки опоры и конкретный следующий шаг.',
      card2Title: 'Как это подаётся', card2Text: 'Простым языком, без терминологического тумана и без ощущения, что тебе читают лекцию.',
      card3Title: 'Для кого', card3Text: 'Для тех, кто хочет понять себя точнее, а не получить очередной безличный тест.'
    },
    flow: {
      label: 'Как это работает', title: 'Простой путь от первого интереса до готового разбора',
      card1Title: 'Короткий вход', card1Text: 'Ты отвечаешь на несколько вопросов без регистрации и без перегруза.',
      card2Title: 'Предварительный вывод', card2Text: 'Сразу видишь первые паттерны и понимаешь, куда смотреть глубже.',
      card3Title: 'Выбор формата', card3Text: 'Выбираешь глубину разбора и получаешь локальную цену под свой рынок.',
      card4Title: 'Менеджер в Telegram', card4Text: 'Менеджер получает твой план, язык и краткий вывод — дальше проще оплатить и задать вопросы.'
    },
    preview: {
      label: 'Пример вывода', title: 'Что ты увидишь после короткого разбора', kicker: 'Предварительный фрагмент',
      text: '— ты склонен возвращаться к мыслям и ситуациям, пока не почувствуешь внутреннюю ясность\n— у тебя сильное внимание к деталям и несостыковкам\n— внутри есть напряжение между «понять» и «отпустить»\n— решения чаще проходят через анализ, а не через импульс',
      note: 'Это не окончательный вывод, а направление, с которого начинается разбор. Полная версия даёт больше точности, структуры и пояснений.'
    },
    trust: {
      label: 'Доверие без перегиба', title: 'Почему это ощущается как про тебя, а не как общий шаблон',
      card1Title: 'Без ложных обещаний', card1Text: 'Это не диагноз, не магия и не обещание «исправить всё». Это ясный разбор того, что уже проявляется в твоих реакциях и сценариях.',
      card2Title: 'Без публичности', card2Text: 'Короткий разбор проходит без звонков. Все вопросы, условия и оплата — через менеджера в Telegram в личном формате.',
      card3Title: 'Без пустых формулировок', card3Text: 'Текст результата написан для человека, а не для красивой витрины. Важна понятность, а не эффектность ради эффекта.',
      card4Title: 'С локальной ценой', card4Text: 'Сайт автоматически подбирает язык и цену под рынок, а скидка до 25% обсуждается уже у менеджера.'
    },
    reviews: {
      label: 'Отзывы', title: 'Как люди описывают опыт после разбора',
      card1Text: '«Мне понравилось, что здесь нет давления и лишней драмы. Текст собрал в одно целое то, что я давно чувствовала фоном, но не могла сформулировать.»', card1Meta: 'Алина, 29 • Standard',
      card2Text: '«Ощущение было не как от теста, а как будто кто-то аккуратно разложил мои реакции по полочкам. После этого стало проще принимать решения.»', card2Meta: 'Максим, 33 • Standard',
      card3Text: '«Сильнее всего зашло, что вывод написан нормальным человеческим языком. Не было ощущения “умных слов ради умных слов”.»', card3Meta: 'Каролина, 31 • Standard',
      card4Text: '«Менеджер быстро ответил, всё было спокойно и без навязчивости. Сам разбор оказался точнее, чем я ожидал после короткого квиза.»', card4Meta: 'Томаш, 35 • Deep'
    },
    pricing: {
      label: 'Форматы', title: 'Выбери глубину, которая тебе подходит',
      badge1: 'Базовый вход', badge2: 'Оптимальный формат', badge3: 'Максимальная глубина',
      card1Title: 'Lite', card1Item1: 'Короткий разбор без перегруза', card1Item2: 'Подходит, если хочешь начать спокойно', card1Item3: 'Понятный первый шаг без лишнего объёма', card1Cta: 'Написать менеджеру',
      card2Title: 'Standard', card2Item1: 'Более глубокий разбор с пояснениями', card2Item2: 'Помогает увидеть повторяющиеся сценарии точнее', card2Item3: 'Лучший баланс глубины и простоты', card2Cta: 'Выбрать Standard',
      card3Title: 'Deep', card3Item1: 'Полный разбор с деталями и структурой', card3Item2: 'Для тех, кто хочет дойти до максимальной ясности', card3Item3: 'Подходит, если важна глубина, а не скорость', card3Cta: 'Выбрать Deep',
      managerTitle: 'Индивидуальные условия через Telegram', managerText: 'Менеджер уже получает выбранный план, язык и краткий вывод. Там же можно уточнить детали и обсудить скидку до 25%.', managerCta: 'Написать менеджеру'
    },
    faq: {
      label: 'FAQ', title: 'Коротко о важном перед стартом',
      q1: 'Это психологический тест?', a1: 'Нет. Это не диагностика и не терапия. Это разбор повторяющихся паттернов, реакций и внутренних сценариев.',
      q2: 'Сколько времени это занимает?', a2: 'Короткий разбор занимает примерно 5–7 минут. Дальше ты сам решаешь, нужен ли более глубокий формат.',
      q3: 'Как определяется цена?', a3: 'Сайт подбирает валюту и цену под рынок автоматически. Финальные условия и скидка до 25% обсуждаются у менеджера.',
      q4: 'Можно сначала посмотреть предварительный вывод?', a4: 'Да. До оплаты ты получаешь предварительный вывод, чтобы понять логику и формат.'
    },
    final: {
      label: 'Можно начать сейчас', title: 'Начни с простого шага', text: 'Короткий разбор помогает собрать в одно целое то, что раньше ощущалось как фон, тревога или повторяющийся сценарий. Дальше ты сам решаешь, идти глубже или остановиться на этом.', cta1: 'Пройти короткий разбор', cta2: 'Написать менеджеру'
    },
    footer: { text: 'Конфиденциально • Онлайн' },
    sticky: { cta: 'Пройти короткий разбор' },
    quiz: {
      introKicker: 'Короткий вход в разбор', introTitle: 'Ответь на несколько вопросов', introText: 'Это займёт примерно 5–7 минут. Без регистрации, без звонков и без тяжёлых формулировок. Ответы нужны только для предварительного вывода.',
      introTrust1: '🔒 Конфиденциально', introTrust2: '⚡ Быстро', introTrust3: '📩 Вопросы и оплата через Telegram', start: 'Начать',
      analyzingKicker: 'Предварительный анализ', analyzingTitle: 'Собираем вывод по твоим ответам', analyzing1: 'Смотрим, где повторяются реакции…', analyzing2: 'Отмечаем, где растёт внутреннее напряжение…', analyzing3: 'Собираем предварительную картину…',
      resultKicker: 'Предварительный вывод', resultTitle: 'Уже видно несколько устойчивых паттернов', resultCta1: 'Выбрать формат', resultCta2: 'Отправить вывод менеджеру',
      planKicker: 'Завершение', planTitle: 'Выбери формат и перейди к менеджеру', planText: 'Менеджер получит выбранный тариф, язык, рынок и краткий вывод. Это ускоряет оплату и делает диалог точнее.', planCta: 'Перейти к менеджеру в Telegram'
    }
  },
  uk: {
    meta: { title: 'My Signal — персональний розбір патернів і реакцій', description: 'My Signal — персональний розбір повторюваних реакцій, думок і сценаріїв. Спокійно, конфіденційно й без зайвої води.' },
    brand: { sub: 'Персональний розбір без зайвої води' }, market: { label: 'Ринок' },
    loader: { line1: 'Підбираємо мову й формат розбору…', line2: 'Готуємо короткий вхід без перевантаження…', line3: 'Запускаємо інтерфейс…' },
    hero: { eyebrow: 'Конфіденційно • 5–7 хвилин • без дзвінків', title: 'Ти не став холоднішим. Ти став точнішим.', sub: 'Короткий розбір допомагає побачити, що саме повторюється у твоїх думках, реакціях, виборі людей і внутрішній напрузі. Спокійно, зрозуміло і без важких формулювань.', cta: 'Пройти короткий розбір', cta2: 'Подивитися приклад висновку', trust1: '🔒 Конфіденційно', trust2: '🧠 Не діагноз і не терапія', trust3: '✉️ Питання й оплата через менеджера', cardBadge: 'Що входить', cardTitle: 'Що людина отримує після оплати', card1: 'Зрозумілу картину повторюваних сценаріїв і реакцій', card2: 'Пояснення, куди йде енергія і чому зростає напруга', card3: 'Точки опори: на що можна спертися вже зараз', card4: 'Чіткий наступний крок без перевантаження й загальних фраз', cardNote: 'Це не загальний тест «для всіх», а персональний розбір, який допомагає назвати те, що давно відчувається, але не складалося в чітку картину.' },
    recognition: { label: 'Якщо це знайомо — ти не один', title: 'Зазвичай усе починається з відчуттів, які важко пояснити', item1: 'Ти повертаєшся до одних і тих самих думок навіть через час', item2: 'Помічаєш нестиковки в людях, ситуаціях і в собі', item3: 'Багато розумієш, але це не завжди приносить спокій', item4: 'Іноді важко вимкнути внутрішній аналіз', item5: 'Відчуваєш, що всередині є патерн, але не можеш точно його назвати', item6: 'Хочеться не чергової поради, а ясності про себе', sideKicker: 'Головна думка', sideText: 'З тобою не «щось не так». У тебе просто є повторювані внутрішні реакції та сценарії. Коли вони стають зрозумілими, всередині стає помітно спокійніше.', sideStat1: 'хвилин на короткий розбір', sideStat2: 'формати глибини на вибір', sideStat3: 'знижка обговорюється з менеджером' },
    offer: { label: 'Що це таке', title: 'Це не тест і не набір загальних порад', sub: 'My Signal — це персональний розбір того, як у тебе влаштовані реакції, увага, повторювані сценарії й внутрішня напруга. Без ярликів, без псевдопсихології й без сухої теорії.', card1Title: 'Що всередині', card1Text: 'Реакції, сценарії, зони перевантаження, точки опори та конкретний наступний крок.', card2Title: 'Як це подається', card2Text: 'Простою мовою, без термінологічного туману й без відчуття, що тобі читають лекцію.', card3Title: 'Для кого', card3Text: 'Для тих, хто хоче зрозуміти себе точніше, а не отримати черговий безликий тест.' },
    flow: { label: 'Як це працює', title: 'Простий шлях від першого інтересу до готового розбору', card1Title: 'Короткий вхід', card1Text: 'Ти відповідаєш на кілька запитань без реєстрації та перевантаження.', card2Title: 'Попередній висновок', card2Text: 'Одразу бачиш перші патерни й розумієш, куди дивитися глибше.', card3Title: 'Вибір формату', card3Text: 'Обираєш глибину розбору й отримуєш локальну ціну під свій ринок.', card4Title: 'Менеджер у Telegram', card4Text: 'Менеджер отримує твій план, мову та короткий висновок — далі простіше оплатити й поставити запитання.' },
    preview: { label: 'Приклад висновку', title: 'Що ти побачиш після короткого розбору', kicker: 'Попередній фрагмент', text: '— ти схильний повертатися до думок і ситуацій, поки не відчуєш внутрішню ясність\n— у тебе сильна увага до деталей і нестиковок\n— усередині є напруга між «зрозуміти» і «відпустити»\n— рішення частіше проходять через аналіз, а не через імпульс', note: 'Це не остаточний висновок, а напрямок, з якого починається розбір. Повна версія дає більше точності, структури й пояснень.' },
    trust: { label: 'Довіра без перегину', title: 'Чому це відчувається як про тебе, а не як загальний шаблон', card1Title: 'Без хибних обіцянок', card1Text: 'Це не діагноз, не магія і не обіцянка «виправити все». Це ясний розбір того, що вже проявляється у твоїх реакціях і сценаріях.', card2Title: 'Без публічності', card2Text: 'Короткий розбір проходить без дзвінків. Усі питання, умови й оплата — через менеджера в Telegram в особистому форматі.', card3Title: 'Без порожніх формулювань', card3Text: 'Текст результату написаний для людини, а не для красивої вітрини. Важлива зрозумілість, а не ефектність заради ефектності.', card4Title: 'З локальною ціною', card4Text: 'Сайт автоматично підбирає мову й ціну під ринок, а знижка до 25% обговорюється вже з менеджером.' },
    reviews: { label: 'Відгуки', title: 'Як люди описують досвід після розбору', card1Text: '«Мені сподобалося, що тут немає тиску й зайвої драми. Текст зібрав в одне ціле те, що я давно відчувала фоном, але не могла сформулювати.»', card1Meta: 'Аліна, 29 • Standard', card2Text: '«Відчуття було не як від тесту, а ніби хтось акуратно розклав мої реакції по поличках. Після цього стало простіше ухвалювати рішення.»', card2Meta: 'Максим, 33 • Standard', card3Text: '«Найсильніше зайшло те, що висновок написаний нормальною людською мовою. Не було відчуття “розумних слів заради розумних слів”.»', card3Meta: 'Кароліна, 31 • Standard', card4Text: '«Менеджер швидко відповів, усе було спокійно й без нав’язливості. Сам розбір виявився точнішим, ніж я очікував після короткого квізу.»', card4Meta: 'Томаш, 35 • Deep' },
    pricing: { label: 'Формати', title: 'Обери глибину, яка тобі підходить', badge1: 'Базовий вхід', badge2: 'Оптимальний формат', badge3: 'Максимальна глибина', card1Title: 'Lite', card1Item1: 'Короткий розбір без перевантаження', card1Item2: 'Підійде, якщо хочеш почати спокійно', card1Item3: 'Зрозумілий перший крок без зайвого обсягу', card1Cta: 'Написати менеджеру', card2Title: 'Standard', card2Item1: 'Глибший розбір із поясненнями', card2Item2: 'Допомагає точніше побачити повторювані сценарії', card2Item3: 'Найкращий баланс глибини й простоти', card2Cta: 'Обрати Standard', card3Title: 'Deep', card3Item1: 'Повний розбір із деталями та структурою', card3Item2: 'Для тих, хто хоче дійти до максимальної ясності', card3Item3: 'Підійде, якщо важлива глибина, а не швидкість', card3Cta: 'Обрати Deep', managerTitle: 'Індивідуальні умови через Telegram', managerText: 'Менеджер уже отримує обраний план, мову та короткий висновок. Там же можна уточнити деталі й обговорити знижку до 25%.', managerCta: 'Написати менеджеру' },
    faq: { label: 'FAQ', title: 'Коротко про важливе перед стартом', q1: 'Це психологічний тест?', a1: 'Ні. Це не діагностика і не терапія. Це розбір повторюваних патернів, реакцій і внутрішніх сценаріїв.', q2: 'Скільки часу це займає?', a2: 'Короткий розбір займає приблизно 5–7 хвилин. Далі ти сам вирішуєш, чи потрібен глибший формат.', q3: 'Як визначається ціна?', a3: 'Сайт підбирає валюту й ціну під ринок автоматично. Фінальні умови й знижка до 25% обговорюються з менеджером.', q4: 'Можна спочатку подивитися попередній висновок?', a4: 'Так. До оплати ти отримуєш попередній висновок, щоб зрозуміти логіку й формат.' },
    final: { label: 'Можна почати зараз', title: 'Почни з простого кроку', text: 'Короткий розбір допомагає зібрати в одне ціле те, що раніше відчувалося як фон, тривога або повторюваний сценарій. Далі ти сам вирішуєш, іти глибше чи зупинитися на цьому.', cta1: 'Пройти короткий розбір', cta2: 'Написати менеджеру' }, footer: { text: 'Конфіденційно • Онлайн' }, sticky: { cta: 'Пройти короткий розбір' },
    quiz: { introKicker: 'Короткий вхід у розбір', introTitle: 'Дай відповідь на кілька запитань', introText: 'Це займе приблизно 5–7 хвилин. Без реєстрації, без дзвінків і без важких формулювань. Відповіді потрібні лише для попереднього висновку.', introTrust1: '🔒 Конфіденційно', introTrust2: '⚡ Швидко', introTrust3: '📩 Питання й оплата через Telegram', start: 'Почати', analyzingKicker: 'Попередній аналіз', analyzingTitle: 'Збираємо висновок за твоїми відповідями', analyzing1: 'Дивимося, де повторюються реакції…', analyzing2: 'Відзначаємо, де зростає внутрішня напруга…', analyzing3: 'Збираємо попередню картину…', resultKicker: 'Попередній висновок', resultTitle: 'Уже видно кілька стійких патернів', resultCta1: 'Обрати формат', resultCta2: 'Надіслати висновок менеджеру', planKicker: 'Завершення', planTitle: 'Обери формат і перейди до менеджера', planText: 'Менеджер отримає обраний тариф, мову, ринок і короткий висновок. Це пришвидшує оплату й робить діалог точнішим.', planCta: 'Перейти до менеджера в Telegram' }
  },
  en: {
    meta: { title: 'My Signal — personal analysis of patterns and reactions', description: 'My Signal is a personal analysis of recurring reactions, thoughts and scenarios. Calm, private and free from generic copy.' },
    brand: { sub: 'Personal analysis without empty words' }, market: { label: 'Market' },
    loader: { line1: 'Selecting language and format…', line2: 'Preparing a short entry without overload…', line3: 'Launching the interface…' },
    hero: { eyebrow: 'Private • 5–7 minutes • no calls', title: 'You did not become colder. You became more precise.', sub: 'A short analysis helps you see what keeps repeating in your thoughts, reactions, choice of people and inner tension. Calm, clear and free from heavy jargon.', cta: 'Start quick analysis', cta2: 'See a sample output', trust1: '🔒 Private', trust2: '🧠 Not a diagnosis or therapy', trust3: '✉️ Questions and payment via manager', cardBadge: 'Included', cardTitle: 'What you get after payment', card1: 'A clear picture of recurring patterns and reactions', card2: 'An explanation of where your energy goes and why tension builds', card3: 'Support points: what you can rely on right now', card4: 'A clear next step without overload or generic advice', cardNote: 'This is not a generic “for everyone” test. It is a personal analysis that helps name what you have felt for a long time but could not frame clearly.' },
    recognition: { label: 'If this feels familiar, you are not alone', title: 'It usually starts with feelings that are hard to explain', item1: 'You return to the same thoughts even after time passes', item2: 'You notice inconsistencies in people, situations and yourself', item3: 'You understand a lot, but it does not always bring calm', item4: 'It is hard to switch off the inner analysis', item5: 'You feel there is a pattern inside, but you cannot name it precisely', item6: 'You want clarity about yourself, not another generic tip', sideKicker: 'Core idea', sideText: 'There is nothing “wrong” with you. You simply have recurring inner reactions and scenarios. Once they become clear, things feel noticeably calmer inside.', sideStat1: 'minutes for the quick analysis', sideStat2: 'depth options to choose from', sideStat3: 'discount discussed with manager' },
    offer: { label: 'What it is', title: 'This is not a test and not a set of generic tips', sub: 'My Signal is a personal analysis of how your reactions, attention, recurring scenarios and inner tension are structured. No labels, no pseudo psychology and no dry theory.', card1Title: 'What is inside', card1Text: 'Reactions, scenarios, overload zones, support points and one concrete next step.', card2Title: 'How it is delivered', card2Text: 'In plain language, without a cloud of jargon and without sounding like a lecture.', card3Title: 'Who it is for', card3Text: 'For people who want to understand themselves more precisely instead of taking another faceless test.' },
    flow: { label: 'How it works', title: 'A simple path from first interest to a finished analysis', card1Title: 'Short entry', card1Text: 'You answer a few questions without registration and without overload.', card2Title: 'Preview', card2Text: 'You immediately see the first patterns and where to look deeper.', card3Title: 'Choose a format', card3Text: 'You choose the depth and get local pricing for your market.', card4Title: 'Telegram manager', card4Text: 'The manager receives your plan, language and short preview, so payment and follow-up are much easier.' },
    preview: { label: 'Sample output', title: 'What you see after the quick analysis', kicker: 'Preview fragment', text: '— you tend to return to thoughts and situations until you feel inner clarity\n— you have strong attention to details and inconsistencies\n— there is tension between “understand” and “let go”\n— decisions usually go through analysis rather than impulse', note: 'This is not the final output. It is the direction the analysis starts from. The full version adds more precision, structure and explanation.' },
    trust: { label: 'Trust without overplaying it', title: 'Why it feels personal instead of generic', card1Title: 'No false promises', card1Text: 'This is not a diagnosis, not magic and not a promise to “fix everything”. It is a clear analysis of what already shows up in your reactions and scenarios.', card2Title: 'No public exposure', card2Text: 'The quick analysis happens without calls. All questions, terms and payment go through a Telegram manager in a private format.', card3Title: 'No empty language', card3Text: 'The output is written for a real person, not for a glossy landing page. Clarity matters more than dramatic phrasing.', card4Title: 'Local pricing', card4Text: 'The site automatically adapts language and pricing for your market, while the manager can discuss a discount of up to 25%.' },
    reviews: { label: 'Reviews', title: 'How people describe the experience afterwards', card1Text: '“I liked that there was no pressure and no dramatic tone. The text put together things I had felt in the background for a long time but could not phrase.”', card1Meta: 'Alina, 29 • Standard', card2Text: '“It did not feel like a test. It felt more like someone carefully organized my reactions and made them readable.”', card2Meta: 'Maksym, 33 • Standard', card3Text: '“The best part was the language. It sounded human, not like smart words used for effect.”', card3Meta: 'Karolina, 31 • Standard', card4Text: '“The manager replied quickly and calmly, and the analysis itself was more accurate than I expected after such a short quiz.”', card4Meta: 'Tomáš, 35 • Deep' },
    pricing: { label: 'Formats', title: 'Choose the depth that fits you', badge1: 'Easy start', badge2: 'Best balance', badge3: 'Maximum depth', card1Title: 'Lite', card1Item1: 'Short analysis without overload', card1Item2: 'A calm entry if you want to start gently', card1Item3: 'A clear first step without extra volume', card1Cta: 'Message manager', card2Title: 'Standard', card2Item1: 'A deeper analysis with explanations', card2Item2: 'Helps you see recurring scenarios more clearly', card2Item3: 'The best balance between depth and simplicity', card2Cta: 'Choose Standard', card3Title: 'Deep', card3Item1: 'Full analysis with details and structure', card3Item2: 'For those who want maximum clarity', card3Item3: 'A good fit if depth matters more than speed', card3Cta: 'Choose Deep', managerTitle: 'Individual terms via Telegram', managerText: 'The manager already receives your chosen plan, language and short preview. You can also discuss a discount of up to 25% there.', managerCta: 'Message manager' },
    faq: { label: 'FAQ', title: 'Important things before you start', q1: 'Is this a psychological test?', a1: 'No. It is not diagnosis and not therapy. It is an analysis of recurring patterns, reactions and inner scenarios.', q2: 'How long does it take?', a2: 'The quick analysis takes about 5–7 minutes. After that you decide whether you want a deeper format.', q3: 'How is pricing selected?', a3: 'The site selects currency and pricing for your market automatically. Final terms and a discount of up to 25% are discussed with the manager.', q4: 'Can I see a preview first?', a4: 'Yes. Before payment you get a preview so you can understand the format and logic.' },
    final: { label: 'You can start now', title: 'Start with one simple step', text: 'A short analysis helps you bring together what used to feel like background noise, anxiety or a repeating scenario. Then you decide whether to go deeper or stop there.', cta1: 'Start quick analysis', cta2: 'Message manager' }, footer: { text: 'Private • Online' }, sticky: { cta: 'Start quick analysis' },
    quiz: { introKicker: 'Short entry into the analysis', introTitle: 'Answer a few questions', introText: 'It takes about 5–7 minutes. No registration, no calls and no heavy wording. Your answers are used only for the preview.', introTrust1: '🔒 Private', introTrust2: '⚡ Fast', introTrust3: '📩 Questions and payment via Telegram', start: 'Start', analyzingKicker: 'Preview analysis', analyzingTitle: 'Building your preview from the answers', analyzing1: 'Checking where reactions repeat…', analyzing2: 'Noting where inner tension rises…', analyzing3: 'Building the first picture…', resultKicker: 'Preview', resultTitle: 'A few strong patterns are already visible', resultCta1: 'Choose a format', resultCta2: 'Send preview to manager', planKicker: 'Finish', planTitle: 'Choose a format and continue in Telegram', planText: 'The manager will receive your plan, language, market and short preview. That makes payment and further questions easier.', planCta: 'Continue in Telegram' }
  },
  pl: {
    meta: { title: 'My Signal — osobista analiza wzorców i reakcji', description: 'My Signal to osobista analiza powtarzających się reakcji, myśli i scenariuszy. Spokojnie, prywatnie i bez pustych fraz.' },
    brand: { sub: 'Osobista analiza bez pustych słów' }, market: { label: 'Rynek' },
    loader: { line1: 'Dobieramy język i format…', line2: 'Przygotowujemy krótki start bez przeciążenia…', line3: 'Uruchamiamy interfejs…' },
    hero: { eyebrow: 'Prywatnie • 5–7 minut • bez rozmów', title: 'Nie stałeś się chłodniejszy. Stałeś się bardziej precyzyjny.', sub: 'Krótka analiza pomaga zobaczyć, co dokładnie się powtarza: w myślach, reakcjach, wyborze ludzi i wewnętrznym napięciu. Spokojnie, jasno i bez ciężkiego języka.', cta: 'Rozpocznij krótki analizę', cta2: 'Zobacz przykład wyniku', trust1: '🔒 Prywatnie', trust2: '🧠 To nie diagnoza ani terapia', trust3: '✉️ Pytania i płatność przez managera', cardBadge: 'W środku', cardTitle: 'Co otrzymujesz po płatności', card1: 'Jasny obraz powtarzających się wzorców i reakcji', card2: 'Wyjaśnienie, gdzie ucieka energia i skąd bierze się napięcie', card3: 'Punkty oparcia: na czym możesz oprzeć się już teraz', card4: 'Konkretny kolejny krok bez przeciążenia i ogólników', cardNote: 'To nie jest ogólny test „dla wszystkich”, ale osobista analiza, która pomaga nazwać to, co od dawna czułeś, lecz nie umiałeś jasno ująć.' },
    recognition: { label: 'Jeśli to brzmi znajomo — nie jesteś sam', title: 'Zwykle wszystko zaczyna się od trudnych do wyjaśnienia odczuć', item1: 'Wracasz do tych samych myśli nawet po czasie', item2: 'Zauważasz niespójności w ludziach, sytuacjach i w sobie', item3: 'Dużo rozumiesz, ale nie zawsze daje to spokój', item4: 'Trudno wyłączyć wewnętrzną analizę', item5: 'Czujesz, że w środku jest wzorzec, ale nie umiesz go precyzyjnie nazwać', item6: 'Chcesz jasności o sobie, a nie kolejnej ogólnej rady', sideKicker: 'Najważniejsza myśl', sideText: 'Nie ma z tobą nic „nie tak”. Po prostu masz powtarzające się wewnętrzne reakcje i scenariusze. Kiedy stają się zrozumiałe, wewnątrz robi się spokojniej.', sideStat1: 'minut na szybki analizę', sideStat2: 'warianty głębokości do wyboru', sideStat3: 'zniżka omawiana z managerem' },
    offer: { label: 'Co to jest', title: 'To nie test i nie zestaw ogólnych porad', sub: 'My Signal to osobista analiza tego, jak zbudowane są twoje reakcje, uwaga, powtarzające się scenariusze i wewnętrzne napięcie. Bez etykiet, pseudo-psychologii i suchej teorii.', card1Title: 'Co zawiera', card1Text: 'Reakcje, scenariusze, strefy przeciążenia, punkty oparcia i jeden konkretny kolejny krok.', card2Title: 'Jak jest podane', card2Text: 'Prostym językiem, bez mgły terminologii i bez tonu wykładu.', card3Title: 'Dla kogo', card3Text: 'Dla osób, które chcą zrozumieć siebie precyzyjniej, zamiast robić kolejny bezosobowy test.' },
    flow: { label: 'Jak to działa', title: 'Prosta droga od pierwszego zainteresowania do gotowej analizy', card1Title: 'Krótki start', card1Text: 'Odpowiadasz na kilka pytań bez rejestracji i bez przeciążenia.', card2Title: 'Wstępny wynik', card2Text: 'Od razu widzisz pierwsze wzorce i rozumiesz, gdzie warto wejść głębiej.', card3Title: 'Wybór formatu', card3Text: 'Wybierasz głębokość analizy i otrzymujesz lokalną cenę dla swojego rynku.', card4Title: 'Manager w Telegramie', card4Text: 'Manager otrzymuje twój plan, język i krótki wynik — dalej łatwiej zapłacić i zadać pytania.' },
    preview: { label: 'Przykład wyniku', title: 'Co zobaczysz po krótkiej analizie', kicker: 'Fragment wstępny', text: '— wracasz do myśli i sytuacji, dopóki nie poczujesz wewnętrznej jasności\n— masz silną uwagę na detale i niespójności\n— wewnątrz istnieje napięcie między „zrozumieć” a „odpuścić”\n— decyzje częściej przechodzą przez analizę niż impuls', note: 'To nie jest finalny wynik, ale kierunek, od którego analiza się zaczyna. Pełna wersja daje więcej precyzji, struktury i wyjaśnień.' },
    trust: { label: 'Zaufanie bez przesady', title: 'Dlaczego to brzmi osobiście, a nie generycznie', card1Title: 'Bez fałszywych obietnic', card1Text: 'To nie diagnoza, nie magia i nie obietnica „naprawienia wszystkiego”. To jasna analiza tego, co już widać w twoich reakcjach i scenariuszach.', card2Title: 'Bez publiczności', card2Text: 'Krótka analiza odbywa się bez rozmów. Wszystkie pytania, warunki i płatność idą przez managera w Telegramie w prywatnym formacie.', card3Title: 'Bez pustego języka', card3Text: 'Wynik jest napisany dla człowieka, nie dla błyszczącej strony sprzedażowej. Liczy się zrozumiałość, a nie dramatyczny styl.', card4Title: 'Lokalna cena', card4Text: 'Strona automatycznie dopasowuje język i cenę do rynku, a rabat do 25% można omówić z managerem.' },
    reviews: { label: 'Opinie', title: 'Jak ludzie opisują to doświadczenie', card1Text: '„Podobało mi się, że nie było tu presji ani przesady. Tekst połączył w całość rzeczy, które od dawna czułam w tle, ale nie umiałam ich nazwać.”', card1Meta: 'Alina, 29 • Standard', card2Text: '„To nie było jak test. Bardziej jak ktoś spokojnie ułożył moje reakcje i uczynił je czytelnymi.”', card2Meta: 'Maksym, 33 • Standard', card3Text: '„Najmocniej trafiło do mnie to, że wynik był napisany ludzkim językiem. Bez mądrych słów dla samego efektu.”', card3Meta: 'Karolina, 31 • Standard', card4Text: '„Manager odpowiedział szybko i spokojnie, a sama analiza była trafniejsza, niż się spodziewałem po tak krótkim quizie.”', card4Meta: 'Tomáš, 35 • Deep' },
    pricing: { label: 'Formaty', title: 'Wybierz głębokość, która ci pasuje', badge1: 'Łagodny start', badge2: 'Najlepszy balans', badge3: 'Maksymalna głębia', card1Title: 'Lite', card1Item1: 'Krótka analiza bez przeciążenia', card1Item2: 'Dobry wybór, jeśli chcesz zacząć spokojnie', card1Item3: 'Jasny pierwszy krok bez nadmiaru treści', card1Cta: 'Napisz do managera', card2Title: 'Standard', card2Item1: 'Głębsza analiza z wyjaśnieniami', card2Item2: 'Pomaga dokładniej zobaczyć powtarzające się scenariusze', card2Item3: 'Najlepszy balans między głębią a prostotą', card2Cta: 'Wybierz Standard', card3Title: 'Deep', card3Item1: 'Pełna analiza z detalami i strukturą', card3Item2: 'Dla tych, którzy chcą maksymalnej jasności', card3Item3: 'Dobry wybór, jeśli ważniejsza jest głębia niż szybkość', card3Cta: 'Wybierz Deep', managerTitle: 'Indywidualne warunki przez Telegram', managerText: 'Manager otrzymuje już wybrany plan, język i krótki wynik. Tam możesz też omówić rabat do 25%.', managerCta: 'Napisz do managera' },
    faq: { label: 'FAQ', title: 'Najważniejsze rzeczy przed startem', q1: 'Czy to test psychologiczny?', a1: 'Nie. To nie diagnoza i nie terapia. To analiza powtarzających się wzorców, reakcji i wewnętrznych scenariuszy.', q2: 'Ile to trwa?', a2: 'Krótka analiza trwa około 5–7 minut. Potem sam decydujesz, czy chcesz wejść głębiej.', q3: 'Jak wybierana jest cena?', a3: 'Strona automatycznie dobiera walutę i cenę do twojego rynku. Finalne warunki i rabat do 25% ustalasz z managerem.', q4: 'Czy mogę najpierw zobaczyć wstępny wynik?', a4: 'Tak. Przed płatnością dostajesz wstępny wynik, żeby zrozumieć logikę i format.' },
    final: { label: 'Możesz zacząć teraz', title: 'Zacznij od prostego kroku', text: 'Krótka analiza pomaga połączyć w całość to, co wcześniej było tłem, napięciem albo powtarzającym się scenariuszem. Potem sam decydujesz, czy chcesz wejść głębiej.', cta1: 'Rozpocznij krótki analizę', cta2: 'Napisz do managera' }, footer: { text: 'Prywatnie • Online' }, sticky: { cta: 'Rozpocznij krótki analizę' },
    quiz: { introKicker: 'Krótki start analizy', introTitle: 'Odpowiedz na kilka pytań', introText: 'To zajmie około 5–7 minut. Bez rejestracji, bez rozmów i bez ciężkiego języka. Odpowiedzi służą tylko do stworzenia wstępnego wyniku.', introTrust1: '🔒 Prywatnie', introTrust2: '⚡ Szybko', introTrust3: '📩 Pytania i płatność przez Telegram', start: 'Start', analyzingKicker: 'Wstępna analiza', analyzingTitle: 'Budujemy wynik na podstawie odpowiedzi', analyzing1: 'Sprawdzamy, gdzie reakcje się powtarzają…', analyzing2: 'Zaznaczamy, gdzie rośnie wewnętrzne napięcie…', analyzing3: 'Układamy pierwszy obraz…', resultKicker: 'Wstępny wynik', resultTitle: 'Widać już kilka mocnych wzorców', resultCta1: 'Wybierz format', resultCta2: 'Wyślij wynik managerowi', planKicker: 'Zakończenie', planTitle: 'Wybierz format i przejdź do Telegrama', planText: 'Manager otrzyma twój plan, język, rynek i krótki wynik. To ułatwia płatność i dalszą rozmowę.', planCta: 'Przejdź do Telegrama' }
  },
  cs: {
    meta: { title: 'My Signal — osobní analýza vzorců a reakcí', description: 'My Signal je osobní analýza opakujících se reakcí, myšlenek a scénářů. Klidně, soukromě a bez prázdných frází.' },
    brand: { sub: 'Osobní analýza bez prázdných slov' }, market: { label: 'Trh' },
    loader: { line1: 'Vybíráme jazyk a formát…', line2: 'Připravujeme krátký vstup bez přetížení…', line3: 'Spouštíme rozhraní…' },
    hero: { eyebrow: 'Soukromě • 5–7 minut • bez hovorů', title: 'Nestali jste se chladnějšími. Stali jste se přesnějšími.', sub: 'Krátká analýza pomáhá uvidět, co se přesně opakuje ve vašich myšlenkách, reakcích, volbě lidí a vnitřním napětí. Klidně, srozumitelně a bez těžkého jazyka.', cta: 'Začít krátkou analýzu', cta2: 'Zobrazit ukázku výstupu', trust1: '🔒 Soukromě', trust2: '🧠 Není to diagnóza ani terapie', trust3: '✉️ Dotazy a platba přes manažera', cardBadge: 'Co je uvnitř', cardTitle: 'Co člověk získá po zaplacení', card1: 'Jasný obraz opakujících se vzorců a reakcí', card2: 'Vysvětlení, kam odchází energie a proč roste napětí', card3: 'Opěrné body: o co se můžete opřít už teď', card4: 'Jasný další krok bez přetížení a obecných rad', cardNote: 'Není to obecný test „pro všechny“, ale osobní analýza, která pomáhá pojmenovat to, co už dlouho cítíte, ale nedokázali jste to přesně uchopit.' },
    recognition: { label: 'Pokud je vám to povědomé, nejste sami', title: 'Obvykle to začíná pocity, které se těžko vysvětlují', item1: 'Vracíte se ke stejným myšlenkám i po čase', item2: 'Všímáte si nesrovnalostí v lidech, situacích i v sobě', item3: 'Rozumíte mnoha věcem, ale ne vždy to přináší klid', item4: 'Je těžké vypnout vnitřní analýzu', item5: 'Cítíte, že uvnitř je určitý vzorec, ale neumíte ho přesně pojmenovat', item6: 'Nechcete další obecnou radu, ale větší jasno o sobě', sideKicker: 'Hlavní myšlenka', sideText: 'Není s vámi „něco špatně“. Jen máte opakující se vnitřní reakce a scénáře. Když se stanou srozumitelnými, uvnitř je mnohem klidněji.', sideStat1: 'minut pro rychlou analýzu', sideStat2: 'úrovně hloubky na výběr', sideStat3: 'sleva se řeší s manažerem' },
    offer: { label: 'Co to je', title: 'Není to test ani sada obecných rad', sub: 'My Signal je osobní analýza toho, jak jsou uspořádány vaše reakce, pozornost, opakující se scénáře a vnitřní napětí. Bez nálepek, pseudo psychologie a suché teorie.', card1Title: 'Co obsahuje', card1Text: 'Reakce, scénáře, zóny přetížení, opěrné body a jeden konkrétní další krok.', card2Title: 'Jak je podaná', card2Text: 'Jasným jazykem, bez mlhy pojmů a bez pocitu přednášky.', card3Title: 'Pro koho je', card3Text: 'Pro lidi, kteří chtějí porozumět sami sobě přesněji, ne jen vyplnit další bezejmenný test.' },
    flow: { label: 'Jak to funguje', title: 'Jednoduchá cesta od prvního zájmu k hotové analýze', card1Title: 'Krátký vstup', card1Text: 'Odpovíte na několik otázek bez registrace a bez přetížení.', card2Title: 'Předběžný výstup', card2Text: 'Hned uvidíte první vzorce a pochopíte, kam jít hlouběji.', card3Title: 'Výběr formátu', card3Text: 'Zvolíte hloubku analýzy a dostanete lokální cenu pro svůj trh.', card4Title: 'Manažer na Telegramu', card4Text: 'Manažer dostane váš plán, jazyk a krátký výstup — platba i další dotazy jsou pak jednodušší.' },
    preview: { label: 'Ukázka výstupu', title: 'Co uvidíte po krátké analýze', kicker: 'Předběžný fragment', text: '— máte tendenci vracet se k myšlenkám a situacím, dokud necítíte vnitřní jasno\n— máte silnou pozornost k detailům a nesrovnalostem\n— uvnitř je napětí mezi „pochopit“ a „pustit“\n— rozhodnutí častěji procházejí analýzou než impulsem', note: 'Není to finální výstup, ale směr, odkud analýza začíná. Plná verze přidává více přesnosti, struktury a vysvětlení.' },
    trust: { label: 'Důvěra bez přehánění', title: 'Proč to působí osobně a ne genericky', card1Title: 'Bez falešných slibů', card1Text: 'Není to diagnóza, magie ani slib „opravit všechno“. Je to jasná analýza toho, co se už objevuje ve vašich reakcích a scénářích.', card2Title: 'Bez veřejnosti', card2Text: 'Krátká analýza probíhá bez hovorů. Všechny dotazy, podmínky a platba jdou přes manažera na Telegramu v soukromém formátu.', card3Title: 'Bez prázdného jazyka', card3Text: 'Výstup je napsaný pro člověka, ne pro lesklou landing page. Důležitější je srozumitelnost než efekt za každou cenu.', card4Title: 'Lokální cena', card4Text: 'Web automaticky přizpůsobí jazyk a cenu trhu, zatímco slevu až 25% lze domluvit s manažerem.' },
    reviews: { label: 'Reference', title: 'Jak lidé popisují zkušenost po analýze', card1Text: '„Líbilo se mi, že tady nebyl tlak ani zbytečné drama. Text spojil do jednoho celku věci, které jsem dlouho cítila na pozadí, ale neuměla je formulovat.“', card1Meta: 'Alina, 29 • Standard', card2Text: '„Nepůsobilo to jako test. Spíš jako kdyby někdo klidně uspořádal moje reakce a udělal je čitelné.“', card2Meta: 'Maksym, 33 • Standard', card3Text: '„Nejvíc mi sedlo, že výstup byl napsaný lidským jazykem. Žádná chytrá slova jen pro efekt.“', card3Meta: 'Karolina, 31 • Standard', card4Text: '„Manažer odpověděl rychle a klidně a samotná analýza byla přesnější, než jsem čekal po tak krátkém kvízu.“', card4Meta: 'Tomáš, 35 • Deep' },
    pricing: { label: 'Formáty', title: 'Vyberte si hloubku, která vám sedí', badge1: 'Lehký start', badge2: 'Nejlepší rovnováha', badge3: 'Maximální hloubka', card1Title: 'Lite', card1Item1: 'Krátká analýza bez přetížení', card1Item2: 'Hodí se, pokud chcete začít klidně', card1Item3: 'Jasný první krok bez zbytečného objemu', card1Cta: 'Napsat manažerovi', card2Title: 'Standard', card2Item1: 'Hlubší analýza s vysvětlením', card2Item2: 'Pomáhá přesněji vidět opakující se scénáře', card2Item3: 'Nejlepší rovnováha mezi hloubkou a jednoduchostí', card2Cta: 'Vybrat Standard', card3Title: 'Deep', card3Item1: 'Plná analýza s detaily a strukturou', card3Item2: 'Pro ty, kdo chtějí maximální jasno', card3Item3: 'Vhodné, pokud je důležitější hloubka než rychlost', card3Cta: 'Vybrat Deep', managerTitle: 'Individuální podmínky přes Telegram', managerText: 'Manažer už dostane zvolený plán, jazyk a krátký výstup. Tam lze probrat i slevu až 25%.', managerCta: 'Napsat manažerovi' },
    faq: { label: 'FAQ', title: 'Důležité věci před startem', q1: 'Je to psychologický test?', a1: 'Ne. Není to diagnostika ani terapie. Je to analýza opakujících se vzorců, reakcí a vnitřních scénářů.', q2: 'Jak dlouho to trvá?', a2: 'Krátká analýza trvá asi 5–7 minut. Pak se sami rozhodnete, zda chcete hlubší formát.', q3: 'Jak se určuje cena?', a3: 'Web automaticky zvolí měnu a cenu podle trhu. Finální podmínky a sleva až 25% se řeší s manažerem.', q4: 'Mohu nejdřív vidět předběžný výstup?', a4: 'Ano. Před platbou dostanete předběžný výstup, abyste pochopili logiku a formát.' },
    final: { label: 'Můžete začít hned', title: 'Začněte jednoduchým krokem', text: 'Krátká analýza pomáhá spojit do jednoho celku to, co dřív působilo jako šum, úzkost nebo opakující se scénář. Pak se sami rozhodnete, zda chcete jít hlouběji.', cta1: 'Začít krátkou analýzu', cta2: 'Napsat manažerovi' }, footer: { text: 'Soukromě • Online' }, sticky: { cta: 'Začít krátkou analýzu' },
    quiz: { introKicker: 'Krátký vstup do analýzy', introTitle: 'Odpovězte na několik otázek', introText: 'Zabere to asi 5–7 minut. Bez registrace, bez hovorů a bez těžkého jazyka. Odpovědi slouží jen k vytvoření předběžného výstupu.', introTrust1: '🔒 Soukromě', introTrust2: '⚡ Rychle', introTrust3: '📩 Dotazy a platba přes Telegram', start: 'Začít', analyzingKicker: 'Předběžná analýza', analyzingTitle: 'Sestavujeme výstup podle odpovědí', analyzing1: 'Sledujeme, kde se reakce opakují…', analyzing2: 'Všímáme si, kde roste vnitřní napětí…', analyzing3: 'Skládáme první obraz…', resultKicker: 'Předběžný výstup', resultTitle: 'Už je vidět několik silných vzorců', resultCta1: 'Vybrat formát', resultCta2: 'Poslat výstup manažerovi', planKicker: 'Dokončení', planTitle: 'Vyberte formát a pokračujte v Telegramu', planText: 'Manažer dostane váš plán, jazyk, trh a krátký výstup. To usnadní platbu i další komunikaci.', planCta: 'Pokračovat v Telegramu' }
  }
};

const MARKET_CONFIG = {
  PL: { currency: 'PLN', locale: 'pl-PL', prices: { lite: 169, standard: 339, deep: 629 }, defaultLang: 'pl', label: 'Poland / PLN' },
  CZ: { currency: 'CZK', locale: 'cs-CZ', prices: { lite: 990, standard: 1990, deep: 3790 }, defaultLang: 'cs', label: 'Czechia / CZK' },
  UA: { currency: 'EUR', locale: 'uk-UA', prices: { lite: 39, standard: 79, deep: 149 }, defaultLang: 'uk', label: 'Ukraine / EUR' },
  KZ: { currency: 'USD', locale: 'ru-RU', prices: { lite: 45, standard: 89, deep: 169 }, defaultLang: 'ru', label: 'Kazakhstan / USD' },
  GE: { currency: 'USD', locale: 'en-US', prices: { lite: 45, standard: 89, deep: 169 }, defaultLang: 'ru', label: 'Georgia / USD' },
  AM: { currency: 'USD', locale: 'ru-RU', prices: { lite: 45, standard: 89, deep: 169 }, defaultLang: 'ru', label: 'Armenia / USD' },
  KG: { currency: 'USD', locale: 'ru-RU', prices: { lite: 45, standard: 89, deep: 169 }, defaultLang: 'ru', label: 'Kyrgyzstan / USD' },
  UZ: { currency: 'USD', locale: 'ru-RU', prices: { lite: 45, standard: 89, deep: 169 }, defaultLang: 'ru', label: 'Uzbekistan / USD' },
  EU: { currency: 'EUR', locale: 'en-IE', prices: { lite: 39, standard: 79, deep: 149 }, defaultLang: 'en', label: 'EU / EUR' },
  DEFAULT: { currency: 'USD', locale: 'en-US', prices: { lite: 45, standard: 89, deep: 169 }, defaultLang: 'en', label: 'Global / USD' }
};

const QUESTIONS = {
  ru: [
    ['Мысли о некоторых ситуациях возвращаются к тебе даже спустя время?', 'Да, часто', 'Иногда', 'Редко'],
    ['Ты замечаешь в людях несостыковки быстрее, чем хотелось бы?', 'Да, почти сразу', 'Иногда', 'Не особенно'],
    ['Когда внутри напряжение, тебе важнее понять причину, чем просто отвлечься?', 'Да', 'Иногда', 'Нет'],
    ['Тебе трудно отпустить разговор или момент, если он остался незавершённым?', 'Да', 'Бывает', 'Редко'],
    ['Ты склонен долго взвешивать решения, даже если внешне всё просто?', 'Да', 'Зависит от ситуации', 'Нет'],
    ['Ты часто чувствуешь, что понимаешь больше, чем можешь объяснить словами?', 'Да', 'Иногда', 'Редко'],
    ['После общения тебе нужно время, чтобы внутренне всё разобрать?', 'Да', 'Иногда', 'Нет'],
    ['Чувство неопределённости быстрее утомляет тебя, чем открытый конфликт?', 'Да', 'Иногда', 'Нет'],
    ['Ты чаще ищешь смысл происходящего, чем готов просто “оставить как есть”?', 'Да', 'Иногда', 'Нет'],
    ['Тебе важно не просто получить ответ, а почувствовать внутреннюю ясность?', 'Да', 'Иногда', 'Редко']
  ],
  uk: [
    ['Думки про деякі ситуації повертаються до тебе навіть через час?', 'Так, часто', 'Іноді', 'Рідко'],
    ['Ти помічаєш нестиковки в людях швидше, ніж хотілося б?', 'Так, майже одразу', 'Іноді', 'Не дуже'],
    ['Коли всередині напруга, тобі важливіше зрозуміти причину, ніж просто відволіктися?', 'Так', 'Іноді', 'Ні'],
    ['Тобі важко відпустити розмову або момент, якщо він залишився незавершеним?', 'Так', 'Буває', 'Рідко'],
    ['Ти схильний довго зважувати рішення, навіть якщо зовні все просто?', 'Так', 'Залежить від ситуації', 'Ні'],
    ['Ти часто відчуваєш, що розумієш більше, ніж можеш пояснити словами?', 'Так', 'Іноді', 'Рідко'],
    ['Після спілкування тобі потрібен час, щоб внутрішньо все розібрати?', 'Так', 'Іноді', 'Ні'],
    ['Відчуття невизначеності виснажує тебе швидше, ніж відкритий конфлікт?', 'Так', 'Іноді', 'Ні'],
    ['Ти частіше шукаєш сенс того, що відбувається, ніж готовий просто “залишити як є”?', 'Так', 'Іноді', 'Ні'],
    ['Тобі важливо не просто отримати відповідь, а відчути внутрішню ясність?', 'Так', 'Іноді', 'Рідко']
  ],
  en: [
    ['Do some situations keep returning to your mind even after time passes?', 'Yes, often', 'Sometimes', 'Rarely'],
    ['Do you notice inconsistencies in people faster than you would like?', 'Yes, almost immediately', 'Sometimes', 'Not really'],
    ['When you feel tension inside, is understanding the reason more important than just distracting yourself?', 'Yes', 'Sometimes', 'No'],
    ['Is it hard to let go of a conversation or moment if it feels unfinished?', 'Yes', 'Sometimes', 'Rarely'],
    ['Do you tend to overweigh decisions even when everything seems simple on the surface?', 'Yes', 'Depends on the situation', 'No'],
    ['Do you often feel that you understand more than you can clearly explain?', 'Yes', 'Sometimes', 'Rarely'],
    ['After communication, do you need time to process everything internally?', 'Yes', 'Sometimes', 'No'],
    ['Does uncertainty drain you faster than open conflict?', 'Yes', 'Sometimes', 'No'],
    ['Do you usually search for meaning instead of simply leaving things as they are?', 'Yes', 'Sometimes', 'No'],
    ['Is inner clarity more important to you than just getting a quick answer?', 'Yes', 'Sometimes', 'Rarely']
  ],
  pl: [
    ['Czy niektóre sytuacje wracają do twoich myśli nawet po czasie?', 'Tak, często', 'Czasami', 'Rzadko'],
    ['Czy zauważasz niespójności w ludziach szybciej, niż byś chciał?', 'Tak, prawie od razu', 'Czasami', 'Niezbyt'],
    ['Kiedy czujesz napięcie, czy ważniejsze jest zrozumienie przyczyny niż samo odwrócenie uwagi?', 'Tak', 'Czasami', 'Nie'],
    ['Czy trudno ci odpuścić rozmowę lub moment, jeśli został niedomknięty?', 'Tak', 'Zdarza się', 'Rzadko'],
    ['Czy długo ważysz decyzje, nawet gdy z zewnątrz wszystko wygląda prosto?', 'Tak', 'To zależy', 'Nie'],
    ['Czy często czujesz, że rozumiesz więcej, niż umiesz jasno wyjaśnić?', 'Tak', 'Czasami', 'Rzadko'],
    ['Czy po rozmowie potrzebujesz czasu, by wszystko poukładać wewnętrznie?', 'Tak', 'Czasami', 'Nie'],
    ['Czy niepewność męczy cię szybciej niż otwarty konflikt?', 'Tak', 'Czasami', 'Nie'],
    ['Czy częściej szukasz sensu tego, co się dzieje, niż po prostu zostawiasz to bez zmian?', 'Tak', 'Czasami', 'Nie'],
    ['Czy ważniejsza jest dla ciebie wewnętrzna jasność niż szybka odpowiedź?', 'Tak', 'Czasami', 'Rzadko']
  ],
  cs: [
    ['Vrací se vám některé situace do hlavy i po delší době?', 'Ano, často', 'Někdy', 'Zřídka'],
    ['Všímáte si nesrovnalostí v lidech rychleji, než byste chtěli?', 'Ano, téměř hned', 'Někdy', 'Ne moc'],
    ['Když cítíte napětí, je pro vás důležitější pochopit příčinu než se jen rozptýlit?', 'Ano', 'Někdy', 'Ne'],
    ['Je pro vás těžké pustit rozhovor nebo okamžik, pokud zůstal nedokončený?', 'Ano', 'Občas', 'Zřídka'],
    ['Máte tendenci dlouho zvažovat rozhodnutí, i když vše navenek vypadá jednoduše?', 'Ano', 'Záleží na situaci', 'Ne'],
    ['Máte často pocit, že rozumíte víc, než dokážete jasně vysvětlit?', 'Ano', 'Někdy', 'Zřídka'],
    ['Potřebujete po komunikaci čas na vnitřní zpracování?', 'Ano', 'Někdy', 'Ne'],
    ['Vyčerpává vás nejistota rychleji než otevřený konflikt?', 'Ano', 'Někdy', 'Ne'],
    ['Hledáte spíše smysl toho, co se děje, než abyste to jen nechali být?', 'Ano', 'Někdy', 'Ne'],
    ['Je pro vás důležitější vnitřní jasno než rychlá odpověď?', 'Ano', 'Někdy', 'Zřídka']
  ]
};

const PREVIEW_BANK = {
  ru: {
    low: ['Ты тонко чувствуешь, когда что-то идёт не в ту сторону.', 'Тебе важно понимать логику происходящего, даже в мелочах.', 'Ты замечаешь напряжение раньше, чем оно становится очевидным.', 'Для тебя важна внутренняя собранность, а не внешняя скорость.'],
    mid: ['Ты часто возвращаешься к мыслям и ситуациям, пока не почувствуешь ясность.', 'Внутри есть конфликт между желанием понять и желанием просто отпустить.', 'Тебе трудно идти дальше, если не сложилась цельная картина.', 'Ты быстрее многих видишь несостыковки и тонкие сигналы.'],
    high: ['Анализ у тебя работает как способ контроля и снижения неопределённости.', 'Ты можешь держать внутри незавершённые ситуации дольше, чем хотелось бы.', 'Твоя чувствительность к деталям делает тебя точным, но иногда перегружает.', 'Тебе важно не просто услышать ответ, а почувствовать внутреннее совпадение.'],
    summaryLow: 'Сейчас видно, что для тебя важны ясность, собранность и ощущение внутренней логики. Уже на этом уровне разбор может помочь назвать ключевые опоры.',
    summaryMid: 'Похоже, у тебя выражен паттерн внутреннего анализа и возврата к незавершённым ситуациям. Полный разбор поможет понять, где это даёт силу, а где создаёт перегруз.',
    summaryHigh: 'Сейчас заметен сильный паттерн контроля через анализ, высокой чувствительности к несостыковкам и внутренней потребности в ясности. Глубокий формат даст самую точную картину.'
  },
  uk: {
    low: ['Ти тонко відчуваєш, коли щось іде не туди.', 'Тобі важливо розуміти логіку подій навіть у дрібницях.', 'Ти помічаєш напругу раніше, ніж вона стає очевидною.', 'Для тебе важлива внутрішня зібраність, а не зовнішня швидкість.'],
    mid: ['Ти часто повертаєшся до думок і ситуацій, доки не відчуєш ясність.', 'Усередині є конфлікт між бажанням зрозуміти й бажанням просто відпустити.', 'Тобі важко йти далі, якщо не склалася цілісна картина.', 'Ти швидше за багатьох бачиш нестиковки й тонкі сигнали.'],
    high: ['Аналіз у тебе працює як спосіб контролю й зниження невизначеності.', 'Ти можеш утримувати всередині незавершені ситуації довше, ніж хотілося б.', 'Твоя чутливість до деталей робить тебе точним, але іноді перевантажує.', 'Тобі важливо не просто почути відповідь, а відчути внутрішній збіг.'],
    summaryLow: 'Зараз видно, що для тебе важливі ясність, зібраність і відчуття внутрішньої логіки. Уже на цьому рівні розбір може допомогти назвати ключові опори.',
    summaryMid: 'Схоже, у тебе виражений патерн внутрішнього аналізу й повернення до незавершених ситуацій. Повний розбір допоможе зрозуміти, де це дає силу, а де створює перевантаження.',
    summaryHigh: 'Зараз помітний сильний патерн контролю через аналіз, високої чутливості до нестиковок і внутрішньої потреби в ясності. Глибокий формат дасть найточнішу картину.'
  },
  en: {
    low: ['You sense quite early when something is moving in the wrong direction.', 'It matters to you to understand the logic behind what is happening.', 'You notice tension before it becomes obvious.', 'Inner composure matters more to you than external speed.'],
    mid: ['You often return to thoughts and situations until you feel clarity.', 'There is tension between wanting to understand and wanting to let go.', 'It is hard to move on without a complete picture.', 'You catch inconsistencies and subtle signals faster than most people.'],
    high: ['Analysis works for you as a way to reduce uncertainty and regain control.', 'You may hold unfinished situations inside longer than you would like.', 'Your sensitivity to detail makes you precise, but it can also overload you.', 'It matters to you not only to hear an answer, but to feel that it truly fits inside.'],
    summaryLow: 'Right now it is clear that inner clarity, coherence and a sense of logic matter to you. Even this short stage can help name your core support points.',
    summaryMid: 'A clear pattern of inner analysis and returning to unfinished situations is visible here. A fuller format can show where this gives you strength and where it creates overload.',
    summaryHigh: 'A strong pattern of control through analysis, sensitivity to inconsistencies and an inner need for clarity is already visible. The deeper format will provide the sharpest picture.'
  },
  pl: {
    low: ['Wyraźnie wyczuwasz, kiedy coś zaczyna iść w złą stronę.', 'Ważne jest dla ciebie rozumienie logiki tego, co się dzieje.', 'Napięcie zauważasz wcześniej, niż staje się oczywiste.', 'Wewnętrzne uporządkowanie jest dla ciebie ważniejsze niż zewnętrzna szybkość.'],
    mid: ['Często wracasz do myśli i sytuacji, dopóki nie poczujesz jasności.', 'W tobie jest napięcie między chęcią zrozumienia a chęcią odpuszczenia.', 'Trudno iść dalej bez pełnego obrazu.', 'Szybciej niż inni wychwytujesz niespójności i subtelne sygnały.'],
    high: ['Analiza działa u ciebie jako sposób na zmniejszenie niepewności i odzyskanie kontroli.', 'Możesz nosić w sobie niedomknięte sytuacje dłużej, niż byś chciał.', 'Twoja wrażliwość na detale daje precyzję, ale bywa też przeciążająca.', 'Ważne jest dla ciebie nie tylko usłyszeć odpowiedź, ale też poczuć, że wewnętrznie pasuje.'],
    summaryLow: 'Na tym etapie widać, że ważne są dla ciebie jasność, spójność i poczucie wewnętrznej logiki. Już krótka analiza może pomóc nazwać główne punkty oparcia.',
    summaryMid: 'Widać wyraźny wzorzec wewnętrznej analizy i wracania do niedomkniętych sytuacji. Pełniejszy format pokaże, gdzie daje ci to siłę, a gdzie tworzy przeciążenie.',
    summaryHigh: 'Już teraz widać silny wzorzec kontroli przez analizę, wysoką czułość na niespójności i wewnętrzną potrzebę jasności. Głębszy format da najdokładniejszy obraz.'
  },
  cs: {
    low: ['Jemně cítíte, když se něco začíná ubírat špatným směrem.', 'Je pro vás důležité chápat logiku toho, co se děje.', 'Napětí zaznamenáte dřív, než je zjevné.', 'Vnitřní uspořádanost je pro vás důležitější než vnější rychlost.'],
    mid: ['Často se vracíte k myšlenkám a situacím, dokud nepocítíte jasno.', 'Uvnitř je napětí mezi potřebou porozumět a potřebou pustit to.', 'Je těžké jít dál bez celkového obrazu.', 'Nesrovnalosti a jemné signály zachytíte dřív než většina lidí.'],
    high: ['Analýza u vás funguje jako způsob, jak snížit nejistotu a získat kontrolu.', 'Nedokončené situace můžete nést uvnitř déle, než byste chtěli.', 'Citlivost na detaily vám dává přesnost, ale může vás i přetěžovat.', 'Není pro vás důležité jen slyšet odpověď, ale také cítit, že uvnitř opravdu sedí.'],
    summaryLow: 'Je vidět, že jsou pro vás důležité jasno, soustředění a pocit vnitřní logiky. Už krátká analýza může pomoci pojmenovat klíčové opěrné body.',
    summaryMid: 'Je patrný vzorec vnitřní analýzy a vracení se k nedokončeným situacím. Plnější formát ukáže, kde vám to dává sílu a kde vytváří přetížení.',
    summaryHigh: 'Už teď je vidět silný vzorec kontroly skrze analýzu, vysokou citlivost na nesrovnalosti a vnitřní potřebu jasna. Hlubší formát dá nejpřesnější obraz.'
  }
};


let currentMarket = 'EU';
let currentLang = 'en';
let answers = [];
let currentQuestionIndex = 0;
let latestPreview = { points: [], summary: '', score: 0, tier: 'mid' };
let selectedPlan = 'standard';

const SITE_CONFIG = {
  siteName: 'My Signal',
  telegramHandle: document.querySelector('meta[name="ms:telegram"]')?.content?.trim() || 'itsmysignals',
  supportEmail: document.querySelector('meta[name="ms:support-email"]')?.content?.trim() || '',
  gaMeasurementId: document.querySelector('meta[name="ms:ga4"]')?.content?.trim() || '',
  metaPixelId: document.querySelector('meta[name="ms:meta-pixel"]')?.content?.trim() || '',
  baseUrl: window.location.origin,
  defaultUrl: `${window.location.origin}/`,
  ogImage: `${window.location.origin}/assets/images/og-cover.png`
};

const COPY_STRINGS = {
  ru: {
    legal: {
      label: 'Перед оплатой', title: 'Понятные правила и резервный способ связи',
      card1Title: 'Что это за сервис и чем он не является',
      card1Text: 'My Signal — это информационный персональный разбор. Это не диагноз, не терапия, не экстренная помощь и не медицинская услуга.',
      privacy: 'Политика конфиденциальности', terms: 'Условия использования'
    },
    fallback: {
      cardTitle: 'Не готов писать в Telegram прямо сейчас?',
      cardText: 'Можно сначала скопировать превью и контакты. Когда будет добавлен support email, кнопка email станет резервным каналом заявки.',
      copy: 'Скопировать превью', email: 'Email backup',
      note: 'Telegram остаётся самым быстрым каналом, но теперь есть и запасной путь.',
      copied: 'Превью и контакты скопированы.',
      emailDisabled: 'Добавь support email в meta ms:support-email, чтобы включить резервный канал.'
    }
  },
  uk: {
    legal: {
      label: 'Перед оплатою', title: 'Зрозумілі правила та резервний канал звʼязку',
      card1Title: 'Що це за сервіс і чим він не є',
      card1Text: 'My Signal — це інформаційний персональний розбір. Це не діагноз, не терапія, не екстрена допомога і не медична послуга.',
      privacy: 'Політика конфіденційності', terms: 'Умови використання'
    },
    fallback: {
      cardTitle: 'Не готові перейти в Telegram прямо зараз?',
      cardText: 'Можна спочатку скопіювати превʼю та контакти. Коли буде додано support email, кнопка email стане резервним каналом заявки.',
      copy: 'Скопіювати превʼю', email: 'Email backup',
      note: 'Telegram лишається найшвидшим каналом, але тепер є і запасний шлях.',
      copied: 'Превʼю та контакти скопійовано.',
      emailDisabled: 'Додайте support email у meta ms:support-email, щоб увімкнути резервний канал.'
    }
  },
  en: {
    legal: {
      label: 'Before payment', title: 'Clear rules and a backup contact path',
      card1Title: 'What this service is and is not',
      card1Text: 'My Signal is an informational personal analysis. It is not a diagnosis, not therapy, not emergency help and not medical treatment.',
      privacy: 'Privacy Policy', terms: 'Terms of Use'
    },
    fallback: {
      cardTitle: 'Not ready to jump into Telegram?',
      cardText: 'You can copy the preview and contact details first. When support email is configured, the email button becomes a backup lead channel.',
      copy: 'Copy preview', email: 'Email backup',
      note: 'Telegram remains the fastest path, but now there is a fallback.',
      copied: 'Preview and contact details copied.',
      emailDisabled: 'Add a real support email to meta ms:support-email to enable this backup channel.'
    }
  },
  pl: {
    legal: {
      label: 'Przed płatnością', title: 'Jasne zasady i zapasowa ścieżka kontaktu',
      card1Title: 'Czym jest ta usługa, a czym nie jest',
      card1Text: 'My Signal to informacyjna analiza osobista. To nie diagnoza, nie terapia, nie pomoc kryzysowa i nie usługa medyczna.',
      privacy: 'Polityka prywatności', terms: 'Warunki korzystania'
    },
    fallback: {
      cardTitle: 'Nie chcesz jeszcze przechodzić do Telegrama?',
      cardText: 'Możesz najpierw skopiować podgląd i dane kontaktowe. Gdy dodasz support email, przycisk email stanie się zapasowym kanałem leadowym.',
      copy: 'Skopiuj podgląd', email: 'Email backup',
      note: 'Telegram pozostaje najszybszą ścieżką, ale teraz jest też plan awaryjny.',
      copied: 'Podgląd i dane kontaktowe zostały skopiowane.',
      emailDisabled: 'Dodaj prawdziwy support email w meta ms:support-email, aby włączyć kanał zapasowy.'
    }
  },
  cs: {
    legal: {
      label: 'Před platbou', title: 'Jasná pravidla a záložní cesta kontaktu',
      card1Title: 'Co tato služba je a co není',
      card1Text: 'My Signal je informační osobní analýza. Není to diagnóza, terapie, krizová pomoc ani zdravotní služba.',
      privacy: 'Zásady ochrany soukromí', terms: 'Podmínky použití'
    },
    fallback: {
      cardTitle: 'Nechcete ještě hned přejít do Telegramu?',
      cardText: 'Nejprve si můžete zkopírovat náhled a kontaktní údaje. Jakmile doplníte support email, tlačítko email se stane záložním lead kanálem.',
      copy: 'Kopírovat náhled', email: 'Email backup',
      note: 'Telegram zůstává nejrychlejší cestou, ale teď existuje i záloha.',
      copied: 'Náhled a kontaktní údaje byly zkopírovány.',
      emailDisabled: 'Přidejte skutečný support email do meta ms:support-email, aby se záložní kanál aktivoval.'
    }
  }
};

const STORAGE_KEYS = {
  lang: 'ms_lang',
  utm: 'ms_utm',
  market: 'ms_market',
  session: 'ms_session_id'
};

const modal = document.getElementById('quizModal');
const screens = [...document.querySelectorAll('.quiz-screen')];
const quizQuestion = document.getElementById('quizQuestion');
const quizOptions = document.getElementById('quizOptions');
const quizCurrent = document.getElementById('quizCurrent');
const quizTotal = document.getElementById('quizTotal');
const quizProgressBar = document.getElementById('quizProgressBar');
const previewPoints = document.getElementById('previewPoints');
const previewSummary = document.getElementById('previewSummary');
const telegramCheckoutLink = document.getElementById('telegramCheckoutLink');
const telegramPreviewLink = document.getElementById('telegramPreviewLink');
const marketDisplay = document.getElementById('marketDisplay');
const heroPriceBadge = document.getElementById('heroPriceBadge');
const copyPreviewButton = document.getElementById('copyPreviewButton');
const copyPreviewStatus = document.getElementById('copyPreviewStatus');
const emailFallbackLink = document.getElementById('emailFallbackLink');
const managerDirectLinks = [...document.querySelectorAll('.js-telegram-direct')];

function q(name) {
  return new URLSearchParams(window.location.search).get(name);
}

function getSessionId() {
  const stored = localStorage.getItem(STORAGE_KEYS.session);
  if (stored) return stored;
  const value = `ms-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
  localStorage.setItem(STORAGE_KEYS.session, value);
  return value;
}

function captureUtm() {
  const params = new URLSearchParams(window.location.search);
  const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
  const next = {};
  keys.forEach((key) => {
    const value = params.get(key);
    if (value) next[key] = value;
  });
  if (Object.keys(next).length) {
    localStorage.setItem(STORAGE_KEYS.utm, JSON.stringify(next));
    return next;
  }
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.utm) || '{}');
  } catch {
    return {};
  }
}

function getUtm() {
  return captureUtm();
}

function initAnalytics() {
  if (SITE_CONFIG.gaMeasurementId) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${SITE_CONFIG.gaMeasurementId}`;
    document.head.appendChild(script);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag(){ window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', SITE_CONFIG.gaMeasurementId, { send_page_view: false });
  }
  if (SITE_CONFIG.metaPixelId) {
    window.fbq = window.fbq || function fbq(){ (window.fbq.q = window.fbq.q || []).push(arguments); };
    window.fbq('init', SITE_CONFIG.metaPixelId);
  }
}

function track(eventName, params = {}) {
  const payload = {
    lang: currentLang,
    market: currentMarket,
    plan: selectedPlan,
    score: latestPreview.score,
    tier: latestPreview.tier,
    session_id: getSessionId(),
    ...getUtm(),
    ...params
  };
  if (window.gtag) window.gtag('event', eventName, payload);
  if (window.fbq) window.fbq('trackCustom', eventName, payload);
  window.dispatchEvent(new CustomEvent('mysignal:analytics', { detail: { eventName, payload } }));
}

function detectMarket() {
  const forced = q('market');
  if (forced && MARKET_CONFIG[forced.toUpperCase()]) return forced.toUpperCase();

  const saved = localStorage.getItem(STORAGE_KEYS.market);
  if (saved && MARKET_CONFIG[saved]) return saved;

  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
  const lang = (navigator.language || '').toLowerCase();

  if (/warsaw/i.test(tz)) return 'PL';
  if (/prague/i.test(tz)) return 'CZ';
  if (/kyiv|kiev/i.test(tz)) return 'UA';
  if (/almaty|astana|aqtau|aqtobe/i.test(tz)) return 'KZ';
  if (/tbilisi/i.test(tz)) return 'GE';
  if (/yerevan/i.test(tz)) return 'AM';
  if (/bishkek/i.test(tz)) return 'KG';
  if (/tashkent|samarkand/i.test(tz)) return 'UZ';

  if (lang.startsWith('pl')) return 'PL';
  if (lang.startsWith('cs')) return 'CZ';
  if (lang.startsWith('uk')) return 'UA';

  return 'EU';
}

function detectLanguage() {
  const forced = q('lang');
  if (forced && supportedLangs.includes(forced)) return forced;
  const saved = localStorage.getItem(STORAGE_KEYS.lang);
  if (saved && supportedLangs.includes(saved)) return saved;
  const browser = (navigator.language || 'en').slice(0, 2).toLowerCase();
  if (supportedLangs.includes(browser)) return browser;
  const fallback = MARKET_CONFIG[currentMarket]?.defaultLang || 'en';
  return supportedLangs.includes(fallback) ? fallback : 'en';
}

function formatPrice(value, currency, locale) {
  return new Intl.NumberFormat(locale || undefined, {
    style: 'currency', currency, maximumFractionDigits: 0
  }).format(value);
}

function getPricing() {
  return MARKET_CONFIG[currentMarket] || MARKET_CONFIG.DEFAULT;
}

function setDynamicSeo(lang) {
  const tr = TRANSLATIONS[lang] || TRANSLATIONS.en;
  const canonicalUrl = `${SITE_CONFIG.baseUrl}/`;
  const ogImage = SITE_CONFIG.ogImage;
  const tags = {
    'meta[name="description"]': tr.meta.description,
    'meta[property="og:title"]': tr.meta.title,
    'meta[property="og:description"]': tr.meta.description,
    'meta[name="twitter:title"]': tr.meta.title,
    'meta[name="twitter:description"]': tr.meta.description,
    'meta[property="og:url"]': canonicalUrl,
    'meta[property="og:image"]': ogImage,
    'meta[name="twitter:image"]': ogImage
  };
  document.title = tr.meta.title;
  Object.entries(tags).forEach(([selector, value]) => {
    const el = document.querySelector(selector);
    if (el && value) el.setAttribute('content', value);
  });
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.setAttribute('href', canonicalUrl);
  document.querySelectorAll('link[rel="alternate"]').forEach((link) => {
    const hreflang = link.getAttribute('hreflang');
    if (!hreflang) return;
    link.setAttribute('href', hreflang === 'x-default' ? canonicalUrl : `${canonicalUrl}?lang=${hreflang}`);
  });
}

function applyCopy(lang) {
  const dictionary = COPY_STRINGS[lang] || COPY_STRINGS.en;
  document.querySelectorAll('[data-copy]').forEach((el) => {
    const path = el.dataset.copy.split('.');
    let value = dictionary;
    path.forEach((part) => { value = value?.[part]; });
    if (typeof value === 'string') el.textContent = value;
  });
}

function setMeta(lang) {
  setDynamicSeo(lang);
}

function updateUrlState() {
  const params = new URLSearchParams(window.location.search);
  params.set('lang', currentLang);
  params.set('market', currentMarket);
  const next = `${window.location.pathname}?${params.toString()}${window.location.hash}`;
  window.history.replaceState({}, '', next);
}

function applyLanguage(lang, options = {}) {
  const previousLang = currentLang;
  currentLang = supportedLangs.includes(lang) ? lang : 'en';
  localStorage.setItem(STORAGE_KEYS.lang, currentLang);
  document.documentElement.lang = currentLang;
  document.querySelectorAll('.lang-btn').forEach((btn) => btn.classList.toggle('active', btn.dataset.lang === currentLang));
  const dictionary = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const path = el.dataset.i18n.split('.');
    let value = dictionary;
    path.forEach((part) => { value = value?.[part]; });
    if (typeof value === 'string') {
      if (value.includes('\n') && el.tagName === 'P') {
        el.innerHTML = value.replace(/\n/g, '<br>');
      } else {
        el.textContent = value;
      }
    }
  });
  applyCopy(currentLang);
  setMeta(currentLang);
  renderQuestion();
  renderPreview();
  applyPricing();
  updateEmailFallback();
  updateUrlState();
  if (!options.silent && previousLang && previousLang !== currentLang) {
    track('language_change', { from_lang: previousLang, to_lang: currentLang });
  }
}

function applyPricing() {
  const pricing = getPricing();
  localStorage.setItem(STORAGE_KEYS.market, currentMarket);
  marketDisplay.textContent = pricing.label;
  document.querySelectorAll('[data-price]').forEach((el) => {
    const plan = el.dataset.price;
    el.textContent = formatPrice(pricing.prices[plan], pricing.currency, pricing.locale);
  });
  document.querySelectorAll('[data-plan-price]').forEach((el) => {
    const plan = el.dataset.planPrice;
    el.textContent = formatPrice(pricing.prices[plan], pricing.currency, pricing.locale);
  });
  heroPriceBadge.textContent = `Standard — ${formatPrice(pricing.prices.standard, pricing.currency, pricing.locale)}`;
  updateCheckoutLink();
}

function showScreen(name) {
  screens.forEach((screen) => screen.classList.toggle('active', screen.dataset.screen === name));
}

function openQuiz(source = 'unknown') {
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  answers = [];
  currentQuestionIndex = 0;
  latestPreview = { points: [], summary: '', score: 0, tier: 'mid' };
  showScreen('intro');
  track('quiz_open', { source });
}

function closeQuiz() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}

function renderQuestion() {
  const list = QUESTIONS[currentLang] || QUESTIONS.en;
  quizTotal.textContent = list.length;
  if (!list[currentQuestionIndex]) return;
  const [question, a, b, c] = list[currentQuestionIndex];
  quizQuestion.textContent = question;
  quizCurrent.textContent = currentQuestionIndex + 1;
  quizProgressBar.style.width = `${((currentQuestionIndex + 1) / list.length) * 100}%`;
  quizOptions.innerHTML = '';
  [[2, a], [1, b], [0, c]].forEach(([score, text]) => {
    const button = document.createElement('button');
    button.className = 'quiz-option';
    button.textContent = text;
    button.addEventListener('click', () => handleAnswer(score));
    quizOptions.appendChild(button);
  });
}

function handleAnswer(value) {
  answers.push(value);
  track('quiz_step_answer', { step_number: currentQuestionIndex + 1, answer_score: value });
  currentQuestionIndex += 1;
  const total = (QUESTIONS[currentLang] || QUESTIONS.en).length;
  if (currentQuestionIndex < total) {
    renderQuestion();
    return;
  }
  quizProgressBar.style.width = '100%';
  showScreen('analyzing');
  setTimeout(() => {
    latestPreview = buildPreview();
    renderPreview();
    showScreen('result');
    track('quiz_complete', { total_score: latestPreview.score, tier: latestPreview.tier });
    track('result_view', { total_score: latestPreview.score, tier: latestPreview.tier });
  }, 1600);
}

function buildPreview() {
  const score = answers.reduce((sum, value) => sum + value, 0);
  const bank = PREVIEW_BANK[currentLang] || PREVIEW_BANK.en;
  let tier = 'low';
  if (score >= 16) tier = 'high';
  else if (score >= 9) tier = 'mid';
  const summaryKey = tier === 'high' ? 'summaryHigh' : tier === 'mid' ? 'summaryMid' : 'summaryLow';
  return { score, tier, points: bank[tier].slice(0, 4), summary: bank[summaryKey] };
}

function renderPreview() {
  previewPoints.innerHTML = '';
  latestPreview.points.forEach((point) => {
    const div = document.createElement('div');
    div.className = 'preview-point';
    div.textContent = point;
    previewPoints.appendChild(div);
  });
  previewSummary.textContent = latestPreview.summary || '';
  document.querySelectorAll('.plan-select').forEach((button) => button.classList.toggle('active', button.dataset.plan === selectedPlan));
  updateCheckoutLink();
}

function buildTelegramMessage(plan = selectedPlan) {
  const pricing = getPricing();
  const utm = getUtm();
  const planPrice = formatPrice(pricing.prices[plan], pricing.currency, pricing.locale);
  const planLabel = { lite: 'Lite', standard: 'Standard', deep: 'Deep' }[plan] || 'Standard';
  const intro = {
    ru: 'Здравствуйте. Хочу оформить разбор.',
    uk: 'Вітаю. Хочу оформити розбір.',
    en: 'Hello. I want to order an analysis.',
    pl: 'Cześć. Chcę zamówić analizę.',
    cs: 'Dobrý den. Chci objednat analýzu.'
  }[currentLang] || 'Hello. I want to order an analysis.';

  const lines = [
    intro,
    '',
    `Plan: ${planLabel}`,
    `Market: ${pricing.label}`,
    `Language: ${currentLang.toUpperCase()}`,
    `Site price: ${planPrice}`,
    `Manager discount request: up to 25%`,
    `Session: ${getSessionId()}`
  ];

  if (latestPreview.summary) {
    lines.push('', 'Preview:');
    latestPreview.points.forEach((point, idx) => lines.push(`${idx + 1}. ${point}`));
    lines.push(latestPreview.summary);
    lines.push(`Score: ${latestPreview.score}`);
  }

  if (Object.keys(utm).length) {
    lines.push('', 'UTM:');
    Object.entries(utm).forEach(([key, value]) => lines.push(`${key}: ${value}`));
  }

  if (document.referrer) lines.push(`Referrer: ${document.referrer}`);
  return encodeURIComponent(lines.join('\n'));
}

function updateManagerDirectLinks() {
  managerDirectLinks.forEach((link) => {
    if (link.id === 'telegramCheckoutLink' || link.id === 'telegramPreviewLink') return;
    link.href = `https://t.me/${SITE_CONFIG.telegramHandle}`;
  });
}

function updateCheckoutLink() {
  const url = `https://t.me/${SITE_CONFIG.telegramHandle}?text=${buildTelegramMessage()}`;
  telegramCheckoutLink.href = url;
  telegramPreviewLink.href = url;
  updateManagerDirectLinks();
}

function initObservers() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));
}

function getCopyDictionary() {
  return COPY_STRINGS[currentLang] || COPY_STRINGS.en;
}

async function copyPreviewToClipboard() {
  const pricing = getPricing();
  const text = [
    `${SITE_CONFIG.siteName} — ${selectedPlan}`,
    `Market: ${pricing.label}`,
    `Language: ${currentLang.toUpperCase()}`,
    ...latestPreview.points.map((point, index) => `${index + 1}. ${point}`),
    latestPreview.summary,
    `Telegram: https://t.me/${SITE_CONFIG.telegramHandle}`
  ].filter(Boolean).join('\n');
  try {
    await navigator.clipboard.writeText(text);
    copyPreviewStatus.textContent = getCopyDictionary().fallback.copied;
  } catch {
    copyPreviewStatus.textContent = text;
  }
}

function updateEmailFallback() {
  if (!emailFallbackLink) return;
  if (!SITE_CONFIG.supportEmail) {
    emailFallbackLink.classList.add('is-disabled');
    emailFallbackLink.setAttribute('aria-disabled', 'true');
    emailFallbackLink.href = '#';
    copyPreviewStatus.textContent = getCopyDictionary().fallback.emailDisabled;
    return;
  }
  emailFallbackLink.classList.remove('is-disabled');
  emailFallbackLink.setAttribute('aria-disabled', 'false');
  const pricing = getPricing();
  const body = [
    `Plan: ${selectedPlan}`,
    `Market: ${pricing.label}`,
    `Language: ${currentLang.toUpperCase()}`,
    latestPreview.summary ? `Preview summary: ${latestPreview.summary}` : '',
    ...latestPreview.points.map((point, index) => `${index + 1}. ${point}`),
    ...Object.entries(getUtm()).map(([key, value]) => `${key}: ${value}`)
  ].filter(Boolean).join('\n');
  emailFallbackLink.href = `mailto:${SITE_CONFIG.supportEmail}?subject=${encodeURIComponent('My Signal request')}&body=${encodeURIComponent(body)}`;
  copyPreviewStatus.textContent = getCopyDictionary().fallback.note;
}

window.addEventListener('load', () => {
  initAnalytics();
  captureUtm();
  currentMarket = detectMarket();
  currentLang = detectLanguage();
  document.getElementById('year').textContent = new Date().getFullYear();
  initObservers();
  applyLanguage(currentLang, { silent: true });
  track('page_view', { page_path: window.location.pathname, referrer: document.referrer || '' });
  track('market_detected', { detected_market: currentMarket });
  const loader = document.getElementById('loader');
  setTimeout(() => loader.classList.add('hidden'), 800);
});

document.querySelectorAll('.lang-btn').forEach((btn) => {
  btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
});

document.querySelectorAll('.js-open-quiz').forEach((btn) => btn.addEventListener('click', () => openQuiz(btn.dataset.analyticsSource || 'quiz_button')));
document.getElementById('closeModal').addEventListener('click', closeQuiz);
document.querySelector('[data-close-modal]').addEventListener('click', closeQuiz);
document.getElementById('startQuiz').addEventListener('click', () => {
  showScreen('questions');
  renderQuestion();
  track('quiz_start');
});
document.getElementById('openPlans').addEventListener('click', () => {
  showScreen('plans');
  track('plan_step_view');
});

document.querySelectorAll('.plan-select').forEach((button) => {
  button.addEventListener('click', () => {
    selectedPlan = button.dataset.plan;
    renderPreview();
    updateEmailFallback();
    track('plan_select', { selected_plan: selectedPlan, plan_price: getPricing().prices[selectedPlan] });
  });
});

document.querySelectorAll('.js-checkout').forEach((button) => {
  button.addEventListener('click', () => {
    const plan = button.dataset.plan;
    track('telegram_click', { source: `pricing_${plan}`, selected_plan: plan, plan_price: getPricing().prices[plan] });
    window.open(`https://t.me/${SITE_CONFIG.telegramHandle}?text=${buildTelegramMessage(plan)}`, '_blank', 'noopener');
  });
});

[telegramCheckoutLink, telegramPreviewLink, ...managerDirectLinks].forEach((link) => {
  if (!link) return;
  link.addEventListener('click', () => {
    track('telegram_click', { source: link.dataset.analyticsSource || link.id || 'telegram_link', selected_plan: selectedPlan, plan_price: getPricing().prices[selectedPlan] });
  });
});

if (copyPreviewButton) copyPreviewButton.addEventListener('click', copyPreviewToClipboard);
if (emailFallbackLink) emailFallbackLink.addEventListener('click', () => {
  if (emailFallbackLink.classList.contains('is-disabled')) return;
  track('email_fallback_click', { selected_plan: selectedPlan, plan_price: getPricing().prices[selectedPlan] });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('open')) closeQuiz();
});
