type FAQ = {
    question: string;
    answer: string;
}

type WhyChooseUs = {
    title: string;
    desc: string;
    icon?:string;
}

type Package = {
    title: string;
    subs_detail: string;
    price: number;
    benefit: string[];
    recomended: boolean;
}

type SocialMedia = {
    icon: string;
    link: string;
}


export type Content = {
    heading: string;
    subheading?:string;
    body?:string;
    bg_section?: string;
    problem?:WhyChooseUs[];
    benefit?: WhyChooseUs[];
    faq?: FAQ[];
    package?: Package[];
    socialMedia?: SocialMedia[]
}
