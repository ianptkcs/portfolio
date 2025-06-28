import { Option } from "~/interfaces/option";
import { Icon } from "./icons";

export enum Tab {
  home = "",
  programming = "programming",
  tutoring = "tutoring",
  education = "education",
  projects = "projects",
  about = "about",
};

export const kTabIcon: Record<Tab, Icon> = {
  [Tab.home]: Icon.home,
  [Tab.programming]: Icon.code,
  [Tab.tutoring]: Icon.chalkboard,
  [Tab.education]: Icon.gradCap,
  [Tab.projects]: Icon.folder,
  [Tab.about]: Icon.info,
};

export const kTabLabel: Record<Tab, string> = Object.entries(Tab).reduce(
  (acc, [key, value]) => {
    acc[value as Tab] = key;
    return acc;
  },
  {} as Record<Tab, string>,
);

export const tabOptions: Option<Tab>[] = Object.values(Tab).map((t) => ({
  value: t as Tab,
  label: kTabLabel[t as Tab],
}));
