// ═══════════════════════════════════════════
//  星座シルエット SVG (12星座 100×100 リアルシルエット)
// ═══════════════════════════════════════════
const ZODIAC_SILHOUETTES = {

  // 牡羊座: 羊
  aries: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M50 74c-3 0-5-2-5-5V37c0-12-8-20-17-20-7 0-12 5-12 12 0 5 3 9 7 11 3 1 4 4 3 7-1 3-4 4-7 3C11 47 6 39 6 30 6 16 16 6 29 6c9 0 16 5 21 13C55 11 62 6 71 6c13 0 23 10 23 24 0 9-5 17-13 20-3 1-6 0-7-3s0-6 3-7c4-2 7-6 7-11 0-7-5-12-12-12-9 0-17 8-17 20v32c0 3-2 5-5 5z"/>
  </svg>`,

  // 牡牛座: 牛
  taurus: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M25 13c6 11 14 18 25 18s19-7 25-18c2-3 7-2 7 2-1 15-11 25-22 29 11 4 19 14 19 26 0 16-13 29-29 29S21 86 21 70c0-12 8-22 19-26-11-4-21-14-22-29 0-4 5-5 7-2zm25 31c-14 0-25 11-25 25s11 25 25 25 25-11 25-25-11-25-25-25z"/>
  </svg>`,

  // 双子座: 双子
  gemini: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M24 12h52c3 0 5 2 5 5s-2 5-5 5h-9v56h9c3 0 5 2 5 5s-2 5-5 5H24c-3 0-5-2-5-5s2-5 5-5h9V22h-9c-3 0-5-2-5-5s2-5 5-5zm19 10v56h14V22H43z"/>
  </svg>`,

  // 蟹座: カニ
  cancer: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <g transform="translate(5 18)">
      <path d="M50 74c-10 0-18-8-18-18 0-2 0-4 1-6-6 2-13 3-20 3-10 0-18-3-24-8-3-3-8 2-5 5 8 9 19 13 31 13 8 0 15-2 22-5 4 3 8 5 13 5 10 0 18-8 18-18s-8-19-18-19zm0 11c4 0 8 4 8 8s-4 8-8 8-8-4-8-8 4-8 8-8zM32 34c10 0 18-8 18-18 0-5-2-10-5-13-3-3-8 1-5 5 1 2 2 5 2 8 0 4-4 8-8 8s-8-4-8-8 4-8 8-8c3 0 5-2 5-5s-2-5-5-5C20-2 10 8 10 22s10 12 22 12z"/>
    </g>
  </svg>`,

  // 獅子座: ライオン
  leo: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M35 67c-11 0-20-9-20-20s9-20 20-20c12 0 20 10 20 22 0 9-3 16-7 24 8-4 15-10 20-19 5-10 4-22-4-27-6-4-14-1-18 5-2 3-6 3-8 1-3-2-3-6-1-8 7-10 21-15 32-8 14 9 16 27 8 42-8 16-24 27-41 30-5 1-8-5-5-9 8-10 14-20 14-31 0-6-4-11-10-11s-10 4-10 9 4 9 10 9c3 0 5 2 5 5s-2 5-5 5z"/>
  </svg>`,

  // 乙女座: 乙女
  virgo: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M16 20c0-3 2-5 5-5s5 2 5 5v5c4-7 15-7 20 0 4-8 17-8 22 1 6 10 1 27-5 40l8-6c2-2 5-2 7 0s2 5 0 7L61 84c-2 2-6 1-7-2-1-2-1-4 0-7 7-14 13-35 6-44-3-4-11-2-11 5v34c0 3-2 5-5 5s-5-2-5-5V36c0-7-10-7-10 0v34c0 3-2 5-5 5s-5-2-5-5V20z"/>
  </svg>`,

  // 天秤座: 天秤
  libra: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M18 68h64c3 0 5 2 5 5s-2 5-5 5H18c-3 0-5-2-5-5s2-5 5-5zm0 15h64c3 0 5 2 5 5s-2 5-5 5H18c-3 0-5-2-5-5s2-5 5-5zm12-27h12c-4-5-7-11-7-18 0-10 7-18 15-18s15 8 15 18c0 7-3 13-7 18h12c3 0 5 2 5 5s-2 5-5 5H53c-5 0-7-5-4-9 4-5 7-11 7-19 0-5-3-9-6-9s-6 4-6 9c0 8 3 14 7 19 3 4 1 9-4 9H30c-3 0-5-2-5-5s2-5 5-5z"/>
  </svg>`,

  // 蠍座: サソリ
  scorpio: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M13 20c0-3 2-5 5-5s5 2 5 5v5c4-7 15-7 20 0 4-8 17-8 22 1 3 5 4 12 4 21v20h10l-8-8c-2-2-2-5 0-7s5-2 7 0l17 17c2 2 2 5 0 7L78 93c-2 2-5 2-7 0s-2-5 0-7l8-8H64c-3 0-5-2-5-5V47c0-7-1-13-4-16s-9-2-9 5v34c0 3-2 5-5 5s-5-2-5-5V36c0-7-10-7-10 0v34c0 3-2 5-5 5s-5-2-5-5V20z"/>
  </svg>`,

  // 射手座: 弓矢
  sagittarius: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <g transform="translate(8 0)">
      <path d="M66 17H39c-3 0-5-2-5-5s2-5 5-5h39c3 0 5 2 5 5v39c0 3-2 5-5 5s-5-2-5-5V24L25 72l15 15c2 2 2 5 0 7s-5 2-7 0L18 79 8 89c-2 2-5 2-7 0s-2-5 0-7l10-10L0 61c-2-2-2-5 0-7s5-2 7 0l11 11 48-48z"/>
    </g>
  </svg>`,

  // 山羊座: 山羊
  capricorn: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M17 19c0-3 2-5 5-5s5 2 5 5v16c4-13 13-21 24-21 14 0 24 12 24 28 0 7-2 13-5 18 9 2 16 9 16 19 0 12-10 21-23 21-11 0-20-7-20-17 0-8 6-14 14-14 3 0 5 2 5 5s-2 5-5 5c-2 0-4 2-4 4 0 4 5 7 10 7 7 0 13-5 13-11 0-7-7-11-15-11-4 0-6-5-3-8 5-5 7-11 7-18 0-10-6-18-14-18-13 0-24 18-24 45 0 3-2 5-5 5s-5-2-5-5V19z"/>
  </svg>`,

  // 水瓶座: 水の波
  aquarius: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M8 38c9 0 12-8 21-8s12 8 21 8 12-8 21-8 12 8 21 8c3 0 5 2 5 5s-2 5-5 5c-12 0-16-8-21-8s-9 8-21 8-16-8-21-8-9 8-21 8c-3 0-5-2-5-5s2-5 5-5zm0 26c9 0 12-8 21-8s12 8 21 8 12-8 21-8 12 8 21 8c3 0 5 2 5 5s-2 5-5 5c-12 0-16-8-21-8s-9 8-21 8-16-8-21-8-9 8-21 8c-3 0-5-2-5-5s2-5 5-5z"/>
  </svg>`,

  // 魚座: 魚
  pisces: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M22 12c21 13 30 28 30 38S43 75 22 88c-3 2-7 0-7-4 0-2 1-3 2-4 15-10 23-21 25-30-2-9-10-20-25-30-2-1-3-4-2-6 1-3 5-4 7-2zm56 0c3-2 7 0 7 4 0 2-1 3-2 4-15 10-23 21-25 30 2 9 10 20 25 30 2 1 3 4 2 6-1 3-5 4-7 2-21-13-30-28-30-38s9-25 30-38zM26 45h48c3 0 5 2 5 5s-2 5-5 5H26c-3 0-5-2-5-5s2-5 5-5z"/>
  </svg>`,
};

