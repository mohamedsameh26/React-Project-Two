import React from "react";
import { SocialMediaSection, Social, Icon, SocialDesc, Span, SpanInfo } from  "./style.js"
import axios from "axios"
class SocialMedia extends React.Component {

    state = {
        social: []
    }

    componentDidMount() {
        axios.get("js/data.json").then(response => this.setState({
            social : response.data.social
        }))
    }

    render() {

        const {social} = this.state;
        const SocialList = social.map((socialItem) => {
            return (
                <Social item={socialItem.id} key={socialItem.id}>
                    <Icon className={socialItem.icon}></Icon>
                    <SocialDesc>
                        <Span>{socialItem.title}</Span>
                        <SpanInfo>{socialItem.body}</SpanInfo>
                    </SocialDesc>
                </Social>
            )
        })

        return (

            <SocialMediaSection>
                {SocialList}
            </SocialMediaSection>
        )
    }
}

export default SocialMedia;