// 武器のtype定義と一覧

type Weapon = {
  name: string
  credit: number
  sub_category: 
    'ハンドガン'
    | 'サブマシンガン'
    | 'ショットガン'
    | 'アサルトライフル'
    | 'マシンガン'
    | 'スナイパーライフル'
    | 'シールド'
}

type WeaponList = {
  category: 'サイドアーム' | 'メイン' | 'シールド'
  weapon: Weapon[]
}

export const WEAPON_LIST: WeaponList[] = [
  {
    category: 'サイドアーム',
    weapon: [
      {
        name: 'クラシック',
        credit: 0,
        sub_category: 'ハンドガン'
      },
      {
        name: 'ショーティ',
        credit: 150,
        sub_category: 'ハンドガン'
      },
      {
        name: 'フレンジー',
        credit: 450,
        sub_category: 'ハンドガン'
      },
      {
        name: 'ゴースト',
        credit: 500,
        sub_category: 'ハンドガン'
      },
      {
        name: 'シェリフ',
        credit: 800,
        sub_category: 'ハンドガン'
      }
    ]
  },
  {
    category: 'メイン',
    weapon: [
      {
        name: 'ステシンガー',
        credit: 950,
        sub_category: 'サブマシンガン'
      },
      {
        name: 'スペクター',
        credit: 1600,
        sub_category: 'サブマシンガン'
      },
      {
        name: 'バッキー',
        credit: 850,
        sub_category: 'ショットガン'
      },
      {
        name: 'ジャッジ',
        credit: 1850,
        sub_category: 'ショットガン'
      },
      {
        name: 'ブルドッグ',
        credit: 2050,
        sub_category:   'アサルトライフル'
      },
      {
        name: 'ガーディアン',
        credit: 2250,
        sub_category: 'アサルトライフル'
      },
      {
        name: 'ヴァンダル',
        credit: 2900,
        sub_category: 'アサルトライフル'
      },
      {
        name: 'ファントム',
        credit: 2900,
        sub_category: 'アサルトライフル'
      },
      {
        name: 'マーシャル',
        credit: 950,
        sub_category: 'スナイパーライフル'
      },
      {
        name: 'オペレーター',
        credit: 4700,
        sub_category: 'スナイパーライフル'
      },
      {
        name: 'アレス',
        credit: 1600,
        sub_category: 'マシンガン'
      },
      {
        name: 'オーディン',
        credit: 3200,
        sub_category: 'マシンガン'
      }
    ]
  },
  {
    category: 'シールド',
    weapon: [
      {
        name: 'シールドなし',
        credit: 0,
        sub_category: 'シールド'
      },
      {
        name: 'ライトシールド',
        credit: 400,
        sub_category: 'シールド'
      },
      {
        name: 'ヘビーシールド',
        credit: 1000,
        sub_category: 'シールド'
      }
    ]
  }
]