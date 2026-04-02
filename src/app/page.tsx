// HOME HIDDEN — redirects to directory until full site is ready to launch.
// To restore: delete this file and rename _content.tsx → page.tsx
import { redirect } from "next/navigation";
export default function HomePage() {
  redirect("/directory");
}
