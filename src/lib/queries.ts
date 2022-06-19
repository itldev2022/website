export const PORT_INFO_CARGO_QUERY = `query PortCargo
  { allPortNonCoals 
    {
    id
    name
    totalLengthOfBerth
    totalShoreCranes
    maxDwt
    maxDraft
    congestionDay
    mainHandlingCargoes
    workingHours
    coordinate{
      latitude
      longitude
    }
  }
}`;

export const PORT_INFO_COAL_QUERY = `query PortCargo {
  allPortCoals{
    id
    name
    location
    coordinate{
      latitude
      longitude
    }
    climate
    loadingAt
    loadingBy
    flfFcList
    mainShippers
    estPortDa
    norTenderToCommenceLoading
  }
} 
`;
