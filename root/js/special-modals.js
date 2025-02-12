// Envenlope
const envelope = $('#special-envelope');


// Special Modal1
const specialModal1 = $("#valentines-modal1");
const monthsaryIn = $("#monthsary");

const specialCloseModal1Btn = $("#valentines-modal1-close-btn");
const specialSubmitModal1Btn = $("#valentines-modal1-btn1");


// Special Modal2
const specialModal2 = $("#valentines-modal2");

const specialModal2yesBtn1 = $('#valentines-modal2-yes-btn1');
const specialModal2yesBtn2 = $('#valentines-modal2-yes-btn2');


// Special Modal3 
const specialModal3 = $("#valentines-modal3");

const specialModal3yesBtn1 = $('#valentines-modal3-yes-btn1');



// Envelope Events
envelope.click(() => {
    specialModal1.removeClass('d-none');
});



// Special Modal1 Scripts
specialSubmitModal1Btn.click(() => {
    if(monthsaryIn.val() !== "2023-05-04") {
        alert("Wrong Answer!!!!");
        return;
    }

    specialModal1.addClass('d-none');
    specialModal2.removeClass('d-none');
});

specialCloseModal1Btn.click(() => {
    specialModal1.addClass('d-none');
});



// Special Modal2 Scripts
specialModal2yesBtn1.click(() => {
    specialModal2.addClass('d-none');
    specialModal3.removeClass('d-none');
});
specialModal2yesBtn2.click(() => {
    specialModal2.addClass('d-none');
    specialModal3.removeClass('d-none');
});



// Special Modal3
specialModal3yesBtn1.click(() => {
    specialModal3.addClass('d-none');
    location.reload();
})