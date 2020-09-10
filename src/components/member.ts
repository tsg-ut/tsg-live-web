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
      'hideo54', '昆布', 'iLiss.',
    ],
    '企画': [
      'ナン', 'JP3BGY', 'satos', 'hakatashi', 'fiord',
    ],
  },
  'ライブゲームプログラミング 1日目': {
    '解説': [
      'fiord', 'CoiL',
    ],
    'プレイヤー': [
      'azaika',
    ],
  },
  'ライブコードゴルフ大会 1日目': {
    '解説': [
      'fiord', 'うら',
    ],
    '関東チーム': [
      'azaika', 'iLiss.',
    ],
    '関西チーム': [
      'ナン', 'しとお',
    ],
    '作問': [
      'fiord', 'うら', 'Szkieletor',
    ],
  },
  'ライブ競技プログラミング (マラソン)': {
    '解説': [
      'CoiL', 'platypus',
    ],
    '関東チーム': [
      'うら',
    ],
    '関西チーム': [
      'ナン',
    ],
    '作問': [
      'platypus', 'Hoget157',
    ],
  },
  'ライブゲームプログラミング 2日目': {
    '解説': [
      'hakatashi', 'うら',
    ],
    'プレイヤー': [
      'hideo54'
    ],
  },
  'ライブコードゴルフ大会 2日目': {
    '解説': [
      'fiord', 'ナン',
    ],
    'TSGチーム': [
      'うら', 'hakatashi',
    ],
    '外部チーム': [
      'kotatsugameさん', '%20さん',
    ],
    '作問': [
      'fiord', 'ナン', 'satos', 'Szkieletor',
    ],
  },
  'ライブCTF': {
    '解説': [
      'JP3BGY', 'ナン',
    ],
    '関東チーム': [
      'iLiss.', 'azaika', 'bitmath',
    ],
    '関西チーム': [
      'fiord', 'CoiL', 'hideo54',
    ],
    '作問': [
      'JP3BGY', 'moratorium08', 'ナン', 'hakatashi', 'satos',
      'kcz', 'smallkirby', // tester
    ]
  },
  'ライブハッキング': {
    'パーソナリティ': [
      'hakatashi', 'satos', 'ナン',
    ],
  },
  'Webサイト': {
    '開発': [
      'hideo54',
    ],
  },
};