// ═══════════════════════════════════════════
//  fortune-page 画像左上アイコン用 SVG (100×100 fill=white)
// ═══════════════════════════════════════════
const FORTUNE_SILHOUETTES = {
  aries: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="white">
    <path d="M50 74c-3 0-5-2-5-5V37c0-12-8-20-17-20-7 0-12 5-12 12 0 5 3 9 7 11 3 1 4 4 3 7-1 3-4 4-7 3C11 47 6 39 6 30 6 16 16 6 29 6c9 0 16 5 21 13C55 11 62 6 71 6c13 0 23 10 23 24 0 9-5 17-13 20-3 1-6 0-7-3s0-6 3-7c4-2 7-6 7-11 0-7-5-12-12-12-9 0-17 8-17 20v32c0 3-2 5-5 5z"/>
  </svg>`,
  taurus: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="white">
    <path d="M25 13c6 11 14 18 25 18s19-7 25-18c2-3 7-2 7 2-1 15-11 25-22 29 11 4 19 14 19 26 0 16-13 29-29 29S21 86 21 70c0-12 8-22 19-26-11-4-21-14-22-29 0-4 5-5 7-2zm25 31c-14 0-25 11-25 25s11 25 25 25 25-11 25-25-11-25-25-25z"/>
  </svg>`,
  gemini: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="white">
    <path d="M24 12h52c3 0 5 2 5 5s-2 5-5 5h-9v56h9c3 0 5 2 5 5s-2 5-5 5H24c-3 0-5-2-5-5s2-5 5-5h9V22h-9c-3 0-5-2-5-5s2-5 5-5zm19 10v56h14V22H43z"/>
  </svg>`,
  cancer: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="white">
    <path d="M68 29c-10 0-18 8-18 18 0 2 0 4 1 6-6 2-13 3-20 3-10 0-18-3-24-8-3-3-8 2-5 5 8 9 19 13 31 13 8 0 15-2 22-5 4 3 8 5 13 5 10 0 18-8 18-18s-8-19-18-19zm0 11c4 0 8 4 8 8s-4 8-8 8-8-4-8-8 4-8 8-8zM32 34c10 0 18-8 18-18 0-5-2-10-5-13-3-3-8 1-5 5 1 2 2 5 2 8 0 4-4 8-8 8s-8-4-8-8 4-8 8-8c3 0 5-2 5-5s-2-5-5-5C20-2 10 8 10 22s10 12 22 12z" transform="translate(5 18)"/>
  </svg>`,
  leo: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="white">
    <path d="M35 67c-11 0-20-9-20-20s9-20 20-20c12 0 20 10 20 22 0 9-3 16-7 24 8-4 15-10 20-19 5-10 4-22-4-27-6-4-14-1-18 5-2 3-6 3-8 1-3-2-3-6-1-8 7-10 21-15 32-8 14 9 16 27 8 42-8 16-24 27-41 30-5 1-8-5-5-9 8-10 14-20 14-31 0-6-4-11-10-11s-10 4-10 9 4 9 10 9c3 0 5 2 5 5s-2 5-5 5z"/>
  </svg>`,
  virgo: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="white">
    <path d="M16 20c0-3 2-5 5-5s5 2 5 5v5c4-7 15-7 20 0 4-8 17-8 22 1 6 10 1 27-5 40l8-6c2-2 5-2 7 0s2 5 0 7L61 84c-2 2-6 1-7-2-1-2-1-4 0-7 7-14 13-35 6-44-3-4-11-2-11 5v34c0 3-2 5-5 5s-5-2-5-5V36c0-7-10-7-10 0v34c0 3-2 5-5 5s-5-2-5-5V20z"/>
  </svg>`,
  libra: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="white">
    <path d="M18 68h64c3 0 5 2 5 5s-2 5-5 5H18c-3 0-5-2-5-5s2-5 5-5zm0 15h64c3 0 5 2 5 5s-2 5-5 5H18c-3 0-5-2-5-5s2-5 5-5zm12-27h12c-4-5-7-11-7-18 0-10 7-18 15-18s15 8 15 18c0 7-3 13-7 18h12c3 0 5 2 5 5s-2 5-5 5H53c-5 0-7-5-4-9 4-5 7-11 7-19 0-5-3-9-6-9s-6 4-6 9c0 8 3 14 7 19 3 4 1 9-4 9H30c-3 0-5-2-5-5s2-5 5-5z"/>
  </svg>`,
  scorpio: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="white">
    <path d="M13 20c0-3 2-5 5-5s5 2 5 5v5c4-7 15-7 20 0 4-8 17-8 22 1 3 5 4 12 4 21v20h10l-8-8c-2-2-2-5 0-7s5-2 7 0l17 17c2 2 2 5 0 7L78 93c-2 2-5 2-7 0s-2-5 0-7l8-8H64c-3 0-5-2-5-5V47c0-7-1-13-4-16s-9-2-9 5v34c0 3-2 5-5 5s-5-2-5-5V36c0-7-10-7-10 0v34c0 3-2 5-5 5s-5-2-5-5V20z"/>
  </svg>`,
  sagittarius: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="white">
    <path d="M66 17H39c-3 0-5-2-5-5s2-5 5-5h39c3 0 5 2 5 5v39c0 3-2 5-5 5s-5-2-5-5V24L25 72l15 15c2 2 2 5 0 7s-5 2-7 0L18 79 8 89c-2 2-5 2-7 0s-2-5 0-7l10-10L0 61c-2-2-2-5 0-7s5-2 7 0l11 11 48-48z" transform="translate(8 0)"/>
  </svg>`,
  capricorn: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="white">
    <path d="M17 19c0-3 2-5 5-5s5 2 5 5v16c4-13 13-21 24-21 14 0 24 12 24 28 0 7-2 13-5 18 9 2 16 9 16 19 0 12-10 21-23 21-11 0-20-7-20-17 0-8 6-14 14-14 3 0 5 2 5 5s-2 5-5 5c-2 0-4 2-4 4 0 4 5 7 10 7 7 0 13-5 13-11 0-7-7-11-15-11-4 0-6-5-3-8 5-5 7-11 7-18 0-10-6-18-14-18-13 0-24 18-24 45 0 3-2 5-5 5s-5-2-5-5V19z"/>
  </svg>`,
  aquarius: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="white">
    <path d="M8 38c9 0 12-8 21-8s12 8 21 8 12-8 21-8 12 8 21 8c3 0 5 2 5 5s-2 5-5 5c-12 0-16-8-21-8s-9 8-21 8-16-8-21-8-9 8-21 8c-3 0-5-2-5-5s2-5 5-5zm0 26c9 0 12-8 21-8s12 8 21 8 12-8 21-8 12 8 21 8c3 0 5 2 5 5s-2 5-5 5c-12 0-16-8-21-8s-9 8-21 8-16-8-21-8-9 8-21 8c-3 0-5-2-5-5s2-5 5-5z"/>
  </svg>`,
  pisces: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="white">
    <path d="M22 12c21 13 30 28 30 38S43 75 22 88c-3 2-7 0-7-4 0-2 1-3 2-4 15-10 23-21 25-30-2-9-10-20-25-30-2-1-3-4-2-6 1-3 5-4 7-2zm56 0c3-2 7 0 7 4 0 2-1 3-2 4-15 10-23 21-25 30 2 9 10 20 25 30 2 1 3 4 2 6-1 3-5 4-7 2-21-13-30-28-30-38s9-25 30-38zM26 45h48c3 0 5 2 5 5s-2 5-5 5H26c-3 0-5-2-5-5s2-5 5-5z"/>
  </svg>`,
};

