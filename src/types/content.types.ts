import { IconName } from "@/resources/icons";
import { zones } from "tzdata";

/**
 * IANA time zone string (e.g., 'Asia/Calcutta', 'Europe/Vienna').
 */
export type IANATimeZone = Extract<keyof typeof zones, string>;

/**
 * Represents the person featured in the portfolio.
 */
export type Person = {
  firstName: string;
  lastName: string;
  name: string;
  role: string;
  avatar: string;
  email: string;
  location: IANATimeZone;
  languages?: string[];
};

/**
 * Social link configuration.
 */
export type Social = Array<{
  name: string;
  icon: IconName;
  link: string;
  essential?: boolean;
}>;
