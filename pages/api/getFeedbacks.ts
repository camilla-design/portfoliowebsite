import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import { Feedback } from "../../typings";

const query = groq`
*[_type == "feedback"]
`;

type Data = {
    feedbacks: Feedback[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {

    const feedbacks: Feedback[] = await sanityClient.fetch(query)

    res.status(200).json({ feedbacks });
  }
  
 