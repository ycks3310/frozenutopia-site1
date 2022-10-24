// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Weapons, WEAPON_LIST } from '../../../../src/constants/valorant/WeaponList'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Weapons[]>
) {
  res.status(200).json(WEAPON_LIST)
}