// ═══════════════════════════════════════════
//  星座データ
// ═══════════════════════════════════════════
const SIGNS = [
  { name: '牡羊座',  charKey: 'aries'       },
  { name: '牡牛座',  charKey: 'taurus'      },
  { name: '双子座',  charKey: 'gemini'      },
  { name: '蟹座',    charKey: 'cancer'      },
  { name: '獅子座',  charKey: 'leo'         },
  { name: '乙女座',  charKey: 'virgo'       },
  { name: '天秤座',  charKey: 'libra'       },
  { name: '蠍座',    charKey: 'scorpio'     },
  { name: '射手座',  charKey: 'sagittarius' },
  { name: '山羊座',  charKey: 'capricorn'   },
  { name: '水瓶座',  charKey: 'aquarius'    },
  { name: '魚座',    charKey: 'pisces'      },
];

// ═══════════════════════════════════════════
//  やさしい寄り添いメッセージ
// ═══════════════════════════════════════════
const MESSAGES = {
  overall: [
    '今日のあなた、なんだかとても頑張ってきた気がする。お疲れさま。少しだけ肩の力を抜いて、ゆっくりできる時間があるといいな。あなたのまわりには、そっと優しい風が流れてる。そのままのあなたで、穏やかな一日になりますように。',
    '小さなことでもいい、今日うれしかった瞬間を思い出してほしいな。そういう積み重ねが、あなたの毎日をそっと温かくしてくれている気がする。焦らなくていい。あなたのペースで、ちゃんと前に進んでいる気がするから。',
    '今日はなんとなく、いつもよりあなたの流れが穏やかに整っているような気がする。新しい何かが、そっとあなたのそばに近づいているかもしれない。受け取る準備だけしていれば、きっと大丈夫。穏やかな気持ちで過ごせる一日になるといいな。',
    '誰かのために頑張り続けているあなたへ。今日は少しだけ、自分自身を大切にする時間があるといいな。人にやさしくできるのは、あなた自身が満たされているから。自分をいたわることも、大切なことのひとつな気がする。',
    '今日は静かに流れるような、穏やかな一日になりそうな気がする。何かを急いで成し遂げなくてもいい。ただ、今ここにいるあなたのままで十分。そのやわらかな存在が、まわりの人をほっとさせているんだと思う。',
    '最近少し疲れを感じていたとしたら、今日はそれを認めてあげてほしいな。完璧じゃなくていい、弱い日があっていい。そういう日も含めて、あなたは十分よくやっている気がする。ゆっくりと、自分のペースで深呼吸して。',
    'あなたがこつこつと積み重ねてきたものが、静かに形になりつつある気がする。誰かに気づかれなくても、あなた自身がわかっていればそれでいい。今日はそんな自分をそっとほめてあげられたら、きっと心が少し軽くなるかもしれない。',
    '今日はあなたの周りに、温かい気配があふれている気がする。ふとした瞬間に、誰かの笑顔や言葉があなたをほっとさせてくれるかもしれない。そういう小さな幸せを大切に受け取りながら、穏やかに過ごせる一日になりますように。',
  ],
  love: [
    '誰かのことを思うとき、心がほんのり温かくなる感覚があるとしたら、今日はその気持ちをそっと大切にしてほしいな。言葉にしなくても、その想いはきっとちゃんと届いている気がする。愛することは、それだけで十分素敵なことだと思う。',
    '好きな人のことが頭から離れないとき、その気持ちはとても純粋な気がする。今日はただ、その想いを否定せずに持っていてほしいな。焦らなくていい。気持ちが熟してきたとき、自然と形になっていくかもしれない。',
    '人とのつながりって、気づかないうちにあなたを支えてくれていたりする。今日はそのありがたさを、少しだけ感じられる瞬間があるかもしれない。大切な人のことを思うだけで心があたたかくなれるって、それだけで十分豊かな気がする。',
    '今日、誰かとのやりとりの中に、特別な温もりを感じる瞬間があるかもしれない。それはあなたの心が開いているからかな。本音を少しだけ見せることで、距離がそっと縮まることもある。素直なあなたのままで、きっと大丈夫な気がする。',
    '一人でいる時間も、誰かを想う時間も、どちらも大切な恋の形だと思う。今日はあわてなくていい。あなたのそばに縁のある人は、きっとちゃんとあなたを見つけてくれる気がする。そのままのあなたで、いてほしいな。',
    '誰かにやさしくしたくなる気持ちって、とても美しいと思う。今日はその気持ちのまま、ほんの少しだけ自分から歩み寄ってみるといいかもしれない。小さな行動が、あなたと誰かの間に温かい橋をかけてくれる気がする。',
    '恋愛って、うまくいかないことがあっても、それだけあなたが誰かを大切に思っていた証だと思う。今日はその経験をやさしく抱きしめてあげてほしいな。その温かさが、次の出会いに向けてあなたの心を豊かにしてくれているはず。',
    '一緒にいるだけで安心できる誰かのことを、ふと思い出すような日かもしれない。その人への気持ちは、言葉にしなくても十分伝わっている気がする。大切なものはいつも、静かにそこにある。今日もそのぬくもりを感じていられるといいな。',
  ],
  work: [
    '毎日コツコツと続けてきたこと、誰かに見えていなくても、ちゃんと意味があると思う。今日はそんな自分の努力を、少しだけ認めてあげてほしいな。急がなくていい。あなたのペースで積み上げてきたものは、確かにそこにある気がする。',
    '完璧にやり遂げなくていい。今日できることを、丁寧に。それだけで十分な気がする。あなたが一生懸命取り組んでいる姿は、まわりの人にもきっと届いている。自分を信じて、穏やかに前に進んでいけるといいな。',
    '今日は新しいアイデアがふっと浮かぶ瞬間があるかもしれない。すぐに形にしなくていい、まずはそっと心の中で温めておいてほしいな。焦らず、自然に動いたとき、きっといい流れが生まれる気がする。',
    '誰かと力を合わせることで、一人では気づけなかったものが見えてくることがある。今日はそんな協力の温かさを感じられる瞬間があるかもしれない。頼ることも、関係を深める大切な一歩のような気がする。',
    '思うようにいかない日があっても、それはあなたが全力で向き合っているからだと思う。今日は少しだけ「よくやってる」と自分に言ってあげてほしいな。その積み重ねがきっと、あなたの大切な力になっていく気がする。',
    '今日は集中できる穏やかな時間が流れていく気がする。難しいことも、一つずつ丁寧に向き合えば越えていける。焦らず、自分のリズムで。あなたの真剣さは、きっと誰かの目に届いているんじゃないかな。',
    '言葉の選び方一つで、場の空気がやわらぐことがある。今日はていねいなコミュニケーションが、あなたにとっていい流れを運んでくれるかもしれない。誠実なあなたの言葉は、人の心に温かく届く気がする。',
    '長く続けてきた努力が、そっと実を結びはじめている気がする。すぐに形にならなくても、焦らなくていい。あなたのことを信じているひとがいることを、どこかで感じてほしいな。今日も、ていねいに過ごせますように。',
  ],
  money: [
    'お金って、気持ちの余裕に似ているところがある気がする。今日は何かを急いで手に入れなくていい。ゆったりと流れに任せながら、自分が本当に必要なものを感じてみるといいかもしれない。豊かさは、心の中にも宿っているんじゃないかな。',
    '欲しいものがあるとき、少し立ち止まって「今の自分に必要かな」と問いかけてみる瞬間があってもいい。答えは急がなくていい。今のあなたには、ちゃんと必要なものがそろっているような気がする。',
    '少しずつでも、大切なものを積み上げていける人は強いと思う。今日もそんなあなたらしいペースで、穏やかに過ごせるといいな。焦らなくていい。豊かさというのは、じわじわとあなたのそばに引き寄せられてくるものだと思う。',
    '思わぬかたちで、うれしいことが舞い込んでくるかもしれない。受け取ることへの罪悪感は、もう手放してもいい気がする。幸運を素直に喜べることも、豊かさのひとつだと思うから。ありがとうという気持ちとともに受け取ってほしいな。',
    '今日は大きな動きより、静かに守る一日になりそうな気がする。じっくりと今あるものを確認して、ゆっくり深呼吸するような時間があるといいな。無理しない選択も、とても賢くて愛おしいと思う。',
    'お金まわりのことを整理してみると、意外と心がすっきりする日かもしれない。全体を眺めてみたら、知らなかった豊かさに気づけることもある気がする。あなたの暮らしには、もうすでにたくさんの恵みが溢れているんじゃないかな。',
    '誰かのために使うお金って、じんわりと温かいものがある気がする。今日もそういう心の豊かさが、あなたのまわりをそっと満たしてくれるといいな。与えることの喜びが、きっとまたあなたのもとに返ってくると思う。',
    '豊かさへのサインが、意外と日常の中に隠れていることがある。今日はそういう小さな兆しに、ふと気づける日になるかもしれない。あなたの感性はやわらかい。今日もそのやさしいアンテナを、大切にしてほしいな。',
  ],
};

