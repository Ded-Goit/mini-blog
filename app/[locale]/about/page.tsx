import en from "@/lib/dictionaries/en.json";
import uk from "@/lib/dictionaries/uk.json";
import styles from "./about.module.css";

export default async function About({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = locale === "uk" ? uk : en;

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>{t.about.title}</h1>
        <p className={styles.text}>{t.about.description}</p>
      </div>
    </>
  );
}
