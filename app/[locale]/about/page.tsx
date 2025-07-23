import en from "@/lib/dictionaries/en.json";
import uk from "@/lib/dictionaries/uk.json";

interface Props {
  params: { locale: string };
}

export default function About({ params }: Props) {
  const t = params.locale === "uk" ? uk : en;

  return (
    <section>
      <h1>{t.about}</h1>
      <p>This is a mini-blog project built with Next.js App Router.</p>
    </section>
  );
}
