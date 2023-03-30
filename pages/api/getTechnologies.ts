import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import { Technologies } from "@/typings";


const query = groq`
    *[_type == "technologies"]
`

type Data = {
    technologies: Technologies[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const technologies: Technologies[] = await sanityClient.fetch(query)

    res.status(200).json({ technologies })
}