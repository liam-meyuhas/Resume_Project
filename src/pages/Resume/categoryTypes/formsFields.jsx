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
    fields: [
      { name: "שם", type: "text", label: "Name" },
      { name: "תפקיד", type: "text", label: "Job" },
    ],
    setting: {
      icon: <SettingsIcon />,
      title: "מידע כללי",
      id: "generalInformation",
      text: "הוסף מידע כללי",
    },
  },
  {
    form: PersonalInformation,
    fields: [
      { name: "מייל", type: "text", label: "mail" },
      { name: "כתובת", type: "text", label: "Address" },
      { name: "טלפון", type: "text", label: "PhoneNumber" },
      { name: "לינקדין", type: "text", label: "Linkdin" },
    ],
    setting: {
      icon: <PersonIcon />,
      title: "פרטים אישיים",
      id: "personalInformation",
      text: "הוסף פרטים אישיים",
    },
  },
  {
    form: Experience,
    fields: [
      { name: "תאריך התחלה", type: "date", label: "StartDate" },
      { name: "תאריך סיום", type: "date", label: "EndDate" },
      { name: "עובד כאן", type: "checkbox", label: "IsWorkHere" },
      { name: "תפקיד", type: "text", label: "Job" },
      { name: "שם חברה", type: "text", label: "CompanyName" },
      { name: "מיקום חברה", type: "text", label: "CompanyLocation" },
    ],
    setting: {
      icon: <BusinessCenterIcon />,
      title: "נסיון תעסוקתי",
      id: "experience",
      text: "הוסף את הרקע התעסוקתי שלך",
    },
  },
  {
    form: Education,
    fields: [
      { name: "תאריך התחלה", type: "date", label: "StartDate" },
      { name: "תאריך סיום", type: "date", label: "EndDate" },
      { name: "עובד כאן", type: "checkbox", label: "IsWorkHere" },
      { name: "תואר", type: "text", label: "Degree" },
      { name: "מוסד לימודים", type: "text", label: "EducationalInstitution" },
      {
        name: "תחום לימוד(אופציונאלי)",
        type: "text",
        label: "FieldStudy",
      },
    ],
    setting: {
      icon: <SchoolIcon />,
      title: "השכלה",
      id: "education",
      text: "הוסף השכלה",
    },
  },
  {
    form: Volunteer,
    fields: [
      { name: "תאריך התחלה", type: "date", label: "StartDate" },
      { name: "תאריך סיום", type: "date", label: "EndDate" },
      { name: "עובד כאן", type: "checkbox", label: "IsWorkHere" },
      { name: "תפקיד", type: "text", label: "Job" },
      { name: "שם פרויקט", type: "text", label: "ProjectName" },
    ],
    setting: {
      icon: <VolunteerActivismIcon />,
      title: "התנדבות",
      id: "volunteer",
      text: "הוסף התנדבות",
    },
  },
  {
    form: MilitaryService,
    fields: [
      { name: "תאריך התחלה", type: "date", label: "StartDate" },
      { name: "תאריך סיום", type: "date", label: "EndDate" },
      { name: "עובד כאן", type: "checkbox", label: "IsWorkHere" },
      { name: "תפקיד", type: "text", label: "Job" },
      { name: "סיווג בטחוני", type: "text", label: "SecurityClearance" },
    ],
    setting: {
      icon: <MilitaryTechIcon />,
      title: "שירות צבאי",
      id: "militaryService",
      text: "הוסף שירות צבאי",
    },
  },
  {
    form: Certificate,
    fields: [
      { name: "תאריך קבלה", type: "date", label: "StartDate" },
      { name: "שם הסמכה", type: "text", label: "CertificationName" },
      { name: "מנפיק", type: "text", label: "Issuer" },
      { name: "קישור (אתר או הסמכה)", type: "text", label: "Link" },
    ],
    setting: {
      icon: <MarkEmailReadIcon />,
      title: "הסמכות",
      id: "certificate",
      text: "הוסף הסמכות",
    },
  },
  {
    form: Award,
    fields: [
      { title: "תאריך קבלה", type: "date", name: "startDate" },
      { title: "שם פרס", type: "text", name: "AwardName" },
      { title: "מנפיק", type: "text", name: "Issuer" },
      { title: "קישור (אתר או הסמכה)", type: "text", name: "Link" },
    ],
    setting: {
      icon: <WorkspacePremiumIcon />,
      title: "פרסים",
      id: "award",
      text: "הוסף פרסים",
    },
  },
  {
    form: Projects,
    fields: [
      { name: "תאריך התחלה", type: "date", label: "StartDate" },
      { name: "תאריך סיום", type: "date", label: "EndDate" },
      { name: "בתהליך", type: "checkbox", label: "IsWorkHere" },
      { name: "שם", type: "text", label: "Name" },
    ],
    setting: {
      icon: <ArticleIcon />,
      title: "פרויקטים",
      id: "projects",
      text: "הוסף פרויקט",
    },
  },
  {
    form: Publication,
    fields: [{ name: "פרסומים", type: "text", label: "Publication" }],
    setting: {
      icon: <ArticleIcon />,
      title: "פרסומים",
      id: "publication",
      text: "הוסף פרסומים",
    },
  },
  {
    form: Language,
    fields: [{ name: "שפות", type: "text", label: "Language" }],
    setting: {
      icon: <TranslateIcon />,
      title: "שפות",
      id: "language",
      text: "הוסף שפות",
    },
  },
  {
    form: Skills,
    fields: [{ name: "כישורים", type: "text", label: "Skills" }],
    setting: {
      icon: <FormatListNumberedIcon />,
      title: "כישורים",
      id: "skills",
      text: "הוסף כישורים",
    },
  },
  {
    form: Hobbies,
    fields: [{ name: "תחביבים", type: "text", label: "Hobby" }],
    setting: {
      icon: <SportsEsportsIcon />,
      title: "תחביבים",
      id: "hobbies",
      text: "הוסף תחביבים",
    },
  },
];
