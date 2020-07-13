function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const loos = [
  {
    id: "47890c842a829206837a5156",
    name: "St Andrews Car Park",
    babyChange: true,
    location: {
      lat: 52.63110613616507,
      lng: 1.2940317392349243,
    },
  },
  {
    id: "040992f25ba360e6967b463d",
    name: "Anglia Square Shopping Center",
    babyChange: true,
    location: {
      lat: 52.636445492596394,
      lng: 1.2957537174224854,
    },
  },
  {
    id: "3e40c528cc52a8c00c5a2f25",
    name: "Norwich Market",
    babyChange: true,
    location: {
      lat: 52.62814626000005,
      lng: 1.2925199200000013,
    },
  },
  {
    id: "c66d271eeeefbf200d53f788",
    name: "Castle Mall level 2",
    babyChange: true,
    location: {
      lat: 52.6274202,
      lng: 1.2957831,
    },
  },
  {
    id: "9c2d5057ae0fac23de755e44",
    name: "Forum toilets",
    babyChange: true,
    location: {
      lat: 52.62755054476629,
      lng: 1.2908962368965147,
    },
  },

  {
    id: "b9f21573ecb5c7c285ef0abe",
    name: "Jarrolds",
    babyChange: true,
    location: {
      lat: 52.6264278,
      lng: 1.2893231999999983,
    },
  },
  {
    id: "91cffb661b5587c8023391f3",
    name: "Bus Station",
    babyChange: true,
    location: {
      lat: 52.6244206,
      lng: 1.2929281,
    },
  },
  {
    id: "482ad6241909c20011011796",
    name: "Norwich Station",
    babyChange: true,
    location: {
      lat: 52.62689767813996,
      lng: 1.3071370124816895,
    },
  },
  {
    id: "fccce7e27ff11e3e5d2ca172",
    name: "Sainsbury's",
    babyChange: true,
    location: {
      lat: 52.62215311289547,
      lng: 1.2940692901611328,
    },
  },
  {
    id: "76ed0448aab45c7779f976f1",
    name: "Waterloo Park",
    babyChange: false,
    location: {
      lat: 52.64481948145492,
      lng: 1.2891045212745667,
    },
  },
];

export async function fetchLoos() {
  console.log('loo-api: fetching loos');
  await delay(500);
  return loos.map(({ id, name }) => ({
    id,
    name,
  }));
}

export async function fetchLoo(id) {
  console.log(`loo-api: fetching loo ${id}`);
  await delay(500);
  return {
    ...loos.find((l) => (l.id === id))
  };
}

export async function addLoo(details) {
  console.log('loo-api: adding loo', details);
  await delay(500);
  const loo = {
    ...details,
    id: details.name + new Date().toString(),
  };
  loos.push(loo);
  return loo;
}

export const fixtures = loos;
