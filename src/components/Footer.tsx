import React from 'react'

interface FooterProps {
    timeout: boolean;
}

const Footer = (props: FooterProps) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; Gatsby Starter - Dimension. Design: <a href="https://html5up.net">HTML5 UP</a>. Built with: <a href="https://www.gatsbyjs.org/">Gatsby.js</a></p>
        <p className="copyright"><a href="https://commons.wikimedia.org/w/index.php?curid=29968048">Background Image</a> is by <a href="https://ja.wikipedia.org/wiki/user:663highland" className="extiw" title="ja:user:663highland">663highland</a>, <a href="https://creativecommons.org/licenses/by/2.5" title="Creative Commons Attribution 2.5">CC BY 2.5</a></p>
    </footer>
)

export default Footer
