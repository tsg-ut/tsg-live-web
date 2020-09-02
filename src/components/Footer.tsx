import React from 'react'

interface FooterProps {
    timeout: boolean;
}

const A = (props: { href: string, children: string }) => (
    <a href={props.href} target="_blank" rel="noreferrer">{props.children}</a>
);

const Footer = (props: FooterProps) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; Gatsby Starter - Dimension. Design: <A href="https://html5up.net">HTML5 UP</A>. Built with: <A href="https://www.gatsbyjs.org/">Gatsby.js</A></p>
       <p className="copyright"><A href="https://pixabay.com/ja/photos/%E6%97%A5%E6%B2%A1-%E3%83%96%E3%83%AA%E3%83%83%E3%82%B8-%E7%BE%8E%E3%81%97%E3%81%84-%E5%A4%95%E6%9A%AE%E3%82%8C-4872552/">Background image</A> is by <A href="https://pixabay.com/ja/users/koma_photo-15194464/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4872552">Kanta Komazawa</A>.</p>
    </footer>
)

export default Footer
