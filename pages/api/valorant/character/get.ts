// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ValorantCharacter, CHARACTER_LIST } from '../../../../src/constants/valorant/CharacterList'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ValorantCharacter[]>
) {
  res.status(200).json(CHARACTER_LIST)
}
