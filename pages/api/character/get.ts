// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Character, CharacterList } from '../../../src/constants/CharacterList'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Character[]>
) {
  res.status(200).json(CharacterList)
}
