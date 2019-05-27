
setTimeout(function () {
    try {
        var iframe1 = document.getElementById('the_iframe_1');
        var third_party = document.getElementById('third_party');
        if (third_party) {
            third_party.innerHTML = "1";
        }
    } catch (e) {
        console.log(e);
    }        
}, 1000);
