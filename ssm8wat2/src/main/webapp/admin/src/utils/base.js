const base = {
    get() {
        return {
            url : "http://localhost:8080/ssm8wat2/",
            name: "ssm8wat2",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm8wat2/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "荆州理工职业学院网站"
        } 
    }
}
export default base
