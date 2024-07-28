import { Content } from "../components/Accordion";

export enum Stylings {
  TextWidth = "xxs:text-md xs:text-md med:text-xl sm:text-xl md:text-2xl lg:text-3xl",
  StyleInputBox = "xxs:h-6 xs:h-6 sm:h-8 med:h-8 md:h-10 lg:h-12",
  AnimeCardWidth = "xxxs:w-[200px] xxs:w-[220px] xs:w-[220px] sm:w-[220px] med:w-[250px] md:w-[220px] lg:w-[250px]",
  AnimeCardHeight = "xxxs:h-[290px] xxs:h-[310px] xs:h-[310px] sm:h-[310px] med:h-[340px] md:h-[370px] lg:h-[400px]",
  AccordionHeight = "xxxs:h-[50px] xxs:h-[60px] xs:h-[70px] sm:h-[80px] med:h-[90px] md:h-[90px] lg:h-[100px]",
  ImageHeight = "xxxs:h-[50px] xxs:h-[60px] xs:h-[70px] sm:h-[80px] med:h-[90px] md:h-[90px] lg:h-[100px]",
  ImageWidth = "xxxs:w-[50px] xxs:w-[60px] xs:w-[70px] sm:w-[80px] med:w-[90px] md:w-[90px] lg:w-[100px]",
  ModalHeight = "xxxs:h-[100px] xxs:h-[120px] xs:h-[140px] sm:h-[150px] med:h-[180px] md:h-[200px] lg:h-[250px]",
}

export interface InputBoxInterface {
  state?: any;
  passingText?: string;
  placeHolder?: string;
  DisplayValue?: string;
  isLogin?: boolean;
}
export interface SurveyContent {
  question: string;
  answer: string[];
  type: string;
  id: number;
}
export enum ImageUrl {
  BgImage = `https://img.freepik.com/free-photo/japan-background-digital-art_23-2151546123.jpg?t=st=1721896548~exp=1721900148~hmac=06b63e64005c0e87552a42a874401debcad1ea3e2c0c0afc1535c55594e76a69&w=4000`,
  Logo = `https://toppng.com/uploads/preview/cool-anime-logo-designs-cool-anime-logos-11569048807nxxriulgp2.png`,
  LoginImage = "https://japantour.xyz/wp-content/uploads/2019/11/15s-1140x641.png",
  BgImageLogin = "https://c4.wallpaperflare.com/wallpaper/469/818/500/kimi-no-na-wa-your-name-wallpaper-preview.jpg",
  DefaultPlaceholderImage = "https://img.freepik.com/premium-photo/image-file-icon-3d-render-illustration_567294-3412.jpg?w=996",
  SurveyWelcomeScreen = "https://c4.wallpaperflare.com/wallpaper/460/119/714/anime-attack-on-titan-armin-arlert-eren-yeager-wallpaper-preview.jpg",
  WatchListScreen = "https://w0.peakpx.com/wallpaper/1002/321/HD-wallpaper-awsomeness1-anime-best.jpg",
  SignUpScreen = "https://wallpapers-clan.com/wp-content/uploads/2024/04/zenitsu-tanjiro-nezuko-demon-slayer-desktop-wallpaper-preview.jpg",
}

export const mockData: Content[] = [
  {
    contentHeader: "Anime Series",
    id: "100",
    title: "Attack on Titan",
    rating: 4.8,
    count: " Season 4",
    description:
      "It is set in a world where humanity is forced to live in cities surrounded by three enormous walls that protect them from gigantic man-eating humanoids referred to as Titans; the story follows Eren Yeager, who vows to exterminate the Titans after they bring about the destruction of his hometown and the death of his mother.",
  },
  {
    contentHeader: "Anime Big Series",
    id: "200",
    title: "Naruto",
    rating: 4.7,
    count: " Season 21",
  },
  {
    contentHeader: "Anime Big Series",
    id: "300",
    title: "One Piece",
    rating: 4.9,
    count: " Season 20",
  },
];

export const mockQuestions: SurveyContent[] = [
  {
    question: "What is your age?",
    answer: ["<18", "18-30", "30-50", ">50"],
    type: "single",
    id: 0,
  },
  {
    question: "At what age you started watching anime?",
    answer: ["School", "College", "Office", "Not Interested in Anime"],
    type: "single",
    id: 1,
  },
  {
    question: "Which genre of anime do you prefer?",
    answer: [
      "Horror",
      "Romance",
      "Love",
      "Sci-Fi",
      "Adventure",
      "None of the above",
    ],
    type: "multi",
    id: 2,
  },
];
