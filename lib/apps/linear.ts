import { findPattern } from "@/lib/findPattern";
import { FixedStatus, type AppMeta } from "../../types";

export const Linear: AppMeta = {
  icon: "https://cdn.brandfetch.io/iduDa181eM/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1723620974313",
  id: "linear-stable",
  friendlyName: "Linear",
  twitter: "linear",
  async checkIsFixed() {
    const url = "https://desktop.linear.app/mac/pkg/arm64";
    const pat = "_cornerMask";
    const result = await findPattern(url, pat);
    return result?.found ? FixedStatus.NOT_FIXED : FixedStatus.FIXED;
  },
};
