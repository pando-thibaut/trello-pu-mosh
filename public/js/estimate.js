var t = TrelloPowerUp.iframe();

window.plop2.addEventListener('submit', function(event){
    event.preventDefault();
    return t.set('card', 'shared', 'estimate', window.estimateSize.value)
        .then(function(){
            t.closePopup();
        });
});

t.render(function(){
    return t.get('card', 'shared', 'estimate')
        .then(function(estimate){
            window.estimateSize.value = estimate;
        })
        .then(function(){
            t.sizeTo('#plop').done();
        });
});