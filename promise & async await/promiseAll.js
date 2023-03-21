const kopiLuwak = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('kopi luwak siap saji!')
        },
        3000)
    })
}

const kopiTubruk = () => {
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve('kopi tubruk siap saji!')
        },
        4000)
    })
}

const kopiKapalApi = () => {
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve('kopi kapal api siap saji!')
        },
        5000)
    })
}

const promises = [kopiLuwak(), kopiTubruk(), kopiKapalApi()]

Promise.all(promises)
    .then(resolvedValue => {
        console.log(resolvedValue)
    })

