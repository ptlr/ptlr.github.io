const siteInfor = {
    CREATOR : "普通路人",
    VERSION : "0.0.0",
    DESCRIPTION: "html、JS、css打造的个人网站。",
    infor : function(){
        console.log("CREATOR     : " + this.CREATOR);
        console.log("VERSION     : " + this.VERSION);
        console.log("DESCRIPTION : " + this.DESCRIPTION);
    }
}
onload = function(){
    siteInfor.infor();
}