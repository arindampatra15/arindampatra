import MaterialIcon from "material-icons-react";

import "./help.css";

const Help = () => {

    const closeHelpText = () => {
        document.getElementById("help-text").style.display="none";
    }

  return (
    <div className="help">
      <div className="help-container">

        <div className="help-icon">
          <MaterialIcon icon="live_help" />
        </div>

      </div>
    </div>
  );
};

export default Help;
