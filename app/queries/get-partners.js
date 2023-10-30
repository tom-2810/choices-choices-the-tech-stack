// ./queries/get-articles.js

import { gql } from "@apollo/client";

export const GetPartners = gql`
query {
  Partners {
  items {
    name
    link
    _slug
  }
}
}
`