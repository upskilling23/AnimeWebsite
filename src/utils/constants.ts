import { Content } from "../components/Accordion";

export interface SurveyContent {
  question: string;
  answer: string[];
  type: string;
  id: number;
}
export enum ImageUrl {
  BgImage = `https://web-assets.limewire.media/u/606500fa-1e35-47ed-b607-d4a060d022c0/4c563e1d-5162-41fa-a72c-bcd29f3a24c6.d/post_image_medium.jpeg`,
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
    id: "100",
    title: "Attack on Titan",
    rating: 4.8,
    count: " Season 4",
    description:
      "It is set in a world where humanity is forced to live in cities surrounded by three enormous walls that protect them from gigantic man-eating humanoids referred to as Titans; the story follows Eren Yeager, who vows to exterminate the Titans after they bring about the destruction of his hometown and the death of his mother.",
  },
  { id: "200", title: "Naruto", rating: 4.7, count: " Season 21" },
  { id: "300", title: "One Piece", rating: 4.9, count: " Season 20" },
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
