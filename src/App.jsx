import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard"

export function App(){
    return(
        <section className="App"> {/* <== eso es lo mismo que fragment React.Fragment para varios elementos repetidos */}
       <TwitterFollowCard username="dotaringo" name="miguel angel" />
       <TwitterFollowCard username="ritonasx" name="martino bocucci" />
       <TwitterFollowCard username="sas40kito" name="Ronny Masa" />
       <TwitterFollowCard username="mrlotero1993" name="Esteban Micordi" />
       </section>
    )
}