import en from "@/lib/dictionaries/en.json";
import uk from "@/lib/dictionaries/uk.json";

export default async function About({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = locale === "uk" ? uk : en;

  return (
    <section>
      <h1>{t.about}</h1>
      <p>This is a mini-blog project built with Next.js App Router.</p>
    </section>
  );
}
