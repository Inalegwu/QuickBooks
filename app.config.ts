import type { ConfigContext, ExpoConfig } from "@expo/config";
import { ClientEnv } from "./env";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "QuickBooks",
  slug: "QuickBooks",
  extra: {
    ...ClientEnv,
  },
  plugins: ["expo-font"],
});