// 各メッセージの末尾「。」を「 🌸」に置き換え
Object.keys(MESSAGES).forEach(cat => {
  MESSAGES[cat] = MESSAGES[cat].map(msg => {
    const idx = msg.lastIndexOf('。');
    return idx >= 0 ? msg.slice(0, idx) + ' 💕' + msg.slice(idx + 1) : msg;
  });
});

const LUCKY_COLORS = [
  'ゴールド ✨', 'ダークネイビー 🌌', 'ディープパープル 💜', 'クリムゾン 🔴',
  'シルバー 🌙', 'ミステリアスブラック 🖤', 'コバルトブルー 💙', 'エメラルド 💚',
  'パールホワイト 🤍', 'バーガンディ 🍷', 'インディゴ 🔵', 'ローズゴールド ✦',
];

const LUCKY_NUMBERS = [3, 5, 7, 8, 11, 12, 15, 21, 24, 33, 7, 9];

// ── アニメーション タイマー管理 ──
const FORTUNE_PAGE_IDS = new Set(['page-overall', 'page-love', 'page-work', 'page-money']);
let _timers = [];
function addTimer(fn, ms) {
  const t = setTimeout(fn, ms);
  _timers.push(t);
  return t;
}
function clearAllTimers() {
  _timers.forEach(clearTimeout);
  _timers = [];
}

