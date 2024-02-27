var text = 'outside'

function logit(params) {
    console.log(text)
    var text = 'inside'
}

logit()