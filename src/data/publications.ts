export interface Publication {
    id: string;
    title: string;
    category: string;
    description: string;
    thumbnail?: string;
    thumbnailPosition?: string;
    fileUrl?: string;
    externalUrl?: string;
}

export const publications: Publication[] = [
    {
        id: "geography-pakki-shah-mardan",
        title: "Geography of Pakki Shah Mardan",
        category: "Research",
        description: "A small research conducted on the Geography of Pakki Shah Mardan.",
        thumbnail: "/publications/geography-pakki-shah-mardan.jpg",
        fileUrl: "/publications/geography-pakki-shah-mardan.pdf"
    },
    {
        id: "saraiki-proverbs-vocabulary",
        title: "Saraiki Proverbs & Vocabulary",
        category: "Linguistics",
        description: "A small collection of Saraiki Proverbs and Vocabulary divided into different types.",
        thumbnail: "/publications/saraiki-proverbs-vocabulary.jpg",
        thumbnailPosition: "20%",
        fileUrl: "/publications/saraiki-proverbs-vocabulary.pdf"
    },
    {
        id: "democratizing-web-freelance-writing",
        title: "Democratizing Web Freelance Writing",
        category: "Handbook",
        description: "A little handbook containing 6 chapters on how to kickstart one’s career as a freelance writer.",
        thumbnail: "/publications/democratizing-web-freelance-writing.jpg",
        fileUrl: "/publications/democratizing-web-freelance-writing.pdf"
    },
    {
        id: "ai-powered-speech-recognition-ell",
        title: "Effectiveness of AI-Powered Speech Recognition App in Enhancing Speaking Skills of Intermediate-Level ELLs in Mianwali",
        category: "Academic Journal",
        description: "A mixed-methods empirical study investigating the impact of automatic speech recognition (ASR) technology on the oral proficiency and speaking anxiety of intermediate-level English Language Learners (ELLs) in the Mianwali district.",
        externalUrl: "https://jalt.com.pk/index.php/jalt/article/view/2223"
    }
];