// ── タイピングアニメーション ──
function typeMessage(text, el, charDelay, periodPause) {
  const chars = Array.from(text);
  let i = 0;
  el.textContent = '';
  function next() {
    if (i >= chars.length) return;
    const ch = chars[i];
    el.textContent += ch;
    i++;
    addTimer(next, ch === '。' ? periodPause : charDelay);
  }
  next();
}

// ── fortune-page アニメーション ──
function animateFortunePage(pageId) {
  const pageEl = document.getElementById(pageId);
  if (!pageEl) return;

  const imgFrameEl = pageEl.querySelector('.fortune-img-frame');
  const titleEl    = pageEl.querySelector('.fortune-title');
  const starsEl    = pageEl.querySelector('.stars');
  const textEl     = pageEl.querySelector('.fortune-text');

  // 初期状態にリセット（imgFrameはshowPageで事前にリセット済み）
  if (titleEl) {
    titleEl.style.transition = '';
    titleEl.style.opacity    = '0';
    titleEl.style.transform  = 'translateY(16px)';
  }
  if (starsEl) starsEl.innerHTML = '';
  if (textEl)  textEl.textContent = '';

  // 0. 画像フェードイン (0.2s)
  addTimer(() => {
    if (imgFrameEl) {
      imgFrameEl.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
      imgFrameEl.style.opacity    = '1';
      imgFrameEl.style.transform  = 'translateY(0)';
    }
  }, 200);

  // 1. 運勢タイトル (1.2s)
  addTimer(() => {
    if (titleEl) {
      titleEl.style.transition = 'opacity 0.9s ease-out, transform 0.9s ease-out';
      titleEl.style.opacity    = '1';
      titleEl.style.transform  = 'translateY(0)';
    }
  }, 1200);

  // 2. ★ 1つずつポップ (2.5s〜、各0.32s間隔)
  if (starsEl) {
    const starText = starsEl._starText || '';
    [...starText].forEach((ch, i) => {
      addTimer(() => {
        const span = document.createElement('span');
        span.className   = 'star-pop';
        span.textContent = ch;
        starsEl.appendChild(span);
      }, 2500 + i * 320);
    });
  }

  // 3. メッセージ タイピング (5.0s)
  if (textEl) {
    addTimer(() => {
      typeMessage(textEl._fullText || '', textEl, 90, 700);
    }, 5000);
  }
}

