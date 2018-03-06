export interface IFactory {
  _id: string;
  name: string;
  lower: number;
  upper: number;
  childCount: number;
  children: number[];
}

export class Factory implements IFactory {
  _id: string;
  name: string;
  lower: number;
  upper: number;
  childCount: number;
  children: number[];
}
