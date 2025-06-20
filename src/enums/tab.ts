import { Option } from "~/interfaces/option";

export enum Tab {
  home = "",
  programming = "programming",
  tutoring = "tutoring",
  education = "education",
  projects = "projects",
};

export const kTabIcon: Record<Tab, string> = {
  [Tab.home]: "tabler:home",
  [Tab.programming]: "tabler:code",
  [Tab.tutoring]: "tabler:chalkboard",
  [Tab.education]: "tabler:school",
  [Tab.projects]: "tabler:folder",
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
