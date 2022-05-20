import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Language extends Component {
  state = {
    language: [
      { id: 1, value: "python" },
      { id: 2, value: "ruby" },
      { id: 3, value: "javascript" },
      { id: 4, value: "sql" },
      { id: 5, value: "php" },
    ],
    framework: [
      { id: 1, value: "django" },
      { id: 2, value: "ruby on rails" },
      { id: 3, value: "react" },
      { id: 4, value: "c#" },
    ],
    autre: [
      { id: 1, value: "github" },
      { id: 2, value: "wordpress" },
      { id: 3, value: "joomla" },
      { id: 4, value: "système d'exploitation : Linux" },
      { id: 5, value: "réseau" },
    ],
  };

  render() {
    let { language, framework, autre } = this.state;

    return (
      <div className="languageFrameworkAutre">
        <ProgressBar
          language={language}
          className="languageDisplay"
          title="language"
        ></ProgressBar>

        <ProgressBar
          language={framework}
          className="languageFramework"
          title="framework"
        ></ProgressBar>
      </div>
    );
  }
}

export default Language;
