import { memo } from 'react';
const headerStyle = {
    backgroundColor: 'blue',
    color: 'white',
    textAlign: 'center',
    padding: '10px',
};

const textStyle = {
    margin: 0,
};
const Header = () => {
    return (
        <div style={headerStyle}>
            <h1 style={textStyle}>POS-System</h1>
        </div>
    );
};

export default memo(Header);
