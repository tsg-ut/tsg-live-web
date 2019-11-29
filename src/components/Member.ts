enum Member {
  moratorium = 'moratorium08',
  CoiL = 'CoiL',
  iLiss = 'iLiss.',
  OkXgen = 'OkXgen',
  naan = 'ナン',
  Mister = 'Mister',
  ura = 'うら',
  azaika = 'azaika',
  fiord = 'fiord',
  kuromunori = 'kuromunori',
  yamayu = 'yamayu',
  JP3BGY = 'JP3BGY',
  dai = 'dai',
  hideo54 = 'hideo54',
  hyoshiok = 'hyoshiok',
  bitmath = 'bitmath',
  pizzacat = 'pizzacat83',
  torisasami = 'torisasami',
  sena = 'sena',
  kombu = '昆布',
  Naomiat = 'NaomiatLibrary',
  taiyoslime = 'taiyoslime',
  Hoget = 'Hoget157',
  satos = 'satos',
  KazukiOta = 'KazukiOta',
  hakatashi = 'hakatashi',
  kirby = 'smallkirby',
  kcz = 'kcz',
}

export default Member;

export const roles = {
  'オープニングトーク': {
    'パーソナリティ': [
      Member.hakatashi, Member.kuromunori, Member.hideo54, Member.naan,
    ],
    'たほいや準備': [
      Member.bitmath, Member.satos, Member.yamayu,
      Member.CoiL, Member.naan, Member.iLiss,
      Member.moratorium, Member.taiyoslime, Member.kombu
    ],
    '裏方サポート': [ Member.hakatashi ],
  },
  'ライブコードゴルフ大会': {
    '解説': [ Member.taiyoslime, Member.bitmath ],
    '駒場チーム': [ Member.iLiss, Member.ura ],
    '本郷チーム': [ Member.moratorium, Member.kuromunori ],
    '裏方サポート': [ Member.torisasami ],
  },
  'ライブ競技プログラミング (マラソン)': {
    '解説': [ Member.naan, Member.kuromunori ],
    '駒場チーム': [ Member.JP3BGY ],
    '本郷チーム': [ Member.fiord ],
    '準備': [ Member.naan ],
    '裏方サポート': [ Member.OkXgen ],
  },
  'ライブゲームプログラミング': {
    '解説': [ Member.taiyoslime, Member.naan, Member.hideo54 ],
    'プレイヤー': [ Member.ura ],
    '裏方サポート': [ Member.kombu ],
  },
  'ライブ競技プログラミング (アルゴリズム)': {
    '解説': [ Member.naan, Member.CoiL ],
    '駒場チーム': [ Member.ura ],
    '本郷チーム': [ Member.Mister ],
    '準備': [ Member.naan, Member.CoiL, Member.satos ],
    '裏方サポート': [ Member.hakatashi ],
  },
  'ライブハッキング': {
    'パーソナリティ': [ Member.hakatashi, Member.JP3BGY ],
    '裏方サポート': [ Member.hideo54 ],
  },
  'ライブゲームプログラミング 2': {
    '解説': [ Member.moratorium, Member.satos ],
    'プレイヤー': [ Member.hakatashi ],
    '裏方サポート': [ Member.JP3BGY ],
  },
  'ライブCTF': {
    '解説': [ Member.hakatashi, Member.bitmath ],
    '駒場チーム': [ Member.naan, Member.JP3BGY, Member.taiyoslime ],
    '本郷チーム': [ Member.moratorium, Member.fiord, Member.satos ],
    '準備': [ Member.kirby, Member.hakatashi, Member.dai, Member.pizzacat ],
    '裏方サポート': [ Member.hakatashi, Member.kcz ]
  },
  'Webサイト': {
    '開発': [ Member.hideo54, Member.hakatashi ]
  }
};