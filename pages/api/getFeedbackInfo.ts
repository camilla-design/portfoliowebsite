import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import { FeedbackInformation } from "@/typings";


const query = groq`
*[_type == "feedback"] {
    ...,
}
`

type Data = {
    feedbackInfo: FeedbackInformation[];
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const feedbackInfo: FeedbackInformation[] = await sanityClient.fetch(query)

    res.status(200).json({ feedbackInfo })
}
