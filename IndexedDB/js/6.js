// 主动释放内存方法
function free ( o ) {
    for ( var p in o ) {
        if ( typeof o[ p ] === "object" ) {
            free ( o[ p ] ) ;
        } 
        delete o[ p ];
        //console.info( p, o[ p ] );
    }
    delete o;
}

//方法1向本地存储中添加一个名为name,值为"syl"的key-value对象
localStorage.setItem("name","syl");
//方法2
localStorage["price"] = 1314;
//方法3
localStorage.amount = 520;


// *************************localStorage
// 本地存储，浏览器关闭，数据依然存在。
// 添加
function l_add(){
    var l_key = document.getElementById("l_key").value;
    var l_value = document.getElementById("l_value").value;
//    localStorage.setItem(l_key,l_value);
    localStorage[l_key] = l_value;
}
// 删除
function l_del(){
    var l_key = document.getElementById("l_key").value;
    localStorage.removeItem(l_key);
}
// 清空数据
function l_clear(){
    localStorage.clear();
}
// 查询
function l_search(){
    var l_key = document.getElementById("l_key").value;
    var l_value = localStorage.getItem(l_key);
    
    var rs_l = document.getElementById("rs_l");
    var rs = document.createElement("div");
    rs.innerHTML = l_key + " = " + l_value;
    rs_l.append(rs);
}

// *******************Web留言本(localStorage)
//sava_local_Storage是一个新增留言的函数
function save_local_Storage(id){
    //获取textarea的value值
    var data = document.getElementById(id).value;
    //获取当前时间
    var time = new Date().toUTCString();
    //将当前时间作为键名，textarea的value值（也就是用户输入的值）的值作为键值
    localStorage.setItem(time, data);
    //显示留言
    showMsg_local('msg_local');
}
//showMsg_local是一个显示留言的函数
function showMsg_local(id) {
    var result = '<table border="1">';
    //遍历本地储存数据
    for(var i = 0; i < localStorage.length; i++) {
        //获取key值
        var key = localStorage.key(i);

        //获取value值
        var value = localStorage.getItem(key);
        //显示数据
        result += '<tr><td>' + value + '</td><td>' + key + '</td></tr>';

    }
    result += '</table>';
    var target = document.getElementById(id);
    target.innerHTML = result;
}
//显示留言
showMsg_local('msg_local');
//clearStorage是一个清空留言的函数
function clear_local_Storage() {
    //清空数据
    localStorage.clear();
    //显示留言
    showMsg_local('msg_local');
}
//clearsingleStorage是一个删除单个数据的函数
function clearsingle_local_Storage() {
    localStorage.removeItem(localStorage.key(localStorage.length - 1));
    //显示留言
    showMsg_local('msg_local');
}


//*************************sessionStorage
 if(sessionStorage.pagecount) {
    sessionStorage.pagecount = Number(sessionStorage.pagecount) + 1;
} else {
    sessionStorage.pagecount = 1;
}
document.write("你刷新了本页面 " + sessionStorage.pagecount + " 次");

// *******************Web会话(sessionStorage)
//sava_session_Storage是一个新增会话的函数
function save_session_Storage(id){
    //获取textarea的value值
    var data = document.getElementById(id).value;
    //获取当前时间
    var time = new Date().toUTCString();
    //将当前时间作为键名，textarea的value值（也就是用户输入的值）的值作为键值
    sessionStorage.setItem(time, data);
    //显示留言
    showMsg_session('msg_session');
}
//showMsg_session是一个显示留言的函数
function showMsg_session(id) {
    var result = '<table border="1">';
    //遍历本地储存数据
    for(var i = 0; i < sessionStorage.length; i++) {
        //获取key值
        var key = sessionStorage.key(i);

        //获取value值
        var value = sessionStorage.getItem(key);
        //显示数据
        result += '<tr><td>' + value + '</td><td>' + key + '</td></tr>';

    }
    result += '</table>';
    var target = document.getElementById(id);
    target.innerHTML = result;
}
//显示会话
showMsg_session('msg_session');
//clearStorage是一个清空留言的函数
function clear_session_Storage() {
    //清空数据
    sessionStorage.clear();
    //显示留言
    showMsg_session('msg_session');
}
//clearsingleStorage是一个删除单个数据的函数
function clearsingle_session_Storage() {
    sessionStorage.removeItem(sessionStorage.key(sessionStorage.length - 1));
    //显示留言
    showMsg_session('msg_session');
}

