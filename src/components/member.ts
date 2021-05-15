const members = [
  'hideo54',
  '昆布',
  'iLiss.',
  'ナン',
  'JP3BGY',
  'satos',
  'hakatashi',
  'fiord',
  'CoiL',
  'azaika',
  'うら',
  'Szkieletor',
  'しとお',
  'Hirota',
  'platypus',
  'kcz',
  'Hoget157',
  'moratorium08',
  'smallkirby',
  'bitmath',
  'kotatsugameさん',
  '%20さん',
  'ふぁぼん',
  'ゆうれい',
  '661nos',
  'T-Watson',
  'のこ',
  'TAISA_',
  'ちゃっぴー',
  'kuromunori',
  'DNEKさん',
  'aotsukiさん',
  'ten986さん',
  'pwnyaaさん',
  'theoremoonさん',
  'kurenaifさん',
  '未定',
] as const;

export type Member = typeof members[number];

const programs = [
  'オープニングトーク',
  'ライブゲームプログラミング 1日目',
  'ライブゲームプログラミング 2日目',
  'ライブコードゴルフ大会 1日目',
  'ライブコードゴルフ大会 2日目',
  'ライブCTF',
  'ライブハッキング',
  'ライブ競技プログラミング (アルゴリズム)',
  'ライブ競技プログラミング (マラソン)',
  'Webサイト',
] as const;

export type ProgramName = typeof programs[number];

export const roles: {[key in ProgramName]?: {[key: string]: Member[]}} = {
  'オープニングトーク': {
    'パーソナリティ': [
      'ふぁぼん', 'ゆうれい',
    ],
    // '企画': [
    //   'ナン', 'JP3BGY', 'satos', 'hakatashi', 'fiord',
    // ],
  },
  'ライブゲームプログラミング 1日目': {
    '解説': [
      'hakatashi', 'hideo54',
    ],
    'プレイヤー': [
      'azaika',
    ],
  },
  'ライブコードゴルフ大会 1日目': {
    '解説': [
      'しとお', '昆布',
    ],
    'プレイヤー': [
      '661nos', 'T-Watson', 'のこ', 'ふぁぼん',
    ],
    // '関東チーム': [
    //   'azaika', 'iLiss.',
    // ],
    // '関西チーム': [
    //   'ナン', 'しとお',
    // ],
    // '作問': [
    //   'fiord', 'うら', 'Szkieletor',
    // ],
  },
  'ライブ競技プログラミング (マラソン)': {
    '解説': [
      'platypus',
    ],
    'プレイヤー': [
      'TAISA_', 'ちゃっぴー',
    ],
    // '関東チーム': [
    //   'うら',
    // ],
    // '関西チーム': [
    //   'ナン',
    // ],
    // '作問': [
    //   'platypus', 'Hoget157',
    // ],
  },
  'ライブゲームプログラミング 2日目': {
    '解説': [
      'kuromunori', 'azaika',
    ],
    'プレイヤー': [
      'hideo54'
    ],
  },
  'ライブコードゴルフ大会 2日目': {
    '解説': [
      'うら', 'kuromunori',
    ],
    'TSGチーム': [
      'しとお', '昆布', 'ふぁぼん',
    ],
    '外部チーム': [
      'DNEKさん', 'aotsukiさん', 'ten986さん',
    ],
    // '作問': [
    //   'fiord', 'ナン', 'satos', 'Szkieletor',
    // ],
  },
  'ライブCTF': {
    'TSGチーム': [
      'ishitatsuyuki','うら','しとお','イワシイラ','jubibsb',
    ],
    '外部チーム': [
      'pwnyaaさん', 'theoremoonさん', 'kurenaifさん',
    ],
    '解説': [
      'JP3BGY', 'hakatashi',
    ],
    '作問': [
      'moratorium08', 'ナン', 'hakatashi', 'smallkirby',
      ,'kcz', 'platypus999', // tester
    ],
    // '解説': [
    //   'JP3BGY', 'ナン',
    // ],
    // '関東チーム': [
    //   'iLiss.', 'azaika', 'bitmath',
    // ],
    // '関西チーム': [
    //   'fiord', 'CoiL', 'hideo54',
    // ],
    // '作問': [
    //   'JP3BGY', 'moratorium08', 'ナン', 'hakatashi', 'satos',
    //   'kcz', 'smallkirby', // tester
    // ]
  },
  // 'ライブハッキング': {
  //   'パーソナリティ': [
  //     'hakatashi', 'satos', 'ナン',
  //   ],
  // },
  'Webサイト': {
    '開発': [
      'hideo54',
    ],
  },
};
