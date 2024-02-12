import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import DataSaverOffOutlinedIcon from "@mui/icons-material/DataSaverOffOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import RequestQuoteOutlinedIcon from "@mui/icons-material/RequestQuoteOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";

export const navlist = [
  {
    name: "section1",
    childs: [
      {
        name: "Dashboard",
        icon: SpaceDashboardOutlinedIcon,
      },
    ],
  },
  {
    name: "section2",
    childs: [
      {
        name: "Employees",
        icon: PeopleAltOutlinedIcon,
      },
      {
        name: "Placements",
        icon: PermContactCalendarOutlinedIcon,
      },
      {
        name: "TimeSheets",
        icon: PendingActionsOutlinedIcon,
      },
    ],
  },
  {
    name: "section3",
    childs: [
      {
        name: "Sales",
        icon: TrendingUpOutlinedIcon,
      },
      {
        name: "Ledger",
        icon: LocalAtmOutlinedIcon,
      },
      {
        name: "Balancesheet",
        icon: DataSaverOffOutlinedIcon,
      },
      {
        name: "Expense Management",
        icon: MonetizationOnOutlinedIcon,
      },
      {
        name: "Payroll",
        icon: RequestQuoteOutlinedIcon,
      },
    ],
  },
  {
    name: "section4",
    childs: [
      {
        name: "Clients",
        icon: GroupsOutlinedIcon,
      },
      {
        name: "Immigration",
        icon: LanguageOutlinedIcon,
      },
      {
        name: "Employee Self Service",
        icon: HeadphonesOutlinedIcon,
      },
    ],
  },
];
