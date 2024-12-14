import React from "react";
import "./Console.css";
import useConsole from "../../hooks/useConsole";

const Console = ({ code, language }) => {
  const { output, runCode, isLoading } = useConsole(code, language);

  return (
    <div>
      <button className="run_btn" onClick={runCode}>
        RUN CODE
      </button>
      <div className="console">
        <strong>Console</strong>

        <pre>
          {isLoading && "Выполнение..."}
          {output}
        </pre>
      </div>
    </div>
  );
};

export default Console;
