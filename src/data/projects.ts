export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription?: string;
  tags: string[];
  link?: string | null;
  github?: string | null;
  images: string[];
  featured: boolean;
  date?: string;
}

export const projects: Project[] = [
  {
    id: "ghar-ghar",
    title: "Ghar Ghar",
    category: "AI Tools",
    description: "A multiplayer adaptation of the nostalgic dot-and-box paper game featuring real-time LAN/WAN gameplay, bot players, and PWA support.",
    fullDescription: `I Ported Ghar Ghar from Paper to Phones/PCs (with Multiplayer)

Who remembers creating a matrix of dots on paper and connecting these dots via lines to claim their so-called "ghar"? We can all agree that ghar ghar as a game sparks a nostalgia of our long-gone childhood. I've always dreamt of porting this era-defining game from paper to the devices that can run a browser for a very long time. I did not want to repeat the formula of passing the paper (and subsequently the device) among the participants, I wanted a true multiplayer experience that could be achieved via WAN (the internet) or LAN (the devices on your Wi-Fi network). 

I am not a programmer, but the advancements in LLMs and the projects I built with the help of turn-based LLMs and then agents gave me hope that, we, the people of literature and language, can also transform words into workable code. So, at first, I tried making gharghar via Gemini 3.1 Pro in Antivravity. The multiplayer functionality worked in the first try, but only for LAN, and it would disappear when I deployed it to Vercel, while the design left a lot to be desired. 

Fast forward to these days when Google released Gemini 3.8 Flash in Antigravity, it was already performing decent in my other projects, so I thiught, why not give ghar ghar a try again. So I dusted out the old prompt, tweaked a few things in it and let Antigravity do its thing and this is how this iteration of Ghar Ghar came into existence. I liked the UX and flow of this game, but the LAN and WAN multiplayer functionality was not working in the one-shot result, and there were a host of bugs, and I spent hours on Vibe debugging and making multiplayer work on the deployment over Cloudflare (with the help of GPT 5.6 Tera and Luna in Codex). So here it is, 2(Ghar), an algebraic notation that means Ghar Ghar. Here is how to play this game: 

1. You as a host create a room, it is joinable on both LAN and WAN. 
2. A room can host up uo 5 players, humans and bots. 
3. Your room is auto-discoverable on LAN (you will need to hit refresh). 
4. Copy the link to the room and share it with your friends over any IM of your choice. 
5. Once your participants join the room, hit "Start Game Now " and enjoy playing your childhood-defining game! 
6. You can even press K or the mic icon to converse in-game via push-to-talk (works only on LAN). 
7. You can customize the grid of dots and even save the game as a PWA! 

You can test this game here: https://playgharghar.pages.dev/
GitHub Repo: https://github.com/iasad12/GharGharOnline/

If you have any feature requests or want to provide feedback, please speak your heart out in comments.`,
    tags: ["Multiplayer", "Cloudflare Pages", "PWA", "Gemini 3.8 Flash", "Vibe Coding"],
    link: "https://playgharghar.pages.dev/",
    github: "https://github.com/iasad12/GharGharOnline/",
    images: [
      "/projects/ghar-ghar/multiplayer-showcase.png",
      "/projects/ghar-ghar/main-screen.jpg",
      "/projects/ghar-ghar/lobby-screen.jpg",
      "/projects/ghar-ghar/game-customization.jpg"
    ],
    featured: true,
  },
  {
    id: "ppsc-english-lecturership-portal",
    title: "PPSC English Lecturership Preparation Portal",
    category: "AI Tools",
    description: "A mock-test utility and prep portal for PPSC/FPSC English Lecturer aspirants featuring practice tests, score tracking, downloadable MCQ guides, and PWA support.",
    fullDescription: `Greetings, respected literary aspirants! Yesterday, I tried my luck in scrapping hundreds of Literature and Linguistics MCQs from Pak MCQs website. It was a successful mission. I made a bare bones mock-test utility but it only worked well on a computer and needed a huge (promoting) effort to get its design and UX adapted to mobile devices! 

So here it is, a fully functional PPSC/FPSC English Lecturer/Subject Specialist mock-test utility. 

But this isn't just for mock-tests, you can practice with a handful of questions, grab a complete PDF file/guide that contains all the MCQs alongside their answers and you can even track your performance throughout tests! All free and open source! 

Next, I'll try to make this website work completely offline once you have installed it as a PWA! 

Happy testing! 

Link: https://ppscenglec.vercel.app/

GitHub: https://github.com/iasad12/ppscenglec`,
    tags: ["Next.js", "PWA", "Mock Test", "Web Scraping", "Vibe Coding"],
    link: "https://ppscenglec.vercel.app/",
    github: "https://github.com/iasad12/ppscenglec",
    images: [
      "/projects/ppsc-english-portal/desktop-view.jpg",
      "/projects/ppsc-english-portal/homepage-mobile-view.jpg",
      "/projects/ppsc-english-portal/questions-view.jpg",
      "/projects/ppsc-english-portal/score-board.jpg",
      "/projects/ppsc-english-portal/historical-view.jfif"
    ],
    featured: true,
  },
  {
    id: "qisty",
    title: "Qisty - Installment Management for Small Businesses",
    category: "Mobile App",
    description: "A native-like Android app built with React Native and Expo for tracking installments offline.",
    fullDescription: `This is the First Android App I Built with the help of AI  
  
------------- FULL POST ---------------  
  
I've been using LLMs with agentic harnesses (such as Gemini CLI and Open Code) to develop web apps and websites such as tools for Yasir Stationers and Memorator, etc. But I was skeptical of the feasibility of these tools in the development of making Android apps. Sure, I could just wrap an already existing website in a WebView wrapper but I was trying to develop an app that could talk to the system directly and would natively interact with API exposed by Android itself. So when Misbah Kazim reached out to me to inquire whether it was possible for an Android app to be made to keep records of the installments, I had the same question, so I set out to test the limits of the harnesses I was already familiar with.  
  
So I first prompted the AI (Gemini 3.1 Pro) to develop this particular app in Kotlin but the UI was messed up and the functionality was also nowhere to be seen. Same was the case with Java. I was about to give up. I could have tried Claude within Antigravity but the absurd reduction in rate limits there could not let me move forward after the planning phase. AIs of today are really good at making projects in React and other notable JavaScript frameworks. I asked the AI whether it was possible to first create the working logic of the app in React and then port it over as an app? It suggested React Native. So I went with React Native and utilized the Expo framework for frontend and an SQLite database to keep the installment records of the customers since Misbah needed an app that he could use offline.  
  
After many (broken and frustrating) prompting sessions (due to heavy traffic in the Gemini CLI), Qisty emerged after 1 hour and 30 minutes of compilation. You can:  
  
1. Add customers from your phonebook.  
2. Add items with custom profit percentage. These items will be used to record installments and their subsequent collections.  
3. Send a receipt of the whole installments or just a specific collection to the customer.  
4. Send reminders for collection to the customers via WhatsApp or call them directly from the app.  
5. Backup and restore the data.  
6. See daily, weekly, monthly and yearly revenue and profits!  
  
The application is still in its early stages, and I have yet to add the basic features, such as sorting options for Items, Customers and Installments tabs and other quality of life improvments.  
  
You can view the project here on GitHub and you can grab the APK from the Releases section as well.`,
    tags: ["React Native", "Expo", "SQLite", "Android", "Vibe Coding"],
    github: "https://github.com/iasad12/qisty",
    images: [
      "/projects/qisty/home-screen.webp",
      "/projects/qisty/customers-tab.webp",
      "/projects/qisty/customer-details.webp",
      "/projects/qisty/items-tab.webp",
      "/projects/qisty/item-details.webp",
      "/projects/qisty/installments-tab.webp",
      "/projects/qisty/installment-details.webp",
      "/projects/qisty/installment-details-2.webp",
      "/projects/qisty/receipt.webp"
    ],
    featured: true,
  },
  {
    id: "memorator",
    title: "Memorator",
    category: "AI Tools",
    description: "A conversation aggregator built to consolidate chats from Messenger, WhatsApp, and SMS into printable ebooks.",
    fullDescription: `This is Memorator, yet another vibe coding project that was built to consolidate conversations of the same contacts across different platforms, with advanced filtering, a leaderboard, inclusion and exclusion options. You can batch import your archival data from FB Messenger (both Classic HTML and the E2EE backups). WhatsApp Chat Transcripts and SMS data (extracted from a FOSS app). The main feature of this website is that it lets you convert your chats into printable ebooks (in PDF files).  
  
------------- FULL POST ---------------  
  
I'm neither a programmer and nor I claim to have expertise in front-end and backend development. But I had a lot of ideas for certain tools. I lost Gul Faraz Khan almost 2 years ago, and his conversations were spread across Messenger, WhatsApp and SMS. I was able to grab the WhatsApp one, but consolidating it with the rest of the platforms was a difficult task. Seeing other YouTubers try making tools via AI, my first vibe coding project was just a simple WhatsApp transcript parser that would let me create a generic PDF file out of a single conversation. But it was limited by the meager coding competency of the AI models at that time. But I was hooked! I created many other tools for my academic and non-academic journey (even one for my blog), and being able to create what I would imagine was very exhilarating!  
  
Before Google released Antigravity, I was using Gemini CLI and extensions like Roo Code with Gemini API to get a feel for agentic coding. But the output of the models (Especially Gemini 2.5 Flash) was not there. But I was trying my luck with other models such as Kimi and GLM and they were pretty competent. So I tasked GLM to make a universal parser for both Messenger exports (both in HTML and the recent E2EE backups) and it worked for the batch uploads! But the project would fall apart as I would request the inclusion of other platforms, such as SMS and WhatsApp, as it was consolidated in just a single HTML script. So I turned to Antigravity and used Claude Opus 4.6 and Gemini 3.1 Pro to transform this HTML project into a Vite/React one, and I have spent countless hours refining and adding features. This is how Memorator was born.  
  
Memorator is a conversation aggregator that combines conversations from various platforms, such as Messenger, WhatsApp, and SMS, and even if contacts have different names across different platforms, you can merge them through the Configuration menu. You can upload the whole folder containing the html/json files (in case of FB Messenger), ZIP/TXT files for WhatsApp, and JSON/NDJSON files for SMS (I suggest using SMS Import and Export from F-Droid to create your SMS backup).  
  
Since my main objective was to preserve the conversations of our long-gone friends, I gave Claude and Gemini a rough idea of how I wanted the final ebook to look. I initially created a mock-up of sample pages in Microsoft Word and inserted the screenshot into the prompt. I was going with the style of plays with names of participants in bold, followed by the contents of the message, with the time and platform at the right side of each message. As for dates, I was inspired by the organization of plays in acts and scenes, and I replaced them with the actual dates, just to avoid cluttering the contents of the messages. Each conversation is given a title page of its own with interesting stats and other information. You can make an ebook for just one contact or for a multitude of contacts. The ebook is rendered in PDF, and if you have generated an ebook for a group, the names of the 15 participants will also be shown on the title page.  
  
The main problem that arises when dealing with a massive amount of data of conversations is multiple people bearing the same name. So I asked Gemini 3.1 Pro to implement a deletion and separation system for such chats in the "Manage Data" setting in a single chat view. Since we can have multiple names on different platforms, you can add all such names separated by commas under My Name. If your name contains a comma for some weird reason, you can enclose that particular name in inverted commas to avoid breaking the parser. Enough rambling, here is how you can use this tool.  
  
Prerequisites:  
1. Messenger data downloaded from Meta Accounts Center (It will be in HTML), and E2EE Messenger data (ZIP/JSON) from Facebook Desktop. Or use this link. [https://www.facebook.com/secure_storage/dyi](https://www.facebook.com/secure_storage/dyi)  
2. WhatsApp Chat Exports (organized in folder, either in the form of zip or txt files)  
3. SMS data grabbed from the SMS Import and Export (a FOSS app available on F Droid).  
  
Procedure:  
  
4. Use either the Vercel link or clone the repo, install the dependencies and run the dev server.  
5. Make sure you have organized all the chats neatly in their respective platform-wise folders. Upload them one after another.  
6. The conversations will start showing up in the sidebar. You can click "View Chat Directory" to see the imported chats and their stats, alongside their ranking on the big screen.  
7. If you have exported an updated chat record (Messeger/WhatsApp), it will only import the new messages and your old messages will stay intact. Please note that this does not work for SMS, and you will see duplicate entries if you already import an SMS data on top of an already existing SMS data.  
8. Sometimes, even singular chats may be incorrectly tagged as group chats; you will need to open these chats and see who the extra participants are (such as Word effects for Messenger and Meta AI for WhatsApp). You can add them in exclusion criteria separated by commas, and the conversation will be identified as a singular chat.  
9. If you have the same people using different names, such as Kamran Niazi on WhatsApp and Kamran Khan on Facebook, you can combine them by using this syntax in the "Merge Contacts/Aliases" field:  
Name 1 = Name 2, Name 3  
Example: Kamran Niazi = Kamran Khan  
Example: Zahid Shabir = Zahid Jazz, Zahid Khan (Combines all three into one)  
The name at the left side of the equal sign "=" will be used as the default display name in the website as well as in the ebook.  
10. Once you have imported all the data and are satisfied with the configuration, hit "Save State". It will save the whole session of your messages and their configurations in the local storage of your browser, which you can get back into by clicking "Load State".  
11. Now you can search through whole chats and create e-books of a single conversation or multiple conversations. The ebook generation happens inside your browser.  
Limitations:  
Due to the inherent limitation of the jsPDF dependency, it does not allow us to print emojis and the support of Urdu language is bandaged by converting/embedding images straight onto the resulting PDF file. And I have been using Facebook in Pirate language, the data I requested from Facebook was also in Pirate language, so there is a 50/50 chance this parser may work on your data, but you can always fork it and implement your own features.  
  
So this is the journey behind Memorator, a project I solely built for the preservation of memories of the loved ones who are no longer with us.`,
    tags: ["React", "Vite", "jsPDF", "Data Aggregation", "Vibe Coding"],
    link: "https://memorator.vercel.app/",
    github: "https://github.com/iasad12/Memorator",
    images: [
      "/projects/memorator/651050142_4343524475907985_832541808347835852_n.webp",
      "/projects/memorator/650759827_4343528392574260_8092746174614397113_n.webp",
      "/projects/memorator/649843012_4343529162574183_308332393638073998_n.webp",
      "/projects/memorator/649564649_4343528895907543_5461981113022422805_n.webp"
    ],
    featured: true,
  },
  {
    id: "the-assimilators-ai",
    title: "The Assimilators AI",
    category: "AI Tools",
    description: "Allows literary aspirants to generate long questions, MCQs and short questions. Supports localstorage API & PDF exports.",
    fullDescription: `Introducing The Assimilators AI! 

My clumsy writings cover only a handful of topics in English Literature that are insufficient for aspirants of BS English. Well, this is the age of AI, and you can get answers to any unanswered question with the help of AI and basically, you can make your own notes! This is why I have integrated AI straight into The Assimilators from where you will just type the name of the topic you want an essay for and the Gemini models will generate an essay based on your preferences. Just tap on the ⚙ icon to adjust your preferences accordingly. You are in control of whether you want to add instances from the text or meanings of difficult terms in Urdu (in the generated essay). 

You can even save the generated essays as a printable PDF file. 

I am currently using the free version of the Gemini API to integrate AI into this blog. If you run out of quota, just change the model from settings!`,
    tags: ["LocalStorage API", "PDF Export", "Prompt Engineering", "Gemini API"],
    link: "https://iasad12.blogspot.com/",
    images: [
      "/projects/the-assimilators-ai/513105375_4082136345380134_6722460816737264107_n.webp",
      "/projects/the-assimilators-ai/517843076_4097353477191754_918496359509989286_n.webp"
    ],
    featured: true,
  },
  {
    id: "seo-audit-tool",
    title: "SEO Audit Tool",
    category: "AI Tools",
    description: "Analyzes sitemaps/pages for Meta titles/descriptions. Detailed H1/H2/H3 structure view with link analysis and scan history.",
    fullDescription: `Building Simple, Site-wide SEO Audit Tool

Every SEO audit tool I have used just yearns for my virtual debit card to be attached to their site. So I thought, why not try building a simple SEO audit tool with agentic AI? And I am elated to announce that I, with the help of Gemini AI, have built a very simple SEO audit tool that can crawl through every page that your sitemap lists and then tells you what is missing and what is exceeding the limits (in terms of On-Page SEO), and with the handy dandy option to export a detailed PDF report of the audit of your site. This tool will also keep a history of your previous audits as well.

Here is what this tool will show you:
1. An overview of good, average and poor pages in terms of on-page SEO.
2. An overall score of your page(s).
3. Critique of meta title, description and h1. It will show a missing message if any one of them is, well, missing.
4. Structure from h1 to h3.
5. Internal and external links present on the pages crawled and audited.

To run this tool on your machine, first install Node.js. Then download this .zip file which contains all the required files to run this tool: https://drive.google.com/.../1q1HHwnQ0vpgNIdTxkDo.../view... and extract the folder "SEO Audit Tool" somewhere safe.
Now open Terminal/Command Prompt in this folder and run the following two commands one after another:
> npm install (this will install all the dependencies to run the tool)
> npm run dev (this command will run the tool)
The SEO Audit tool will now be running on http://localhost:5173/ (open this link in any browser of your choice). Use it however you like by inserting one or multiple URLs or sitemaps! Hit CTRL+C in the terminal window to turn off (the server for) this tool (Recommended).
PS: For sites built with WordPress, you may need to add post-sitemap.xml and page-sitemap.xml separately on each new line.`,
    tags: ["XML Parsing", "DOM Analysis", "History Persistence", "Node.js"],
    link: "https://simpleseoaudit.vercel.app/",
    images: [
      "/projects/seo-audit-tool/532879186_4131023517158083_548993896782169291_n.webp",
      "/projects/seo-audit-tool/532989064_4131025500491218_3953929346787474239_n.webp",
      "/projects/seo-audit-tool/533122225_4131022607158174_229379908857375974_n.webp",
      "/projects/seo-audit-tool/533671515_4131024253824676_3087511411149419974_n.webp",
      "/projects/seo-audit-tool/534525066_4131025823824519_4309451328000353837_n.webp"
    ],
    featured: true,
  },
  {
    id: "whatsapp-chat-exporter",
    title: "WhatsApp Chat Exporter",
    category: "AI Tools",
    description: "Converts .txt chat history to PDF. Visualizes stats like message count and longest streaks with charts.",
    fullDescription: `WhatsApp lets us export our conversations in .txt format but reading that .txt file becomes a real pain as the data is presented in somewhat structured form with no text wrapping. Sure, there are tools that work in browser or have system-level access to your device, just to process the chat transcripts, but the security of such programs raises a huge red flag as whether they are storing our data on their servers or not.

So I thought why not build a WhatsApp Chat transcript parser by myself that works within your web-browser?! I am no developer but I have basic knowledge about HTML and CSS. The quality of code produced by reasoning AI models such as o3 and DeepSeekR1 has really taken the world by surprise. So I set out to take help from these reasoning models to develop a parser by myself. So here it is, a browser-based WhatsApp Chat Transcript parser that leverages the Save as PDF option in your browser to transform those unreadable transcripts into printable pages! This tool will be very handy in case if you want to preserve the chat history of a person who is no longer within us or you intend to run a corpus or discourse analysis on a WhatsApp Chat.

I have also added some "interesting" insights and functionality such as the total number of messages, filtering of messages by the sender or by date, a bar graph representing the number of messages sent in a month, support for message rendering through Markdown syntax etc etc.

Documentation: https://github.com/iasad12/whatsapptranscripttopdf
This parser is made available as an Open Source project under Apache 2.0 license.`,
    tags: ["Data Visualization", "File Parsing", "PDF Generation", "Open Source"],
    link: "https://iasad12.github.io/whatsapptranscripttopdf/",
    images: [
      "/projects/whatsapp-chat-exporter/503786246_4061997767393992_5930814693672733552_n.webp",
      "/projects/whatsapp-chat-exporter/504155512_4061997994060636_1984968542934941573_n.webp"
    ],
    featured: true,
  },
  {
    id: "application-autofill-extension",
    title: "Application Autofill Extension",
    category: "AI Tools",
    description: "Chrome extension to log user details and categorize them for autofilling job and admission forms.",
    fullDescription: `2025 was a year in (SWE) AI that enabled us to turn our ideas into working code. I initially thought it would be difficult for models to make a Chrome extension for a niche use case for our shop but I was wrong. Claude Opus 4.5 delivered a completely working extension that would log the user details and categorize them into their respective fields to be used later.

Currently, this extension has two modes: The Collection Mode and the Insert Mode. In Collection Mode, the extension listens for the details to be collected as forms are being filled out on a website that requires a profile builder, such as when applying for jobs or sending admissions. You can also add the details of the applicant manually from the Options page. Their personal details, such as their first and last name mobile number, email address, their Date of Birth, temporary and permanent addresses, domicile information, alongside academic and professional information can be added manually or via importing a JSON or Excel file.

And then there is the Insert Mode. After you enable Autofill from the extension and pick the applicant, the extension neatly suggests the information based on what is being asked in that particular field. For example, if the form is asking about the father's name, the extension will intelligently populate the name of the father to be filled. You can press enter to accept its suggestion and arrow keys to see other suggestions. You can also search for an applicant's entry by searching through the appropriate keyword. For instance, searching "BS" will populate all the information regarding an applicant's BS degree, such as the name of the degree, the university the applicant was enrolled in, his CGPA, etc. The data of candidates can also be exported as an Excel and JSON file.

This extension will be very useful in saving time for the applicants who frequently apply for jobs and the shops that offer the services of applying for jobs, as their details will be readily available to be filled whenever they want and shopkeepers will be able to store multiple applicant profiles to be reused later for their reoccurant customers.`,
    tags: ["Chrome Extension", "Autofill", "Productivity", "Claude Opus 4.5"],
    link: null,
    images: [
      "/projects/application-autofill-extension/602417612_4264332100493890_1834313625384388305_n.webp",
      "/projects/application-autofill-extension/603064843_4264334280493672_5564394422523493562_n.webp",
      "/projects/application-autofill-extension/606063931_4264327520494348_520133287359207248_n.webp"
    ],
    featured: true,
  },
  {
    id: "shop-invoice-system",
    title: "Shop Invoice and Inventory System",
    category: "Full Stack",
    description: "Full-stack application for recording invoices, managing inventory, and customer records.",
    fullDescription: `Google's Antigravity IDE lets you build full-stack applications for your needs with Claude 4.5 Sonnet and Gemini 3.0 Pro. Here is the Invoice Recorder I built with React frontend and Node.js with Express as backend, with many crucial features, such as adding/editing inventory, adding customer records, fetching both when recording a sale, and adding agents with varying degrees of roles, etc etc.`,
    tags: ["React", "Node.js", "Express", "Inventory Management"],
    link: null,
    images: ["/projects/shop-invoice-system/1763923667741.jfif"],
    featured: true,
  },
    {
      id: "yasir-stationers-tools",
      title: "Tools for Yasir Stationers",
      category: "Web Tools",
      description: "A suite of free online tools including passport photo maker and PDF utilities (Merge, Split, Convert).",
      fullDescription: `A comprehensive suite of free online tools developed for Yasir Stationers to assist users with common document and image processing tasks.
  
  Key Tools:
  1. **Passport Photo Maker:** Automatically removes background from images and sets a specific color, creating croppable passport-size pictures using on-device computation (Vibe Coded).
  2. **PDF Tools:**
     - **Image to PDF:** Combine images into a PDF file with cropping, rotation and rearrangement support.
     - **PDF to Images:** Transform PDF files into individual images.
     - **Merge PDFs:** Combine multiple PDFs into a single file with page rearrangement.
     - **Extract Pages:** Extract specific pages from a PDF file.
  
  These tools are built to be fast, free, and unlimited, running client-side for privacy and speed.`,
      tags: ["Image Processing", "PDF Manipulation", "Vibe Coding", "Web Application"],
      link: "https://yasirstationersmwi.pages.dev/",
      images: [
        "/projects/yasir-stationers/Screenshot 2026-02-16 141015.webp",
        "/projects/yasir-stationers/619278415_4298134803780286_8997127671059136549_n.webp",
        "/projects/yasir-stationers/624243598_4304937153100051_6828512562303633427_n.webp",
        "/projects/yasir-stationers/624337206_4304936106433489_246967200780415141_n.webp",
        "/projects/yasir-stationers/626010453_4304936759766757_2232970410439205392_n.webp",
        "/projects/yasir-stationers/627687532_4304938133099953_8313061487960419407_n.webp"
      ],
      featured: true,
    },
    {
      id: "nicheaffect-content",
      title: "NicheAffect Content Portfolio",
      category: "Content",
      description: "Created high-impact content for niches including Fishing, Camping, Hunting, and Home Improvement. 300K+ words written.",
      fullDescription: "Created high-impact content for niches including Fishing, Camping, Hunting, and Home Improvement. 300K+ words written.",
      tags: ["SEO Writing", "Keyword Research", "Long-form Content"],
      link: "https://drive.google.com/drive/folders/1711ZE81HnaUFZVMnObQYKVtG1yznRsZd?usp=drive_link",
      images: ["/projects/niche-affect-writing-samples/Screenshot 2026-02-16 161120.webp"],
      featured: false,
    },  {
    id: "engitech-homepage-design",
    title: "Engitech Website Design",
    category: "Web Design",
    description: "Designed and did technical SEO of this site's pages via Elementor and Rank Math.",
    fullDescription: "Designed and did technical SEO of this site's pages via Elementor and Rank Math.",
    tags: ["Elementor", "Rank Math", "Technical SEO", "Web Design"],
    link: null,
    images: [
      "/projects/engitech-homepage-design/Screenshot 2026-02-16 134400.webp",
      "/projects/engitech-homepage-design/Screenshot 2026-02-16 134453.webp",
      "/projects/engitech-homepage-design/Screenshot 2026-02-16 134547.webp",
      "/projects/engitech-homepage-design/Screenshot 2026-02-16 134636.webp"
    ],
    featured: true,
  }
];