const PAGES = ['page-top', 'page-overall', 'page-love', 'page-work', 'page-money'];

const BEAUTY_IMAGES = [
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_001.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_002.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_003.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_004.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_005.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_006.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_007.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_008.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_009.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_010.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_011.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_012.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_013.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_014.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_015.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_016.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_017.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_018.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_019.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_020.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_021.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_022.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_023.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_024.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_025.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_026.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_027.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_028.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_029.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_030.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_031.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_032.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_033.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_034.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_035.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_036.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_037.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_038.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_039.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_040.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_041.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_042.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_043.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_044.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_045.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_046.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_047.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_048.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_049.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_050.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_051.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_052.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_053.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_054.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_055.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_056.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_057.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_058.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_059.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_060.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_061.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_062.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_063.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_064.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_065.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_066.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_067.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_068.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_069.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_070.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_071.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_072.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_073.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_074.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_075.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_076.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_077.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_078.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_079.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_080.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_081.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_082.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_083.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_084.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_085.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_086.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_087.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_088.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_089.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_090.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_091.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_092.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_093.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_094.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_095.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_096.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_097.jpg',
  'https://joyu-dot-com.xyz/wp-content/uploads/2026/06/beautiful-woman_098.jpg',
];

const _EXCLUDED_TOP = new Set([14,17,22,25,30,43,51,58,59,64,68,69,70,76,78,80,85,86,91,94]);
const TOP_PAGE_IMAGES = BEAUTY_IMAGES.filter((_, i) => !_EXCLUDED_TOP.has(i + 1));

const PAGE_BEAUTY_IMG = {
  'page-overall': 'beauty-img-overall',
  'page-love':    'beauty-img-love',
  'page-work':    'beauty-img-work',
  'page-money':   'beauty-img-money',
};

// ── トップページ画像（重複なし12枚割り当て）──
const FALLBACK_IMAGES = [
  './images/fallback1.jpg',
  './images/fallback2.jpg',
  './images/fallback3.jpg',
  './images/fallback4.jpg',
  './images/fallback5.jpg'
];
let _fallbackIndex = 0;

let _topPageImgEls = [];

