// components/Footer.tsx


const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Disaster Relief Fund. All rights reserved.</p>
            <p>Powered By Arbitrum</p>
        </footer>
    );
};

export default Footer;
