document.addEventListener('DOMContentLoaded', () => {
  // 1. Translation Dictionaries
  const translations = {
    ko: {
      'nav-home': 'Home',
      'nav-philosophy': 'Philosophy',
      'nav-contact': 'Contact',
      'hero-badge': 'We are making smiles!',
      'hero-title': '사람을 <span class="text-gradient">미소 짓게</span><br>만드는 게임',
      'hero-desc': '스마일쿠키는 단순한 플레이를 넘어, 지친 일상에 달콤한 휴식과 따뜻한 웃음을 선물하는 게임을 만드는 크리에이티브 스튜디오입니다. 한 조각의 맛있고 포근한 쿠키처럼, 모두에게 기억에 남을 행복을 전합니다.',
      'hero-btn-contact': '연락하기',
      'philosophy-badge': 'Our Mission',
      'philosophy-title': '우리가 게임을 만드는 이유',
      'philosophy-desc': '사람들이 미소 짓고 행복할 때 세상은 더 달콤해집니다. 우리는 그 순간을 위해 게임을 연구합니다.',
      'philosophy-subtitle': '달콤한 아이디어와 따뜻한 마음이 만나 만드는 기적',
      'philosophy-i1-title': '순수한 플레이의 즐거움',
      'philosophy-i1-desc': '스트레스와 경쟁 대신, 남녀노소 누구나 웃으며 편안하게 즐길 수 있는 힐링과 순수한 재미를 최우선으로 생각합니다.',
      'philosophy-i2-title': '따뜻한 소통과 연결',
      'philosophy-i2-desc': '게임을 통해 전 세계 사람들이 친밀하게 대화하고 서로의 감정을 나누며, 함께 웃을 수 있는 따스한 가상 공간을 구축합니다.',
      'philosophy-i3-title': '경계 없는 무한 상상력',
      'philosophy-i3-desc': '작고 둥근 쿠키 조각에서 무한한 우주와 판타지를 설계하듯, 사소하고 당연한 아이디어를 세상에서 가장 참신한 플레이로 승화시킵니다.',
      'contact-badge': 'Get In Touch',
      'contact-title': '달콤한 이야기를 들려주세요',
      'contact-desc': '제휴 문의, 채용 관련, 혹은 스마일쿠키에 나누고픈 모든 이야기를 환영합니다.',
      'contact-subtitle': '더 큰 미소를 위해<br>함께 소통해요',
      'contact-info-desc': '게임 개발 관련 퍼블리싱 문의, 입사 지원, 프레스 인터뷰 등 어떠한 메세지도 환영합니다. 쿠키 굽는 냄새처럼 포근하고 신속하게 답변해 드리겠습니다.',
      'contact-label-name': '이름 / 회사명',
      'contact-label-email': '이메일 주소',
      'contact-label-msg': '문의 내용',
      'footer-copy': '&copy; 2026 smilecookie Inc. All rights reserved.',
      'lang-label': '🌐 Language:',
      // Placeholders
      'ph-name': '성함 혹은 단체명을 적어주세요',
      'ph-email': '답변을 받으실 이메일을 적어주세요',
      'ph-msg': '스마일쿠키에게 전하실 소중한 메세지를 남겨주세요'
    },
    en: {
      'nav-home': 'Home',
      'nav-philosophy': 'Philosophy',
      'nav-contact': 'Contact',
      'hero-badge': 'We are making smiles!',
      'hero-title': 'Games that Make<br>People <span class="text-gradient">Smile</span>',
      'hero-desc': 'smilecookie is a creative studio that goes beyond simple play to gift sweet relaxation and warm laughter to exhausted daily lives. Like a delicious, cozy bite of a cookie, we deliver unforgettable happiness to everyone.',
      'hero-btn-contact': 'Contact Us',
      'philosophy-badge': 'Our Mission',
      'philosophy-title': 'Why We Make Games',
      'philosophy-desc': 'The world becomes sweeter when people smile and are happy. We study games for that very moment.',
      'philosophy-subtitle': 'Miracles Born from Sweet Ideas and Warm Hearts',
      'philosophy-i1-title': 'Pure Playful Joy',
      'philosophy-i1-desc': 'Instead of stress and competition, we prioritize healing and pure fun that everyone can enjoy comfortably with a smile.',
      'philosophy-i2-title': 'Warm Connection',
      'philosophy-i2-desc': 'Through games, we build warm virtual spaces where people worldwide can connect, converse, and share feelings.',
      'philosophy-i3-title': 'Boundless Imagination',
      'philosophy-i3-desc': 'Just like designing infinite universes from a tiny round cookie piece, we turn simple ideas into the most innovative gameplay.',
      'contact-badge': 'Get In Touch',
      'contact-title': 'Tell Us a Sweet Story',
      'contact-desc': 'We welcome partnerships, careers, or any stories you wish to share with smilecookie.',
      'contact-subtitle': 'Let\'s Connect for<br>Bigger Smiles',
      'contact-info-desc': 'Publishing inquiries, job applications, press interviews, and any other messages are always welcome. We will reply as warmly and quickly as the smell of fresh cookies.',
      'contact-label-name': 'Name / Company',
      'contact-label-email': 'Email Address',
      'contact-label-msg': 'Message',
      'footer-copy': '&copy; 2026 smilecookie Inc. All rights reserved.',
      'lang-label': '🌐 Language:',
      // Placeholders
      'ph-name': 'Please enter your name or organization',
      'ph-email': 'Please enter your email for replies',
      'ph-msg': 'Please leave your precious message for smilecookie'
    },
    ja: {
      'nav-home': 'ホーム',
      'nav-philosophy': '企業哲学',
      'nav-contact': 'お問い合わせ',
      'hero-badge': '笑顔を作っています！',
      'hero-title': '人を<span class="text-gradient">笑顔に</span><br>するゲーム',
      'hero-desc': 'smilecookieは、単なるプレイを超えて、疲れた日常に甘い休息と温かい笑顔を届けるクリエイティブスタジオです。一口の美味しく温かいクッキーのように、すべての人に記憶に残る幸せを届けます。',
      'hero-btn-contact': 'お問い合わせ',
      'philosophy-badge': 'ミッション',
      'philosophy-title': '私たちがゲームを作る理由',
      'philosophy-desc': '人々が笑顔になり、幸せなとき、世界はもっと甘くなります。私たちはその瞬間のためにゲームを研究します。',
      'philosophy-subtitle': '甘いアイデアと温かい心が出会って生まれる奇跡',
      'philosophy-i1-title': '純粋なプレイの楽しさ',
      'philosophy-i1-desc': 'ストレスや競争の代わりに、老若男女誰でも笑顔で快適に楽しめるヒーリングと純粋な面白さを最優先に考えています。',
      'philosophy-i2-title': '温かいコミュニケーションとつながり',
      'philosophy-i2-desc': 'ゲームを通じて世界中の人々が親密に会話し、お互いの感情を分かち合い、共に笑える温かい仮想空間を構築します。',
      'philosophy-i3-title': '境界のない無限の想像力',
      'philosophy-i3-desc': '小さく丸いクッキーの破片から無限の宇宙やファンタジーを設計するように、些細で当然のアイデアを世界で最も斬新なプレイに昇華させます。',
      'contact-badge': 'ご連絡はこちら',
      'contact-title': '甘いお話を聞かせてください',
      'contact-desc': '提携のご提案、採用関連、またはsmilecookieに伝えたいすべてのメッセージを歓迎します。',
      'contact-subtitle': 'もっと大きな笑顔のために<br>共に語り合いましょう',
      'contact-info-desc': 'ゲーム開発に関するパブリッシングのお問い合わせ、入社志望、プレスのインタビューなど、どのようなメッセージも歓迎します。クッキーの焼ける香りのように温かく迅速にお答えします。',
      'contact-label-name': 'お名前 / 会社名',
      'contact-label-email': 'メールアドレス',
      'contact-label-msg': 'お問い合わせ内容',
      'footer-copy': '&copy; 2026 smilecookie Inc. 無断転載を禁じます。',
      'lang-label': '🌐 言語:',
      // Placeholders
      'ph-name': 'お名前または団体名をご記入ください',
      'ph-email': '返信を受け取るメールアドレスをご記入ください',
      'ph-msg': 'smilecookieに届ける大切なメッセージを残してください'
    },
    zh: {
      'nav-home': '首页',
      'nav-philosophy': '企业哲学',
      'nav-contact': '联系我们',
      'hero-badge': '我们正在传递微笑！',
      'hero-title': '让人们<span class="text-gradient">面带微笑</span><br>的游戏',
      'hero-desc': 'smilecookie是一个创意工作室，它超越了简单的游戏，为疲惫的日常生活送去甜蜜的休息和温暖的笑声。就像一口美味、温馨的饼干，我们为每个人带来难以忘怀的幸福。',
      'hero-btn-contact': '取得联系',
      'philosophy-badge': '我们的使命',
      'philosophy-title': '我们制作游戏的原因',
      'philosophy-desc': '当人们微笑并感到幸福时，世界会变得更加甜蜜。我们正是为了那一刻而研究游戏。',
      'philosophy-subtitle': '甜蜜创意与温暖心灵碰撞出的奇迹',
      'philosophy-i1-title': '纯粹的玩乐体验',
      'philosophy-i1-desc': '我们摒弃压力与竞争，将男女老少皆能笑逐颜开、轻松享受的治愈与纯粹趣味放在首位。',
      'philosophy-i2-title': '温暖的交流与联结',
      'philosophy-i2-desc': '我们通过游戏构建温馨的虚拟空间，让全球玩家亲密对话、分享情感、共同欢笑。',
      'philosophy-i3-title': '无边界的无限想象力',
      'philosophy-i3-desc': '正如从一小块圆饼干设计出无限的宇宙与幻想一样，我们把平凡的创意升华为世界上最出彩的玩法。',
      'contact-badge': '取得联系',
      'contact-title': '分享您的甜蜜故事',
      'contact-desc': '无论是合作洽谈、求职申请，还是想与smilecookie分享的任何故事，我们都热烈欢迎。',
      'contact-subtitle': '为了更大的微笑<br>让我们携手交流',
      'contact-info-desc': '我们欢迎游戏开发相关的发行合作、入职申请、媒体采访等任何信息。我们将像烤饼干的香气般温馨而迅速地为您解答。',
      'contact-label-name': '姓名 / 公司名',
      'contact-label-email': '电子邮箱',
      'contact-label-msg': '咨询内容',
      'footer-copy': '&copy; 2026 smilecookie Inc. 保留所有权利。',
      'lang-label': '🌐 语言:',
      // Placeholders
      'ph-name': '请输入您的姓名或机构名称',
      'ph-email': '请输入用于接收回复的邮箱地址',
      'ph-msg': '请留下您给smilecookie的宝贵留言'
    },
    fr: {
      'nav-home': 'Accueil',
      'nav-philosophy': 'Philosophie',
      'nav-contact': 'Contact',
      'hero-badge': 'Nous créons des sourires !',
      'hero-title': 'Des Jeux qui Font<br><span class="text-gradient">Sourire</span> les Gens',
      'hero-desc': 'smilecookie est un studio créatif qui va au-delà du simple jeu pour offrir une pause douce et des rires chaleureux aux vies quotidiennes épuisées. Comme une bouchée de cookie délicieuse et réconfortante, nous offrons un bonheur inoubliable à chacun.',
      'hero-btn-contact': 'Contactez-nous',
      'philosophy-badge': 'Notre Mission',
      'philosophy-title': 'Pourquoi nous créons des jeux',
      'philosophy-desc': 'Le monde devient plus doux quand les gens sourient et sont heureux. C\'est pour ce moment précis que nous concevons des jeux.',
      'philosophy-subtitle': 'Les miracles nés d\'idées douces et de cœurs chaleureux',
      'philosophy-i1-title': 'Le plaisir pur du jeu',
      'philosophy-i1-desc': 'Au lieu du stress et de la compétition, nous privilégions la guérison et le plaisir pur que chacun peut apprécier confortablement avec un sourire.',
      'philosophy-i2-title': 'Connexion chaleureuse',
      'philosophy-i2-desc': 'À travers nos jeux, nous construisons des espaces virtuels chaleureux où les gens du monde entier peuvent communiquer, discuter et partager des émotions.',
      'philosophy-i3-title': 'Imagination sans limites',
      'philosophy-i3-desc': 'Tout comme la création d\'univers infinis à partir d\'un petit morceau de cookie rond, nous transformons des idées simples en un gameplay des plus innovants.',
      'contact-badge': 'Contactez-nous',
      'contact-title': 'Racontez-nous une douce histoire',
      'contact-desc': 'Nous accueillons les partenariats, les recrutements ou toutes les histoires que vous souhaitez partager avec smilecookie.',
      'contact-subtitle': 'Communiquons pour de<br>plus grands sourires',
      'contact-info-desc': 'Demandes d\'édition, candidatures, interviews de presse ou tout autre message sont les bienvenus. Nous vous répondrons aussi chaleureusement et rapidement que l\'odeur des cookies chauds.',
      'contact-label-name': 'Nom / Entreprise',
      'contact-label-email': 'Adresse e-mail',
      'contact-label-msg': 'Message',
      'footer-copy': '&copy; 2026 smilecookie Inc. Tous droits réservés.',
      'lang-label': '🌐 Langue:',
      // Placeholders
      'ph-name': 'Veuillez entrer votre nom ou organisation',
      'ph-email': 'Veuillez entrer votre adresse e-mail pour la réponse',
      'ph-msg': 'Veuillez laisser votre précieux message pour smilecookie'
    },
    es: {
      'nav-home': 'Inicio',
      'nav-philosophy': 'Filosofía',
      'nav-contact': 'Contacto',
      'hero-badge': '¡Estamos creando sonrisas!',
      'hero-title': 'Juegos que Hacen<br><span class="text-gradient">Sonreír</span> a la Gente',
      'hero-desc': 'smilecookie es un estudio creativo que va más allá del simple juego para regalar un dulce descanso y risas cálidas a las vidas diarias agotadas. Como un bocado de galleta delicioso y reconfortante, brindamos una felicidad inolvidable a todos.',
      'hero-btn-contact': 'Ponte en Contacto',
      'philosophy-badge': 'Nuestra Misión',
      'philosophy-title': 'Por qué hacemos juegos',
      'philosophy-desc': 'El mundo se vuelve más dulce cuando la gente sonríe y es feliz. Estudiamos los juegos para ese mismo momento.',
      'philosophy-subtitle': 'Milagros nacidos de ideas dulces y corazones cálidos',
      'philosophy-i1-title': 'Puro placer de jugar',
      'philosophy-i1-desc': 'En lugar de estrés y competencia, priorizamos la curación y la diversión pura que todos puedan disfrutar cómodamente con una sonrisa.',
      'philosophy-i2-title': 'Conexión cálida',
      'philosophy-i2-desc': 'A través de los juegos, construimos espacios virtuales cálidos donde personas de todo el mundo pueden comunicarse, conversar y compartir sentimientos.',
      'philosophy-i3-title': 'Imaginación sin límites',
      'philosophy-i3-desc': 'Al igual que diseñar universos infinitos a partir de un pequeño trozo de galleta redonda, convertimos ideas simples en la jugabilidad más innovadora.',
      'contact-badge': 'Contacto',
      'contact-title': 'Cuéntanos una dulce historia',
      'contact-desc': 'Damos la bienvenida a asociaciones, carreras o cualquier historia que desees compartir con smilecookie.',
      'contact-subtitle': 'Comuniquémonos para<br>sonrisas más grandes',
      'contact-info-desc': 'Las consultas de publicación, solicitudes de empleo, entrevistas de prensa y cualquier otro mensaje siempre son bienvenidos. Responderemos de manera tan cálida y rápida como el olor de las galletas recién horneadas.',
      'contact-label-name': 'Nombre / Empresa',
      'contact-label-email': 'Correo electrónico',
      'contact-label-msg': 'Mensaje',
      'footer-copy': '&copy; 2026 smilecookie Inc. Todos los derechos reservados.',
      'lang-label': '🌐 Idioma:',
      // Placeholders
      'ph-name': 'Por favor ingrese su nombre u organización',
      'ph-email': 'Por favor ingrese su correo electrónico para recibir respuestas',
      'ph-msg': 'Por favor deje su valioso mensaje para smilecookie'
    },
    pt: {
      'nav-home': 'Início',
      'nav-philosophy': 'Filosofia',
      'nav-contact': 'Contato',
      'hero-badge': 'Estamos criando sorrisos!',
      'hero-title': 'Jogos que Fazem<br>as Pessoas <span class="text-gradient">Sorrir</span>',
      'hero-desc': 'smilecookie é um estúdio criativo que vai além do simples jogo para presentear um doce descanso e risos calorosos às vidas diárias exaustas. Como uma mordida de biscoito deliciosa e aconchegante, entregamos uma felicidade inesquecível a todos.',
      'hero-btn-contact': 'Entre em Contato',
      'philosophy-badge': 'Nossa Missão',
      'philosophy-title': 'Por que fazemos jogos',
      'philosophy-desc': 'O mundo se torna mais doce quando as pessoas sorriem e são felizes. Estudamos jogos para esse exato momento.',
      'philosophy-subtitle': 'Milagres nascidos de ideias doces e corações calorosos',
      'philosophy-i1-title': 'Puro prazer de jogar',
      'philosophy-i1-desc': 'Em verdade, em vez de estresse e competição, priorizamos a cura e a diversão pura que todos podem desfrutar confortavelmente com um sorriso.',
      'philosophy-i2-title': 'Conexão calorosa',
      'philosophy-i2-desc': 'Através dos jogos, construímos espaços virtuais acolhedores onde pessoas do mundo todo podem conversar, conectar-se e compartilhar sentimentos.',
      'philosophy-i3-title': 'Imaginação sem limites',
      'philosophy-i3-desc': 'Assim como desenhar universos infinitos a partir de um pequeno pedaço de biscoito redondo, transformamos ideias simples na jogabilidade mais inovadora.',
      'contact-badge': 'Contato',
      'contact-title': 'Conte-nos uma doce história',
      'contact-desc': 'Damos as boas-vindas a parcerias, carreiras ou qualquer história que você queira compartilhar com o smilecookie.',
      'contact-subtitle': 'Vamos nos conectar para<br>maiores sorrisos',
      'contact-info-desc': 'Perguntas sobre publicação, candidaturas a vagas, entrevistas de imprensa e qualquer outra mensagem são sempre bem-vindas. Responderemos de forma tão calorosa e rápida quanto o cheiro de biscoitos fresquinhos.',
      'contact-label-name': 'Nome / Empresa',
      'contact-label-email': 'Endereço de e-mail',
      'contact-label-msg': 'Mensagem',
      'footer-copy': '&copy; 2026 smilecookie Inc. Todos os direitos reservados.',
      'lang-label': '🌐 Idioma:',
      // Placeholders
      'ph-name': 'Por favor, insira seu nome ou organização',
      'ph-email': 'Por favor, insira seu e-mail para receber respostas',
      'ph-msg': 'Por favor, deixe sua valiosa mensagem para o smilecookie'
    }
  };

  // 2. Localization Logic
  const langSelect = document.getElementById('lang-select');
  
  // Set lang-fade-transition class on body on startup
  document.body.classList.add('lang-fade-transition');

  function setLanguage(lang, triggerFade = true) {
    const translation = translations[lang] || translations['ko'];
    
    // Helper function to update translations
    const updateTexts = () => {
      // 1. Update document lang attribute
      document.documentElement.lang = lang;

      // 2. Translate all elements with data-i18n attributes
      const i18nElements = document.querySelectorAll('[data-i18n]');
      i18nElements.forEach(elem => {
        const key = elem.getAttribute('data-i18n');
        if (translation[key]) {
          elem.innerHTML = translation[key];
        }
      });

      // 3. Translate form input placeholders specifically
      const nameInput = document.getElementById('contact-name');
      const emailInput = document.getElementById('contact-email');
      const msgInput = document.getElementById('contact-message');

      if (nameInput && translation['ph-name']) nameInput.placeholder = translation['ph-name'];
      if (emailInput && translation['ph-email']) emailInput.placeholder = translation['ph-email'];
      if (msgInput && translation['ph-msg']) msgInput.placeholder = translation['ph-msg'];
      
      // Save lang to localStorage
      localStorage.setItem('smilecookie-lang', lang);
    };

    if (triggerFade) {
      document.body.classList.add('lang-fade');
      setTimeout(() => {
        updateTexts();
        document.body.classList.remove('lang-fade');
      }, 250);
    } else {
      updateTexts();
    }
  }

  // Bind change event to dropdown
  if (langSelect) {
    langSelect.addEventListener('change', (e) => {
      setLanguage(e.target.value);
    });

    // Restore saved language on load
    const savedLang = localStorage.getItem('smilecookie-lang') || 'ko';
    langSelect.value = savedLang;
    setLanguage(savedLang, false); // No fade on load
  }

  // 3. Header scroll effect
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 4. Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle-id');
  const navMenu = document.getElementById('nav-menu-id');
  const navLinks = document.querySelectorAll('.nav-link');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('open');
      navMenu.classList.toggle('open');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('open');
        navMenu.classList.remove('open');
      });
    });
  }

  // 5. Canvas Particle Animation in Hero Section
  const canvas = document.getElementById('hero-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particlesArray = [];
    const numberOfParticles = 60;
    
    // Mouse properties
    const mouse = {
      x: null,
      y: null,
      radius: 120
    };

    window.addEventListener('mousemove', (event) => {
      // Calculate mouse relative to canvas
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    });

    window.addEventListener('mouseout', () => {
      mouse.x = null;
      mouse.y = null;
    });

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.baseSize = Math.random() * 8 + 3; // base size
        this.size = this.baseSize;
        this.speedX = Math.random() * 0.8 - 0.4;
        this.speedY = Math.random() * 0.8 - 0.4;
        
        // Pick random color: Gold (yellow) or Pink
        const randomChoice = Math.random();
        if (randomChoice < 0.6) {
          this.color = `rgba(253, 191, 71, ${Math.random() * 0.4 + 0.25})`; // Gold
        } else {
          this.color = `rgba(255, 90, 121, ${Math.random() * 0.4 + 0.25})`; // Pink
        }
      }

      update() {
        // Move particle
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce on boundaries
        if (this.x < 0 || this.x > canvas.width) this.speedX = -this.speedX;
        if (this.y < 0 || this.y > canvas.height) this.speedY = -this.speedY;

        // Mouse interaction (Repulsion effect)
        if (mouse.x !== null && mouse.y !== null) {
          let dx = this.x - mouse.x;
          let dy = this.y - mouse.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            const angle = Math.atan2(dy, dx);
            const directionX = Math.cos(angle) * force * 3;
            const directionY = Math.sin(angle) * force * 3;
            
            this.x += directionX;
            this.y += directionY;
            this.size = this.baseSize * (1 + force * 0.5); // expand size slightly
          } else {
            if (this.size > this.baseSize) {
              this.size -= 0.1;
            }
          }
        } else {
          if (this.size > this.baseSize) {
            this.size -= 0.1;
          }
        }
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }

    function init() {
      // Resize canvas to match container size
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
      
      particlesArray = [];
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    }

    // Handle Resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        init();
      }, 100);
    });

    init();

    // Animation Loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      requestAnimationFrame(animate);
    }
    animate();
  }

  // 6. Scroll Reveal Animations (using Intersection Observer)
  const revealElements = document.querySelectorAll('.reveal');
  const observerOptions = {
    root: null,
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // Trigger only once
      }
    });
  }, observerOptions);

  revealElements.forEach(element => {
    revealObserver.observe(element);
  });

  // 7. Active Navigation Link Highlighting on Scroll
  const sections = document.querySelectorAll('section');
  const navObserverOptions = {
    root: null,
    threshold: 0.5, // Section is considered active when 50% in view
    rootMargin: '-80px 0px 0px 0px' // accounts for nav bar height
  };

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, navObserverOptions);

  sections.forEach(section => {
    navObserver.observe(section);
  });

  // 8. Contact Form submission logic
  const contactForm = document.getElementById('smile-contact-form');
  const feedbackMessage = document.getElementById('form-feedback-message');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('contact-name').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const message = document.getElementById('contact-message').value.trim();
      
      const currentLang = localStorage.getItem('smilecookie-lang') || 'ko';
      let errorText = '모든 필드를 입력해 주세요.';
      let successPrefix = '감사합니다';
      let successSuffix = '소중한 메시지가 안전하게 전달되었습니다. 빠른 시일 내에 답변드리겠습니다.';
      let loadingText = '메세지 굽는 중...';

      if (currentLang === 'en') {
        errorText = 'Please fill out all fields.';
        successPrefix = 'Thank you';
        successSuffix = 'Your message has been sent successfully. We will get back to you soon.';
        loadingText = 'Baking your message...';
      } else if (currentLang === 'ja') {
        errorText = 'すべてのフィールドを入力してください。';
        successPrefix = 'ありがとうございます';
        successSuffix = 'メッセージは無事に送信されました。折り返しご連絡いたします。';
        loadingText = 'メッセージ作成中...';
      } else if (currentLang === 'zh') {
        errorText = '请填写所有字段。';
        successPrefix = '谢谢您';
        successSuffix = '您的留言已成功发送。我们会尽快回复您。';
        loadingText = '正在发送留言...';
      } else if (currentLang === 'fr') {
        errorText = 'Veuillez remplir tous les champs.';
        successPrefix = 'Merci beaucoup';
        successSuffix = 'Votre message a été envoyé avec succès. Nous vous répondrons bientôt.';
        loadingText = 'Envoi de votre message...';
      } else if (currentLang === 'es') {
        errorText = 'Por favor complete todos los campos.';
        successPrefix = 'Muchas gracias';
        successSuffix = 'Su mensaje ha sido enviado con éxito. Le responderemos pronto.';
        loadingText = 'Enviando su mensaje...';
      } else if (currentLang === 'pt') {
        errorText = 'Por favor, preencha todos os campos.';
        successPrefix = 'Muito obrigado';
        successSuffix = 'Sua mensagem foi enviada com sucesso. Responderemos em breve.';
        loadingText = 'Enviando sua mensagem...';
      }

      if (!name || !email || !message) {
        feedbackMessage.textContent = errorText;
        feedbackMessage.className = 'form-message error';
        return;
      }
      
      // Simulate API request loading state
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn ? submitBtn.textContent : '';
      if (submitBtn) {
        submitBtn.textContent = loadingText;
        submitBtn.disabled = true;
      }
      
      setTimeout(() => {
        feedbackMessage.textContent = `${successPrefix}, ${name}님! ${successSuffix} 🍪`;
        if (currentLang === 'en') {
          feedbackMessage.textContent = `${successPrefix}, ${name}! ${successSuffix} 🍪`;
        } else if (currentLang === 'ja') {
          feedbackMessage.textContent = `${successPrefix}、${name}様！ ${successSuffix} 🍪`;
        } else if (currentLang === 'zh') {
          feedbackMessage.textContent = `${successPrefix}，${name}！ ${successSuffix} 🍪`;
        } else if (currentLang === 'fr') {
          feedbackMessage.textContent = `${successPrefix}, ${name} ! ${successSuffix} 🍪`;
        } else if (currentLang === 'es') {
          feedbackMessage.textContent = `${successPrefix}, ${name}! ${successSuffix} 🍪`;
        } else if (currentLang === 'pt') {
          feedbackMessage.textContent = `${successPrefix}, ${name}! ${successSuffix} 🍪`;
        }

        feedbackMessage.className = 'form-message success';
        
        // Reset form
        contactForm.reset();
        if (submitBtn) {
          submitBtn.textContent = originalBtnText;
          submitBtn.disabled = false;
        }
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          feedbackMessage.style.display = 'none';
        }, 5000);
      }, 1500);
    });
  }
});
