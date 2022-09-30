import { BottomNavigation, BottomNavigationAction, Icon } from "@mui/material"
import { Component } from "react"

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

export class SocialComponent extends Component {
    render() {

        const contacts = [
            { icon: FacebookIcon, link: 'https://facebook.com/XPTO', style: { backgroundColor: '#1877f2' } },
            { icon: YouTubeIcon, link: 'https://youtube.com/XPTO', style: { backgroundColor: '#ff0000' } },
            { icon: LinkedInIcon, link: 'https://linkedin.com/XPTO', style: { backgroundColor: '#0077b7' } },
            { icon: InstagramIcon, link: 'https://instagram.com/XPTO', style: { background: 'linear-gradient(to right, #a131c4, #ef4d5c)' } },
            { icon: WhatsAppIcon, link: 'https://whatsapp.com/XPTO', style: { backgroundColor: '#1bd741' } },
            { icon: PhoneIcon, link: 'tel:+551293867383', style: { backgroundColor: '#8aec75' } },
            { icon: EmailIcon, link: 'mailto:contato@XPTO.com', style: { backgroundColor: '#333333' } },
        ]

        return (
            <BottomNavigation>
                {contacts.map((contact, index) => {
                    return (
                        <BottomNavigationAction 
                            style={contact.style}
                            key={index} href={contact.link} icon={<Icon component={contact.icon} />} />
                    )
                })}
            </BottomNavigation>
        )

    }
}