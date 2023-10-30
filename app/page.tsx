import Link from "next/link";
import { GetPartners } from "./queries/get-partners";
import client from "./services/apollo-client";

export default async function Partnersoverzicht() {
  const { data } = await client.query({
    query: GetPartners,
  });
  const partners = data.Partners.items;

  console.log(partners)

  return (
    <>
      <h1>Partnersoverzicht</h1>

      <ul>
        {partners.map((partner: any) => (
          <PartnerCard key={partner._slug} partner={partner} />
        ))}
      </ul>
    </>
  );
}

function PartnerCard({ partner }: any) {
  const { name, _slug } = partner;
  return (
    <Link href={`/${_slug}`}>
      <h1>Partnernaam</h1>
      <p>{name}</p>
    </Link>
  );
}
