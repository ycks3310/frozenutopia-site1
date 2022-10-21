type Ability = {
  name: string
  credit: number | null
  amount: number
  defaultAmount: number
  bindKey: string
}

export type ValorantCharacter = {
  name: string
  roll: string
  ability: Ability[]
}

export const CharacterList: ValorantCharacter[] = [
  {
    name: 'ジェット',
    roll: 'デュエリスト',
    ability: [
      {
        name: 'アップドラフト',
        credit: 150,
        amount: 2,
        defaultAmount: 0,
        bindKey: 'Q'
      },
      {
        name: 'テイルウインド',
        credit: null,
        amount: 1,
        defaultAmount: 1,
        bindKey: 'E'
      },
      {
        name: 'クラウドバースト',
        credit: 200,
        amount: 2,
        defaultAmount: 0,
        bindKey: 'C'
      },
    ]
  },
  {
    name: 'フェニックス',
    roll: 'デュエリスト',
    ability: [
      {
        name: 'カーブボール',
        credit: 250,
        amount: 2,
        defaultAmount: 0,
        bindKey: 'Q'
      },
      {
        name: 'ホットハンド',
        credit: null,
        amount: 1,
        defaultAmount: 1,
        bindKey: 'E'
      },
      {
        name: 'ブレイズ',
        credit: 200,
        amount: 1,
        defaultAmount: 0,
        bindKey: 'C'
      },
    ]
  },
  {
    name: 'ネオン',
    roll: 'デュエリスト',
    ability: [
      {
        name: 'リレーボルト',
        credit: 200,
        amount: 2,
        defaultAmount: 0,
        bindKey: 'Q'
      },
      {
        name: 'ハイギア',
        credit: null,
        amount: 1,
        defaultAmount: 1,
        bindKey: 'E'
      },
      {
        name: 'ファストレーン',
        credit: 300,
        amount: 1,
        defaultAmount: 0,
        bindKey: 'C'
      },
    ]
  },
  {
    name: 'ヨル',
    roll: 'デュエリスト',
    ability: [
      {
        name: 'ブラインドサイド',
        credit: 250,
        amount: 2,
        defaultAmount: 0,
        bindKey: 'Q'
      },
      {
        name: 'ゲートクラッシュ',
        credit: 200,
        amount: 2,
        defaultAmount: 0,
        bindKey: 'E'
      },
      {
        name: 'フェイクアウト',
        credit: 100,
        amount: 1,
        defaultAmount: 0,
        bindKey: 'C'
      },
    ]
  },
  {
    name: 'セージ',
    roll: 'センチネル',
    ability: [
      {
        name: 'スロウオーブ',
        credit: 200,
        amount: 2,
        defaultAmount: 0,
        bindKey: 'Q'
      },
      {
        name: 'ヒーリングオーブ',
        credit: null,
        amount: 1,
        defaultAmount: 1,
        bindKey: 'E'
      },
      {
        name: 'バリアオーブ',
        credit: 400,
        amount: 1,
        defaultAmount: 0,
        bindKey: 'C'
      },
    ]
  },
  {
    name: 'ソーヴァ',
    roll: 'イニシエーター',
    ability: [
      {
        name: 'ショックボルト',
        credit: 150,
        amount: 2,
        defaultAmount: 0,
        bindKey: 'Q'
      },
      {
        name: 'リコンボルト',
        credit: null,
        amount: 1,
        defaultAmount: 1,
        bindKey: 'E'
      },
      {
        name: 'オウルドローン',
        credit: 400,
        amount: 1,
        defaultAmount: 0,
        bindKey: 'C'
      },
    ]
  },
  {
    name: 'ブリムストーン',
    roll: 'コントローラー',
    ability: [
      {
        name: 'インセンディアリー',
        credit: 250,
        amount: 1,
        defaultAmount: 0,
        bindKey: 'Q'
      },
      {
        name: 'スカイスモーク',
        credit: 100,
        amount: 3,
        defaultAmount: 1,
        bindKey: 'E'
      },
      {
        name: 'スティムビーコン',
        credit: 200,
        amount: 1,
        defaultAmount: 0,
        bindKey: 'C'
      },
    ]
  },
  {
    name: 'ヴァイパー',
    roll: 'コントローラー',
    ability: [
      {
        name: 'ポイズンクラウド',
        credit: 200,
        amount: 1,
        defaultAmount: 0,
        bindKey: 'Q'
      },
      {
        name: 'トキシックスクリーン',
        credit: null,
        amount: 1,
        defaultAmount: 1,
        bindKey: 'E'
      },
      {
        name: 'スネークバイト',
        credit: 200,
        amount: 2,
        defaultAmount: 0,
        bindKey: 'C'
      },
    ]
  },
  {
    name: 'オーメン',
    roll: 'コントローラー',
    ability: [
      {
        name: 'パラノイア',
        credit: 300,
        amount: 1,
        defaultAmount: 0,
        bindKey: 'Q'
      },
      {
        name: 'ダークカヴァー',
        credit: 150,
        amount: 2,
        defaultAmount: 1,
        bindKey: 'E'
      },
      {
        name: 'シュラウドステップ',
        credit: 100,
        amount: 2,
        defaultAmount: 0,
        bindKey: 'C'
      },
    ]
  },
  {
    name: 'サイファー',
    roll: 'センチネル',
    ability: [
      {
        name: 'サイバーケージ',
        credit: 100,
        amount: 2,
        defaultAmount: 0,
        bindKey: 'Q'
      },
      {
        name: 'スパイカメラ',
        credit: null,
        amount: 1,
        defaultAmount: 1,
        bindKey: 'E'
      },
      {
        name: 'トラップワイヤー',
        credit: 200,
        amount: 2,
        defaultAmount: 0,
        bindKey: 'C'
      },
    ]
  },
  {
    name: 'ブリーチ',
    roll: 'イニシエーター',
    ability: [
      {
        name: 'フラッシュポイント',
        credit: 250,
        amount: 2,
        defaultAmount: 0,
        bindKey: 'Q'
      },
      {
        name: 'フォールトライン',
        credit: null,
        amount: 1,
        defaultAmount: 1,
        bindKey: 'E'
      },
      {
        name: 'アフターショック',
        credit: 200,
        amount: 1,
        defaultAmount: 0,
        bindKey: 'C'
      },
    ]
  },
  {
    name: 'レイズ',
    roll: 'デュエリスト',
    ability: [
      {
        name: 'ブラストパック',
        credit: 200,
        amount: 2,
        defaultAmount: 0,
        bindKey: 'Q'
      },
      {
        name: 'ペイント弾',
        credit: null,
        amount: 1,
        defaultAmount: 1,
        bindKey: 'E'
      },
      {
        name: 'ブームボット',
        credit: 400,
        amount: 1,
        defaultAmount: 0,
        bindKey: 'C'
      },
    ]
  },
  {
    name: 'レイナ',
    roll: 'デュエリスト',
    ability: [
      {
        name: 'デバウアー／ディスミス',
        credit: 100,
        amount: 2,
        defaultAmount: 0,
        bindKey: 'Q/E'
      },
      {
        name: 'リーア',
        credit: 250,
        amount: 2,
        defaultAmount: 0,
        bindKey: 'C'
      },
    ]
  },
  {
    name: 'キルジョイ',
    roll: 'センチネル',
    ability: [
      {
        name: 'アラームボット',
        credit: 200,
        amount: 1,
        defaultAmount: 0,
        bindKey: 'Q'
      },
      {
        name: 'タレット',
        credit: null,
        amount: 1,
        defaultAmount: 1,
        bindKey: 'E'
      },
      {
        name: 'ナノスワーム',
        credit: 200,
        amount: 2,
        defaultAmount: 0,
        bindKey: 'C'
      },
    ]
  },
  {
    name: 'スカイ',
    roll: 'イニシエーター',
    ability: [
      {
        name: 'トレイルブレイザー',
        credit: 250,
        amount: 1,
        defaultAmount: 0,
        bindKey: 'Q'
      },
      {
        name: 'ガイディングライト',
        credit: 250,
        amount: 2,
        defaultAmount: 0,
        bindKey: 'E'
      },
      {
        name: 'リグロウス',
        credit: 250,
        amount: 1,
        defaultAmount: 0,
        bindKey: 'C'
      },
    ]
  },
  {
    name: 'アストラ',
    roll: 'コントローラー',
    ability: [
      {
        name: 'アストラルスター',
        credit: 150,
        amount: 4,
        defaultAmount: 1,
        bindKey: 'X'
      }
    ]
  },
  {
    name: 'KAY/O',
    roll: 'イニシエーター',
    ability: [
      {
        name: 'フラッシュ/ドライブ',
        credit: 250,
        amount: 2,
        defaultAmount: 0,
        bindKey: 'Q'
      },
      {
        name: 'ゼロ/ポイント',
        credit: null,
        amount: 1,
        defaultAmount: 1,
        bindKey: 'E'
      },
      {
        name: 'フラグ/メント',
        credit: 200,
        amount: 1,
        defaultAmount: 0,
        bindKey: 'C'
      },
    ]
  },
  {
    name: 'チェンバー',
    roll: 'センチネル',
    ability: [
      {
        name: 'ヘッドハンター',
        credit: 150,
        amount: 8,
        defaultAmount: 0,
        bindKey: 'Q'
      },
      {
        name: 'ランデブー',
        credit: null,
        amount: 1,
        defaultAmount: 1,
        bindKey: 'E'
      },
      {
        name: 'トレードマーク',
        credit: 150,
        amount: 1,
        defaultAmount: 0,
        bindKey: 'C'
      },
    ]
  },
  {
    name: 'フェイド',
    roll: 'イニシエーター',
    ability: [
      {
        name: 'プラウラー',
        credit: 250,
        amount: 2,
        defaultAmount: 0,
        bindKey: 'Q'
      },
      {
        name: 'ホウント',
        credit: null,
        amount: 1,
        defaultAmount: 1,
        bindKey: 'E'
      },
      {
        name: 'シーズ',
        credit: 200,
        amount: 1,
        defaultAmount: 0,
        bindKey: 'C'
      },
    ]
  },
  {
    name: 'ハーバー',
    roll: 'コントローラー',
    ability: [
      {
        name: 'コーヴ',
        credit: 350,
        amount: 1,
        defaultAmount: 0,
        bindKey: 'Q'
      },
      {
        name: 'ハイタイド',
        credit: null,
        amount: 1,
        defaultAmount: 1,
        bindKey: 'E'
      },
      {
        name: 'カスケード',
        credit: 150,
        amount: 1,
        defaultAmount: 0,
        bindKey: 'C'
      },
    ]
  }
]
