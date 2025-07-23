"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const locale = pathname.split("/")[1];
  const otherLocale = locale === "en" ? "uk" : "en";

  const switchLocale = () => {
    const newPath = pathname.replace(`/${locale}`, `/${otherLocale}`);
    router.push(newPath);
  };

  return (
    <header>
      <nav>
        <Link href={`/${locale}`}>Home</Link> |{" "}
        <Link href={`/${locale}/about`}>About</Link> |{" "}
        <button onClick={switchLocale}>Switch to {otherLocale}</button>
      </nav>
    </header>
  );
}
