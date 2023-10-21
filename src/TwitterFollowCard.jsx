export function TwitterFollowCard({username, name, isfollowing}){
    return(
        <article className="tw-followCard" /* Forma css directa  style={{display:"flex", alignItems:"center", color: "#fff"}} */ >
        <header className="tw-followCard-header" >
            <img className="tw-followCard-avatar"
             src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" alt="" />
            <div className="tw-followCard-info">
                <strong className="tw-followCard-infoStrong">
                    {name}
                </strong>
                <span className="tw-followCard-infoUserName">@{username} </span>
                <aside>
            <button className="tw-followCard-button">
                Seguir
            </button>
        </aside>
            </div>
          
        </header>

       
      
     </article>
    )
}