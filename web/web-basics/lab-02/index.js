const reverseString = (str) => str.split('').reverse().join('')
const countWords = (str) => {
    let map = {}
    for (let word of str.split(' '))
        map[word] ? map[word]++ : map[word] = 1
    return map
}

const getDateMonth = (month) => {
    switch (month) {
        case 0: return 'Janeiro'
        case 1: return 'Fevereiro'
        case 2: return 'Março'
        case 3: return 'Abril'
        case 4: return 'Maio'
        case 5: return 'Junho'
        case 6: return 'Julho'
        case 7: return 'Agosto'
        case 8: return 'Setembro'
        case 9: return 'Outubro'
        case 10: return 'Novembro'
        case 11: return 'Dezembro'
    }
}

const getDateString = (date) => `${date.getDay()} de 
    ${getDateMonth(date.getMonth())} de ${date.getFullYear()}`;

// EX1
(function () {
    const input = document.querySelector('#ex1 .input')
    const output = document.querySelector('#ex1 .output')
    const run = document.querySelector('#ex1 .run')

    run.addEventListener('click', () => {
        output.value = reverseString(input.value)
    })
})();

// EX2
(function () {
    const input = document.querySelector('#ex2 .input')
    const output = document.querySelector('#ex2 .output')
    const run = document.querySelector('#ex2 .run')

    run.addEventListener('click', () => {
        let innerHTML = ''
        for (let c of input.value.split(''))
            innerHTML += /[aeiou]/ig.test(c) ? `<b>${c}</b>` : c
        output.innerHTML = innerHTML
    })
})();

// EX3
(function () {
    const input = document.querySelector('#ex3 .input')
    const output = document.querySelector('#ex3 .output')
    const run = document.querySelector('#ex3 .run')

    run.addEventListener('click', () => {

        let map = countWords(input.value)

        for (let key of Object.keys(map)) {
            let tr = document.createElement('tr')
            let td = document.createElement('td')
            let td2 = document.createElement('td')
            tr.appendChild(td)
            tr.appendChild(td2)
            td.innerHTML = key
            td2.innerHTML = map[key]
            output.appendChild(tr)
        }
    })
})();

// EX4
(function () {
    const input = document.querySelector('#ex4 .input')
    const output = document.querySelector('#ex4 .output')
    const run = document.querySelector('#ex4 .run')

    run.addEventListener('click', () => {

        let map = countWords(input.value)
        let key = Object.keys(map).sort((a, b) => map[a] < map[b] ? -1 : 1).pop()
        let value = map[key]
        output.innerHTML = `${key} => ${value}`
    })
})();

// EX5
(function () {
    const input = document.querySelector('#ex5 .input')
    const input2 = document.querySelector('#ex5 .input2')
    const input3 = document.querySelector('#ex5 .input3')
    const run = document.querySelector('#ex5 .run')

    run.addEventListener('click', () => {
        input.value = input.value.replace(new RegExp(input2.value, 'g'), input3.value)
    })
})();

// EX6
(function () {
    const input = document.querySelector('#ex6 .input')
    const output = document.querySelector('#ex6 .output')
    const run = document.querySelector('#ex6 .run')

    run.addEventListener('click', () => {
        let now = (new Date).getTime()
        let date = new Date(input.value).getTime()
        let days = (now - date) / (1000 * 60 * 60 * 24)
        output.innerHTML = `${Math.floor(days)} dias.`
    })
})();

// EX7
(function () {
    const input = document.querySelector('#ex7 .input')
    const output = document.querySelector('#ex7 .output')
    const run = document.querySelector('#ex7 .run')

    run.addEventListener('click', () => {
        let date = new Date(input.value)
        output.innerHTML = getDateString(date)
    })
})();

// EX8
(function () {
    const input = document.querySelector('#ex8 .input')
    const input2 = document.querySelector('#ex8 .input2')
    const output = document.querySelector('#ex8 .output')
    const run = document.querySelector('#ex8 .run')

    run.addEventListener('click', () => {
        let now = (new Date).getTime()
        let date = new Date(input.value).getTime()
        let weeks = (now - date) / (1000 * 60 * 60 * 24 * 7)
        output.innerHTML = `${Math.floor(weeks)} semana(s).`
    })
})();

// EX9
(function () {
    const input = document.querySelector('#ex9 .input')
    const run = document.querySelector('#ex9 .run')

    run.addEventListener('click', () => {
        let password = input.value
        let min = /.*([a-z]|[A-Z]).*/
        let medium = /.*([a-z]|[A-Z]).*([0-9]).*/
        let max = /.*([a-z]|[A-Z]).*([0-9]).*([@#!$%&*\(\)\-+\.=]).*/
        input.style.color = 'white'
        if (max.test(password)) input.style.backgroundColor = 'green'
        else if (medium.test(password)) input.style.backgroundColor = 'orange'
        else if (min.test(password)) input.style.backgroundColor = 'red'
    })
})();

// EX10
(function () {
    const input = document.querySelector('#ex10 .input')
    const input2 = document.querySelector('#ex10 .input2')
    const output = document.querySelector('#ex10 .output')
    const run = document.querySelector('#ex10 .run')

    run.addEventListener('click', () => {
        let coded = ''

        for (let i = 0; true; i++) {
            let values = [input.value, input2.value]
           
            if (!values[0][i] && !values[1][i]) break
            if (i % 2 === 0) values.reverse()
            if (values[0][i]) coded += values[0][i]
            else if (values[1][i]) coded += values[1][i]
        }
        output.innerHTML = coded
    })
})();