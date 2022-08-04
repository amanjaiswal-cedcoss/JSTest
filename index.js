var transactions=[];
var expenses=0.00,income=0.00,balance=0.00;
function add(){
    var amount=0;
    var txt=document.getElementById("text").value;
    amount=document.getElementById("amount").value;
    if(amount<0){
        console.log(amount)
        let newObj={txt:txt,amount:amount};
      transactions.push(newObj);
        amountDouble=amount*2;
       
        amount-=parseInt(amountDouble);

      expenses+=parseInt(amount);
      balance-=parseInt(amount);
      console.log("expenses",expenses)
      console.log("balance",balance)
      
      document.getElementById("money-minus").innerText=expenses;
      document.getElementById("balance").innerHTML=balance
    }
    else{
     income+=parseInt(amount);
     balance+=parseInt(amount);
     console.log("income",income)
     console.log("balance",balance)
     let newObj1={txt:txt,amount:amount};
      transactions.push(newObj1);
     document.getElementById("money-plus").innerText=income
     document.getElementById("balance").innerHTML=balance
    }
    console.log(transactions)
    tranDisp();
}

function tranDisp(){
    ele="";
    document.getElementById("list").innerHTML="";
    for(i=0;i<transactions.length;i++){
        ele+="<li class='minus' id='"+i+"'>"+transactions[i].txt+"<span>"+transactions[i].amount+"</span><button class='delete-btn' onclick='Delete(this)'>x</button></li>"
    }
    document.getElementById("list").innerHTML=ele;
}
function Delete(args){
   element=args.parentNode.id;
   console.log(element)
   if(transactions[element].amount>0)
   {
    income-=parseInt(transactions[element].amount);
    document.getElementById("money-plus").innerText=income;
    balance-=parseInt(transactions[element].amount);
    document.getElementById("balance").innerHTML=balance;
   }
   else{
    double=parseInt(transactions[element].amount*2)
    double2=parseInt(transactions[element].amount)+double;
    expenses-=double;
    // parseInt(transactions[element].amount);
    document.getElementById("money-minus").innerText=expenses;
    balance+=double;
    // parseInt(transactions[element].amount);
    document.getElementById("balance").innerHTML=balance;
   }
   transactions.splice(element,1);
   tranDisp();
}