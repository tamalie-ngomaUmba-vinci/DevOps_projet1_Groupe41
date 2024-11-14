import { Main } from "../src/app.js";

const main = new Main();

describe("Berlin clock", () => {

    it("should light up yellow lamps every minute in the last line", function() {
        expect(main.lampSingleMinute(1)).toBe('Y');
        expect(main.lampSingleMinute(3)).toBe('YYY');
        expect(main.lampSingleMinute(5)).toBe('');
        expect(main.lampSingleMinute(17)).toBe('YY');
    });

    it("should turn on a red light every 3 lights, the others being yellow in the 5-minute block line", function(){
        expect(main.lampBlockFiveMinute(5)).toBe('Y');
        expect(main.lampBlockFiveMinute(10)).toBe('YY');
        expect(main.lampBlockFiveMinute(15)).toBe('YYR');
        expect(main.lampBlockFiveMinute(50)).toBe('YYRYYRYYRY');
    });
    
    it("should turn on the red lights every hour in the simple hour line", function(){
        expect(main.lampSingleHour(1)).toBe('R');
        expect(main.lampSingleHour(3)).toBe('RRR');
        expect(main.lampSingleHour(17)).toBe('RR');
    });

    it("should light red lamps every 5 hours in the first line", function(){
        expect(main.lampBlockFiveHour(5)).toBe('R');
        expect(main.lampBlockFiveHour(10)).toBe('RR');
        expect(main.lampBlockFiveHour(15)).toBe('RRR');
        expect(main.lampBlockFiveHour(20)).toBe('RRRR');
    })


});