let hh = [
    {
        title:'hassan',
        price : 30
    },
    {
        title:'hassssanb',
        price : 25
    },
    {
        title:'cube',
        price : 40
    },
    {
        title:'ckeke',
        price : 30
    },

]
let inp = document.getElementById('inp')
let div = document.createElement('div')
let p = document.createElement('p')
inp.addEventListener('keyup',function(){
    
    p.innerHTML=''
    hh.forEach((e)=>{
        
             if(e.title.startsWith(inp.value)){
                 
                
                let tx = document.createTextNode(e.title)
                let tx1 = document.createTextNode(e.price)
                p.appendChild(tx)
                p.appendChild(tx1)
                document.body.appendChild(p)
             }else{
                 console.log('sry')
             }
        
    })
 
})