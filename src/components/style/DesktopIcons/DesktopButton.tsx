const DesktopButton = ({ icon, name, onClick }) => {
    return (
        <button
            className="desktop-icon-button"
            onDoubleClick={onClick}
        >
            {icon}
            <div className="desktop-icon-text">{name}</div>
        </button>
    );
};

export default DesktopButton;
