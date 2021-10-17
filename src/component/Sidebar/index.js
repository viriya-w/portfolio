import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarLink, SidebarWrapper, SidebarMenu } from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink
                        to="home"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-20}
                        onClick={toggle}>
                        Home
                    </SidebarLink>
                    <SidebarLink to="about"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-20}
                        onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="resume"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-20}
                        onClick={toggle}>
                        Resume
                    </SidebarLink>
                    <SidebarLink to="contact"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-20}
                        onClick={toggle}>
                        Contact
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
