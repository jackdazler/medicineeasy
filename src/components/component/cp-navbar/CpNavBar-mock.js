const getNavBar = (type)=>{
    const navBarDesktop = {
        
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