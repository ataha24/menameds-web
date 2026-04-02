// PAGE HIDDEN — redirects to home until Discovery Days is ready to launch.
// To restore: delete this file and rename _content.tsx → page.tsx
import { redirect } from "next/navigation";
export default function DiscoveryDaysPage() {
  redirect("/");
}
