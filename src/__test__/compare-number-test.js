/**
 * Created by Dale on 4/17/16.
 */
import CompareNumber from '../compareNumber';

describe('Class CompareNumber', () => {

    let compareNumber;

    beforeEach(function () {
        compareNumber = new CompareNumber();
    });

    describe('.compareNum: ', () => {

        it('1234 compare to 1234 should return 4A0B', () => {
            let result = compareNumber.compareNum('1234', '1234');
            expect(result).toEqual('4A0B');
        });

        it('1234 compare to 5678 should return 0A0B', () => {
            let result = compareNumber.compareNum('1234', '5678');
            expect(result).toEqual('0A0B');
        });

        it('1234 compare to 1256 should return 2A0B', () => {
            let result = compareNumber.compareNum('1234', '1256');
            expect(result).toEqual('2A0B');
        });

        it('1234 compare to 3456 should return 0A2B', () => {
            let result = compareNumber.compareNum('1234', '3456');
            expect(result).toEqual('0A2B');
        });

        it('1234 compare to 1356 should return 1A1B', () => {
            let result = compareNumber.compareNum('1234', '1356');
            expect(result).toEqual('1A1B');
        });
    });
});

