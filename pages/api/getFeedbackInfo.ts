import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import { FeedbackInformation } from "@/typings";


const query = groq`
    *[_type == "feedback"]
`

type Data = {
    feedback: FeedbackInformation[];
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const feedback: FeedbackInformation[] = await sanityClient.fetch(query)

    res.status(200).json({ feedback })
}
