import { Feedback } from "../typings";

export const fetchFeedback = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getFeedbacks/`);

    const data = await res.json();
    const feedbacks: Feedback[] = data.feedbacks;

    return feedbacks;
   
}