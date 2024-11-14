export class Main{

        lampSingleMinute(minute) {
            let lamp = minute % 5
            return 'Y'.repeat(lamp);
        }  
        
        lampBlockFiveMinute(minute){
            let result = '';

            for(let i = 5; i <= minute; i+=5){
                if(i % 15 == 0)
                    result += 'R';
                else result += 'Y';
            }

            return result;
        }
}
