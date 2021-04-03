import React , {Component} from "react";
import axios from "axios"
import { ProfileSkillsSection, ProfileSection, ProfileTitle, H2Span, UlProfileList, LiProfileItem, LiProfileItemSpan, Web,
    Skills, SkillsTitle, SkillsTitleSpan, SkillsDesc, Bar, BarTitle, BarPerc, Parent,
    ParentSpan} from "./style.js"
class Profile extends Component {

    state = {
        profile : []
    }
    
    componentDidMount() {
        axios.get("js/data.json").then(response => this.setState({profile: response.data.profile}));
    }


    render() {

        const {profile} = this.state
        const ProfileList = profile.map((profileItem) => {
            return (
                <Bar key={profileItem.id}>
                    <BarTitle>{profileItem.title}</BarTitle>
                    <BarPerc>{profileItem.presentage}</BarPerc>
                    <Parent>
                        <ParentSpan width={profileItem.id}></ParentSpan>
                    </Parent>
                </Bar>
            )
        })
        return (
            <ProfileSkillsSection>
                <div className="container">
                    <ProfileSection>
                        <ProfileTitle><H2Span>My </H2Span>Profile</ProfileTitle>
                        <UlProfileList>
                            <LiProfileItem>
                                <LiProfileItemSpan>Name</LiProfileItemSpan>
                                Mohamed Sameh
                            </LiProfileItem>
                            <LiProfileItem>
                                <LiProfileItemSpan>Birthday</LiProfileItemSpan>
                                26/7/1999
                            </LiProfileItem>
                            <LiProfileItem>
                                <LiProfileItemSpan>Address</LiProfileItemSpan>
                                Mansoura
                            </LiProfileItem>
                            <LiProfileItem>
                                <LiProfileItemSpan>Phone</LiProfileItemSpan>
                                4444 5555 6666
                            </LiProfileItem>
                            <LiProfileItem>
                                <LiProfileItemSpan>Email</LiProfileItemSpan>
                                mohamed@sameh.com
                            </LiProfileItem>
                            <LiProfileItem>
                                <LiProfileItemSpan>Website</LiProfileItemSpan>
                                <Web>www.google.com</Web>
                            </LiProfileItem>
                        </UlProfileList>
                    </ProfileSection>
                    
                    <Skills>
                        <SkillsTitle>Some <SkillsTitleSpan>skills</SkillsTitleSpan></SkillsTitle>
                        <SkillsDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                        </SkillsDesc>
                        {ProfileList}
                    </Skills>
                    
                </div>
            </ProfileSkillsSection>
        )
    }
}
export default Profile;