interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updateAt: string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    };
}

export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    backgroundInformation: string;
    name: string,
    role: string;
    heroImage: Image;
    profilePicture: Image;

}

export interface FeedbackInformation extends SanityBody {
    _type: "feedbackInformation";
    image: Image;
    name: string;
    jobTitle: string;
    feedback: string;
    jobPlace: string;
}

export interface Projects extends SanityBody {
    title: string;
    _type: "projects";
    image: Image;
    summary: string;
    technologies: Technology[];

}

export interface Technologies extends SanityBody {
    title: string;
    _type: "technologies";

}

