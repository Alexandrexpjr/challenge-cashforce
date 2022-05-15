import { IOrderWithData } from "../../interface/IOrder";

const modelMock: IOrderWithData[] = [{
  "id": 1,
  "orderNfId": "1605181324132",
  "orderNumber": "18153",
  "orderPath": "null",
  "orderFileName": "null",
  "orderOriginalName": "null",
  "emissionDate": "2020-10-30 14:00:00",
  "pdfFile": "null",
  "emitedTo": "22843980000127",
  "nNf": "18153",
  "CTE": "",
  "value": "198450",
  "createdAt": new Date("2020-10-30T20:54:18.000Z"),
  "updatedAt": new Date("2020-10-30T20:54:18.000Z"),
  "cnpjId": 1,
  "userId": 1,
  "buyerId": 1,
  "providerId": 1,
  "orderStatusBuyer": "0",
  "orderStatusProvider": "0",
  "deliveryReceipt": "null",
  "cargoPackingList": "null",
  "deliveryCtrc": "null",
  "cnpj": {
    "cnpj": "00000000000001"
  },
  "user": {
    "name": "ALLAN SOUZA"
  },
  "buyer": {
    "name": "SACADO 001"
  },
  "provider": {
    "name": "CEDENTE 002"
  }
}, {
  "id": 2,
  "orderNfId": "160518132413",
  "orderNumber": "18157",
  "orderPath": "null",
  "orderFileName": "null",
  "orderOriginalName": "null",
  "emissionDate": "2020-11-04 17:32:35",
  "pdfFile": "null",
  "emitedTo": "35705180000272",
  "nNf": "18157",
  "CTE": "",
  "value": "168850",
  "createdAt": new Date("2020-11-10T21:33:46.000Z"),
  "updatedAt": new Date("2020-11-10T21:33:46.000Z"),
  "cnpjId": 1,
  "userId": 1,
  "buyerId": 1,
  "providerId": 1,
  "orderStatusBuyer": "0",
  "orderStatusProvider": "0",
  "deliveryReceipt": "null",
  "cargoPackingList": "null",
  "deliveryCtrc": "null",
  "cnpj": {
    "cnpj": "00000000000001"
  },
  "user": {
    "name": "ALLAN SOUZA"
  },
  "buyer": {
    "name": "SACADO 001"
  },
  "provider": {
    "name": "CEDENTE 002"
  }
}, {
  "id": 3,
  "orderNfId": "1605181324130",
  "orderNumber": "18184",
  "orderPath": "null",
  "orderFileName": "null",
  "orderOriginalName": "null",
  "emissionDate": "2020-11-10 00:00:00",
  "pdfFile": "null",
  "emitedTo": "00418477002640",
  "nNf": "18184",
  "CTE": "",
  "value": "222795",
  "createdAt": new Date("2020-11-12T14:42:06.000Z"),
  "updatedAt": new Date("2020-11-18T15:22:14.000Z"),
  "cnpjId": 1,
  "userId": 1,
  "buyerId": 1,
  "providerId": 1,
  "orderStatusBuyer": "7",
  "orderStatusProvider": "3",
  "deliveryReceipt": "null",
  "cargoPackingList": "null",
  "deliveryCtrc": "null",
  "cnpj": {
    "cnpj": "00000000000001"
  },
  "user": {
    "name": "ALLAN SOUZA"
  },
  "buyer": {
    "name": "SACADO 001"
  },
  "provider": {
    "name": "CEDENTE 002"
  }
}];

export default modelMock;