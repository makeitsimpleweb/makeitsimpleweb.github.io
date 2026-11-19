// The words on the invite page (weplan/join.html), in the 16 languages WePlan
// speaks. The wording follows the app's own strings (lib/l10n in the weplan
// repo): the line under the title is the app's share-message sentence, and the
// privacy link is the app's "Privacy policy".
//
// join.js picks one by the phone's language (the way the app does: English
// when there is none, and Hong Kong / Macau / traditional Chinese get zh-TW),
// and puts it into the elements marked data-i18n. The English in the HTML is
// what shows without JavaScript.
window.JOIN_TEXT = {
  en: {
    title: "You're invited to WePlan",
    lead: 'Plan together with WePlan - one shared calendar for everyone!',
    open: 'Open WePlan',
    noteGet: "Don't have it yet? The button takes you to Google Play to get it, and you'll join as soon as it opens.",
    noteUpdate: 'Already have WePlan but this page opened? Update it from Google Play, then tap the invite link again.',
    other: 'WePlan is for Android phones. Open this link on your Android phone.',
    privacy: 'Privacy policy'
  },
  ar: {
    title: 'تمت دعوتك إلى WePlan',
    lead: 'خططوا معًا باستخدام WePlan — تقويم مشترك واحد للجميع!',
    open: 'افتح WePlan',
    noteGet: 'ليس لديك التطبيق بعد؟ سيأخذك الزر إلى Google Play لتثبيته، وستنضم فور فتحه.',
    noteUpdate: 'لديك WePlan لكن هذه الصفحة هي التي فُتحت؟ حدّثه من Google Play ثم انقر على رابط الدعوة مرة أخرى.',
    other: 'WePlan متاح لهواتف Android. افتح هذا الرابط على هاتف Android.',
    privacy: 'سياسة الخصوصية'
  },
  de: {
    title: 'Du wurdest zu WePlan eingeladen',
    lead: 'Plane gemeinsam mit WePlan – ein gemeinsamer Kalender für alle!',
    open: 'WePlan öffnen',
    noteGet: 'Noch nicht installiert? Der Button führt dich zu Google Play, und sobald du die App öffnest, bist du dabei.',
    noteUpdate: 'WePlan ist schon installiert, aber diese Seite hat sich geöffnet? Aktualisiere die App bei Google Play und tippe dann noch einmal auf den Einladungslink.',
    other: 'WePlan gibt es für Android-Handys. Öffne diesen Link auf deinem Android-Handy.',
    privacy: 'Datenschutzrichtlinie'
  },
  es: {
    title: 'Te han invitado a WePlan',
    lead: 'Planifica con WePlan: ¡un calendario compartido para todos!',
    open: 'Abrir WePlan',
    noteGet: '¿Aún no la tienes? El botón te lleva a Google Play para instalarla y te unirás en cuanto la abras.',
    noteUpdate: '¿Ya tienes WePlan pero se ha abierto esta página? Actualízala en Google Play y vuelve a tocar el enlace de invitación.',
    other: 'WePlan es para teléfonos Android. Abre este enlace en tu teléfono Android.',
    privacy: 'Política de privacidad'
  },
  fr: {
    title: 'Une invitation t’attend sur WePlan',
    lead: 'Planifiez ensemble avec WePlan : un calendrier partagé pour tout le monde !',
    open: 'Ouvrir WePlan',
    noteGet: 'Tu n’as pas encore l’appli ? Le bouton t’emmène sur Google Play, et tu rejoins dès son ouverture.',
    noteUpdate: 'Tu as déjà WePlan mais cette page s’est ouverte ? Mets l’appli à jour sur Google Play, puis touche de nouveau le lien d’invitation.',
    other: 'WePlan est conçu pour les téléphones Android. Ouvre ce lien sur ton téléphone Android.',
    privacy: 'Politique de confidentialité'
  },
  hi: {
    title: 'आपको WePlan पर आमंत्रित किया गया है',
    lead: 'WePlan के साथ मिलकर योजना बनाएँ — सबके लिए एक साझा कैलेंडर!',
    open: 'WePlan खोलें',
    noteGet: 'ऐप अभी नहीं है? बटन आपको Google Play पर ले जाएगा, और ऐप खुलते ही आप जुड़ जाएँगे।',
    noteUpdate: 'WePlan पहले से है, फिर भी यह पेज खुला? Google Play से उसे अपडेट करें, फिर आमंत्रण लिंक पर दोबारा टैप करें।',
    other: 'WePlan Android फ़ोन के लिए है। इस लिंक को अपने Android फ़ोन पर खोलें।',
    privacy: 'गोपनीयता नीति'
  },
  id: {
    title: 'Kamu diundang ke WePlan',
    lead: 'Rencanakan bersama WePlan — satu kalender bersama untuk semua orang!',
    open: 'Buka WePlan',
    noteGet: 'Belum punya aplikasinya? Tombol ini membawamu ke Google Play, dan kamu langsung bergabung begitu aplikasi dibuka.',
    noteUpdate: 'Sudah punya WePlan tetapi halaman ini yang terbuka? Perbarui dari Google Play, lalu ketuk lagi tautan undangan.',
    other: 'WePlan untuk ponsel Android. Buka tautan ini di ponsel Android-mu.',
    privacy: 'Kebijakan privasi'
  },
  it: {
    title: 'C’è un invito per te su WePlan',
    lead: 'Pianifica insieme con WePlan: un calendario condiviso per tutti!',
    open: 'Apri WePlan',
    noteGet: 'Non hai ancora l’app? Il pulsante ti porta su Google Play e ti unirai non appena la apri.',
    noteUpdate: 'Hai già WePlan ma si è aperta questa pagina? Aggiornala da Google Play, poi tocca di nuovo il link d’invito.',
    other: 'WePlan è per i telefoni Android. Apri questo link sul tuo telefono Android.',
    privacy: 'Privacy policy'
  },
  ja: {
    title: 'WePlanに招待されました',
    lead: 'WePlan でみんなで予定を共有しよう。みんなで使える共有カレンダーです。',
    open: 'WePlanを開く',
    noteGet: 'まだアプリをお持ちでない場合は、ボタンからGoogle Playへ。アプリを開くとすぐに参加できます。',
    noteUpdate: 'WePlanをお持ちなのにこのページが開いた場合は、Google Playでアプリを更新してから、招待リンクをもう一度タップしてください。',
    other: 'WePlanはAndroidスマートフォン向けです。このリンクをAndroidスマートフォンで開いてください。',
    privacy: 'プライバシーポリシー'
  },
  ko: {
    title: 'WePlan에 초대받았어요',
    lead: 'WePlan으로 함께 계획해요. 모두를 위한 하나의 공유 캘린더입니다!',
    open: 'WePlan 열기',
    noteGet: '앱이 아직 없나요? 버튼을 누르면 Google Play로 이동하고, 앱을 열면 바로 참여돼요.',
    noteUpdate: 'WePlan가 이미 있는데 이 페이지가 열렸나요? Google Play에서 앱을 업데이트한 다음 초대 링크를 다시 탭하세요.',
    other: 'WePlan는 Android 휴대폰용이에요. 이 링크를 Android 휴대폰에서 열어 주세요.',
    privacy: '개인정보 처리방침'
  },
  pt: {
    title: 'Você recebeu um convite para o WePlan',
    lead: 'Planeje junto com o WePlan — um calendário compartilhado para todos!',
    open: 'Abrir o WePlan',
    noteGet: 'Ainda não tem o app? O botão leva você ao Google Play e você entra assim que abrir.',
    noteUpdate: 'Já tem o WePlan, mas esta página abriu? Atualize o app no Google Play e toque no link de convite de novo.',
    other: 'O WePlan é para celulares Android. Abra este link no seu celular Android.',
    privacy: 'Política de privacidade'
  },
  ru: {
    title: 'Вас пригласили в WePlan',
    lead: 'Планируйте вместе с WePlan — один общий календарь для всех!',
    open: 'Открыть WePlan',
    noteGet: 'Приложения ещё нет? Кнопка откроет Google Play, а после запуска вы сразу присоединитесь.',
    noteUpdate: 'WePlan уже установлен, но открылась эта страница? Обновите приложение в Google Play и снова нажмите на ссылку-приглашение.',
    other: 'WePlan — для телефонов Android. Откройте эту ссылку на телефоне с Android.',
    privacy: 'Политика конфиденциальности'
  },
  tr: {
    title: 'WePlan’e davet edildin',
    lead: 'WePlan ile birlikte planlayın — herkes için tek bir ortak takvim!',
    open: 'WePlan’i aç',
    noteGet: 'Uygulama henüz yok mu? Düğme seni Google Play’e götürür; uygulamayı açtığın anda katılırsın.',
    noteUpdate: 'WePlan zaten yüklü ama bu sayfa mı açıldı? Uygulamayı Google Play’den güncelle, sonra davet bağlantısına yeniden dokun.',
    other: 'WePlan, Android telefonlar içindir. Bu bağlantıyı Android telefonunda aç.',
    privacy: 'Gizlilik politikası'
  },
  vi: {
    title: 'Bạn được mời tham gia WePlan',
    lead: 'Cùng lên kế hoạch với WePlan — một lịch chung cho mọi người!',
    open: 'Mở WePlan',
    noteGet: 'Chưa có ứng dụng? Nút này đưa bạn đến Google Play, và bạn sẽ tham gia ngay khi mở ứng dụng.',
    noteUpdate: 'Đã có WePlan nhưng trang này lại mở ra? Hãy cập nhật ứng dụng từ Google Play, rồi chạm lại vào liên kết mời.',
    other: 'WePlan dành cho điện thoại Android. Hãy mở liên kết này trên điện thoại Android của bạn.',
    privacy: 'Chính sách quyền riêng tư'
  },
  zh: {
    title: '你被邀请加入 WePlan',
    lead: '和 WePlan 一起规划吧——一个人人共用的共享日历！',
    open: '打开 WePlan',
    noteGet: '还没有安装？按钮会带你前往 Google Play，打开应用后即可加入。',
    noteUpdate: '已经装了 WePlan，却打开了这个页面？请先在 Google Play 更新应用，再点按一次邀请链接。',
    other: 'WePlan 适用于 Android 手机。请在你的 Android 手机上打开此链接。',
    privacy: '隐私政策'
  },
  'zh-TW': {
    title: '你受邀加入 WePlan',
    lead: '和 WePlan 一起规划吧——一个人人共用的共享日历！',
    open: '開啟 WePlan',
    noteGet: '還沒有安裝？按鈕會帶你前往 Google Play，開啟應用程式後即可加入。',
    noteUpdate: '已經安裝 WePlan，卻開啟了這個頁面？請先到 Google Play 更新應用程式，再點一下邀請連結。',
    other: 'WePlan 適用於 Android 手機。請在你的 Android 手機上開啟此連結。',
    privacy: '隱私權政策'
  }
};
