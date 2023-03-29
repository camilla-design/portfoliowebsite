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
    image: Image;
    profilePicture: Image;

}

export interface Feedback extends SanityBody {
    _type: "feedback";
    image: Image;
    name: string;
    jobTitle: string;
    feedback: string;
    jobPlace: string;
}

export interface Projects extends SanityBody {
    title: string;
    _type: "project";
    image: Image;
    summary: string;
    technologies: Technology[];

}

export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string;
}