export interface Item {
  id: number;
  name: string;
}

// halmaz szerkezet, és a filternél a rövidzár kiértékelés felhasználásával történő megoldás
export const uniqueFilter = (array: Item[]): Item[] => {
  const uniqueIds: Set<number> = new Set<number>();
  return array.filter(item => !uniqueIds.has(item.id) && uniqueIds.add(item.id));
};