const CONTRACT_ADDRESS_MONSTRO = "0x728c017D11D37F4a32c0F258DBd342E7c45E6DeA"; // Test Contract
const REVEAL_DATE = "July 11 2021 14:00:00 GMT";
const SALE_DATE = "July 11 2021 14:00:00 GMT";
const NUM_MONSTRO = 8000;
const REQUIRED_CHAIN_ID = [4]; // Mainnet: 1 // Rinkeby: 4
const MAX_MINT = 8000;

function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = pad(Math.floor((total / 1000) % 60), 2);
    const minutes = pad(Math.floor((total / 1000 / 60) % 60), 2);
    const hours = pad(Math.floor((total / (1000 * 60 * 60)) % 24), 2);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
        total,
        days,
        hours,
        minutes,
        seconds
    };
}

function pad(str, max) {
    str = str.toString();
    return str.length < max ? pad("0" + str, max) : str;
}

function initializeClock(id, endtime, type) {
    try {
        const clock = document.getElementById(id);

        if(clock != undefined)
        {
            const timeinterval = setInterval(() => {
                const t = getTimeRemaining(endtime);
                clock.innerHTML = t.days + ' day' + (t.days == 1 ? "" : "s") + ' - ' + t.hours + ':' + t.minutes + ':' + t.seconds +
                    '  until the ' + type + ' of all of Monsters purchased.';
                if (t.total <= 0) {
                    clearInterval(timeinterval);
                }
            }, 1000);
        }
    } catch (error) {
        console.error(error);
    }
}

function updateSaleProgress(supply) {

    $('.sale__progress-box-bar').css('width', "0%");
    var salephases = [500, 2000, 5000, 8000, 9500, 9950, 10000];

    var currentphase = 0;
    var supplystagetreshold = 0;

    for (var i = 0; i < supply.toString().length; i++) {
        $(`#sign_${i}`).attr("src", `/assets/images/sign/sign_${i + 1}_${supply.toString()[i]}.png`);
    }

    for (var i = 0; i < salephases.length; i++) {
        if (supply <= salephases[i]) {

            var relativewidth = salephases[i] - supplystagetreshold;
            var relativesupply = supply - supplystagetreshold;

            var relativepct = (relativesupply / relativewidth) * 100;

            console.log(supply, i, relativesupply, relativewidth);

            $('#offering_pb' + i).css('width', relativepct + "%");

            break;
            return true;

        } else {

            $('#offering_pb' + i).css('width', "100%");
        }

        supplystagetreshold = salephases[i];
    }

    return true;
}

$(document).ready(function () {
    MicroModal.init({
        awaitCloseAnimation: true
    });

    if (currentPage === 'app') {
        const t = getTimeRemaining(SALE_DATE);
        if (t.total > 0) {
            initializeClock('sale_countdown', SALE_DATE, 'sale');
        }
    }

    jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.modal__buy__form__quantity input');
    jQuery('.modal__buy__form__quantity').each(function () {
        var spinner = jQuery(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
    });
});