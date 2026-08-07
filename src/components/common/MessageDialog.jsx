import "./MessageDialog.css";

export default function MessageDialog({

    open,
    icon = "💙",
    title,
    message,
    primaryButton,
    secondaryButton

}){

    if (!open) {

        return null;

    }

    return (

        <div className="message-overlay">

            <div className="message-card">

                <div className="message-icon">
                    {icon}
                </div>

                <h2>{title}</h2>

                <p>{message}</p>

                <div className="message-buttons">

                    {primaryButton && (

                        <button
                            className="message-button"
                            onClick={primaryButton.onClick}
                        >
                            {primaryButton.text}
                        </button>

                    )}

                    {secondaryButton && (

                        <button
                            className="message-button secondary"
                            onClick={secondaryButton.onClick}
                        >
                            {secondaryButton.text}
                        </button>

                    )}

                </div>

            </div>

        </div>

    );

}