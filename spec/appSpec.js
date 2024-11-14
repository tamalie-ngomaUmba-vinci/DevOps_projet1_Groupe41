import { Main } from "../src/app.js";

const main = new Main();

describe("Berlin clock", () => {

    it("should light up yellow lamps every single minute", function() {
        expect('oo').toBe('O');
        expect(main.lampSingleMinute(3)).toBe('OOO');
        expect(main.lampSingleMinute(17)).toBe('OO');
    });

    it("should turn on a red light every 3 lights and the others are yellow", function(){
        expect(main.lampBlockFiveMinute(5)).toBe('1Y');
        expect(main.lampBlockFiveMinute(10)).toBe('2Y');
        expect(main.lampBlockFiveMinute(15)).toBe('2YR');
        expect(main.lampBlockFiveMinute(50)).toBe('YYRYYRYYRY');
    });
    
    it("should turn on red lights every single hour", function(){
        expect(main.lampSingleHour(1)).toBe('1R');
        expect(main.lampSingleHour(3)).toBe('1R');
        expect(main.lampSingleHour(17)).toBe('3RRR');
    });

});