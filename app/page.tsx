import Link from "next/link";
import { GetPartners } from "./queries/get-partners";
import client from "./services/apollo-client";
import { getFavicon } from "./services/favicon-API"
import styles from "./partners.module.css"

export const revalidate = 0;
client.refetchQueries

export default async function Partnersoverzicht() {

  const { data } = await client.query({
    query: GetPartners,
    fetchPolicy: "no-cache",
  });
  const partners = data.Partners.items;
  console.log(partners)

  return (
    <section className={styles.partners}>
      <h1>Partnersoverzicht</h1>

      <ul>
        {partners.map((partner: any) => (
          <PartnerCard key={partner._slug} partner={partner} />
        ))}
      </ul>
    </section>
  );
}

function PartnerCard({ partner }: any) {
  const { name, _slug, link, _changed_on } = partner;

  const dateObj = new Date(_changed_on);

  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();

  function getDutchMonthName(month: any) {
    const dutchMonthNames = [
      "januari",
      "februari",
      "maart",
      "april",
      "mei",
      "juni",
      "juli",
      "augustus",
      "september",
      "oktober",
      "november",
      "december"
    ];

    return dutchMonthNames[month - 1];
  }

  return (
    <li className={styles.website}>
      <Link href={_slug}>
        <section className={styles.logo_partner_section}>
          <div>
            <img
              height="60"
              src={getFavicon(link)}
              alt=""
            />
            <h2 className={styles.name}>{name}</h2>
          </div>
          <img src="../arrow_right.svg" alt="arrow right" />
        </section>

        <section className={styles.more_info_section}>
          <span>Laatst bewerkt: {day} {getDutchMonthName(month)}, {year}</span>

          <div className={styles.progress_container}>
            <progress className={styles.progress_partner} max="100" value="25" />
            <label className={styles.progress_percentage}>25%</label>
          </div>
        </section>
      </Link>
    </li>
  );
}
