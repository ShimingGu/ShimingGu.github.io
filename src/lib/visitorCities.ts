interface Point {
  city: string;
  country: string;
  lat: number;
  lng: number;
  n: number;
}

const CITY_OF: Record<string, string> = {
  Futian: 'Shenzhen',
  Luohu: 'Shenzhen',
  Nanshan: 'Shenzhen',
  Jiangchuanlu: 'Shanghai',
  Zhangjiang: 'Shanghai',
  Xujiahui: 'Shanghai',
  Qinghuayuan: 'Beijing',
  Yanyuan: 'Beijing',
  Yangfangdian: 'Beijing',
  Jinrongjie: 'Beijing',
  Xichanganjie: 'Beijing',
  Aoyuncun: 'Beijing',
  Tianfu: 'Chengdu',
  Tianhe: 'Guangzhou',
};

export const displayCity = (p: Point) => CITY_OF[p.city] ?? p.city;

export function displayMarkers(points: Point[]) {
  const groups = new Map<string, { lat: number; lng: number; n: number }>();
  for (const p of points) {
    const k = `${p.country}|${displayCity(p)}`;
    const g = groups.get(k) ?? { lat: 0, lng: 0, n: 0 };
    g.lat += p.lat * p.n;
    g.lng += p.lng * p.n;
    g.n += p.n;
    groups.set(k, g);
  }
  return [...groups.values()].map((g) => ({ lat: g.lat / g.n, lng: g.lng / g.n, n: g.n }));
}