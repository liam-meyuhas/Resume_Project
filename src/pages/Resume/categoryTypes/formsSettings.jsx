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

export const FORMSSETTINGS = [
  {
    title: "General Information",
    fields: [
      { name: "שם", type: "text", label: "Name" },
      { name: "תפקיד", type: "text", label: "Job" },
    ],
    setting: {
      icon: <SettingsIcon />,
      title: "מידע כללי",
      id: "informattion",
      text: "פרט מידע כללי",
    },
  },
  {
    title: "Personal Information",
    fields: [
      { name: "מייל", type: "text", label: "mail" },
      { name: "כתובת", type: "text", label: "Address" },
      { name: "טלפון", type: "text", label: "PhoneNumber" },
      { name: "לינקדין", type: "text", label: "Linkdin" },
    ],
    setting: {
      icon: <PersonIcon />,
      title: "פרטים אישיים",
      id: "personal-details",
      text: "כתוב פרטים אישיים",
    },
  },
  {
    title: "Experience",
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
      id: "work-experience",
      text: "כתוב את הרקע התעסוקתי שלך",
    },
  },
  {
    title: "Education",
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
      text: "פרט השכלתך",
    },
  },
  {
    title: "Volunteer",
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
      id: "volunteering",
      text: "פרט התנדבותך",
    },
  },
  {
    title: "MilitaryService",
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
      id: "military-service",
      text: "פרט שירות צבאי",
    },
  },
  {
    title: "Certificate",
    fields: [
      { name: "תאריך קבלה", type: "date", label: "StartDate" },
      { name: "שם הסמכה", type: "text", label: "CertificationName" },
      { name: "מנפיק", type: "text", label: "Issuer" },
      { name: "קישור (אתר או הסמכה)", type: "text", label: "Link" },
    ],
    setting: {
      icon: <MarkEmailReadIcon />,
      title: "הסמכות",
      id: "authority",
      text: "פרט הסמגות",
    },
  },
  {
    title: "Award",
    fields: [
      { name: "תאריך קבלה", type: "date", label: "StartDate" },
      { name: "שם פרס", type: "text", label: "AwardName" },
      { name: "מנפיק", type: "text", label: "Issuer" },
      { name: "קישור (אתר או הסמכה)", type: "text", label: "Link" },
    ],
    setting: {
      icon: <WorkspacePremiumIcon />,
      title: "פרסים",
      id: "awards",
      text: "פרט פרסים",
    },
  },
  {
    title: "Project",
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
    title: "Publication",
    fields: [{ name: "פרסומים", type: "text", label: "Publication" }],
    setting: {
      icon: <ArticleIcon />,
      title: "פרסומים",
      id: "publications",
      text: "פרט פרסומים",
    },
  },
  {
    title: "Language",
    fields: [{ name: "שפות", type: "text", label: "Language" }],
    setting: {
      icon: <TranslateIcon />,
      title: "שפות",
      id: "languages",
      text: "פרט שפות",
    },
  },
  {
    title: "Skills",
    fields: [{ name: "כישורים", type: "text", label: "Skills" }],
    setting: {
      icon: <FormatListNumberedIcon />,
      title: "כישורים",
      id: "skills",
      text: "פרט כישורים",
    },
  },
  {
    title: "Hobby",
    fields: [{ name: "תחביבים", type: "text", label: "Hobby" }],
    setting: {
      icon: <SportsEsportsIcon />,
      title: "תחביבים",
      id: "hobbies",
      text: "פרט תחביבים",
    },
  },
];
