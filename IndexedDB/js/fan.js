function fan_addToTable(obj){
    var total =parseFloat(localStorage.getItem("fan_zcfzb_tj_zzc"));
    
    if(!total){
       total = 0;
    }
    
    var error_info = document.getElementById("fan_error");
    error_info.style.color = "red";
    error_info.innerHTML = "";
    
    if(!obj.fan_name){
        error_info.innerHTML = "名称不能为空，请检查后再添加";
        return;
    }
    obj.fan_total = Math.abs(parseFloat(obj.fan_total));
    obj.fan_type = parseInt(obj.fan_type);
    
    console.log(obj);
    
    if(!obj.fan_total){
        error_info.innerHTML = "输入的金额有误，请检查后再添加";
        return;
    }
    
    var fan_table = document.getElementById("fan_zcfzb");
    var new_tr = document.createElement("tr");
    
    var new_td = document.createElement("td");
    new_td.innerHTML = obj.fan_name;
    var new_td2 = document.createElement("td");
    new_td2.innerHTML = obj.fan_total;
    
    
    if(obj.fan_type == -1){
        new_tr.append(new_td.cloneNode());
        new_tr.append(new_td.cloneNode());
        total -= obj.fan_total;
    }
    
    new_tr.append(new_td);
    new_tr.append(new_td2);
    
    if(obj.fan_type == 1){
        new_tr.append(new_td.cloneNode());
        new_tr.append(new_td.cloneNode());
        total += obj.fan_total;
    }
    
    new_tr.append(new_td.cloneNode());
    fan_table.append(new_tr);
    
    // 总资产统计
    var tj = document.getElementById("fan_zcfzb_tj_zzc");
    tj.innerHTML = total;
    localStorage.setItem("fan_zcfzb_tj_zzc", total);
}
function fan_addData(){
    
    var o = new Object();
    for(var i=0; i<arguments.length; i++){
        o[arguments[i]] = document.getElementById(arguments[i]).value;
    }
    
    console.log(o);

    fan_addToTable(o);
}

// 本地数据清理
function clearLocalStorage(){
    localStorage.removeItem("fan_zcfzb_tj_zzc");
}
clearLocalStorage();