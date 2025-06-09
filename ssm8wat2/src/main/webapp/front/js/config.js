
var projectName = '荆州理工职业学院网站';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
]


var indexNav = [

{
	name: '学校概况',
	url: './pages/xuexiaogaikuang/list.html'
}, 
{
	name: '学校动态',
	url: './pages/xuexiaodongtai/list.html'
}, 
{
	name: '教学管理',
	url: './pages/jiaoxueguanli/list.html'
}, 
{
	name: '招生信息',
	url: './pages/zhaoshengxinxi/list.html'
}, 
{
	name: '就业信息',
	url: './pages/jiuyexinxi/list.html'
}, 
{
	name: '学生工作',
	url: './pages/xueshenggongzuo/list.html'
}, 
{
	name: '继续教育',
	url: './pages/jixujiaoyu/list.html'
}, 
{
	name: '科研开发',
	url: './pages/keyankaifa/list.html'
}, 
{
	name: '品牌专业',
	url: './pages/pinpaizhuanye/list.html'
}, 

{
	name: '学校新闻',
	url: './pages/news/list.html'
},
]

var adminurl =  "http://localhost:8080/ssm8wat2/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"学校概况","menuJump":"列表","tableName":"xuexiaogaikuang"}],"menu":"学校概况管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"学校动态","menuJump":"列表","tableName":"xuexiaodongtai"}],"menu":"学校动态管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"教学管理","menuJump":"列表","tableName":"jiaoxueguanli"}],"menu":"教学管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"招生信息","menuJump":"列表","tableName":"zhaoshengxinxi"}],"menu":"招生信息管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"就业信息","menuJump":"列表","tableName":"jiuyexinxi"}],"menu":"就业信息管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"学生工作","menuJump":"列表","tableName":"xueshenggongzuo"}],"menu":"学生工作管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"继续教育","menuJump":"列表","tableName":"jixujiaoyu"}],"menu":"继续教育管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"科研开发","menuJump":"列表","tableName":"keyankaifa"}],"menu":"科研开发管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"品牌专业","menuJump":"列表","tableName":"pinpaizhuanye"}],"menu":"品牌专业管理"},{"child":[{"buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"},{"buttons":["新增","查看","修改","删除"],"menu":"学校新闻","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"学校概况列表","menuJump":"列表","tableName":"xuexiaogaikuang"}],"menu":"学校概况模块"},{"child":[{"buttons":["查看"],"menu":"学校动态列表","menuJump":"列表","tableName":"xuexiaodongtai"}],"menu":"学校动态模块"},{"child":[{"buttons":["查看"],"menu":"教学管理列表","menuJump":"列表","tableName":"jiaoxueguanli"}],"menu":"教学管理模块"},{"child":[{"buttons":["查看"],"menu":"招生信息列表","menuJump":"列表","tableName":"zhaoshengxinxi"}],"menu":"招生信息模块"},{"child":[{"buttons":["查看"],"menu":"就业信息列表","menuJump":"列表","tableName":"jiuyexinxi"}],"menu":"就业信息模块"},{"child":[{"buttons":["查看"],"menu":"学生工作列表","menuJump":"列表","tableName":"xueshenggongzuo"}],"menu":"学生工作模块"},{"child":[{"buttons":["查看"],"menu":"继续教育列表","menuJump":"列表","tableName":"jixujiaoyu"}],"menu":"继续教育模块"},{"child":[{"buttons":["查看"],"menu":"科研开发列表","menuJump":"列表","tableName":"keyankaifa"}],"menu":"科研开发模块"},{"child":[{"buttons":["查看"],"menu":"品牌专业列表","menuJump":"列表","tableName":"pinpaizhuanye"}],"menu":"品牌专业模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"学校概况列表","menuJump":"列表","tableName":"xuexiaogaikuang"}],"menu":"学校概况模块"},{"child":[{"buttons":["查看"],"menu":"学校动态列表","menuJump":"列表","tableName":"xuexiaodongtai"}],"menu":"学校动态模块"},{"child":[{"buttons":["查看"],"menu":"教学管理列表","menuJump":"列表","tableName":"jiaoxueguanli"}],"menu":"教学管理模块"},{"child":[{"buttons":["查看"],"menu":"招生信息列表","menuJump":"列表","tableName":"zhaoshengxinxi"}],"menu":"招生信息模块"},{"child":[{"buttons":["查看"],"menu":"就业信息列表","menuJump":"列表","tableName":"jiuyexinxi"}],"menu":"就业信息模块"},{"child":[{"buttons":["查看"],"menu":"学生工作列表","menuJump":"列表","tableName":"xueshenggongzuo"}],"menu":"学生工作模块"},{"child":[{"buttons":["查看"],"menu":"继续教育列表","menuJump":"列表","tableName":"jixujiaoyu"}],"menu":"继续教育模块"},{"child":[{"buttons":["查看"],"menu":"科研开发列表","menuJump":"列表","tableName":"keyankaifa"}],"menu":"科研开发模块"},{"child":[{"buttons":["查看"],"menu":"品牌专业列表","menuJump":"列表","tableName":"pinpaizhuanye"}],"menu":"品牌专业模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
