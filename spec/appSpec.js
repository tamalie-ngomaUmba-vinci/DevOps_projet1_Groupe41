import { Main } from "../src/app.js";

const main = new Main();

describe("Berlin clock", () => {

    it("should light up yellow lamps every minute", function() {
        expect(main.lampSingleMinute(1)).toBe('Y');
        expect(main.lampSingleMinute(3)).toBe('YYY');
        expect(main.lampSingleMinute(17)).toBe('YY');
    });

    it("should turn on a red light every 3 lights and the others are yellow", function(){
        expect(main.lampBlockFiveMinute(5)).toBe('J');
        expect(main.lampBlockFiveMinute(10)).toBe('JJ');
        expect(main.lampBlockFiveMinute(15)).toBe('JJR');
        expect(main.lampBlockFiveMinute(50)).toBe('JJRJJRJJRJ');
    });
    

});