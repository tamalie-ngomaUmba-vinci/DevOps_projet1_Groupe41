export class Main{

        lampeMinuteSimple(minute) {
            let lampe = minute % 5
            return 'J'.repeat(lampe);
        }


}
