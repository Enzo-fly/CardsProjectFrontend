import { Operation } from './operation';

describe('Operation', () => {
  it('should create an instance of Operation', () => {
    expect(new Operation()).toBeTruthy();
  });

  it('should accept values of test Operation object', () => {
    let operation = new Operation();
    operation = {
        senderNumber: '111',
        senderDate: 222,
        senderCvc2: 333,
        id: 444,
        senderAmount: 555,
        receiverNumber: '666',
        receiverAmount: 777,
        senderFee: 888,
        receiverFee: 999,
        phone: 38067,
        receiverNotification: true,
        email: true,
    }
    expect(operation.senderNumber).toEqual('111');
    expect(operation.senderDate).toEqual(222);
    expect(operation.senderCvc2).toEqual(333);
    expect(operation.id).toEqual(444);
    expect(operation.senderAmount).toEqual(555);
    expect(operation.receiverNumber).toEqual('666');
    expect(operation.receiverAmount).toEqual(777);
    expect(operation.senderFee).toEqual(888);
    expect(operation.receiverFee).toEqual(999);
    expect(operation.phone).toEqual(38067);
    expect(operation.receiverNotification).toEqual(true);
    expect(operation.email).toEqual(true);
  });

});
