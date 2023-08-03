import { NavLink } from '@mantine/core';
import Logo from '../Assets/Logo.webp';
import './Footer.css'
import { Code } from 'tabler-icons-react';


const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className={`footCol`} style={{padding:"20px"}}>
            <div class="container-fluid">
                <div >
                    <p><img src={Logo} style={{width: '40px'}} /> Tutoriffic &copy;{currentYear} </p>
                    <p style={{display:"flex", justifyContent: 'center'}}>
                        <a style={{verticalAlign:"middle", display: 'inline-flex', padding: "10px"}} href="https://github.com/emjkenz/Tutoriffic-Student" target="_blank" rel="noopener noreferrer"><Code /> Student Code</a>
                        <a style={{verticalAlign:"middle", display: 'inline-flex', padding: "10px"}} href="https://github.com/emjkenz/Tutoriffic-Teacher" target="_blank" rel="noopener noreferrer"><Code /> Teacher Code</a>
                    </p>
                </div>
            </div>
        </footer >
    );
}

export default Footer