//*******************localStorage_JSON
//saveStorage是一个保存数据的方法
function saveStorage_json() {
    //创建一个data对象，将数据保存在该对象的属性中
    var data = new Object;
    data.name = document.getElementById('name').value;
    data.email = document.getElementById('email').value;
    data.tel = document.getElementById('tel').value;
    data.memo = document.getElementById('memo').value;
    //将对象转换成json格式的文本数据，并将其返回
    var str = JSON.stringify(data);
    //通过localStorage.setItem(key,value);方法保存数据
    localStorage.setItem(data.name, str);
    alert("数据已保存。");
}
//findStorage是一个查找数据的方法
function findStorage_json(id) {
    var find = document.getElementById('find').value;
    var str = localStorage.getItem(find);
    //将从localStorag中获取的数据转换成json对象
    var data = JSON.parse(str);
    var result = "姓名: " + data.name + '<br>';
    result += "EMAIL: " + data.email + '<br>';
    result += "电话号码: " + data.tel + '<br>';
    result += "描述: " + data.memo + '<br>';
    var target = document.getElementById(id);
    target.innerHTML = result;
}

//*******************************************Web浏览器数据库第一步是打开数据库
// Web SQL只有谷歌浏览器支持
// Web IndexedDB, 是浏览器提供的本地数据库， 允许储存大量数据，提供查找接口，还能建立索引。
// 获取indexedDB对象
// 要在浏览器访问服务器时才能访问到
var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

function dataBaseWorking(dataBaseName){
    // 打开数据库indexedDB.open(databaseName, version)
    var request = indexedDB.open(dataBaseName);
    // 在数据库创建操作执行之后执行，连接数据库
    request.onsuccess = function (event) {
        this.db = event.target.result;
        console.log(this.db.name, '数据库打开成功');
        //连接成功以后的操作
        handleDataBase(request);
    };

    request.onerror = function (event) {
        console.log(this.db.name,'数据库打开报错');
    };
    
    // 创建新数据库时调用，数据库存在时不调用。数据库第一次被打开时。
    // 打开数据库时指定的版本号高于当前被持久化的数据库版本号。(可通过修改版本号触发该事件)
    // 可以执行改变数据库结构的操作函数（包括创建对象存储空间）
    request.onupgradeneeded = function(event) { 
        console.log('数据库不存在时，新建数据库调用');
        console.log('indexedDB API 中不允许数据库中的数据仓库在同一版本中发生变化，所以需要在 indexedDB.open 方法中传入新的版本号来更新版本，避免在同一版本中重复修改数据库。版本号必须为整数！');
        this.db = event.target.result;
        // 如果数据记录里面没有合适作为主键的属性，那么可以让 IndexedDB 自动生成主键。
        var objectStore = this.db.createObjectStore('person2', {autoIncrement: true});

        // person对象仓库不存在，创建一个对象仓库
        console.log(this.db.objectStoreNames.contains('person'));
        if (!this.db.objectStoreNames.contains('person')) {
            
            objectStore = this.db.createObjectStore('person', {keyPath: "id"});
            
            //新建索引
            objectStore.createIndex('name', 'name', { unique: false });
            objectStore.createIndex('email', 'email', { unique: true });
        }
    }
}

// 删除数据库
function delDatabase(databaseName){
    var req = window.indexedDB.deleteDatabase(databaseName);
    req.onsuccess = function(e){
        console.log("成功删除数据库", databaseName); 
    }; 
    req.onerror = function(e){
        console.log("无法删除数据库", databaseName); 
    }; 
    req.onblocked = function(e){
        console.log("由于操作被阻止而无法删除数据库", databaseName); 
    }; 
}

// 改变数据库结构
function changeDataBase(req){
    // 如果要改变结构，只能更改版本号。很少这么用，一般只定定义一次
    req = indexedDB.open(req.db.name,(req.db.version+1));
    req.onupgradeneeded = function(event) {
        console.log("改变");
        req.db = event.target.result;
        console.log(req.db);

        if (!req.db.objectStoreNames.contains('person3')) {
            objectStore = req.db.createObjectStore('person3', {keyPath: "id"});
            objectStore.createIndex('name', 'name', { unique: false });
            objectStore.createIndex('email', 'email', { unique: true });
        }else{
            // 删除原来的对象仓库
            req.db.deleteObjectStore("person3");
            objectStore = req.db.createObjectStore('person3', {keyPath: "id"});
            // 没有添加的索引，无法进行查询
            objectStore.createIndex('name', 'name', { unique: false });
        }
        
        console.log(new Date().toUTCString());

    }
}

