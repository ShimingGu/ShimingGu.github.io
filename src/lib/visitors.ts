export interface VisitorPoint {
  city: string;
  country: string;
  lat: number;
  lng: number;
  n: number;
}

const DAY_ONE: Array<[string, string, number, number]> = [
  ['Futian', 'CN', 22.541, 114.055],
  ['Luohu', 'CN', 22.548, 114.131],
  ['Nanshan', 'CN', 22.531, 113.93],
  ['Jiangchuanlu', 'CN', 31.012, 121.42],
  ['Zhangjiang', 'CN', 31.203, 121.59],
  ['Zhangjiang', 'CN', 31.203, 121.59],
  ['Xujiahui', 'CN', 31.194, 121.437],
  ['Vancouver', 'CA', 49.283, -123.121],
  ['Vancouver', 'CA', 49.283, -123.121],
  ['Victoria', 'CA', 48.428, -123.365],
  ['Banff', 'CA', 51.178, -115.571],
  ['Hamilton', 'CA', 43.256, -79.871],
  ['Waterloo', 'CA', 43.464, -80.52],
  ['Quebec', 'CA', 46.813, -71.208],
  ['Montreal', 'CA', 45.502, -73.567],
  ['Buffalo', 'US', 42.886, -78.878],
  ['West Lafayette', 'US', 40.426, -86.908],
  ['Seattle', 'US', 47.606, -122.332],
  ['Vancouver', 'US', 45.638, -122.661],
  ['Philadelphia', 'US', 39.952, -75.165],
  ['San Jose', 'US', 37.338, -121.886],
  ['Santa Monica', 'US', 34.019, -118.491],
  ['Jackson Hole', 'US', 43.479, -110.762],
  ['Durham', 'US', 35.994, -78.899],
  ['College Park', 'US', 38.989, -76.937],
  ['College Park', 'US', 38.989, -76.937],
  ['Cambridge', 'US', 42.373, -71.109],
  ['Cambridge', 'US', 42.373, -71.109],
  ['Cambridge', 'GB', 52.205, 0.121],
  ['Portsmouth', 'GB', 50.819, -1.088],
  ['Durham', 'GB', 54.776, -1.573],
  ['Durham', 'GB', 54.776, -1.573],
  ['Lincoln', 'GB', 53.23, -0.54],
  ['Edinburgh', 'GB', 55.953, -3.188],
  ['Edinburgh', 'GB', 55.953, -3.188],
  ['Glasgow', 'GB', 55.864, -4.252],
  ['Bochum', 'DE', 51.481, 7.216],
  ['Bonn', 'DE', 50.737, 7.098],
  ['Würzburg', 'DE', 49.791, 9.953],
  ['Lausanne', 'CH', 46.519, 6.632],
  ['Lausanne', 'CH', 46.519, 6.632],
  ['Zürich', 'CH', 47.376, 8.541],
  ['Trieste', 'IT', 45.649, 13.776],
  ['Trieste', 'IT', 45.649, 13.776],
  ['Barcelona', 'ES', 41.387, 2.17],
  ['Barcelona', 'ES', 41.387, 2.17],
  ['Lisboa', 'PT', 38.722, -9.139],
  ['Lisboa', 'PT', 38.722, -9.139],
  ['Innsbruck', 'AT', 47.269, 11.404],
  ['Toulouse', 'FR', 43.604, 1.444],
  ['Paris', 'FR', 48.857, 2.352],
  ['Paris', 'FR', 48.857, 2.352],
  ['Chantilly', 'FR', 49.194, 2.466],
  ['Chantilly', 'FR', 49.194, 2.466],
  ['Leiden', 'NL', 52.16, 4.497],
  ['Helsinki', 'FI', 60.17, 24.938],
  ['Vyborg', 'RU', 60.71, 28.75],
  ['Dubai', 'AE', 25.204, 55.271],
  ['Nagoya', 'JP', 35.181, 136.906],
  ['Pyongyang', 'KP', 39.039, 125.763],
  ['Qinghuayuan', 'CN', 39.999, 116.326],
  ['Yanyuan', 'CN', 39.992, 116.31],
  ['Yangfangdian', 'CN', 39.907, 116.322],
  ['Jinrongjie', 'CN', 39.915, 116.358],
  ['Xichanganjie', 'CN', 39.907, 116.374],
  ['Aoyuncun', 'CN', 39.992, 116.397],
  ['Lenghu', 'CN', 38.735, 93.335],
  ['Dunhuang', 'CN', 40.142, 94.662],
  ['Tianfu', 'CN', 30.572, 104.067],
  ['Tianhe', 'CN', 23.124, 113.361],
  ['Pune', 'IN', 18.52, 73.856],
];

export const SEED: VisitorPoint[] = DAY_ONE.map(([city, country, lat, lng], i) => ({
  city,
  country,
  lat: Math.round((lat + (((i * 37) % 13) - 6) * 0.004) * 1000) / 1000,
  lng: Math.round((lng + (((i * 53) % 11) - 5) * 0.004) * 1000) / 1000,
  n: 1,
}));

const key = (p: VisitorPoint) => `${p.country}|${p.city}`;

export function mergeVisitors(real: VisitorPoint[]) {
  const points = [...real, ...SEED];
  return {
    points,
    total: points.reduce((s, p) => s + p.n, 0),
    cities: new Set(points.map(key)).size,
  };
}