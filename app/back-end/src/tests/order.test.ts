import chai from 'chai';
import chaiHttp from 'chai-http';
import * as sinon from 'sinon';
import { Response } from 'superagent';
import { app } from '../app';
import OrderModel from '../database/models/order';
import { IOrderWithData } from '../interface/IOrder';
import orderMock from './mock/order';

chai.use(chaiHttp);

const { expect } = chai;

describe('Order route', () => {
  let chaiHttpResponse: Response;

  describe('Método get - rota /order', () => {

    describe('Caso de sucesso', () => {
      before(async () => {
        return sinon
          .stub(OrderModel, "findAll")
          .resolves(
            orderMock as IOrderWithData[] | any
          );
      });
    
      after(()=>{
        (OrderModel.findAll as sinon.SinonStub).restore();
      });

      it('Matches retornados com sucesso', async () => {
        chaiHttpResponse = await chai
           .request(app).get('/order');
  
        expect(chaiHttpResponse).to.have.status(200);
      });
    });

    describe('Falha na conexão com o banco', () => {
      before(async () => {
        return sinon
          .stub(OrderModel, "findAll")
          .rejects();
      });
    
      after(()=>{
        (OrderModel.findAll as sinon.SinonStub).restore();
      });

      it('Mensagem de erro retornada', async () => {
        chaiHttpResponse = await chai
           .request(app).get('/order');
  
        expect(chaiHttpResponse).to.have.status(500);
        expect(chaiHttpResponse.body.message).to.be.equal("Algo deu errado!");
      });
    })
  })
});