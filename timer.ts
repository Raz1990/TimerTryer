function main() {
    const timer = new Timer(1000);

    timer.tick(onTick1);
    timer.tick(onTick2);

    timer.start();

    function onTick1() {
        console.log("tick1");
    }

    let counter = 0;

    function onTick2() {
        console.log("tick2");

        if (++counter === 3){
            timer.stop();
            console.log('DONE! EXITING....');
        }
    }
}

class Timer {
    constructor(private time){}

    callbacks = [];
    h;

    tick(callback){
        this.callbacks.push(callback);
    }

    start() {
        const callBacksHub = ()=> {
            for (const callback of this.callbacks) {
                callback();
            }
        };

        this.h = setInterval(callBacksHub
            , this.time);
    }

    stop(){
        clearInterval(this.h);
    }
}

/*class Timer {
    constructor(private time){}

    ticks = [];

    tick(callback, selfTime){
        selfTime = selfTime || this.time;
        this.ticks.push(new Tick(callback,selfTime));
    }

    start() {
        for (let i = 0; i < this.ticks.length; i++) {
            let h = setInterval(this.ticks[i].getCallback(), this.ticks[i].getTime());
            this.ticks[i].setHandler(h);
        }
    }

    stop(){
        for (let i = 0; i < this.ticks.length; i++) {
            clearInterval(this.ticks[i].getHandler());
        }
    }
}

class Tick{
    constructor(private callback, private time){

    }

    handler;

    getCallback() {
        return this.callback;
    }

    getTime() {
        return this.time;
    }

    getHandler() {
        return this.handler;
    }

    setHandler(h) {
        this.handler = h;
    }
}*/

main();