import config from "../config.json"
import styled from "styled-components"
import { CSSReset } from "../src/components/cssReset"
import Menu from "../src/components/menu"
import {StyledTimeline} from "../src/components/Timeline"
import {StyledFooter} from "../src/components/footer"


function HomePage() {
    return (
        <>
            <CSSReset />
            <div>
                <Menu></Menu>
                <Header></Header>
                <Timeline playlists={config.playlists}></Timeline>
                <Footer favorite = {config.Favoritos}></Footer>
            </div>
        </>
    )
}

export default HomePage

/* function Menu() {
    return (
        <div>
            menu
        </div>
    )
} */


const StyledHeader = styled.div`
    
    img {
        height: 230px;
        width: 1512px;
        object-fit: cover;
    }
   .user-info img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    } 

    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;

function Header() {
    return (
        <StyledHeader>
            <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZ3JhbW1lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60" />
            <section className="user-info">
                <img src={`https://github.com/${config.gitHub}`} />
                <div>
                    <h2>
                        {config.nome}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}

function Timeline(props) {
    const playlisNames = Object.keys(props.playlists)
    //statement
    //retorno por expressao
    return (
        <StyledTimeline>
            {playlisNames.map((playlisNames) => {
                const videos = props.playlists[playlisNames];
                return (
                    <section>
                        <h2>{playlisNames}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                        {video.title}</span>
                                    </a>)})}
                        </div>
                    </section>
                    
                );
            })}
        </StyledTimeline>
    )
}


function Footer(props) {
    const usersFavorite = props.favorite
    return (
        <StyledFooter>
           <h2>AluraTubes Favoritos</h2>
           <div className="flex">
            {usersFavorite.map((info) => {
                return (
                    <div>
                        <img src={info.url}/>
                        <p>{info.name}</p>
                    </div>
                )
            })}
           </div>
        </StyledFooter>
    )
}
