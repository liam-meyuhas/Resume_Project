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

import GeneralInformation from "../categories/generalInformation/GeneralInformation";
import Award from "../categories/Award/Award";
import Certificate from "../categories/Certificate/Certificate";
import Experience from "../categories/Experience/Experience";
import Education from "../categories/Education/Education";
import Volunteer from "../categories/Volunteer/Volunteer";
import Hobbies from "../categories/Hobbies/Hobbies";
import Publication from "../categories/Publication/Publication";
import Language from "../categories/Language/Language";
import MilitaryService from "../categories/MilitaryService/MilitaryService";
import Projects from "../categories/Projects/Projects";
import Skills from "../categories/Skills/Skills";
import PersonalInformation from "../categories/personalInformation/PersonalInformation";

export const FORMSFIELDS = [
  {
    form: GeneralInformation,
    setting: {
      icon: <SettingsIcon />,
      title: "מידע כללי",
      id: "generalInformation",
      text: "הוסף מידע כללי",
    },
  },
  {
    form: PersonalInformation,
    setting: {
      icon: <PersonIcon />,
      title: "פרטים אישיים",
      id: "personalInformation",
      text: "הוסף פרטים אישיים",
    },
  },
  {
    form: Experience,
    setting: {
      icon: <BusinessCenterIcon />,
      title: "נסיון תעסוקתי",
      id: "experience",
      text: "הוסף את הרקע התעסוקתי שלך",
    },
  },
  {
    form: Education,
    setting: {
      icon: <SchoolIcon />,
      title: "השכלה",
      id: "education",
      text: "הוסף השכלה",
    },
  },
  {
    form: Volunteer,
    setting: {
      icon: <VolunteerActivismIcon />,
      title: "התנדבות",
      id: "volunteer",
      text: "הוסף התנדבות",
    },
  },
  {
    form: MilitaryService,
    setting: {
      icon: <MilitaryTechIcon />,
      title: "שירות צבאי",
      id: "militaryService",
      text: "הוסף שירות צבאי",
    },
  },
  {
    form: Certificate,
    setting: {
      icon: <MarkEmailReadIcon />,
      title: "הסמכות",
      id: "certificate",
      text: "הוסף הסמכות",
    },
  },
  {
    form: Award,
    setting: {
      icon: <WorkspacePremiumIcon />,
      title: "פרסים",
      id: "award",
      text: "הוסף פרסים",
    },
  },
  {
    form: Projects,
    setting: {
      icon: <ArticleIcon />,
      title: "פרויקטים",
      id: "projects",
      text: "הוסף פרויקט",
    },
  },
  {
    form: Publication,
    setting: {
      icon: <ArticleIcon />,
      title: "פרסומים",
      id: "publication",
      text: "הוסף פרסומים",
    },
  },
  {
    form: Language,
    setting: {
      icon: <TranslateIcon />,
      title: "שפות",
      id: "language",
      text: "הוסף שפות",
    },
  },
  {
    form: Skills,
    setting: {
      icon: <FormatListNumberedIcon />,
      title: "כישורים",
      id: "skills",
      text: "הוסף כישורים",
    },
  },
  {
    form: Hobbies,
    setting: {
      icon: <SportsEsportsIcon />,
      title: "תחביבים",
      id: "hobbies",
      text: "הוסף תחביבים",
    },
  },
];
