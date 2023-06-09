import { FeedbackInformation } from "@/typings";

export const fetchFeedbacks = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getFeedbackInfo`);

    const data = await res.json();
    const feedbackInfo: FeedbackInformation[] = data.feedbackInfo;


return feedbackInfo;

}