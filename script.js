const btn = document.getElementById('btn');
const parent=document.getElementById('table-body');

btn.addEventListener('click',function(e){
    const description=document.getElementById('desc').value;
    const amount=document.getElementById('Amount').value;
    const item=document.getElementById('select').value;
    if(description && !isNaN(amount ) && item){

        const ele = document.createElement('tr');
        ele.innerHTML=`<td>${item}</td>
        <td>${amount}</td>
        <td>${description}</td>`
        parent.appendChild(ele);

    }else alert("Plz enter the required fields");
})