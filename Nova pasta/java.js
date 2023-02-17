function drop(bt, id, fun, body){
        var res = 0;
        let drop = document.querySelector(id);
        var aki = document.getElementById("entra");
        if(fun==0){
            res=1;
            drop.style.display = 'contents';
            aki.style.display = 'none';
        }else{
        
         drop.style.display = 'none';
        }
        let onclick = "drop(this,'"+id+"',"+res+",'"+body+"')";
        bt.setAttribute('onclick', onclick);