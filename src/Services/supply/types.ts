export enum SupplyPriority {
  UnderControl = 0,
  Remaining = 1,
  Needing = 10,
  Urgent = 100,
}

export interface ISupply {
  id: string;
  shelterId: string;
  supplyCategoryId: string;
  name: string;
  priority: SupplyPriority;
  createdAt: string;
  updatedAt?: string | null;
}