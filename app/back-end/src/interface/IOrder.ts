export interface IOrder {
  id?: number,
  orderNfId?: string,
  orderNumber?: string,
  orderPath?: string,
  orderFileName?: string,
  orderOriginalName?: string,
  emissionDate?: string,
  pdfFile?: string,
  emitedTo?: string,
  nNf?: string,
  CTE?: string,
  value?: string,
  createdAt?: Date,
  updatedAt?: Date,
  cnpjId?: number,
  userId?: number,
  buyerId?: number,
  providerId?: number,
  orderStatusBuyer?: string,
  orderStatusProvider?: string,
  deliveryReceipt?: string,
  cargoPackingList?: string,
  deliveryCtrc?: string
}

export interface IOrderWithData extends IOrder {
  cnpj?: {
    cnpj: string,
  },
  user?: {
    name: string
  },
  buyer?: {
    name: string
  },
  provider?: {
    name: string
  },
}