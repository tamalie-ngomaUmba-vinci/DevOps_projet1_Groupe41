export class Main{

        lampSingleMinute(minute) {
            return minute < 60 && minute >= 0  ? 'Y'.repeat(minute % 5) : '';
        }  
        
        lampBlockFiveMinute(minute){
            let result = '';
            for(let i = 5; i <= minute; i+=5){
                if(i % 15 == 0)
                    result += 'R';
                else result += 'Y';
            }
            return minute < 60 && minute >= 0  ? result : '';
        }

        lampSingleHour(hour){
            return hour < 25 && hour >= 0  ? 'R'.repeat(hour % 5) : '';
        }

        lampBlockFiveHour(hour){
            return hour < 25 && hour >= 0 ? 'R'.repeat(Math.floor(hour/5)) : '';
        }

        lampSecond(second){
            return (second % 2 == 0) && (second < 60 && second >= 0) ? 'R' : '';  
        }

        lampFullTime(hour, minute, second) {

            //  0: lampSecond            
            //  1:lampBlockFiveHour    
            //  2:lampSingleHour
            //  3:lampBlockFiveMinute    
            //  4:lampSingleMinute

            let berlinHourValues = [this.lampSecond(second), 
                                    this.lampBlockFiveHour(hour), 
                                    this.lampSingleHour(hour), 
                                    this.lampBlockFiveMinute(minute), 
                                    this.lampSingleMinute(minute)   ];               
            
            return berlinHourValues;               

        }
}
