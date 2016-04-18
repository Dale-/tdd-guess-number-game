/**
 * Created by Dale on 4/17/16.
 */
import CompareNumber from '../compareNumber';

describe('Class CompareNumber', () => {

    describe('.compareNum: ', () => {

        it('1234 compare to 1234 should return 4A0B', () => {
            let result = CompareNumber.compareNum('1234', '1234');
            expect(result).toEqual('4A0B');
        });

        it('1234 compare to 5678 should return 0A0B', () => {
            let result = CompareNumber.compareNum('1234', '5678');
            expect(result).toEqual('0A0B');
        });
    });
});

