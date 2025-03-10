import SettingsIcon from "@mui/icons-material/Settings";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SchoolIcon from "@mui/icons-material/School";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import ArticleIcon from "@mui/icons-material/Article";
import TranslateIcon from "@mui/icons-material/Translate";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import PersonIcon from "@mui/icons-material/Person";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

export const RESUME = [
  {
    icon: <QuestionMarkIcon />,
    title: "הגדרות כלליות",
    id: "settings",
    text: "בחר צבע רקע",
  },
  {
    icon: <SettingsIcon />,
    title: "מידע כללי",
    id: "informattion",
    text: "פרט מידע כללי",
  },
  {
    icon: <PersonIcon />,
    title: "פרטים אישיים",
    id: "personal-details",
    text: "כתוב פרטים אישיים",
  },
  {
    icon: <BusinessCenterIcon />,
    title: "נסיון תעסוקתי",
    id: "work-experience",
    text: "כתוב את הרקע התעסוקתי שלך",
  },
  { icon: <SchoolIcon />, title: "השכלה", id: "education", text: "פרט השכלתך" },
  {
    icon: <VolunteerActivismIcon />,
    title: "התנדבות",
    id: "volunteering",
    text: "פרט התנדבותך",
  },
  {
    icon: <MilitaryTechIcon />,
    title: "שירות צבאי",
    id: "military-service",
    text: "פרט שירות צבאי",
  },
  {
    icon: <MarkEmailReadIcon />,
    title: "הסמכות",
    id: "authority",
    text: "פרט הסמגות",
  },
  {
    icon: <WorkspacePremiumIcon />,
    title: "פרסים",
    id: "awards",
    text: "פרט פרסים",
  },
  {
    icon: <ArticleIcon />,
    title: "פרסומים",
    id: "publications",
    text: "פרט פרסומים",
  },
  { icon: <TranslateIcon />, title: "שפות", id: "languages", text: "פרט שפות" },
  {
    icon: <FormatListNumberedIcon />,
    title: "כישורים",
    id: "skills",
    text: "פרט כישורים",
  },
  {
    icon: <SportsEsportsIcon />,
    title: "תחביבים",
    id: "hobbies",
    text: "פרט תחביבים",
  },
];