// 向对象仓库添加数据
function addObjectToStore(db, objectStoreName, obj){
    var request = db.transaction([objectStoreName], 'readwrite').objectStore(objectStoreName).add(obj);
    
    request.onsuccess = function(event){
        console.log("数据写入成功");
    }
    
    request.onerror = function(event){
        console.log("数据写入失败");
    }
}

// 从对象仓库读取数据，通过主键keyPath
function readObjectFromStoreByIndex(db, objectStoreName, objectIndex){
    var transaction = db.transaction([objectStoreName]);
    var objectStore = transaction.objectStore(objectStoreName);
    var request = objectStore.get(objectIndex);
    
    request.onerror = function(event){
        console.log("事务失败");
    }
    
    request.onsuccess = function(event){
        console.log("事务成功");
        var rs = request.result;
        if(rs){
            var str = "姓名: " + rs.name + '<br>';
            str += "年龄: " + rs.age + '<br>';
            str += "Email: " + rs.email + '<br>';
            str += "-------------------------------------------<br>";
            var target = document.getElementById("readObject");
            target.innerHTML += str;
        }else {
            console.log('未获得数据记录');
        }
    }
}

// 遍历对象仓库的所有对象
function readAllObjectFromStore(db, objectStoreName){
    // 事务的模式，默认时readonly，另一个是readwrite
    var objectStore = db.transaction(objectStoreName).objectStore(objectStoreName);
    
    objectStore.openCursor().onsuccess = function(event){
        var cursor = event.target.result;
        if(cursor){
            
            console.log("======", cursor.source.keyPath);
            console.log("======", cursor.source.name);
            console.log("======", cursor.source.indexNames);
            console.log("======", cursor.source.indexNames.contains("name"));
            console.log("======", cursor.source.autoIncrement);
            
            var str = "id: " + cursor.key + '<br>';
            str += "姓名: " + cursor.value.name + '<br>';
            str += "年龄: " + cursor.value.age + '<br>';
            str += "Email: " + cursor.value.email + '<br>';
            str += "-------------------------------------------<br>";
            var target = document.getElementById("readObject2");
            target.innerHTML += str;
            
            //继续执行onsuccess的内容。
            cursor.continue();
        }else{
            console.log("没有更多数据了！");
        }
    }
}

// 更新对象仓库的对象，如果对象不存在，就添加一个对象。
function updateObject(db, objectStoreName, newObj){
    var request = db.transaction([objectStoreName],'readwrite').objectStore(objectStoreName).put(newObj);
    
    request.onsuccess = function (event) {
        console.log('数据更新成功');
    };

    request.onerror = function (event) {
        console.log('==========数据更新失败');
    }
}

// 删除，通过主键keyPath
function removeObjectByIndex(db, objectStoreName, objectIndex){
    var request = db.transaction([objectStoreName],'readwrite').objectStore(objectStoreName).delete(objectIndex);
    
    request.onsuccess = function (event) {
        console.log('数据删除成功');
    };

    request.onerror = function (event) {
        console.log('数据删除失败');
    }
}

// 获取request后对数据库进行的操作
function handleDataBase(req){
    console.log(new Date().toUTCString());
    console.log(req.db.name,req.db.version);
    
    // 改变数据库结构，必须通过升级版本，否则报错
//    changeDataBase(req);
    
    // 添加数据对象
    var obj = {id:1,name:'王流',age:50,email:'zhangsan222@example.com'};
    addObjectToStore(req.db, "person", obj);
    var obj2 = {id:2,name:'李四',age:89,email:'lisi222@example.com'};
    addObjectToStore(req.db, "person", obj2);
    
    obj = {id:3,name:'王流',age:50,email:'zhangs1an222@example.com'};
    obj2 = {id:4,name:'李四',age:89,email:'lisi2122@example.com'};
    
    // 更新数据对象
    updateObject(req.db, "person", obj);
    updateObject(req.db, "person", obj2);
    
    // 读取数据对象
    readObjectFromStoreByIndex(req.db, "person", 1);
    readObjectFromStoreByIndex(req.db, "person", 2);
    readObjectFromStoreByIndex(req.db, "person", 3);
    
    // 遍历
    readAllObjectFromStore(req.db, "person");
    
    // 删除
    removeObjectByIndex(req.db, "person", 0);
    
    //所有操作结束，关闭数据库。
    req.db.close();
}

// 
delDatabase("mydb");
dataBaseWorking("mydb");