function assignTopPageImages() {
  const pool = [...TOP_PAGE_IMAGES];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  _topPageImgEls.forEach((el, i) => {
    if (!el.dataset.fallback) { el.src = pool[i % pool.length]; }
  });
}

// ── セッション画像（重複なし4枚割り当て）──
const SESSION_PAGES = ['page-overall', 'page-love', 'page-work', 'page-money'];
let _sessionImages = {};

function assignSessionImages() {
  const pool = [...BEAUTY_IMAGES];
  // Fisher-Yates シャッフル
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  SESSION_PAGES.forEach((pageId, i) => {
    // 枚数が4未満でも安全に循環
    _sessionImages[pageId] = pool[i % pool.length];
  });
}

function applySessionImage(pageId) {
  const imgId = PAGE_BEAUTY_IMG[pageId];
  const el = imgId && document.getElementById(imgId);
  if (el && _sessionImages[pageId]) el.src = _sessionImages[pageId];
}

function seededRand(seed) {
  let s = seed;
  return function () {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 0xffffffff;
  };
}

function getDailySeed(signIndex) {
  const d = new Date();
  return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate() + signIndex * 997;
}

function pickRandom(arr, rand) {
  return arr[Math.floor(rand() * arr.length)];
}

function starsHTML(count) {
  return '★'.repeat(count) + '☆'.repeat(5 - count);
}

function getStarCount(rand) {
  const r = rand();
  if (r < 0.08) return 2;
  if (r < 0.25) return 3;
  if (r < 0.65) return 4;
  return 5;
}

