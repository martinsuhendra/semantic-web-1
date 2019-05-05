const count = new Date("may 31, 2019 00:00:00").getTime()

const x = setInterval(()=> {
    const now = new Date().getTime();
    const d = count - now;

    const days = Math.floor(d/(1000*60*60*24));
    const hours = Math.floor((d%(1000*60*60*24))/(1000*60*60));
    const minutes = Math.floor((d%(1000*60*60))/(1000*60));
    const seconds = Math.floor((d%(1000*60))/1000);

    $('#days').html(days)
    $('#hours').html(hours)
    $('#minutes').html(minutes)
    $('#seconds').html(seconds)
},1000)

function splitScroll() {
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: '100%',
        triggerElement: '.threats-title',
        triggerHook : 0
    })
    .setPin('.threats-title')
    .addTo(controller);
}

splitScroll();
