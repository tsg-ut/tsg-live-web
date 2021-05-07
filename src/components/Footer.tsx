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
       <p className="copyright"><A href="https://www.flickr.com/photos/57435451@N06/21009430635">Background image</A> is by <A href="https://www.flickr.com/people/57435451@N06/">汪 大雄</A> (<A href='https://creativecommons.org/licenses/by-sa/2.0/'>CC BY-SA 2.0</A>).</p>
    </footer>
)

export default Footer