function formatDate(d) {
  const week = ['日', '月', '火', '水', '木', '金', '土'];
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日（${week[d.getDay()]}）`;
}

function showPage(pageId) {
  clearAllTimers();
  if (pageId === 'page-top') {
    assignTopPageImages();
  }
  if (FORTUNE_PAGE_IDS.has(pageId)) {
    // ページ表示前に src をセット＆imgFrame を非表示にリセット（フラッシュ防止）
    applySessionImage(pageId);
    const pageEl = document.getElementById(pageId);
    const imgFrameEl = pageEl && pageEl.querySelector('.fortune-img-frame');
    if (imgFrameEl) {
      imgFrameEl.style.transition = '';
      imgFrameEl.style.opacity    = '0';
      imgFrameEl.style.transform  = 'translateY(12px)';
    }
  }
  PAGES.forEach(id => {
    document.getElementById(id).hidden = (id !== pageId);
  });
  if (FORTUNE_PAGE_IDS.has(pageId)) {
    animateFortunePage(pageId);
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const CATEGORY_LABELS = {
  overall: '今日の総合運',
  love:    '今日の恋愛運',
  work:    '今日の仕事運',
  money:   '今日の金運',
};

function setPortrait(elId, nameElId, sign) {
  const el = document.getElementById(elId);
  if (el) el.innerHTML = FORTUNE_SILHOUETTES[sign.charKey] || '';
  const nameEl = document.getElementById(nameElId);
  if (nameEl) nameEl.textContent = sign.name;
}

function showFortune(signIndex) {
  assignSessionImages(); // 4ページ分の画像を重複なしで選び直す
  const sign = SIGNS[signIndex];
  const rand = seededRand(getDailySeed(signIndex));

  const cats = ['overall', 'love', 'work', 'money'];
  const data = {};
  cats.forEach(k => {
    data[k] = { stars: getStarCount(rand), text: pickRandom(MESSAGES[k], rand) };
  });
  const luckyColor  = pickRandom(LUCKY_COLORS, rand);
  const luckyNumber = pickRandom(LUCKY_NUMBERS, rand);

  setPortrait('portrait-overall', 'charname-overall', sign);
  setPortrait('portrait-love',    'charname-love',    sign);
  setPortrait('portrait-work',    'charname-work',    sign);
  setPortrait('portrait-money',   'charname-money',   sign);

  // 総合運
  document.getElementById('overall-title').textContent = `${sign.name}の${CATEGORY_LABELS.overall}`;
  const starsOverall = document.getElementById('stars-overall');
  starsOverall._starText = starsHTML(data.overall.stars);
  const textOverall = document.getElementById('text-overall');
  textOverall._fullText = data.overall.text;
  document.getElementById('lucky-color').textContent        = luckyColor;
  document.getElementById('lucky-number').textContent       = luckyNumber;
  document.getElementById('lucky-color-love').textContent   = luckyColor;
  document.getElementById('lucky-number-love').textContent  = luckyNumber;
  document.getElementById('lucky-color-work').textContent   = luckyColor;
  document.getElementById('lucky-number-work').textContent  = luckyNumber;
  document.getElementById('lucky-color-money').textContent  = luckyColor;
  document.getElementById('lucky-number-money').textContent = luckyNumber;

  // 恋愛運
  document.getElementById('love-title').textContent = `${sign.name}の${CATEGORY_LABELS.love}`;
  const starsLove = document.getElementById('stars-love');
  starsLove._starText = starsHTML(data.love.stars);
  const textLove = document.getElementById('text-love');
  textLove._fullText = data.love.text;

  // 仕事運
  document.getElementById('work-title').textContent = `${sign.name}の${CATEGORY_LABELS.work}`;
  const starsWork = document.getElementById('stars-work');
  starsWork._starText = starsHTML(data.work.stars);
  const textWork = document.getElementById('text-work');
  textWork._fullText = data.work.text;

  // 金運
  document.getElementById('money-title').textContent = `${sign.name}の${CATEGORY_LABELS.money}`;
  const starsMoney = document.getElementById('stars-money');
  starsMoney._starText = starsHTML(data.money.stars);
  const textMoney = document.getElementById('text-money');
  textMoney._fullText = data.money.text;

  showPage('page-overall');
}

// ── PWAインストールバナー ──
(function () {
  const isStandalone =
    window.matchMedia('(display-mode: standalone)').matches ||
    navigator.standalone === true;
  if (isStandalone) return;
  if (sessionStorage.getItem('installBannerDismissed')) return;

  const banner     = document.getElementById('install-banner');
  const installBtn = document.getElementById('install-btn');
  const closeBtn   = document.getElementById('install-close');
  const overlay    = document.getElementById('ios-popup-overlay');
  const popup      = document.getElementById('ios-popup');
  const popupClose = document.getElementById('ios-popup-close');

  function hideBanner() {
    banner.hidden = true;
    sessionStorage.setItem('installBannerDismissed', '1');
  }

  closeBtn.addEventListener('click', hideBanner);
  overlay.addEventListener('click', () => { overlay.hidden = true; popup.hidden = true; });
  popupClose.addEventListener('click', () => { overlay.hidden = true; popup.hidden = true; });

  let deferredPrompt = null;
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    deferredPrompt = e;
    banner.hidden = false;
    installBtn.addEventListener('click', async () => {
      hideBanner();
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      deferredPrompt = null;
    });
  });

  const isIos = /iphone|ipad|ipod/i.test(navigator.userAgent);
  if (isIos) {
    document.getElementById('install-banner-text').textContent = 'ホーム画面に追加してアプリとして使えます';
    installBtn.textContent = '追加方法を見る';
    banner.hidden = false;
    installBtn.addEventListener('click', () => { overlay.hidden = false; popup.hidden = false; });
  }
})();

// 日付表示
document.getElementById('today-date').textContent = formatDate(new Date());

// 星座ボタン生成
const grid = document.getElementById('sign-grid');
SIGNS.forEach((sign, i) => {
  const btn = document.createElement('button');
  btn.className = 'sign-btn';
  const wrap = document.createElement('div');
  wrap.className = 'sign-btn-img-wrap';
  const img = document.createElement('img');
  img.className = 'sign-btn-img';
  img.alt = sign.name;
  img.onerror = function() {
    this.onerror = null;
    this.src = FALLBACK_IMAGES[_fallbackIndex % FALLBACK_IMAGES.length];
    _fallbackIndex++;
    this.dataset.fallback = '1';
    console.log('Fallback applied for:', this.alt);
  };
  _topPageImgEls.push(img);
  const nameSpan = document.createElement('span');
  nameSpan.className = 'btn-name';
  nameSpan.innerHTML = `<span class="btn-zodiac-icon">${ZODIAC_SILHOUETTES[sign.charKey]}</span>${sign.name}`;
  wrap.appendChild(img);
  wrap.appendChild(nameSpan);
  btn.appendChild(wrap);
  btn.addEventListener('click', () => showFortune(i));
  grid.appendChild(btn);
});
assignTopPageImages();

// 次回表示用にプリロード（キャッシュ促進）
(function preloadTopImages() {
  const pool = [...TOP_PAGE_IMAGES];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  pool.slice(0, 24).forEach(url => { new Image().src = url; });
})();

// ナビゲーション
document.getElementById('overall-back').addEventListener('click', () => showPage('page-top'));
document.getElementById('overall-next').addEventListener('click', () => showPage('page-love'));
document.getElementById('love-back').addEventListener('click', () => showPage('page-overall'));
document.getElementById('love-next').addEventListener('click', () => showPage('page-work'));
document.getElementById('work-back').addEventListener('click', () => showPage('page-love'));
document.getElementById('work-next').addEventListener('click', () => showPage('page-money'));
document.getElementById('money-back').addEventListener('click', () => showPage('page-work'));
document.getElementById('money-next').addEventListener('click', () => showPage('page-top'));

// 桜アニメーション（PC表示のみ）
(function initSakura() {
  if (window.innerWidth < 768) return;
  const count = 18;
  for (let i = 0; i < count; i++) {
    const petal = document.createElement('div');
    petal.className = 'sakura-petal';
    const size = 15 + Math.random() * 10;
    petal.style.width = size + 'px';
    petal.style.height = (size * 0.65) + 'px';
    petal.style.left = (Math.random() * 100) + '%';
    petal.style.top = '-30px';
    petal.style.animationDuration = (8 + Math.random() * 7) + 's';
    petal.style.animationDelay = (-Math.random() * 15) + 's';
    document.body.appendChild(petal);
  }
})();
