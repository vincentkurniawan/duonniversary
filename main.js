(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "08/18/ 10:00",
        birthday = dayMonth + yyyy;
    //end

    const countDown = new Date(birthday).getTime(),
        x = setInterval(function () {

            const now = new Date().getTime(),
                distance = countDown - now;

            document.getElementById("days").innerText = Math.floor(distance / (day)),
                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

            //do something later when date is reached
            if (distance < 0) {
                document.getElementsByClassName("countdown")[0].style.display = "none";
                document.getElementsByClassName("anniv")[0].style.display = "flex";
                clearInterval(x);
            }
            //seconds
        }, 0)
}());

function enteringContent () {
    document.getElementsByClassName("anniv")[0].style.display = "none";
    document.getElementsByClassName("app")[0].style.display = "block";
}

let controller = new ScrollMagic.Controller();

let scene1 = new ScrollMagic.Scene({
    triggerElement: '.pop-1'
})
.setClassToggle('.pop-1', 'show')
.addTo(controller);

let scene1b = new ScrollMagic.Scene({
    triggerElement: '.pop-1'
})
.setClassToggle('.pop-0', 'hide')
.addTo(controller);

let scene2 = new ScrollMagic.Scene({
    triggerElement: '.pop-2'
})
.setClassToggle('.pop-2', 'show')
.addTo(controller);

let scene2b = new ScrollMagic.Scene({
    triggerElement: '.pop-2'
})
.setClassToggle('.pop-1', 'hide')
.addTo(controller);

let scene3 = new ScrollMagic.Scene({
    triggerElement: '.pop-3'
})
.setClassToggle('.pop-3', 'show')
.addTo(controller);

let scene3b = new ScrollMagic.Scene({
    triggerElement: '.pop-3'
})
.setClassToggle('.pop-2', 'hide')
.addTo(controller);

let scene4 = new ScrollMagic.Scene({
    triggerElement: '.pop-4'
})
.setClassToggle('.pop-4', 'show')
.addTo(controller);

let scene4b = new ScrollMagic.Scene({
    triggerElement: '.pop-4'
})
.setClassToggle('.pop-3', 'hide')
.addTo(controller);

let scene5 = new ScrollMagic.Scene({
    triggerElement: '.pop-5'
})
.setClassToggle('.pop-5', 'show')
.addTo(controller);

let scene5b = new ScrollMagic.Scene({
    triggerElement: '.pop-5'
})
.setClassToggle('.pop-4', 'hide')
.addTo(controller);

let scene6 = new ScrollMagic.Scene({
    triggerElement: '.pop-6'
})
.setClassToggle('.pop-6', 'show')
.addTo(controller);

let scene6b = new ScrollMagic.Scene({
    triggerElement: '.pop-6'
})
.setClassToggle('.pop-5', 'hide')
.addTo(controller);

let scene7 = new ScrollMagic.Scene({
    triggerElement: '.pop-7'
})
.setClassToggle('.pop-7', 'show')
.addTo(controller);

let scene7b = new ScrollMagic.Scene({
    triggerElement: '.pop-7'
})
.setClassToggle('.pop-6', 'hide')
.addTo(controller);

let scene8 = new ScrollMagic.Scene({
    triggerElement: '.pop-8'
})
.setClassToggle('.pop-8', 'show')
.addTo(controller);

let scene8b = new ScrollMagic.Scene({
    triggerElement: '.pop-8'
})
.setClassToggle('.pop-7', 'hide')
.addTo(controller);
