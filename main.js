import mul, { sum,div } from './utils.js'
(()=>{
    let context = ''
    const root = document.querySelector('#root')
    const arr = [{a:4,b:6},{a:7,b:10},{a:9,b:89}]
    arr.forEach((item,index)=>{
       context+= `
        <p>sum là của ${item.a} và ${item.b} là: <span class="div">${sum(item.a,item.b)}</span></p>
        <p>div là của ${item.a} và ${item.b} là: <span class="div">${div(item.a,item.b)}</span></p>
        <p>mul là của ${item.a} và ${item.b} là: <span class="div">${mul(item.a,item.b)}</span></p>
        ${
            arr.length==index+1 ?'':'<hr>'
        }
        `
    })
    root.innerHTML = context
})()

