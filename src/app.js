export class Main{

        lampSingleMinute(minute) {
            return 'Y'.repeat(minute % 5);
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

        lampSingleHour(hour){
            return 'R'.repeat(hour % 5);
        }

        lampBlockFiveHour(hour){
            return hour % 5 === 0 ? 'R'.repeat(hour/5) : '';
        }
}
