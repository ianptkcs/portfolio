import { Icon } from "./icons";

export enum Social {
  github = "github",
  instagram = "instagram",
  linkedin = "linkedin",
  email = "email",
  phone = "phone",
}

export const kSocialIcon: Record<Social, Icon> = {
  [Social.email]: Icon.email,
  [Social.instagram]: Icon.instagram,
  [Social.linkedin]: Icon.linkedin,
  [Social.phone]: Icon.wpp,
  [Social.github]: Icon.github,
};

export const kSocialLabel: Record<Social, string> = {
  [Social.email]: "Email",
  [Social.instagram]: "Instagram",
  [Social.linkedin]: "LinkedIn",
  [Social.phone]: "WhatsApp",
  [Social.github]: "GitHub",
};
