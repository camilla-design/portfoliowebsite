import { FeedbackInformation } from "@/typings";

export const fetchFeedbacks = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SANITY_URL}/api/getFeedbackInfo`);

    const data = await res.json();
    const feedback: FeedbackInformation[] = data.feedback;


return feedback;

}