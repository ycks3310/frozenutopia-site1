import type { NextPage, GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { ValorantCharacter } from '../../src/constants/valorant/CharacterList'
import styles from '../../styles/Home.module.css'
import Select from 'react-select'
import { Weapons } from '../../src/constants/valorant/WeaponList'
import ReactDOM from 'react-dom/client'

type ApiProps = {
  character: ValorantCharacter[]
  weapon: Weapons[]
}

type OptionType = {
  label: string,
  value: number
}

type WeaponOptionType = {
  label: string,
  value: number,
  credit: number,
  sub_category: string
}

const AbilityCalculator: NextPage<ApiProps> = (props) => {
  const [text, setText] = useState('')

  // const characterListRef = useRef(null)
  // const [selectedCharacter, setSelectedCharacter] = useState()


  // キャラクター一覧
  const characterOptions: OptionType[] = []
  const [selectedCharacter, setSelectedCharacter] = useState<OptionType[]>([])

  let i = 0
  props.character.map((character) => {
    // const option = document.createElement('option')
    // option.value = `${i}`
    // option.text = character.name
    const option = {
      value: i,
      label: character.name
    }
    characterOptions.push(option)
    i += 1
  })

  const onChangeCharacter = (input: any) => {
    setSelectedCharacter(input)

  }
  const checkCharacterList = () => {
    console.log(selectedCharacter)
  }

  let sidearmDom: ReactDOM.Root
  let mainWeaponDom: ReactDOM.Root
  // DOMの定義
  if (typeof document !== 'undefined') {
    sidearmDom = ReactDOM.createRoot(
      document.getElementById('sidearmWeaponCreditShow') as HTMLElement
    )
    mainWeaponDom = ReactDOM.createRoot(
      document.getElementById('mainWeaponCreditShow') as HTMLElement
    )
  }

  // サイドアーム
  const sidearmWeaponOptions: WeaponOptionType[] = []
  const [selectedSidearmWeapons, setSelectedSidearmWeapon] = useState<WeaponOptionType>({} as WeaponOptionType)

  const onChangeSidearmWeapons = (input: any) => {
    setSelectedSidearmWeapon(input)
  }
  const checkSidearmWeapons = () => {
    console.log(selectedSidearmWeapons)
    sidearmDom.render(
      <p>
        {selectedSidearmWeapons.credit} 円
      </p>
    )
  }
  // メインウェポン
  const mainWeaponOptions: WeaponOptionType[] = []
  const [selectedMainWeapons, setSelectedMainWeapon] = useState<WeaponOptionType>({} as WeaponOptionType)

  const onChangeMainWeapons = (input: any) => {
    setSelectedMainWeapon(input)
  }
  const checkMainWeapons = () => {
    console.log(selectedSidearmWeapons)
    mainWeaponDom.render(
      <p>
        {selectedMainWeapons.credit} 円
      </p>
    )
  }

  // 

  i = 0
  props.weapon.map((weaponCategory) => {
    if (weaponCategory.category === 'サイドアーム') {
      weaponCategory.weapon.map((weapon) => {
        const option: WeaponOptionType = {
          value: i,
          label: weapon.name,
          credit: weapon.credit,
          sub_category: weapon.sub_category
        }
        sidearmWeaponOptions.push(option)
        i += 1
      })
    }
    if (weaponCategory.category === 'メイン') {
      weaponCategory.weapon.map((weapon) => {
        const option: WeaponOptionType = {
          value: i,
          label: weapon.name,
          credit: weapon.credit,
          sub_category: weapon.sub_category
        }
        mainWeaponOptions.push(option)
        i += 1
      })
    }
  })

  return (
    <div className={styles.container}>
      <Head>
        <title>VALORANT 購入フェーズ計算機</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>VALORANT 購入フェーズ計算機</h1>
        現在のクレジット残高 (最大9,000)
        <input
          value={text}
          onChange={(event) => setText(event.target.value)}
        ></input>
        <p>入力した値: {text}</p>

        <p>武器の選択</p>
        <label>
          {/* <select ref={characterListRef} value={selectedCharacter} onChange={selectCharacter}></select> */}
          <Select
            options={sidearmWeaponOptions}
            // isMulti
            onChange={onChangeSidearmWeapons}
            placeholder='武器(サイドアーム)を選択'
          />
        </label>
        <button onClick={checkSidearmWeapons}>値段の確認</button>
        <div id='sidearmWeaponCreditShow'>
          <p>
            0 円
          </p>
        </div>

        <label>
          {/* <select ref={characterListRef} value={selectedCharacter} onChange={selectCharacter}></select> */}
          <Select
            options={mainWeaponOptions}
            // isMulti
            onChange={onChangeMainWeapons}
            placeholder='武器(メイン)を選択'
          />
        </label>
        <button onClick={checkMainWeapons}>値段の確認</button>
        <div id='mainWeaponCreditShow'>
          <p>
            0 円
          </p>
        </div>

        <p>キャラクター選択</p>
        <label>
          {/* <select ref={characterListRef} value={selectedCharacter} onChange={selectCharacter}></select> */}
          <Select
            options={characterOptions}
            // isMulti
            onChange={onChangeCharacter}
            placeholder='キャラクターを選択'
          />
        </label>
        <button onClick={checkCharacterList}>console.log()</button>
        </main>
    </div>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const host: string = context.req.headers.host || 'localhost:3000'
  let protocol: string
  if (/^localhost/.test(host)) {
    protocol = 'http'
  } else {
    protocol = 'https'
  }
  const resChara: ValorantCharacter[] = await fetch(`${protocol}://${host}/api/valorant/character/get`)
    .then(res => {
      return res.json()
    })
    .catch(err => {
      return []
    })
  // console.log(res)
  
  const resWeapon: Weapons[] = await fetch(`${protocol}://${host}/api/valorant/weapon/get`)
    .then(res => {
      return res.json()
    })
    .catch(err => {
      return []
    })
  // console.log(res)

  const r: ApiProps = {
    character: resChara,
    weapon: resWeapon
  }

  return { props: r}
}

export default AbilityCalculator
