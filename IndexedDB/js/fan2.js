// 本地数据清理
function clearLocalStorage(){
    //资产负债表用到的临时数据
    localStorage.removeItem("fan_zcfzb_tj_zzc");
    
    //利润表用到的临时数据
    localStorage.removeItem("fan_lrb_tj_zlr"); 
    
    //现金流量表用到的临时数据
    localStorage.removeItem("fan_xjllb_tj_zxj");
    
    alert(localStorage.length);

}
clearLocalStorage();


//**********资产负债表
function fan_addToTable_zcfzb(obj){
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

//**********利润表
function fan_addToTable_lrb(obj){
    var total =parseFloat(localStorage.getItem("fan_lrb_tj_zlr"));
    
    if(!total){
       total = 0;
    }
    
    var error_info = document.getElementById("fan_error2");
    error_info.style.color = "red";
    error_info.innerHTML = "";
    
    if(!obj.fan_name2){
        error_info.innerHTML = "名称不能为空，请检查后再添加";
        return;
    }
    obj.fan_total2 = Math.abs(parseFloat(obj.fan_total2));
    obj.fan_type2 = parseInt(obj.fan_type2);
    
    console.log(obj);
    
    if(!obj.fan_total2){
        error_info.innerHTML = "输入的金额有误，请检查后再添加";
        return;
    }
    
    var fan_table = document.getElementById("fan_lrb");
    var new_tr = document.createElement("tr");
    
    var new_td = document.createElement("td");
    new_td.innerHTML = obj.fan_name2;
    var new_td2 = document.createElement("td");
    new_td2.innerHTML = obj.fan_total2;
    
    
    if(obj.fan_type2 == -1){
        new_tr.append(new_td.cloneNode());
        new_tr.append(new_td.cloneNode());
        total -= obj.fan_total2;
    }
    
    new_tr.append(new_td);
    new_tr.append(new_td2);
    
    if(obj.fan_type2 == 1){
        new_tr.append(new_td.cloneNode());
        new_tr.append(new_td.cloneNode());
        total += obj.fan_total2;
    }
    
    new_tr.append(new_td.cloneNode());
    fan_table.append(new_tr);
    
    // 总资产统计
    var tj = document.getElementById("fan_lrb_tj_zlr");
    tj.innerHTML = total;
    localStorage.setItem("fan_lrb_tj_zlr", total);
}

//**********现金流量表
function fan_addToTable_xjllb(obj){
    var total =parseFloat(localStorage.getItem("fan_xjllb_tj_zxj"));
    
    if(!total){
       total = 0;
    }
    
    var error_info = document.getElementById("fan_error3");
    error_info.style.color = "red";
    error_info.innerHTML = "";
    
    if(!obj.fan_name3){
        error_info.innerHTML = "名称不能为空，请检查后再添加";
        return;
    }
    obj.fan_total3 = Math.abs(parseFloat(obj.fan_total3));
    obj.fan_type3 = parseInt(obj.fan_type3);
    
    console.log(obj);
    
    if(!obj.fan_total3){
        error_info.innerHTML = "输入的金额有误，请检查后再添加";
        return;
    }
    
    var fan_table = document.getElementById("fan_xjllb");
    var new_tr = document.createElement("tr");
    
    var new_td = document.createElement("td");
    new_td.innerHTML = obj.fan_name3;
    var new_td2 = document.createElement("td");
    new_td2.innerHTML = obj.fan_total3;
    
    
    if(obj.fan_type3 == -1){
        new_tr.append(new_td.cloneNode());
        new_tr.append(new_td.cloneNode());
        total -= obj.fan_total3;
    }
    
    new_tr.append(new_td);
    new_tr.append(new_td2);
    
    if(obj.fan_type3 >= 1){
        new_tr.append(new_td.cloneNode());
        new_tr.append(new_td.cloneNode());
        total += obj.fan_total3;
    }
    
    new_tr.append(new_td.cloneNode());
    fan_table.append(new_tr);
    
    // 总资产统计
    var tj = document.getElementById("fan_xjllb_tj_zxj");
    tj.innerHTML = total;
    localStorage.setItem("fan_xjllb_tj_zxj", total);
}
//数据添加器
function fan_addData(position=-1){
    
    if(position == 1){
        var o = new Object();
        for(var i=1; i<arguments.length; i++){
            o[arguments[i]] = document.getElementById(arguments[i]).value;
        }
        console.log(o);

        fan_addToTable_zcfzb(o);
    }else if(position == 2){
        var o = new Object();
        for(var i=1; i<arguments.length; i++){
            o[arguments[i]] = document.getElementById(arguments[i]).value;
        }
        console.log(o);

        fan_addToTable_lrb(o);
    }else if(position == 3){
        var o = new Object();
        for(var i=1; i<arguments.length; i++){
            o[arguments[i]] = document.getElementById(arguments[i]).value;
        }
        console.log(o);

        fan_addToTable_xjllb(o);
    }
}