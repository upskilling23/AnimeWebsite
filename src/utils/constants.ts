export enum Stylings {
  TextWidth = "xxs:text-md xs:text-md med:text-xl sm:text-xl md:text-xl lg:text-xl",
  StyleInputBox = "xxs:h-6 xs:h-6 sm:h-8 med:h-8 md:h-10 lg:h-12",
  AnimeCardWidth = "xxxs:w-[200px] xxs:w-[220px] xs:w-[220px] sm:w-[220px] med:w-[250px] md:w-[220px] lg:w-[250px]",
  AnimeCardHeight = "xxxs:h-[500px] xxs:h-[500px] xs:h-[500px] sm:h-[550px] med:h-[570px] md:h-[580px] lg:h-[600px]",
  AccordionHeight = "xxxs:h-[50px] xxs:h-[60px] xs:h-[70px] sm:h-[80px] med:h-[90px] md:h-[90px] lg:h-[100px]",
  ImageHeight = "xxxs:h-[50px] xxs:h-[60px] xs:h-[70px] sm:h-[80px] med:h-[90px] md:h-[90px] lg:h-[100px]",
  ImageWidth = "xxxs:w-[50px] xxs:w-[60px] xs:w-[70px] sm:w-[80px] med:w-[90px] md:w-[90px] lg:w-[100px]",
  ModalHeight = "xxxs:h-[100px] xxs:h-[120px] xs:h-[140px] sm:h-[150px] med:h-[180px] md:h-[200px] lg:h-[250px]",
}

export interface InputBoxInterface {
  state?: any;
  type?:string;
  isVisible?: boolean;
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
export interface AnimeApiResponse {
  movies: Movie[];
  tv: Movie[];
}

export interface Movie {
  image: string;
  title: string;
  link: string;
  meta: Meta;
  attr: Attr[];
  lang: Attr[];
  status: Attr[];
  genre: Attr[];
  latest_episode: TvLatestEpisode;
  tooltip: boolean;
  content: string;
  id: number;
}

export interface Attr {
  term_id: number;
  name: string;
  slug: string;
  term_group: number;
  term_taxonomy_id: number;
  taxonomy: Taxonomy;
  description: string;
  parent: number;
  count: number;
  filter: Filter;
}

export enum Filter {
  Raw = "raw",
}

export enum Taxonomy {
  AnimeAttribute = "anime_attribute",
  Genre = "genre",
  Licensor = "licensor",
  Producer = "producer",
  Status = "status",
  Studio = "studio",
  SupportedLanguage = "supported_language",
}

export interface Meta {
  spotlight: string;
  rate: Rate;
  native: string;
  synonyms: string;
  aired: string;
  premiered: Premiered;
  duration: string;
  episodes: string;
  score: string;
  background: string;
  featured: string;
  updated: string;
  download: any[];
  supported_language: string;
  producer: Attr[];
  studio: Attr[];
  licensor: Attr[];
  genre: Attr[];
}

export enum Premiered {
  Empty = "",
  Summer2024 = "summer 2024",
}

export enum Rate {
  Empty = "",
  Tv14 = "TV-14",
  TvG = "TV-G",
  TvMa = "TV-MA",
  TvPG = "TV-PG",
  TvY7 = "TV-Y7",
}

export interface TvLatestEpisode {
  metadata: FluffyMetadata;
}

export interface FluffyMetadata {
  number: number;
}

export const AnimeAPI =
  "https://anime-world.in/wp-json/kiranime/v1/anime/homepage";

export enum ImageUrl {
  ImageConactUrl = "https://anime-world.in/",
  BgImage = `https://wallpapercave.com/wp/wp10122399.jpg`,
  Logo = `https://toppng.com/uploads/preview/cool-anime-logo-designs-cool-anime-logos-11569048807nxxriulgp2.png`,
  LoginImage = "https://japantour.xyz/wp-content/uploads/2019/11/15s-1140x641.png",
  BgImageLogin = "https://c4.wallpaperflare.com/wallpaper/469/818/500/kimi-no-na-wa-your-name-wallpaper-preview.jpg",
  DefaultPlaceholderImage = "https://img.freepik.com/premium-photo/image-file-icon-3d-render-illustration_567294-3412.jpg?w=996",
  SurveyWelcomeScreen = "https://c4.wallpaperflare.com/wallpaper/460/119/714/anime-attack-on-titan-armin-arlert-eren-yeager-wallpaper-preview.jpg",
  WatchListScreen = "https://w0.peakpx.com/wallpaper/1002/321/HD-wallpaper-awsomeness1-anime-best.jpg",
  SignUpScreen = "https://wallpapers-clan.com/wp-content/uploads/2024/04/zenitsu-tanjiro-nezuko-demon-slayer-desktop-wallpaper-preview.jpg",
}

export const mockQuestions: SurveyContent[] = [
  {
    question: "What is your age?",
    answer: ["<18", "18-30", "30-50", ">50"],
    type: "single",
    id: 0,
  },
  {
    question: "At what age you started watching movies or anime?",
    answer: ["School", "College", "Office", "Not Interested"],
    type: "single",
    id: 1,
  },
  {
    question: "Which genre do you prefer?",
    answer: [
      "Action",
      "Adventure",
      "Animation",
      "Family",
      "Fantasy",
      "Shounen",
      "Supernatural",
      "None of the above",
    ],
    type: "multi",
    id: 2,
  },
  {
    question: "What is your favorite content",
    answer: ["Movies", "Anime"],
    type: "single",
    id: 3,
  },
];
