
setInterval(function () {
    try {
        var iframe = document.getElementById('the_iframe_1');
        if (iframe) {   
            var innerDoc = (iframe.contentDocument) ? iframe.contentDocument : iframe.contentWindow.document;
            var result = innerDoc.getElementById('results');            
            if (result) {
                var third_party = document.getElementById('third_party');
                if (third_party) {
                    third_party.innerHTML = result.innerHTML;
                }
            }
        }                
    } catch (e) {
        console.log(e);
    }        
}, 1000);
