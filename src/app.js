export class Main{

        lampSingleMinute(minute) {
            let lamp = minute % 5
            return 'Y'.repeat(lamp);
        }
        
        

}
