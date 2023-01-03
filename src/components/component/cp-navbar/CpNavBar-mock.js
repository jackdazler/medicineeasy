const getNavBar = (type)=>{
    const navBarDesktop = {
        logo:{
            text:"Sound",
            link:"",
        },
        navLink:[{
            text:"shop",
            cta:""
        },{
            text:"Learn",
            cta:""
        },{
            text:"Support",
            cta:""
        },{
            text:"Radio",
            cta:""
        }],
    }
    const navBarMobile = {
        logo:{
            icon:""
        },
        account:{
            
        },

       
    };

    if(type === "desktop")
      return navBarDesktop;
     else
        return navBarMobile;
} 
export  {getNavBar};