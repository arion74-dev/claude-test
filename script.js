const quotes = [
  { text: "인생은 자전거 타기와 같다. 균형을 유지하려면 계속 움직여야 한다.", author: "알베르트 아인슈타인", origin: "Albert Einstein · 물리학자", category: "인생" },
  { text: "성공은 최종 목적지가 아니며, 실패는 치명적이지 않다. 중요한 것은 계속하는 용기다.", author: "윈스턴 처칠", origin: "Winston Churchill · 영국 총리", category: "도전" },
  { text: "나는 실패한 것이 아니다. 단지 작동하지 않는 방법 1만 가지를 발견했을 뿐이다.", author: "토마스 에디슨", origin: "Thomas Edison · 발명가", category: "지혜" },
  { text: "행복은 완성된 상태가 아니라, 나아가는 방식이다.", author: "마가렛 리 런벡", origin: "Margaret Lee Runbeck · 작가", category: "행복" },
  { text: "천 리 길도 한 걸음부터 시작된다.", author: "노자", origin: "老子 · 철학자", category: "용기" },
  { text: "어제보다 나은 오늘의 나를 만드는 것, 그것이 진정한 성공이다.", author: "워렌 버핏", origin: "Warren Buffett · 투자가", category: "성장" },
  { text: "꿈을 꾸면 무언가를 이룬 것이고, 꿈을 꾸지 않으면 아무것도 이루지 못한다.", author: "빅토르 위고", origin: "Victor Hugo · 소설가", category: "꿈" },
  { text: "나 자신을 아는 것이 모든 지혜의 시작이다.", author: "아리스토텔레스", origin: "Aristotle · 철학자", category: "철학" },
  { text: "당신이 세상을 변화시키고 싶다면, 먼저 자기 자신을 변화시켜라.", author: "마하트마 간디", origin: "Mahatma Gandhi · 지도자", category: "변화" },
  { text: "검토되지 않은 삶은 살 가치가 없다.", author: "소크라테스", origin: "Socrates · 철학자", category: "철학" },
  { text: "배우고 때때로 익히면 또한 기쁘지 아니한가.", author: "공자", origin: "Confucius · 철학자", category: "지혜" },
  { text: "20년 후, 당신은 했던 일보다 하지 않은 일을 더 후회할 것이다.", author: "마크 트웨인", origin: "Mark Twain · 소설가", category: "인생" },
  { text: "당신의 시간은 한정되어 있다. 다른 사람의 삶을 사느라 낭비하지 마라.", author: "스티브 잡스", origin: "Steve Jobs · 기업가", category: "인생" },
  { text: "항상 불가능해 보이는 것들은 이루어지고 난 후에야 가능해 보인다.", author: "넬슨 만델라", origin: "Nelson Mandela · 지도자", category: "도전" },
  { text: "살아야 할 이유가 있는 사람은 어떤 어려움도 견딜 수 있다.", author: "프리드리히 니체", origin: "Friedrich Nietzsche · 철학자", category: "철학" },
  { text: "삶은 대담한 모험이거나 아무것도 아니다.", author: "헬렌 켈러", origin: "Helen Keller · 작가·사회운동가", category: "용기" },
  { text: "오늘 잘 보낸 하루가 행복한 잠을 이루게 하듯, 잘 쓴 인생은 행복한 죽음을 이루게 한다.", author: "레오나르도 다 빈치", origin: "Leonardo da Vinci · 예술가·발명가", category: "인생" },
  { text: "모든 사람은 세상을 변화시키려고 생각하지만, 아무도 자신을 변화시키려고 생각하지 않는다.", author: "레프 톨스토이", origin: "Leo Tolstoy · 소설가", category: "변화" },
  { text: "모든 어린이는 예술가다. 문제는 어른이 되었을 때도 예술가로 남을 수 있느냐다.", author: "파블로 피카소", origin: "Pablo Picasso · 화가", category: "창의성" },
  { text: "가을은 두 번째 봄이다. 잎사귀 하나하나가 꽃이다.", author: "알베르 카뮈", origin: "Albert Camus · 작가", category: "인생" },
  { text: "용기란 압박 속의 우아함이다.", author: "어니스트 헤밍웨이", origin: "Ernest Hemingway · 소설가", category: "용기" },
  { text: "사람들은 당신이 한 말을 잊을 것이다. 하지만 당신이 그들에게 느끼게 한 감정은 절대 잊지 않는다.", author: "마야 안젤루", origin: "Maya Angelou · 시인·작가", category: "인생" },
  { text: "인생은 가까이서 보면 비극이지만, 멀리서 보면 희극이다.", author: "찰리 채플린", origin: "Charlie Chaplin · 배우·감독", category: "인생" },
  { text: "준비된 사람에게 기회가 왔을 때, 그것을 행운이라 부른다.", author: "에이브러햄 링컨", origin: "Abraham Lincoln · 미국 대통령", category: "성공" },
  { text: "우리가 두려워해야 할 것은 두려움 그 자체뿐이다.", author: "프랭클린 루스벨트", origin: "Franklin D. Roosevelt · 미국 대통령", category: "용기" },
  { text: "어둠은 어둠으로 몰아낼 수 없다. 오직 빛만이 그것을 할 수 있다.", author: "마틴 루터 킹", origin: "Martin Luther King Jr. · 사회운동가", category: "희망" },
  { text: "나는 생각한다, 고로 나는 존재한다.", author: "르네 데카르트", origin: "René Descartes · 철학자", category: "철학" },
  { text: "지혜로운 자는 말하려 하고, 어리석은 자는 말해야 한다고 느낀다.", author: "플라톤", origin: "Plato · 철학자", category: "지혜" },
  { text: "늦었다고 생각할 때가 가장 이른 때다.", author: "세네카", origin: "Seneca · 철학자", category: "시간" },
  { text: "당신이 통제할 수 없는 것에 대한 걱정을 버려라.", author: "마르쿠스 아우렐리우스", origin: "Marcus Aurelius · 로마 황제·철학자", category: "철학" },
  { text: "상처받은 곳이 바로 빛이 들어오는 곳이다.", author: "루미", origin: "Rumi · 시인·철학자", category: "희망" },
  { text: "믿음은 새가 아직 동이 트기 전, 어둠 속에서도 빛을 느끼는 것이다.", author: "라빈드라나트 타고르", origin: "Rabindranath Tagore · 시인", category: "희망" },
  { text: "꿈을 향해 나아갈 때, 온 우주가 도움을 준다.", author: "파울로 코엘료", origin: "Paulo Coelho · 소설가", category: "꿈" },
  { text: "혁신은 리더와 추종자를 구분한다.", author: "스티브 잡스", origin: "Steve Jobs · 기업가", category: "성공" },
  { text: "성공을 축하하는 것도 좋지만, 더 중요한 것은 실패에서 배우는 교훈이다.", author: "빌 게이츠", origin: "Bill Gates · 기업가", category: "성장" },
  { text: "상상력은 지식보다 중요하다.", author: "알베르트 아인슈타인", origin: "Albert Einstein · 물리학자", category: "창의성" },
  { text: "변화에 가장 잘 적응하는 종이 살아남는다.", author: "찰스 다윈", origin: "Charles Darwin · 과학자", category: "변화" },
  { text: "자극과 반응 사이에는 공간이 있다. 그 공간에 우리의 성장과 자유가 있다.", author: "빅터 프랭클", origin: "Viktor Frankl · 심리학자", category: "자유" },
  { text: "자신의 꿈을 향해 자신감 있게 나아가라. 상상하던 삶을 살아라.", author: "헨리 데이비드 소로우", origin: "Henry David Thoreau · 철학자·작가", category: "꿈" },
  { text: "당신이 하루 종일 생각하는 것이 곧 당신이다.", author: "랠프 왈도 에머슨", origin: "Ralph Waldo Emerson · 철학자·시인", category: "성장" },
  { text: "자기 자신을 사랑하는 것은 평생 지속되는 로맨스의 시작이다.", author: "오스카 와일드", origin: "Oscar Wilde · 작가", category: "사랑" },
  { text: "인생은 자신을 발견하는 것이 아니다. 자신을 창조하는 것이다.", author: "버나드 쇼", origin: "George Bernard Shaw · 극작가", category: "인생" },
  { text: "책은 우리 안의 얼어붙은 바다를 깨는 도끼여야 한다.", author: "프란츠 카프카", origin: "Franz Kafka · 소설가", category: "독서" },
  { text: "완벽함은 선함의 적이다.", author: "볼테르", origin: "Voltaire · 철학자·작가", category: "지혜" },
  { text: "인간은 자유롭게 태어났지만, 도처에서 사슬에 묶여 있다.", author: "장 자크 루소", origin: "Jean-Jacques Rousseau · 철학자", category: "자유" },
  { text: "아는 것이 힘이다.", author: "프랜시스 베이컨", origin: "Francis Bacon · 철학자", category: "지혜" },
  { text: "불가능이라는 단어는 바보들의 사전에나 있다.", author: "나폴레옹 보나파르트", origin: "Napoleon Bonaparte · 황제", category: "도전" },
  { text: "행복은 이미 만들어진 것이 아니다. 당신의 행동에서 비롯된다.", author: "달라이 라마", origin: "Dalai Lama · 종교 지도자", category: "행복" },
  { text: "당신은 당신의 동의 없이 열등감을 느낄 수 없다.", author: "엘리너 루스벨트", origin: "Eleanor Roosevelt · 사회운동가", category: "자유" },
  { text: "우리가 실패하는 것은 죄가 없다. 일어서려 하지 않는 것이 문제다.", author: "조앤 롤링", origin: "J.K. Rowling · 소설가", category: "도전" },
  { text: "아는 것으로는 충분하지 않다. 적용해야 한다. 바라는 것으로는 충분하지 않다. 행동해야 한다.", author: "요한 볼프강 폰 괴테", origin: "Johann W. von Goethe · 작가·철학자", category: "노력" },
  { text: "삶을 행복하게 만드는 유일한 방법은 삶을 사랑하는 것이다.", author: "헤르만 헤세", origin: "Hermann Hesse · 소설가", category: "행복" },
  { text: "두려워할 것은 아무것도 없다. 다만 이해해야 할 것들이 있을 뿐이다.", author: "마리 퀴리", origin: "Marie Curie · 과학자", category: "용기" },
  { text: "지능은 변화에 적응하는 능력이다.", author: "스티븐 호킹", origin: "Stephen Hawking · 물리학자", category: "지혜" },
  { text: "당신이 의식하지 않는 것들이 운명이 된다.", author: "칼 융", origin: "Carl Jung · 심리학자", category: "철학" },
  { text: "아름다움이 세상을 구원할 것이다.", author: "표도르 도스토옙스키", origin: "Fyodor Dostoevsky · 소설가", category: "철학" },
  { text: "삶이 그대를 속일지라도 슬퍼하거나 노하지 말라.", author: "알렉산드르 푸시킨", origin: "Alexander Pushkin · 시인", category: "인생" },
  { text: "가장 큰 위험은 너무 낮은 목표를 달성하는 것이다. 너무 높은 목표에 도달하지 못하는 것이 아니라.", author: "미켈란젤로", origin: "Michelangelo · 예술가", category: "꿈" },
  { text: "단순함이 어려움의 최고 경지이다.", author: "프레데리크 쇼팽", origin: "Frédéric Chopin · 작곡가", category: "지혜" },
  { text: "불가능은 사실이 아니다. 그것은 의견이다.", author: "무하마드 알리", origin: "Muhammad Ali · 권투선수", category: "도전" },
  { text: "나는 삶에서 반복해서 실패했다. 그것이 바로 내가 성공한 이유다.", author: "마이클 조던", origin: "Michael Jordan · 농구선수", category: "성장" },
  { text: "당신이 받을 수 있는 가장 큰 모험은 당신이 꿈꾸는 삶을 사는 것이다.", author: "오프라 윈프리", origin: "Oprah Winfrey · 방송인", category: "꿈" },
  { text: "유행은 지나가지만 스타일은 영원하다.", author: "코코 샤넬", origin: "Coco Chanel · 패션 디자이너", category: "인생" },
  { text: "아름다운 눈을 갖고 싶으면 다른 사람들의 좋은 점을 보라.", author: "오드리 헵번", origin: "Audrey Hepburn · 배우", category: "인생" },
  { text: "배움은 결코 마음을 지치게 하지 않는다.", author: "레오나르도 다 빈치", origin: "Leonardo da Vinci · 예술가·발명가", category: "독서" },
  { text: "내가 더 멀리 볼 수 있었던 것은 거인들의 어깨 위에 올라서 있었기 때문이다.", author: "아이작 뉴턴", origin: "Isaac Newton · 과학자", category: "성장" },
  { text: "아는 것을 안다 하고 모르는 것을 모른다 하는 것이 곧 앎이다.", author: "공자", origin: "Confucius · 철학자", category: "지혜" },
  { text: "하늘이 장차 큰 임무를 사람에게 내리려 할 때에는 반드시 먼저 그의 마음을 괴롭힌다.", author: "맹자", origin: "Mencius · 철학자", category: "도전" },
  { text: "인간을 불안하게 만드는 것은 사건이 아니라, 사건에 대한 판단이다.", author: "에픽테토스", origin: "Epictetus · 철학자", category: "철학" },
  { text: "자신이 생각하는 대로 당신의 인생은 펼쳐진다.", author: "마르쿠스 아우렐리우스", origin: "Marcus Aurelius · 로마 황제·철학자", category: "성장" },
  { text: "우리는 원하는 것이 많아서 가난한 것이지, 가진 것이 적어서 가난한 것이 아니다.", author: "세네카", origin: "Seneca · 철학자", category: "지혜" },
  { text: "당신이 할 수 있다고 생각하든, 할 수 없다고 생각하든, 당신의 생각이 맞다.", author: "헨리 포드", origin: "Henry Ford · 기업가", category: "성장" },
  { text: "모든 꿈은 실현될 수 있다. 그것을 추구할 용기만 있다면.", author: "월트 디즈니", origin: "Walt Disney · 기업가·애니메이터", category: "꿈" },
  { text: "가장 중요한 것은 자신의 마음과 직관을 따를 용기를 갖는 것이다.", author: "스티브 잡스", origin: "Steve Jobs · 기업가", category: "용기" },
  { text: "가장 큰 리스크는 아무 리스크도 감수하지 않는 것이다.", author: "마크 저커버그", origin: "Mark Zuckerberg · 기업가", category: "도전" },
  { text: "실패는 하나의 옵션이다. 만약 당신이 실패하지 않는다면, 충분히 혁신하지 않은 것이다.", author: "일론 머스크", origin: "Elon Musk · 기업가", category: "성장" },
  { text: "오늘은 힘들고, 내일은 더 힘들다. 하지만 모레는 아름답다.", author: "마윈", origin: "Jack Ma · 기업가", category: "희망" },
  { text: "누군가 오늘 그늘에 앉을 수 있는 이유는 오래전에 누군가 나무를 심었기 때문이다.", author: "워렌 버핏", origin: "Warren Buffett · 투자가", category: "노력" },
  { text: "미래를 예측하는 가장 좋은 방법은 미래를 창조하는 것이다.", author: "피터 드러커", origin: "Peter Drucker · 경영학자", category: "성공" },
  { text: "지금 날 수 없다면 달려라. 달릴 수 없다면 걸어라. 걸을 수 없다면 기어라. 어떤 방법으로든 앞으로 나아가라.", author: "마틴 루터 킹", origin: "Martin Luther King Jr. · 사회운동가", category: "도전" },
  { text: "교육은 세상을 바꾸는 데 쓸 수 있는 가장 강력한 무기다.", author: "넬슨 만델라", origin: "Nelson Mandela · 지도자", category: "지혜" },
  { text: "눈에는 눈으로 대한다면 온 세상이 눈멀게 될 것이다.", author: "마하트마 간디", origin: "Mahatma Gandhi · 지도자", category: "인생" },
  { text: "문이 닫히면 다른 문이 열린다. 우리는 닫힌 문을 바라보느라 열린 문을 보지 못한다.", author: "알렉산더 그레이엄 벨", origin: "Alexander Graham Bell · 발명가", category: "희망" },
  { text: "우리가 진정 두려워해야 할 것은 악인의 폭력이 아니라 선인의 침묵이다.", author: "마틴 루터 킹", origin: "Martin Luther King Jr. · 사회운동가", category: "용기" },
  { text: "나라에 도움이 되는 것이 무엇인지 묻지 말고, 당신이 나라에 무엇을 할 수 있는지 물어라.", author: "존 F. 케네디", origin: "John F. Kennedy · 미국 대통령", category: "리더십" },
  { text: "용기는 두려움이 없는 것이 아니다. 두려움보다 더 중요한 무언가가 있다고 판단하는 것이다.", author: "앰브로스 레드문", origin: "Ambrose Redmoon · 작가", category: "용기" },
  { text: "독서는 완성된 인간을, 대화는 민첩한 인간을, 글쓰기는 정확한 인간을 만든다.", author: "프랜시스 베이컨", origin: "Francis Bacon · 철학자", category: "독서" },
  { text: "행복한 삶의 비결은 가능한 한 많은 것에 관심을 갖는 것이다.", author: "버트런드 러셀", origin: "Bertrand Russell · 철학자", category: "행복" },
  { text: "당신이 어디에 있든, 그곳에 완전히 있어라.", author: "에크하르트 톨레", origin: "Eckhart Tolle · 작가·철학자", category: "시간" },
  { text: "성공은 열정을 잃지 않고 실패에서 실패로 나아가는 것이다.", author: "윈스턴 처칠", origin: "Winston Churchill · 영국 총리", category: "성공" },
  { text: "내일 죽을 것처럼 살아라. 영원히 살 것처럼 배워라.", author: "마하트마 간디", origin: "Mahatma Gandhi · 지도자", category: "인생" },
  { text: "당신이 생각하는 대로 살지 않으면, 사는 대로 생각하게 된다.", author: "폴 부르제", origin: "Paul Bourget · 소설가", category: "인생" },
  { text: "시간은 가장 희소한 자원이다. 그것을 관리하지 못하면 다른 아무것도 관리할 수 없다.", author: "피터 드러커", origin: "Peter Drucker · 경영학자", category: "시간" },
  { text: "진정한 발견의 여행은 새로운 풍경을 찾는 것이 아니라 새로운 눈을 갖는 것이다.", author: "마르셀 프루스트", origin: "Marcel Proust · 소설가", category: "인생" },
  { text: "당신이 사랑하는 일을 하면, 평생 단 하루도 일하지 않아도 된다.", author: "공자", origin: "Confucius · 철학자", category: "성공" },
  { text: "작은 일에 성실한 사람이 큰 일에도 성실하다.", author: "성경", origin: "누가복음 16장 10절", category: "노력" },
  { text: "희망은 깨어있는 사람의 꿈이다.", author: "아리스토텔레스", origin: "Aristotle · 철학자", category: "희망" },
  { text: "지금 이 순간이 당신이 가진 전부다.", author: "에크하르트 톨레", origin: "Eckhart Tolle · 작가·철학자", category: "시간" },
  { text: "실수를 두려워하지 마라. 최선을 다한 실수는 부끄럽지 않다.", author: "시어도어 루스벨트", origin: "Theodore Roosevelt · 미국 대통령", category: "도전" },
  { text: "삶은 우리에게 주어진 선물이다. 우리가 삶으로 무엇을 만드느냐가 우리가 신에게 주는 선물이다.", author: "엘리너 루스벨트", origin: "Eleanor Roosevelt · 사회운동가", category: "인생" },
  { text: "어려울 때 친구가 진짜 친구다.", author: "에우리피데스", origin: "Euripides · 극작가", category: "우정" },
  { text: "재능 없이 천재성이란 없다. 하지만 노력 없이 재능이란 아무것도 아니다.", author: "발타자르 그라시안", origin: "Baltasar Gracián · 철학자", category: "노력" },
  { text: "과거를 기억하지 못하는 자는 과거를 반복할 운명이다.", author: "조지 산타야나", origin: "George Santayana · 철학자", category: "지혜" },
  { text: "자유는 아무것도 잃을 것이 없다는 또 다른 말이다.", author: "크리스 크리스토퍼슨", origin: "Kris Kristofferson · 가수·작가", category: "자유" },
  { text: "인생의 비극은 우리가 너무 일찍 늙고, 너무 늦게 철든다는 것이다.", author: "벤저민 프랭클린", origin: "Benjamin Franklin · 발명가·정치인", category: "시간" },
];

let current = 0;

const card       = document.getElementById('quoteCard');
const textEl     = document.getElementById('quoteText');
const authorEl   = document.getElementById('quoteAuthor');
const originEl   = document.getElementById('quoteOrigin');
const categoryEl = document.getElementById('category');
const counterEl  = document.getElementById('counter');
const prevBtn    = document.getElementById('prevBtn');
const nextBtn    = document.getElementById('nextBtn');

function render() {
  const q = quotes[current];
  textEl.textContent     = q.text;
  authorEl.textContent   = q.author;
  originEl.textContent   = q.origin;
  categoryEl.textContent = q.category;
  counterEl.textContent  = `${current + 1} / ${quotes.length}`;
  prevBtn.disabled = current === 0;
  nextBtn.disabled = current === quotes.length - 1;
}

function changeQuote(direction) {
  const next = current + direction;
  if (next < 0 || next >= quotes.length) return;

  card.classList.add('fade-out');
  setTimeout(() => {
    current = next;
    render();
    card.classList.remove('fade-out');
  }, 350);
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft')  changeQuote(-1);
  if (e.key === 'ArrowRight') changeQuote(1);
});

render();
